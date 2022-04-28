<template>
  <q-card class="login__card">
    <BaseInput />
    <h4>Cadastrar usuário de login</h4>
    <q-card-section class="content__container">
      <q-input
        dense
        v-model="userData.name"
        class="inputs"
        standout="bg-grey-9"
        label="Nome"
        color="grey-9"
      />
      <q-input
        dense
        v-model="userData.surname"
        class="inputs"
        standout="bg-grey-9"
        label="Sobrenome"
        color="grey-9"
      />
      <q-input
        dense
        v-model="userData.user"
        class="inputs"
        standout="bg-grey-9"
        label="Usuário"
        color="grey-9"
      />
      <q-input
        dense
        v-model="userData.password"
        class="inputs"
        standout="bg-grey-9"
        label="Senha"
        type="password"
        color="grey-9"
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
.content__container {
  display: flex;
  flex-wrap: wrap;
}
.login__card,
.content__container {
  justify-content: center;
  align-items: center;
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
</style>
