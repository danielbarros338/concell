<template>
  <div class="table__container">
    <q-table
      title="Lista de peças"
      :rows="rows"
      :columns="columns"
      row-key="os"
      dark
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
          name: "partId",
          required: true,
          label: "ID da peça",
          align: "left",
          field: (row) => row.partId,
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
        {
          name: "stock",
          align: "center",
          label: "Em Estoque",
          field: "stock",
          sortable: true,
        },
        {
          name: "price",
          align: "center",
          label: "Preço",
          field: "price",
          sortable: true,
        },
      ],
      rows: [
        {
          partId: 1,
          part: "Frontal LG",
          stock: 20,
          price: 100.0,
        },
        {
          partId: 2,
          part: "Processador Xiaomi",
          stock: 3,
          price: 300.23,
        },
        {
          partId: 3,
          part: "Vidro Moto G4",
          stock: 0,
          price: 50.4,
        },
        {
          partId: 4,
          part: "Câmera iPhone X",
          stock: 2,
          price: 60.5,
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
</style>
