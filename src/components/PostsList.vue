<template>
  <div class="posts-wrap">
    <p v-if="!posts.length">Постов нет</p>
    <div v-else class="posts-list-wrap">
      <div v-for="(item, index) in posts" :key="index">
        <PostsListItem :post="item" />
      </div>
    </div>
    <PaginateComp class="posts-paginate" @setPage="setPage" />
  </div>
</template>

<script>
import PostsListItem from "./PostsListItem.vue";
import { mapGetters, mapActions } from "vuex";
import PaginateComp from "./Paginate.vue";

export default {
  name: "PostsList",

  created() {
    this.updatePosts();
  },

  methods: {
    ...mapActions("posts", ["updatePosts", "setCurrentPage"]),

    setPage(value) {
      this.setCurrentPage(value);
      this.updatePosts();
    },
  },

  computed: {
    ...mapGetters("posts", ["posts", "postsCount"]),
  },

  components: { PostsListItem, PaginateComp },
};
</script>

<style scoped>
.posts-list-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 25px;
  justify-items: center;
  padding: 20px;
}
.posts-paginate {
  text-align: right;
  padding-right: 20px;
}
@media (max-width: 768px) {
  .posts-list-wrap {
    grid-template-columns: 1fr;
  }
}
</style>
