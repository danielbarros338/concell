<template>
  <q-page class="login__container">
    <SignIn />
  </q-page>
</template>

<script>
import SignIn from "components/home/SignInComponent.vue";

export default {
  name: "LoginComponent",
  components: {
    SignIn,
  },
};
</script>

<style scoped>
/* Containers */
.login__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
