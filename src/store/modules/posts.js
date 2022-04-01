import mutations from "../mutations";
import { fetchAPI, limitPosts } from "@/helpers/fetch";

const { POSTS, CURRENT_PAGE, POST_ITEM, POST_COMMENTS } = mutations;

const posts = {
  namespaced: true,
  state: {
    posts: [],
    postItem: {},
    postComments: [],
    currentPage: 1,
  },
  getters: {
    posts: ({ posts }) => posts,
    postsCount: ({ posts }) => posts.length,
    currentPage: ({ currentPage }) => currentPage,
    postItem: ({ postItem }) => postItem,
    postComments: ({ postComments }) => postComments,
  },
  mutations: {
    [POSTS](state, value) {
      state.posts = value;
    },
    [CURRENT_PAGE](state, value) {
      state.currentPage = value;
    },
    [POST_ITEM](state, value) {
      state.postItem = value;
    },
    [POST_COMMENTS](state, value) {
      state.postComments = value;
    },
  },
  actions: {
    async updatePosts({ commit, getters }, search = "") {
      const { currentPage } = getters;
      let params = `?_page=${currentPage}&_limit=${limitPosts}&_embed=comments`;
      if (String(search).trim() !== "") {
        params += `&q=${search}`;
      }
      try {
        const response = await fetchAPI("/posts/", params);
        commit(POSTS, response);
      } catch (error) {
        console.log(error);
      }
    },

    setCurrentPage({ commit }, page) {
      commit(CURRENT_PAGE, page);
    },

    async getPost({ commit }, id) {
      // удалим предыдущие данные
      commit(POST_ITEM, {});
      commit(POST_COMMENTS, []);
      try {
        const response = await fetchAPI(`/posts/${id}`);
        commit(POST_ITEM, response);
        const comments = await fetchAPI(`/posts/${id}/comments`);
        commit(POST_COMMENTS, comments);
      } catch (error) {
        console.log(error);
      }
    },

    async patchPost({ commit }, data) {
      try {
        const response = await fetchAPI(`/posts/${data.id}`, "", "PATCH", {
          body: data.body,
        });
        commit(POST_ITEM, response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default posts;
