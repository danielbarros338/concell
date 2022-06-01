<template>
  <div class="table__container">
    <q-table
      title="Saídas"
      :rows="options"
      :columns="columns"
      row-key="os"
      class="table"
    />
  </div>
</template>

<script>
export default {
  name: "StockHistoryComponent",
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
          name: "name",
          align: "center",
          label: "Peça",
          field: "name",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    options() {
      return this.$store.state.Parts.usedParts;
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
