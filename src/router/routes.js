// Layouts
import MainLayout from "src/layouts/MainLayout.vue";
import DashboardLayout from "src/layouts/DashboardLayout.vue";

// Views
import LoginPage from "src/views/LoginPage.vue";
import DashboardPage from "src/views/DashboardPage.vue";
import NewMaintenancePage from "src/views/NewMaintenancePage.vue";
import NewClientsPage from "src/views/NewClientsPage.vue";
import MaintenancePage from "src/views/MaintenancePage.vue";
import StockPage from "../views/StockPage.vue";

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
          {
            path: "newmaintenance",
            name: "dashboard.newmaintenance",
            component: NewMaintenancePage,
          },
          {
            path: "newclients",
            name: "dashboard.newclients",
            component: NewClientsPage,
          },
          {
            path: "maintenance",
            name: "dashboard.maintenance",
            component: MaintenancePage,
          },
          {
            path: "stock",
            name: "dashboard.stock",
            component: StockPage,
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
