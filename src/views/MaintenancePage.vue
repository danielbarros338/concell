<template>
  <q-page class="maintenance__container">
    <q-tabs class="tab" active-bg-color="grey-8">
      <q-tab>
        <q-icon name="ballot" size="24px" />
        Ordens de Serviço
      </q-tab>
      <q-tab>
        <q-icon name="history" size="24px" />
        Histórico de Ordens de Serviço
      </q-tab>
      <q-tab>
        <q-icon name="edit" size="24px" />
        Editar Ordens de Serviço
      </q-tab>
    </q-tabs>
  </q-page>
</template>

<script>
export default {
  name: "MaintenancePage",
};
</script>

<style scoped>
.maintenance__container {
  display: flex;
  align-content: flex-start;
  width: 100%;
}
/* Elements */
.tab {
  margin-top: 2%;
  width: 100%;
  color: #fff;
  font-weight: 600;
}
</style>
