import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { Notify, LocalStorage, Platform } from "quasar";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const data = LocalStorage.getItem("data");
    if (from.meta.middleware === "guest" || to.meta.middleware === "guest") {
      next();
    }
    if (to.meta.middleware === "auth" && data === null) {
      next({ name: "login" });
      Notify.create({
        type: "info",
        position: Platform.is.mobile ? "bottom" : "top-right",
        message: "Login is required to view this page",
      });
    }

    if (to.meta.middleware === "auth" && data !== null) {
      next();
    }
  });

  return Router;
});
