<template>
  <div class="table__container">
    <q-table
      title="Saídas"
      :rows="rows"
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
          name: "os",
          required: true,
          label: "Ordem de Serviço",
          align: "left",
          field: (row) => row.os,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "part",
          align: "center",
          label: "Peça",
          field: "part",
          sortable: true,
        },
      ],
      rows: [
        {
          os: 1121212,
          part: "Câmera LG",
        },
        {
          os: 232132,
          part: "Frontal iPhone",
        },
        {
          os: 3542456,
          part: "Processador Xiaomi",
        },
        {
          os: 4455462341,
          part: "Placa Samsung",
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
