<template>
  <q-page class="stock__container">
    <q-tabs class="tab" active-bg-color="grey-8">
      <q-route-tab :to="{ name: 'dashboard.stock.list' }">
        <q-icon name="ballot" size="24px" />
        Em Estoque
      </q-route-tab>
      <q-route-tab :to="{ name: 'dashboard.stock.history' }">
        <q-icon name="history" size="24px" />
        Histórico de Saídas
      </q-route-tab>
      <q-route-tab :to="{ name: 'dashboard.stock.add' }">
        <q-icon name="edit" size="24px" />
        Adicionar Peças
      </q-route-tab>
      <q-route-tab :to="{ name: 'dashboard.stock.delete' }">
        <q-icon name="edit" size="24px" />
        Excluir Peças
      </q-route-tab>
    </q-tabs>
    <div class="router_view__container">
      <router-view></router-view>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "StockPage",
};
</script>

<style scoped>
.stock__container {
  display: flex;
  align-content: flex-start;
  width: 100%;
}
.router_view__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2%;
  width: 90%;
}
/* Elements */
.tab {
  margin-top: 2%;
  width: 100%;
  color: #fff;
  font-weight: 600;
}
</style>
