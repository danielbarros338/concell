<template>
  <div class="table__container">
    <q-table
      title="Clientes"
      :rows="rows"
      :columns="columns"
      row-key="os"
      class="table"
    />
  </div>
</template>

<script>
export default {
  name: "ClientsListComponent",
  data() {
    return {
      columns: [
        {
          name: "id",
          required: true,
          label: "ID do Cliente",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "name",
          align: "center",
          label: "Nome Completo",
          field: "name",
          sortable: true,
        },
        {
          name: "lastOs",
          align: "center",
          label: "Última OS",
          field: "lastOs",
          sortable: true,
        },
      ],
      rows: [
        {
          id: 123123,
          name: "Daniel Barros",
          lastOs: 123123123,
        },
      ],
    };
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
