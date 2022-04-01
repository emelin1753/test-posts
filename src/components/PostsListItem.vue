<template>
  <div class="post-list-wrap">
    <div class="first-colum-list">
      <div class="post-list-img">
        <img src="@/assets/posts_img.png" width="20%" height="20%" alt="post" />
      </div>
      <div class="post-list-title">{{ post.title }}</div>
      <div class="post-list-body">{{ post.body }}</div>
      <div>
        <span>&#128488; {{ post.comments.length }}</span>
        <router-link class="post-list-link" :to="links.post + post.id"
          >&#128397;</router-link
        >
      </div>
    </div>
    <div class="post-list-img-media">
      <img src="@/assets/posts_img.png" width="100%" height="100%" alt="post" />
    </div>
  </div>
</template>

<script>
import links from "@/router/links";

export default {
  name: "PostsListItem",

  props: {
    post: {
      typeof: Object,
      required: true,
    },
  },

  data: () => ({
    links,
  }),
};
</script>

<style scoped>
.post-list-wrap {
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 10px;
}
.post-list-img {
  text-align: center;
}
.post-list-title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.post-list-body {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}
.post-list-img-media {
  display: none;
}
.post-list-link {
  margin-left: 20px;
  text-decoration: none;
}
@media (max-width: 768px) {
  .post-list-wrap {
    border-width: 0px 0px 1px 0px;
    border-radius: 0;
  }
  .post-list-img {
    display: none;
  }
  .post-list-img-media {
    display: block;
  }
  .post-list-wrap {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;
  }
}
</style>
