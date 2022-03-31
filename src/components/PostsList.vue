<template>
  <div class="posts-wrap">
    <div v-for="item in 9" :key="item"><PostsListItem /></div>
  </div>
</template>

<script>
import PostsListItem from "./PostsListItem.vue";

export default {
  name: "PostsList",

  components: { PostsListItem },
};
</script>

<style scoped>
.posts-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  justify-items: center;
}
@media (max-width: 768px) {
  .posts-wrap {
    grid-template-columns: 1fr;
  }
}
</style>
