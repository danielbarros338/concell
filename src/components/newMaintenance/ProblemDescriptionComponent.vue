<template>
  <q-card class="problem__card">
    <q-card-section>
      <h5>Problema</h5>
      <p>Descreva o problema relatado pelo cliente</p>
    </q-card-section>
    <q-card-section>
      <BaseInput type="textarea" label="Descreva o problema" />
    </q-card-section>
    <q-card-section>
      <q-btn :to="{ name: 'dashboard.newmaintenance.cellphonedata' }"
        >Voltar</q-btn
      >
      <q-btn>Concluir</q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CellphoneDataComponent",
};
</script>

<style scoped>
.problem__card {
  width: 50%;
  padding: 1%;
  background-color: var(--color-secondary);
}
</style>
