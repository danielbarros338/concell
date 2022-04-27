<template>
  <q-card class="login__card">
    <q-card-section class="btn__container">
      <q-btn class="btns" label="Voltar" @click="$emit('callSignIn', true)" />
      <q-btn class="btns" label="Cadastrar" />
    </q-card-section>
  </q-card>
</template>

<style scoped>
/* Containers */
.login__card {
  display: flex;
  flex-wrap: wrap;
}
.login__card {
  justify-content: center;
  align-items: center;
  width: 40%;
}
.login__card {
  background-color: var(--color-secondary);
  padding: 10px;
}
</style>
