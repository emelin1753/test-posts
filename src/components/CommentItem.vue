<template>
  <div class="comment-wrap">
    <div class="comment-img">
      <img
        src="@/assets/comment_img.png"
        width="40px"
        height="40px"
        alt="comment"
      />
    </div>
    <div class="comment-content">
      <div class="comment-name">{{ item.name }}</div>
      <div class="comment-body">{{ item.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",

  props: {
    item: {
      typeof: Object,
      required: true,
    },
  },

  components: {},
};
</script>

<style scoped>
.comment-wrap {
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 15px;
}
.comment-name {
  font-weight: bold;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.comment-body {
  color: var(--secondary);
}
</style>
