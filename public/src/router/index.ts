import { createRouter, createWebHistory } from "vue-router";
import FoodSearchView from "../views/FoodSearchView.vue";
import ResumeView from "../views/ResumeView.vue";
import NutritionApp from "../views/NutritionApp.vue";
import NutritionAppHome from "../views/NutritionAppHome.vue";
import PortfolioView from "../views/PortfolioView.vue";
import CubeContainerView from "../views/CubeContainerView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
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
