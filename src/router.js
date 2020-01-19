import Vue from "vue";
import Router from "vue-router";
import TeatherLanding from "./pages/Theatre/Landing/Index.vue";
import Home from "./pages/Home/Index.vue";
import Media from "./pages/Media/List/Index.vue";
import MediaDetail from "./pages/Media/Detail/Index.vue";
import StaticPage from "./pages/StaticPage/Index.vue";
import List from "./pages/List/Index.vue";
// import TTS from "./views/TTS.vue";
// import Drivers from "./views/Drivers.vue";

Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      // meta: { mainindex: 1, keepAlive: true }
    },
    {
      path: "/theatre",
      name: "TheatreLanding",
      component: TeatherLanding,
      // meta: { mainindex: 1, keepAlive: true }
    },
    {
      path: "/media",
      name: "Media",
      component: Media,
      // meta: { mainindex: 1, keepAlive: true }
    },
    {
      path: "/mediadetail/:id",
      name: "MediaDetail",
      component: MediaDetail,
      // meta: { mainindex: 1, keepAlive: true }
    },
    {
      path: "/:item/list",
      name: "List",
      component: List,
      // meta: { mainindex: 1, keepAlive: true }
    },
    {
      path: "*",
      name: "StaticPage",
      component: StaticPage,
      // meta: { mainindex: 1, keepAlive: true }
    },
    // {
    //   path: "/drivers",
    //   name: "Drivers",
    //   component: Drivers,
    //   meta: { mainindex: 2, keepAlive: true }
    // },
    // {
    //   path: "/tts",
    //   name: "TTS",
    //   component: TTS,
    //   meta: { mainindex: 3, keepAlive: true }
    // },
    // {
    //   path: "/new/:order_id?",
    //   name: "newOrder",
    //   component: newOrder,
    //   meta: { mainindex: 9 },
    // },
    // {
    //   path: "/drivers",
    //   name: "drivers",
    //   component: drivers,
    //   meta: { mainindex: 3 },
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: login,
    // },
    // {
    //   path: "/ongoingorders",
    //   name: "ongoingorders",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "ongoing" */ "./views/About.vue"),
    // },
  ]
});

// router.beforeEach((to, from, next) => {
//   if (!global.user && from.name != "login" && to.name != "login") {
//     return next("/login");
//   }
//   return next();
// });

export default router;
