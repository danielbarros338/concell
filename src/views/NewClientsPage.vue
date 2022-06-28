<template>
  <q-page class="client__container">
    <q-tabs class="tab" active-bg-color="grey-8">
      <q-route-tab :to="{ name: 'dashboard.newclient' }">
        <q-icon name="person" size="24px" />
        Cadastrar Cliente
      </q-route-tab>
      <q-route-tab :to="{ name: 'dashboard.clientlist' }">
        <q-icon name="groups" size="24px" />
        Clientes
      </q-route-tab>
    </q-tabs>
    <div class="router_view__container">
      <router-view></router-view>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "NewClients",
<<<<<<< HEAD
  async created() {
    await this.$store.dispatch("getAllPeople");
  },
=======
>>>>>>> c31dfd2582a9009b90d136738d9ca68ca4b42c3c
};
</script>

<style scoped>
.client__container {
  display: flex;
  align-content: flex-start;
  width: 100%;
}
.router_view__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2%;
  width: 90%;
}
/* Elements */
.tab {
  width: 100%;
  color: #fff;
  font-weight: 600;
}
</style>
