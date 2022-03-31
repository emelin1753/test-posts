import mutations from "../mutations";
import { fetchAPI, limitPosts } from "@/helpers/fetch";

const { POSTS, CURRENT_PAGE } = mutations;

const posts = {
  namespaced: true,
  state: {
    posts: [],
    currentPage: 1,
  },
  getters: {
    posts: ({ posts }) => posts,
    postsCount: ({ posts }) => posts.length,
    currentPage: ({ currentPage }) => currentPage,
  },
  mutations: {
    [POSTS](state, value) {
      state.posts = value;
    },
    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    },
  },
  actions: {
    async updatePosts({ commit, getters }) {
      const { currentPage } = getters;
      try {
        const response = await fetchAPI(
          "/posts/",
          `?_page=${currentPage}&_limit=${limitPosts}&_embed=comments`
        );
        commit(POSTS, response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default posts;
