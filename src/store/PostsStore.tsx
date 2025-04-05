import { Post } from "@prisma/client";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

type State = {
  posts: Post[];
  filters: {
    source: string | null;
    tags: string[];
  };
  page: number;
  hasMore: boolean;
  loading: boolean;
};

type Actions = {
  loadMore: () => Promise<void>;
  reload: () => Promise<void>;
  setFilters: (filters: { source: string | null; tags: string[] }) => void;
};

const usePostsStore = create<State & Actions>((set, get) => ({
  posts: [],
  page: 1,
  filters: {
    source: null,
    tags: [],
  },
  hasMore: true,
  loading: false,
  setFilters: (filters) => {
    set({ filters });
  },
  loadMore: async () => {
    const { page } = get();

    let url = `/api/posts?page=${page}&pageSize=10`;
    if (get().filters.source) {
      url += `&source=${get().filters.source}`;
    }
    if (get().filters.tags) {
      url += `&tags=${get().filters.tags.join(",")}`;
    }
    set({ loading: true });
    try {
      const {
        data: { posts, hasMore },
        status,
      } = await axiosInstance.get(url);
      if (status !== 200) {
        throw new Error("获取数据失败");
      }

      set((prev) => ({
        posts: [...prev.posts, ...posts],
        page: prev.page + 1,
        hasMore: hasMore,
      }));
    } finally {
      set({ loading: false });
    }
  },
  reload: async () => {
    set({ posts: [], page: 1, hasMore: true });
    await get().loadMore();
  },
}));

export default usePostsStore;
