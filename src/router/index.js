import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/views/layout";

import Login from "@/views/login";
const constantRoutes = [
  {
    path: "/",
    component: Layout,
    text: "首页概况",
    icon: "el-icon-s-help",
    children: [
      {
        path: "",
        component: () => import("@/views/home"),
        text: "统计分析",
      },
      {
        path: "xuqiu",
        component: () => import("@/views/home/xuqiu"),
        text: "需求",
      },
    ],
  },
  { path: "/login", component: Login, hidden: true },
  // { path: "*", redirect: "/", hidden: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
export { constantRoutes };

export default router;
