<template>
  <div class="table__container">
    <q-table
      title="Lista de peças"
      :rows="parts"
      :columns="columns"
      row-key="os"
      class="table"
    />
  </div>
</template>

<script>
export default {
  name: "StockListComponent",
  data() {
    return {
      columns: [
        {
          name: "ID_part",
          required: true,
          label: "ID da peça",
          align: "left",
          field: (row) => row.ID_part,
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
        {
          name: "amount",
          align: "center",
          label: "Em Estoque",
          field: "amount",
          sortable: true,
        },
        {
          name: "value",
          align: "center",
          label: "Preço",
          field: "value",
          sortable: true,
        },
      ],
      // rows: [],
    };
  },
  computed: {
    parts() {
      return this.$store.state.Parts.parts;
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
