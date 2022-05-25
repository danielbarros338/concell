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
            redirect: { name: "dashboard.newmaintenance.clientdata" },
            component: () => import("src/views/NewMaintenancePage.vue"),
            children: [
              {
                path: "clientdata",
                name: "dashboard.newmaintenance.clientdata",
                component: () =>
                  import(
                    "src/components/newMaintenance/ClientDataComponent.vue"
                  ),
              },
              {
                path: "cellphonedata",
                name: "dashboard.newmaintenance.cellphonedata",
                component: () =>
                  import(
                    "src/components/newMaintenance/CellphoneDataComponent.vue"
                  ),
              },
              {
                path: "problemdesription",
                name: "dashboard.newmaintenance.problemdescription",
                component: () =>
                  import(
                    "src/components/newMaintenance/ProblemDescriptionComponent.vue"
                  ),
              },
            ],
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
              {
                path: "newclient",
                name: "dashboard.newclient",
                component: () =>
                  import("src/components/newClients/NewClientComponent.vue"),
              },
              {
                path: "clientlist",
                name: "dashboard.clientlist",
                component: () =>
                  import("src/components/clientList/ClientListComponent.vue"),
              },
            ],
          },
          {
            path: "maintenance",
            name: "dashboard.maintenance",
            component: () => import("src/views/MaintenancePage.vue"),
            children: [
              {
                path: "oslist",
                name: "dashboard.maintenance.oslist",
                component: () =>
                  import("src/components/maintenance/ServiceOrderList.vue"),
              },
              {
                path: "historyoslist",
                name: "dashboard.maintenance.historyoslist",
                component: () =>
                  import("src/components/maintenance/HistoryOSList.vue"),
              },
              {
                path: "editos",
                name: "dashboard.maintenance.editos",
                component: () =>
                  import("src/components/maintenance/EditOs.vue"),
              },
            ],
          },
          {
            path: "stock",
            name: "dashboard.stock",
            component: () => import("src/views/StockPage.vue"),
            children: [
              {
                path: "stocklist",
                name: "dashboard.stock.list",
                component: () =>
                  import("src/components/stock/StockListComponent.vue"),
              },
              {
                path: "history",
                name: "dashboard.stock.history",
                component: () =>
                  import("src/components/stock/StockHistoryComponent.vue"),
              },
              {
                path: "add",
                name: "dashboard.stock.add",
                component: () =>
                  import("src/components/stock/AddComponent.vue"),
              },
              {
                path: "delete",
                name: "dashboard.stock.delete",
                component: () =>
                  import("src/components/stock/DeleteComponent.vue"),
              },
            ],
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
