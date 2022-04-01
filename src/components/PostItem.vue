<template>
  <div class="post-item">
    <router-link class="link-back" :to="links.home">&lt; назад</router-link>
    <template v-if="noPostData">
      <p>Данных нет</p>
    </template>
    <template v-else>
      <div class="post-item-img">
        <img
          class="post-img"
          src="@/assets/post_item_img.png"
          width="100%"
          height="200px"
          alt="post"
        />
      </div>
      <h2 class="post-item-title">{{ postItem.title }}</h2>
      <hr />
      <!-- body no change -->
      <template v-if="!changePost">
        <div class="post-item-body">{{ postItem.body }}</div>
        <button class="post-item-btn-chg" @click="clickChange">
          &#128397; Редактировать пост
        </button>
      </template>
      <!-- change body -->
      <template v-else>
        <textarea class="post-item-textarea" v-model="body" rows="5" />
        <button class="btn-save" @click="clickSave">Сохранить изменения</button>
        <button class="btn-cansel" @click="clickCansel">Отменить</button>
      </template>
      <h4>Комментарии</h4>
      <div v-for="(comment, index) in postComments" :key="index">
        <CommentItem :item="comment" />
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import links from "@/router/links";
import CommentItem from "./CommentItem.vue";

export default {
  name: "PostItem",
  props: {
    id: { typeof: String, required: true },
  },

  data: () => ({
    links,
    changePost: false,
    body: "",
  }),

  async created() {
    await this.getPost(this.id);
  },

  methods: {
    ...mapActions("posts", ["getPost", "patchPost"]),

    clickChange() {
      this.body = this.postItem.body;
      this.changePost = true;
    },

    clickCansel() {
      this.changePost = false;
    },

    async clickSave() {
      await this.patchPost({ id: this.id, body: this.body });
      this.changePost = false;
    },
  },

  computed: {
    ...mapGetters("posts", ["postItem", "postComments"]),

    noPostData() {
      return !Object.keys(this.postItem).length;
    },
  },

  components: { CommentItem },
};
</script>

<style scoped>
.post-item {
  padding: 20px;
}
.link-back {
  color: var(--primary);
  text-decoration: none;
}
.post-img {
  object-fit: cover;
}
.post-item-img {
  margin-top: 20px;
}
.post-item-body {
  margin-top: 20px;
  color: var(--secondary);
}
.post-item-btn-chg {
  color: var(--primary);
  background-color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  padding-left: 0;
}
.post-item-textarea {
  border: 1px solid lightgray;
  width: 100%;
  border-radius: 5px;
  outline: none;
  margin-bottom: 10px;
}
.btn-save {
  background-color: var(--primary);
  border: none;
  color: white;
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
  width: 150px;
}
.btn-cansel {
  background-color: white;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
  width: 150px;
  margin-left: 20px;
}
</style>
