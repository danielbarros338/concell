// Views
import HomeView from "../views/HomeView.vue";

// Components
import LoginComponent from "../components/home/LoginComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "login",
    children: [
      {
        path: "login",
        name: "login",
        component: LoginComponent,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

export default routes;
