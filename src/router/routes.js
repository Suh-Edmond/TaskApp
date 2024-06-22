const routes = [
  {
    path: "/",
    component: () => import("layouts/auth-layout.vue"),
    redirect: "/auth/login",
    meta: {
      middleware: "guest",
    },
    children: [
      {
        name: "login",
        path: "auth/login",
        component: () => import("src/pages/auth/log-in.vue"),
      },
      {
        name: "register",
        path: "auth/register",
        component: () => import("src/pages/auth/sign-up.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("layouts/main-layout.vue"),
    redirect: "tasks",
    meta: {
      middleware: "auth",
    },
    children: [
      {
        name: "dashboard",
        path: "tasks",
        component: () => import("src/pages/dashboard/my-tasks.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
