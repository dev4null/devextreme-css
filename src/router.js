import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";
import Grid from "./views/grid";
import Tabs from "./views/tabs";
import TextBox from "./views/textBox"
import Buttons from "./views/buttons"
import Autocomplete from "./views/autoComplete"
import SelectBox from "./views/selectBox"
import TextArea from "./views/textArea"
import dropDownBox from "./views/dropDownBox"
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
      path: "/textbox",
      name: "textbox",
      components: {
        layout: defaultLayout,
        content: TextBox
      }
    },
    {
      path: "/autocomplete",
      name: "autocomplete",
      components: {
        layout: defaultLayout,
        content: Autocomplete
      }
    },  
    {
      path: "/selectbox",
      name: "selectbox",
      components: {
        layout: defaultLayout,
        content: SelectBox
      }
    },
    {
      path: "/textarea",
      name: "textarea",
      components: {
        layout: defaultLayout,
        content: TextArea
      }
    }, 
    {
      path: "/dropDownBox",
      name: "dropDownBox",
      components: {
        layout: defaultLayout,
        content: dropDownBox
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
