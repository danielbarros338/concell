<template>
  <q-card class="cellphone__card">
    <q-card-section>
      <h5>Celular</h5>
      <p>Insira as informações relacionadas ao problema no celular</p>
    </q-card-section>
    <q-card-section>
      <BaseInput label="Marca" />
      <BaseInput label="Modelo" />
      <BaseInput label="Série" />
      <BaseInput label="IMEI" />
    </q-card-section>
    <q-card-section>
      <q-btn :to="{ name: 'dashboard.newmaintenance.clientdata' }"
        >Voltar</q-btn
      >
      <q-btn :to="{ name: 'dashboard.newmaintenance.problemdescription' }"
        >Avançar</q-btn
      >
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CellphoneDataComponent",
};
</script>

<style scoped>
.cellphone__card {
  width: 50%;
  padding: 1%;
  background-color: var(--color-secondary);
}
</style>
