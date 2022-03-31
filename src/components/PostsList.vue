<template>
  <div class="posts-wrap">
    <div v-for="(item, index) in posts" :key="index">
      <PostsListItem :post="item" />
    </div>
  </div>
</template>

<script>
import PostsListItem from "./PostsListItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostsList",

  created() {
    this.updatePosts();
  },

  methods: {
    ...mapActions("posts", ["updatePosts"]),
  },

  computed: {
    ...mapGetters("posts", ["posts", "postsCount"]),
  },

  components: { PostsListItem },
};
</script>

<style scoped>
.posts-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 25px;
  justify-items: center;
  padding: 20px 20px 0px 20px;
}
@media (max-width: 768px) {
  .posts-wrap {
    grid-template-columns: 1fr;
  }
}
</style>
