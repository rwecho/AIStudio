"use client";

import { create } from "zustand";
import { Post, WechatPublish } from "@prisma/client";
import axiosInstance from "@/lib/axios";

interface PostWithWechatPublish extends Post {
  wechatPublish?: WechatPublish;
}

interface PostsStore {
  posts: PostWithWechatPublish[];
  page: number;
  filters: {
    source: string | null;
    tags: string[];
  };
  hasMore: boolean;
  loading: boolean;
  setFilters: (filters: PostsStore["filters"]) => void;
  loadMore: () => Promise<void>;
  reload: () => Promise<void>;
  updatePost: (postId: string, data: Partial<PostWithWechatPublish>) => void;
}

const usePostsStore = create<PostsStore>((set, get) => ({
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
    let url = `/api/posts?page=${get().page}&pageSize=10`;
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
  updatePost: (postId, data) => {
    const { posts } = get();
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex === -1) return;

    const updatedPost = {
      ...posts[postIndex],
      ...data,
    };

    set((state) => ({
      posts: [
        ...state.posts.slice(0, postIndex),
        updatedPost,
        ...state.posts.slice(postIndex + 1),
      ],
    }));
  },
}));

export default usePostsStore;
