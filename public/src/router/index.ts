import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodSearchView from "../views/FoodSearchView.vue";
import AboutView from "../views/AboutView.vue";
import NutritionApp from "../views/NutritionApp.vue";
import NutritionAppHome from "../views/NutritionAppHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
    {
      path: "/nutrition-app/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
