import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Import FontAwesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
library.add(faUtensils, faUser, faScrewdriverWrench);

// Import Apex Charts
// import ApexCharts from "apexcharts";
import VueApexCharts from "vue3-apexcharts";

// Create App
const app = createApp(App);

app.use(router, VueApexCharts);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
