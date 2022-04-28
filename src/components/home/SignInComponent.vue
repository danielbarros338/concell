<template>
  <q-card class="login__card">
    <h4>Login</h4>
    <q-card-section class="content__container">
      <BaseInput
        class="inputs"
        v-model="user"
        label="Usuário"
        maxlength="100"
      />
      <BaseInput
        class="inputs"
        v-model="password"
        type="password"
        label="Senha"
        maxlength="20"
      />
    </q-card-section>
    <q-card-section class="btn__container">
      <q-btn
        class="btns"
        label="Cadastrar usuário"
        @click="$emit('callSignUp', true)"
      />
      <q-btn class="btns" label="Login" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "LoginComponent",
};
</script>

<style scoped>
/* Containers */
.login__card,
.content__container,
.btn__container {
  display: flex;
  flex-wrap: wrap;
}
.content__container {
  justify-content: center;
}
.btn__container {
  justify-content: space-between;
  width: 100%;
}
.login__card {
  justify-content: center;
  align-items: center;
  width: 40%;
}
.content__container {
  width: 100%;
}
.login__card {
  background-color: var(--color-secondary);
  padding: 10px;
}
/* Elements */
.login__card h4 {
  text-align: center;
}
.content__container .inputs {
  margin-top: 2%;
  width: 100%;
}
.content__container .inputs:first-child {
  margin-top: 0;
}
</style>
