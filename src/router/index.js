import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/index",
    name: "Index",
    component: () => import("../views/index.vue"),
  },
  {
    path: "/search/:search_name?",
    name: "Search",
    component: () => import("../views/search.vue"),
    meta: {
      title: "搜索结果 - 苍穹影视",
    },
  },
  {
    path: "/collection/:id?",
    name: "Collection",
    component: () => import("../views/collection.vue"),
    meta: {
      title: "系列收藏 - 苍穹影视",
    },
  },
  {
    path: "/subject/:id",
    name: "Subject",
    component: () => import("../views/subject.vue"),
    meta: {
      title: "播放 - 苍穹影视",
    },
  },
  {
    path: "/celebrity/:id",
    name: "Celebrity",
    component: () => import("../views/celebrity.vue"),
    meta: {
      title: "演员 - 苍穹影视",
    },
  },
  {
    path: "/more",
    name: "More",
    component: () => import("../views/more.vue"),
    meta: {
      title: "MORE - 苍穹影视",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/about.vue"),
    meta: {
      title: "ABOUT - 苍穹影视",
    },
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../views/setting.vue"),
    meta: {
      title: "设置 - 苍穹影视",
    },
  },
  {
    path: "/*",
    alias: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
    meta: {
      title: "404 - 苍穹影视",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
