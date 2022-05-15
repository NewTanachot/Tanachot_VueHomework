import Vue from "vue";
import Router from "vue-router";
import main from "@/pages/main.vue";
import contact from "@/pages/contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: main
    },

    {
      path: "/contact",
      name: "contact",
      component: contact
    }
  ]
});
