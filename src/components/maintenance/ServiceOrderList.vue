<template>
  <div class="table__container">
    <q-table
      title="Ordens de Serviço"
      :rows="rows"
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
          name: "status",
          align: "center",
          label: "Status",
          field: "status",
          sortable: true,
        },
      ],
      rows: [
        {
          os: 1,
          mobile: "LG K14s",
          client: "Daniel Barros",
          status: "Aprovado",
        },
        {
          os: 2,
          mobile: "Moto g4",
          client: "Armando Barros",
          status: "Em manutenção",
        },
        {
          os: 3,
          mobile: "Xiaomi",
          client: "Lucas Barros",
          status: "Reprovado",
        },
        {
          os: 4,
          mobile: "Samsung j4",
          client: "Daniel Barros",
          status: "Finalizado",
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
