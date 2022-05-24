<template>
  <div class="table__container">
    <q-table
      title="Histórico"
      :rows="rows"
      :columns="columns"
      row-key="os"
      class="table"
    />
  </div>
</template>

<script>
export default {
  name: "HistoryOSList",
  data() {
    return {
      columns: [
        {
          name: "os",
          required: true,
          label: "Ordem de Serviço",
          align: "left",
          field: (row) => row.os,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "mobile",
          align: "center",
          label: "Aparelho",
          field: "mobile",
          sortable: true,
        },
        {
          name: "client",
          align: "center",
          label: "Cliente",
          field: "client",
          sortable: true,
        },
        {
          name: "end",
          align: "center",
          label: "Data de término",
          field: "end",
          sortable: true,
        },
      ],
      rows: [
        {
          os: 1,
          mobile: "LG K14s",
          client: "Daniel Barros",
          end: "05/10/22",
        },
        {
          os: 2,
          mobile: "Moto g4",
          client: "Armando Barros",
          end: "05/10/22",
        },
        {
          os: 3,
          mobile: "Xiaomi",
          client: "Lucas Barros",
          end: "05/10/22",
        },
        {
          os: 4,
          mobile: "Samsung j4",
          client: "Daniel Barros",
          end: "05/10/22",
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
