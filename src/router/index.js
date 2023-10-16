import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import adminPanelChihuido from "../views/adminPanelChihuido.vue";
import errorNotAdmin from "../views/errorNotAdmin.vue"



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin-panel-chihuido",
    name: "adminPanelChihuido",
    component: adminPanelChihuido,
  },
  {
    path: "/errorNotAdmin",
    name: "errorNotAdmin",
    component: errorNotAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
