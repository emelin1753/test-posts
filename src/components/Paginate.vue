<template>
  <div class="paginate-wrap">
    <button @click="clickPrev">&lt;</button>
    <button
      v-for="index in countPages"
      :key="index"
      :class="{ active: currentPage === index }"
      @click="clickPage(index)"
    >
      {{ index }}
    </button>
    <button @click="clickNext">&gt;</button>
  </div>
</template>

<script>
import { countPages } from "@/helpers/fetch";
import { mapGetters } from "vuex";

export default {
  name: "PaginateComp",

  data: () => ({ countPages }),

  methods: {
    clickPrev() {
      if (this.currentPage > 1) {
        this.$emit("setPage", this.currentPage - 1);
      }
    },

    clickNext() {
      if (this.currentPage < this.countPages) {
        this.$emit("setPage", this.currentPage + 1);
      }
    },

    clickPage(page) {
      this.$emit("setPage", page);
    },
  },

  computed: {
    ...mapGetters("posts", ["currentPage"]),
  },
};
</script>

<style scoped>
button {
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid lightgray;
  margin-left: 2px;
  cursor: pointer;
}
.active {
  color: var(--primary);
  border: 1px solid var(--primary);
}
</style>
