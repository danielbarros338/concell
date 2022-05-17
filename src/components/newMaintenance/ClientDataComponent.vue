<template>
  <q-card class="client__card">
    <q-card-section>
      <h5>Cliente</h5>
      <p>Selecione o cliente pelo nome ou ID</p>
    </q-card-section>
    <q-card-seciton>
      <BaseInput label="ID" />
      <q-select
        dense
        standout="bg-grey-9"
        color="grey-9"
        label="Nome do cliente"
        :options="options"
      />
    </q-card-seciton>
    <q-card-section>
      <q-btn :to="{ name: 'dashboard.newmaintenance.cellphonedata' }"
        >Avançar</q-btn
      >
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "ClientDataComponent",
  data() {
    return {
      options: ["Fulanin", "Cicranin"],
    };
  },
};
</script>

<style scoped>
.client__card {
  width: 50%;
  padding: 1%;
  background-color: var(--color-secondary);
}
</style>
