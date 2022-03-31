import links from "./links";
import Home from "../components/Home.vue";
import PostsList from "../components/PostsList.vue";

export default [
  {
    path: links.home,
    //name: "home",
    component: Home,
    children: [
      {
        path: links.posts,
        name: "posts",
        component: PostsList,
      },
      {
        path: "links.posts",
        name: "po",
        //component: PostsList,
      },
    ],
  },
];
