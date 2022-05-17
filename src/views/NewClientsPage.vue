<template>
  <q-page>
    <q-card class="new_clients__card">
      <q-card-section class="btn__container">
        <q-btn label="Clientes Cadastrados" />
        <q-btn
          label="Criar novos clientes"
          :to="{ name: 'dashboard.newclients.1' }"
        />
      </q-card-section>
      <router-view />
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "NewClients",
};
</script>

<style scoped>
.new_clients__card {
  padding: 1%;
  background-color: var(--color-secondary);
}
.content__container .inputs {
  margin-top: 2%;
  width: 100%;
}
</style>
