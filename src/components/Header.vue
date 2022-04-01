<template>
  <div class="header-main">
    <span class="logo">logo</span>
    <router-link class="posts-media" :to="links.home"
      ><h3>Посты</h3></router-link
    >
    <span class="search-wrap"
      >&#x1F50D;
      <input
        class="search"
        type="search"
        placeholder="Поиск"
        v-model="search"
        @input="inputSearch"
      />
    </span>
    <router-link class="posts" :to="links.home">&#128187; Посты</router-link>
  </div>
</template>

<script>
import links from "@/router/links";
import { mapActions } from "vuex";

export default {
  name: "HeaderMain",

  data: () => ({
    links,
    search: "",
  }),

  methods: {
    ...mapActions("posts", ["updatePosts", "setCurrentPage"]),

    inputSearch() {
      this.setCurrentPage(1);
      this.updatePosts(this.search);
    },
  },
};
</script>

<style scoped>
.header-main {
  background-color: white;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 2fr auto 1fr;
}
.search {
  border-radius: 3px;
  background: lightgrey;
  border: none;
  padding: 4px;
  outline: none;
}
.search-wrap {
  color: transparent;
  text-shadow: 0 0 0 var(--secondary);
  border-radius: 3px;
  background: lightgrey;
  padding: 4px;
}
.posts {
  color: transparent;
  text-shadow: 0 0 0 var(--primary);
  justify-self: end;
  padding-right: 10px;
  cursor: pointer;
  text-decoration: none;
}
.posts-media {
  display: none;
  text-decoration: none;
  color: var(--text-color);
}
.logo {
  padding-left: 10px;
  font-weight: bold;
}
@media (max-width: 768px) {
  .header-main {
    grid-template-columns: 1fr;
  }
  .posts {
    display: none;
  }
  .posts-media {
    margin-top: 10px;
    display: block;
  }
  .logo {
    display: none;
  }
}
</style>
