import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import FoodSearchView from "../views/FoodSearchView.vue";
// @ts-ignore
import ResumeView from "../views/ResumeView.vue";
// @ts-ignore
import NutritionApp from "../views/NutritionApp.vue";
// @ts-ignore
import NutritionAppHome from "../views/NutritionAppHome.vue";
// @ts-ignore
import PortfolioView from "../views/PortfolioView.vue";
// @ts-ignore
import CubeContainerView from "../views/CubeContainerView.vue";
// @ts-ignore
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "cube-container",
      component: CubeContainerView,
    },
    {
      path: "/resume",
      name: "resume",
      component: ResumeView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/nutrition-app",
      name: "nutritionApp",
      component: NutritionApp,
    },
    {
      path: "/nutrition-app-home",
      name: "nutritionAppHome",
      component: NutritionAppHome,
    },
    {
      path: "/nutrition-app/food-search",
      name: "foodSearch",
      component: FoodSearchView,
    },
  ],
});

export default router;
