<template>
  <q-layout>
    <q-header class="header__container">
      <q-toolbar>
        <q-toolbar-title> Bem vindo {{ name }} </q-toolbar-title>
      </q-toolbar>
      <q-tabs class="tab" active-color="amber-7" active-bg-color="grey-8">
        <q-tab @click="goTo('dashboard.home')"
          ><q-icon name="fa-solid fa-home" />Início</q-tab
        >
        <q-tab @click="goTo('dashboard.newmaintenance')"
          ><q-icon name="fa-solid fa-wrench" />Nova manutenção</q-tab
        >
        <q-tab @click="goTo('dashboard.clients')"
          ><q-icon name="fa-solid fa-user" />Clientes</q-tab
        >
        <q-tab @click="goTo('dashboard.maintenance')"
          ><q-icon name="fa-solid fa-gear" />Manutenções</q-tab
        >
        <q-tab @click="goTo('dashboard.stock')"
          ><q-icon name="fa-solid fa-mobile" />Estoque de peças</q-tab
        >
      </q-tabs>
    </q-header>
    <q-page-container class="route__container">
      <router-view class="router" />
    </q-page-container>
    <q-footer class="text-caption text-right footer__container">
      Powered by: Daniel Barros
      <q-icon style="margin-right: 2%" name="fa-solid fa-copyright" />
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "DashboardLayout",
  data() {
    return {
      name: "Daniel",
    };
  },
  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped>
/* Containers */
.header__container,
.footer__container {
  color: var(--color-primary);
  background-color: var(--color-secondary);
}
.route__container {
  width: 100%;
}
/* Elements */
.router {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  background-color: var(--color-primary-dark);
  box-shadow: 0 0 5px inset #000;
}
</style>
