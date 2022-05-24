<template>
  <div class="delete__container">
    <h5>Excluir peças</h5>
    <span class="inputs__container">
      <q-select
        class="inputs"
        dense
        standout="bg-grey-9"
        color="grey-9"
        label="Peça"
        :options="options"
      />
      <BaseInput class="inputs" type="number" label="Quantidade" />
      <q-btn label="Excluir" color="grey-8" />
    </span>
  </div>
</template>

<script>
export default {
  name: "DeleteComponent",
  data() {
    return {
      options: ["Câmera Frontal Xiaomi", "Frontal iPhone"],
    };
  },
};
</script>

<style scoped>
.delete__container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2%;
  background-color: var(--color-light-grey);
}
.inputs__container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2%;
}
.inputs {
  width: 40%;
}
</style>
