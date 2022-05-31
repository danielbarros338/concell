<template>
  <div class="add__container">
    <div class="repo__container">
      <h5>Reposição de peça</h5>
      <span class="inputs__container">
        <q-select
          v-model="repositionPart.partName"
          class="inputs"
          dense
          standout="bg-grey-9"
          color="grey-9"
          label="Peça"
          :options="options"
        />
        <BaseInput
          v-model.number="repositionPart.amount"
          class="inputs"
          label="Quantidade"
          mask="###"
        />
        <BaseInput
          v-model="repositionPart.value"
          class="inputs"
          label="Preço (opcional)"
          mask="#,##"
          reverse-fill-mask
        />
        <q-btn label="Adicionar" color="grey-8" />
      </span>
    </div>
    <hr />
    <div class="repo__container">
      <h5>Cadastrar nova peça</h5>
      <div class="inputs__container">
        <BaseInput
          v-model="newPart.partName"
          class="inputs"
          label="Nome da Peça"
          maxlength="30"
        />
        <BaseInput
          v-model.number="newPart.amount"
          class="inputs"
          label="Quantidade"
          mask="###"
        />
        <BaseInput
          v-model="newPart.value"
          class="inputs"
          label="Preço"
          mask="#,##"
          reverse-fill-mask
        />
        <q-btn label="Adicionar" color="grey-8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddComponent",
  data() {
    return {
      repositionPart: {
        partName: "",
        amount: null,
        value: null,
      },
      newPart: {
        partName: "",
        amount: null,
        value: null,
      },
    };
  },
  computed: {
    options() {
      return this.$store.state.Parts.parts.map((value) => value.name);
    },
  },
};
</script>

<style scoped>
/* Container */
.add__container,
.repo__container {
  display: flex;
  flex-wrap: wrap;
}
.add__container,
.repo__container {
  width: 100%;
}
.add__container {
  padding: 2%;
  background-color: var(--color-light-grey);
}
.repo__container .inputs__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2%;
}
/* Elements */
.repo__container .inputs__container .inputs {
  width: 28%;
}
.add__container hr {
  border: 1px solid var(--color-primary);
  margin: 2% 0;
  width: 100%;
}
</style>
