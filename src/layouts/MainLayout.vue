<template>
  <q-layout class="container">
    <div class="banner__container"></div>
    <q-page-container class="router__view">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style scoped>
/* Containers */
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.banner__container {
  width: 27vw;
  background-image: url("src/assets/logo/concell.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  background-color: var(--color-primary);
}
/* Elements */
.router__view {
  width: 73vw;
  height: 100vh;
  background-color: var(--color-primary-dark);
}
</style>
