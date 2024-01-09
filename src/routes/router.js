import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/mainView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}