<template>
  <q-layout>
    <q-header class="bg-amber-7 header__container">
      <q-toolbar>
        <q-toolbar-title> Bem vindo {{ name }} </q-toolbar-title>
        <BaseInput>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </BaseInput>
      </q-toolbar>
      <q-tabs class="tab">
        <q-tab @click="goTo('dashboard.home')"
          ><q-icon name="fa-solid fa-home" />Início</q-tab
        >
        <q-tab @click="goTo('dashboard.newmaintenance')"
          ><q-icon name="fa-solid fa-wrench" />Nova manutenção</q-tab
        >
        <q-tab @click="goTo('dashboard.clients')"
          ><q-icon name="fa-solid fa-user" />Cadastros</q-tab
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
    <q-footer class="bg-amber-7 text-caption text-right footer__container">
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
}
</style>
