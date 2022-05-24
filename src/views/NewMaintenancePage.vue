<template>
  <q-page>
    <router-view />
  </q-page>
</template>

<script>
export default {
  name: "NewMaintenancePage",
  data() {
    return {
      options: ["Fulanin", "Cicranin"],
    };
  },
};
</script>
