import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <Sidebar></Sidebar>
      <Layout>
        <Navbar></Navbar>
        <Content
          style={{
            padding: "0",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              minHeight: 280,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          AI StudioX ©{new Date().getFullYear()} Created by rwecho
        </Footer>
      </Layout>
    </Layout>
  );
}
