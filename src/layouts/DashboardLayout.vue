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
        <q-tab><q-icon name="fa-solid fa-wrench" />Nova manutenção</q-tab>
        <q-tab><q-icon name="fa-solid fa-user" />Cadastros</q-tab>
        <q-tab><q-icon name="fa-solid fa-gear" />Manutenções</q-tab>
        <q-tab><q-icon name="fa-solid fa-mobile" />Estoque de peças</q-tab>
      </q-tabs>
    </q-header>
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
};
</script>

<style scoped>
/* Containers */
.header__container {
  color: var(--color-primary);
}
/* Elements */
</style>
