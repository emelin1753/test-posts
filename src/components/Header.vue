<template>
  <div class="header-main">
    <span class="logo">logo</span>
    <h3 class="posts-media">Посты</h3>
    <span class="search-wrap"
      >&#x1F50D;
      <input
        class="search"
        type="search"
        placeholder="Поиск"
        v-model="currentSearchModel"
      />
    </span>
    <span class="posts">&#128187; Посты</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HeaderMain",

  methods: {
    ...mapActions("posts", [
      "updatePosts",
      "setCurrentPage",
      "setCurrentSearch",
    ]),
  },

  computed: {
    ...mapGetters("posts", ["currentSearch"]),

    currentSearchModel: {
      get() {
        return this.currentSearch;
      },
      set(value) {
        this.setCurrentPage(1);
        this.setCurrentSearch(value);
        this.updatePosts();
      },
    },
  },
};
</script>

<style scoped>
.header-main {
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
}
.posts-media {
  display: none;
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
  .search {
    width: 90%;
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
