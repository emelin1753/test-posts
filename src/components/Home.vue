<template>
  <div class="home">
    <Header />
    <PostsList msg="Welcome to Your Vue.js App" />
    <Footer />
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeMain",
  components: {
    PostsList,
    Header,
    Footer,
  },
};
</script>
