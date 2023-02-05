import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import { createStore } from "vuex";
import "./assets/main.css";
// Import FontAwesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faUtensils, faUser, faScrewdriverWrench, faXmark, faSpinner, faMoon, faSun);
// Import Apex Charts
// import ApexCharts from "apexcharts";
import VueApexCharts from "vue3-apexcharts";
// Create App
const app = createApp(App);
app.use(router, VueApexCharts, Vuex, createStore);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
const store = createStore({
    state: {
        blurb: String,
    },
    mutations: {
    // increment(state) {
    //   state.blurb = "Hello World";
    // },
    },
});
console.log("blurb", store.state.blurb);
