// Layouts
import MainLayout from "src/layouts/MainLayout.vue";
import DashboardLayout from "src/layouts/DashboardLayout.vue";

// Components
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainLayout,
    redirect: "login",
    children: [
      {
        path: "login",
        name: "login",
        component: LoginPage,
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: DashboardLayout,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

export default routes;
