<template>
  <div class="table__container">
    <q-table
      title="Editar serviços"
      :rows="listOs"
      :columns="columns"
      row-key="os"
      class="table"
    />
  </div>
</template>

<script>
export default {
  name: "EditList",
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
    listOs() {
      return this.$store.state.Problems.osList;
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
