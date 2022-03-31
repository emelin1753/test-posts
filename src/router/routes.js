import links from "./links";
import Home from "../components/Home.vue";

export default [
  {
    path: links.home,
    name: "home",
    component: Home,
    children: [],
  },
];
