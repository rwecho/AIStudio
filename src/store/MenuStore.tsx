import { create } from "zustand";
import { MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: (
      <Link
        href="/posts"
        style={{
          fontSize: "16px",
        }}
      >
        AI 新闻
      </Link>
    ),
    key: "ai-news",
    icon: <MailOutlined />,
  },
];
type State = {
  isOpen: boolean;
  items: MenuItem[];
};

type Actions = {
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
};

const useMenuStore = create<State & Actions>((set) => ({
  isOpen: false,
  items: items,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
  openMenu: () => set({ isOpen: true }),
}));

export default useMenuStore;
