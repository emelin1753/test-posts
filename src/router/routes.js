import links from "./links";
import Home from "../components/Home.vue";
import PostItem from "../components/PostItem.vue";

export default [
  {
    path: links.home,
    name: "home",
    component: Home,
  },
  {
    path: links.post + ":id",
    name: "post",
    component: PostItem,
    props: true,
  },
];
