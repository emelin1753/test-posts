<template>
  <div class="home">
    <Header />
    <PostsList />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PostsList from "@/components/PostsList.vue";

export default {
  name: "HomeMain",
  components: {
    Header,
    PostsList,
  },
};
</script>
