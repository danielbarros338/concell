<template>
  <div class="table__container">
    <q-table
      title="Ordens de Serviço"
      :rows="osList"
      :columns="columns"
      row-key="os"
      class="table"
    />
  </div>
</template>

<script>
export default {
  name: "ServiceOrderList",
  data() {
    return {
      columns: [
        {
          name: "OS_number",
          required: true,
          label: "Ordem de Serviço",
          align: "left",
          field: (row) => row.OS_number,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "model",
          align: "center",
          label: "Aparelho",
          field: "model",
          sortable: true,
        },
        {
          name: "name",
          align: "center",
          label: "Cliente",
          field: "name",
          sortable: true,
        },
        {
          name: "maintenance_status",
          align: "center",
          label: "Status",
          field: "maintenance_status",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    osList() {
      return this.$store.state.Problems.osList.filter(
        (value) => value.finishAt == "Não finalizada"
      );
    },
  },
};
</script>

<style scoped>
.table__container {
  width: 100%;
}
.table {
  background-color: var(--color-light-grey);
}
</style>
