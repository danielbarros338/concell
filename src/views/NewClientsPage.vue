<template>
  <q-page class="client__container">
    <div class="btn__container">
      <q-btn
        label="Clientes Cadastrados"
        class="btns"
        :to="{ name: 'dashboard.clientlist' }"
      />
      <q-btn
        label="Cadastrar novos clientes"
        class="btns"
        :to="{ name: 'dashboard.newclients.1' }"
      />
    </div>
    <q-card class="router__card">
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
.client__container {
  align-content: space-evenly;
}
.btn__container {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.btns {
  background-color: var(--color-secondary);
  color: var(--color-primary-dark);
}
.router__card {
  width: 50%;
  height: 90%;
}
</style>
