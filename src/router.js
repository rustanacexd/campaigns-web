import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/campaigns",
      name: "campaigns",
      component: () => import("./components/CampaignList")
    },
    {
      path: "/campaigns/:id",
      name: "campaign-details",
      component: () => import("./components/Campaign")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddCampaign")
    }
  ]
});
