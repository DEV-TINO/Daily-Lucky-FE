import { createWebHistory, createRouter } from "vue-router";
import SplashPage from "./pages/SplashPage.vue";
import CalendarPage from "./pages/CalendarPage.vue";
import WritePage from "./pages/WritePage.vue";
import ChallengePage from "./pages/ChallengePage.vue";
import CreateChallengePage from "./pages/CreateChallengePage.vue";

const routes = [
  {
    path: "/",
    name: "Splash",
    component: () => import("./pages/SplashPage.vue"),
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("./pages/CalendarPage.vue"),
  },
  {
    path: "/write",
    name: "Write",
    component: () => import("./pages/WritePage.vue"),
  },
  {
    path: "/challenge",
    name: "Challenge",
    component: () => import("./pages/ChallengePage.vue"),
  },
  {
    path: "/create-challenge",
    name: "CreateChallenge",
    component: () => import("./pages/CreateChallengePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
