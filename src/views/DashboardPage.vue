<template>
  <q-page
    ><q-card class="dashboard__card"
      ><h3>Seja bem vindo</h3>
      <h5>Escolha uma das opções do menu acima para começar</h5></q-card
    ></q-page
  >
</template>

<script>
export default {
  name: "DashboardPage",
};
</script>

<style scoped>
/* Containers */
.dashboard__card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1%;
  background-color: var(--color-secondary);
  width: 80%;
}
</style>
