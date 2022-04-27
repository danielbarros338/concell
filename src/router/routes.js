// Layouts
import MainLayout from "../layouts/MainLayout.vue";

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
    ],
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

export default routes;
