import { notFound } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const url = resolvedSearchParams.url as string;
  if (!url) {
    return notFound();
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/read?url=${encodeURIComponent(url)}`
  );

  if (!response.ok) {
    return notFound();
  }

  const {
    data: { content },
  } = await response.json();

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}
