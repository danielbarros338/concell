<template>
  <div class="table__container">
    <q-table
      title="Clientes"
      :rows="clientList"
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
          name: "ID_client",
          required: true,
          label: "ID do Cliente",
          align: "left",
          field: (row) => row.ID_client,
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
    };
  },
  computed: {
    clientList() {
      return this.$store.state.Person.people.map((value) => {
        return {
          ID_client: value.ID_client,
          name: `${value.name} ${value.surname}`,
          lastOs: value.lastOs,
        };
      });
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
