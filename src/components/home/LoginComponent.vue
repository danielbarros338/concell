<template>
  <div class="login__container">
    <q-card class="login__card">
      <h3>Login</h3>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
};
</script>

<style scoped>
/* Containers */
.login__container,
.login__card {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login__container {
  height: 100%;
}
.login__card {
  background-color: var(--color-secondary);
  padding: 10px;
}
/* Elements */
.login__card h3 {
  margin: 10px;
}
</style>
