<template>
  <q-card class="login__card">
    <h4>Cadastrar usuário de login</h4>
    <q-card-section class="content__container">
      <BaseInput v-model="userData.name" class="inputs" label="Nome" />
      <BaseInput v-model="userData.surname" class="inputs" label="Sobrenome" />
      <BaseInput
        v-model="userData.userName"
        class="inputs"
        label="Nome de usuário"
      />
      <BaseInput v-model="userData.password" class="inputs" label="Senha" />
      <BaseInput
        v-model="userData.confirmPassword"
        class="inputs"
        label="Confirme sua senha"
      />
    </q-card-section>
    <q-card-section class="btn__container">
      <q-btn class="btns" label="Voltar" @click="$emit('callSignIn', true)" />
      <q-btn class="btns" label="Cadastrar" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      userData: {
        name: null,
        surname: null,
        user: null,
        password: null,
      },
    };
  },
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
.login__card,
.content__container {
  justify-content: center;
  align-items: center;
}
.btn__container {
  justify-content: space-between;
  width: 100%;
}
.login__card {
  background-color: var(--color-secondary);
  padding: 10px;
  width: 40%;
}
/* Elements */
.inputs {
  width: 100%;
  margin-top: 2%;
}
.inputs:first-child {
  margin-top: 0;
}
.btns {
  width: 45%;
}
</style>
