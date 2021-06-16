import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/view/layout/index.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/view/home/index.vue"),
        },
        {
          path: "write",
          name: "write",
          component: () => import("@/view/write/index.vue"),
        },
        {
          path: "tags",
          name: "tags",
          component: () => import("@/view/tags/index.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("@/view/about/index.vue"),
        },
        // {
        //   path: "post/:id",
        //   name: "post",
        //   component: () => import("@/view/post/index.vue"),
        // },
      ],
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("@/view/post/index.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "404",
      component: () => import("@/view/notFound/index.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
