import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";
import Grid from "./views/grid";
import Tabs from "./views/tabs";
import Inputs from "./views/inputs"
import Buttons from "./views/buttons"
import defaultLayout from "./layouts/side-nav-outer-toolbar";


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      components: {
        layout: defaultLayout,
        content: Home
      }
    },
    {
      path: "/grid",
      name: "grid",
      components: {
        layout: defaultLayout,
        content: Grid
      }
    },
    {
      path: "/tabs",
      name: "tabs",
      components: {
        layout: defaultLayout,
        content: Tabs
      }
    },
    {
      path: "/inputs",
      name: "inputs",
      components: {
        layout: defaultLayout,
        content: Inputs
      }
    },
    {
      path: "/buttons",
      name: "buttons",
      components: {
        layout: defaultLayout,
        content: Buttons
      }
    },   
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
