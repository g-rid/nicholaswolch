import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import ResumeView from "../views/ResumeView.vue";
// @ts-ignore
import NutritionPlannerView from "../views/NutritionPlannerView.vue";
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
            path: "/nutrition-planner",
            name: "nutritionPlanner",
            component: NutritionPlannerView,
        },
    ],
});
export default router;
