"use client";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { Menu } from "antd";
import useMenuStore from "@/store/MenuStore";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { items, isOpen } = useMenuStore();

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
  if (!isMobile) {
    return <></>;
  }

  return (
    <Sider
      trigger={null}
      hidden={isMobile && !isOpen}
      collapsible={false}
      theme="light"
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1,
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#1890ff",
          padding: "16px",
        }}
      >
        <div>
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
        </div>
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
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
          background: "transparent",
          borderBottom: "none",
        }}
      />
    </Sider>
  );
};

export default Sidebar;
