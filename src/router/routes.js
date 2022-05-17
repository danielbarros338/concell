const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("src/layouts/MainLayout.vue"),
    redirect: "login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("src/views/LoginPage.vue"),
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("src/layouts/DashboardLayout.vue"),
        children: [
          {
            path: "",
            name: "dashboard.home",
            component: () => import("src/views/DashboardPage.vue"),
          },
          {
            path: "newmaintenance",
            name: "dashboard.newmaintenance",
            component: () => import("src/views/NewMaintenancePage.vue"),
          },
          {
            path: "clients",
            name: "dashboard.clients",
            component: () => import("src/views/NewClientsPage.vue"),
            children: [
              {
                path: "newclients/1",
                name: "dashboard.newclients.1",
                component: () =>
                  import("src/components/newClients/StepOneComponent.vue"),
              },
              {
                path: "newclients/2",
                name: "dashboard.newclients.2",
                component: () =>
                  import("src/components/newClients/StepTwoComponent.vue"),
              },
              {
                path: "newclients/3",
                name: "dashboard.newclients.3",
                component: () =>
                  import("src/components/newClients/StepThreeComponent.vue"),
              },
            ],
          },
          {
            path: "maintenance",
            name: "dashboard.maintenance",
            component: () => import("src/views/MaintenancePage.vue"),
          },
          {
            path: "stock",
            name: "dashboard.stock",
            component: () => import("src/views/StockPage.vue"),
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
