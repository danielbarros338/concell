// Layouts
import MainLayout from "src/layouts/MainLayout.vue";
import DashboardLayout from "src/layouts/DashboardLayout.vue";

// Views
import LoginPage from "../views/LoginPage.vue";
import DashboardPage from "../views/DashboardPage.vue";

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
        children: [
          {
            path: "",
            name: "dashboard.home",
            component: DashboardPage,
          },
        ],
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

export default routes;
