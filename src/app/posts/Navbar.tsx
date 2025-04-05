"use client";
import useMenuStore from "@/store/MenuStore";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { items, isOpen, toggleMenu } = useMenuStore();

  // 监听窗口大小变化以检测移动设备
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 初始检查
    checkIsMobile();

    // 添加事件监听器
    window.addEventListener("resize", checkIsMobile);

    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        background: "#f5f5f5",
        padding: "0",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      {isMobile && (
        <Button
          type="text"
          icon={isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => toggleMenu()}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      )}

      {!isMobile && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1890ff",
              marginLeft: isMobile ? "16px" : "0",
            }}
          >
            <span
              style={{
                color: "#1890ff",
              }}
            >
              AI
            </span>
            <span
              style={{
                color: "#1890ff",
              }}
            >
              StudioX
            </span>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#888",
                marginLeft: "8px",
              }}
            >
              智能创作与AI社区
            </div>
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
              background: "transparent",
              borderBottom: "none",
              marginLeft: "32px",
            }}
          />
        </>
      )}
    </Header>
  );
};

export default Navbar;
