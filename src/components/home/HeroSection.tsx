import { Button, Carousel, Image } from "antd";
import prisma from "@/lib/prisma";
import { parseHtml } from "@/utils/html";
import Link from "next/link";
import "./HeroSection.css";

export default async function HeroSection() {
  const posts = await prisma.post.findMany({
    orderBy: {
      published: "desc",
    },
    take: 5,
    skip: 1,
  });

  return (
    <div
      className="content"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Carousel autoplay effect="fade" arrows>
        {posts.map((post) => {
          const { title, content, firstImage } = parseHtml(post.content);
          const plaintext = content.replace(/<[^>]+>/g, "");
          return (
            <section key={post.id}>
              <div
                style={{
                  position: "relative",
                  height: "500px",
                  width: "100%",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0 48px",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "3rem",
                      marginBottom: "24px",
                    }}
                  >
                    {title}
                  </h1>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "32px",
                    }}
                  >
                    {plaintext.slice(0, 200)}...
                  </p>
                  <Link href={`/post/${post.id}`}>
                    <Button type="primary" size="large" shape="round">
                      查看详情
                    </Button>
                  </Link>
                </div>
                <div
                  style={{
                    width: "400px",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    alignContent: "center",
                    marginRight: "48px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "radial-gradient(circle,transparent 0,#f0f2f5 80%)",
                      zIndex: 1,
                    }}
                  ></div>
                  <Image
                    src={
                      firstImage ||
                      "https://images.unsplash.com/photo-1633412802994-5c058f151b66"
                    }
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "20px",
                    }}
                    preview={false}
                  />
                </div>
              </div>
            </section>
          );
        })}
      </Carousel>
    </div>
  );
}
