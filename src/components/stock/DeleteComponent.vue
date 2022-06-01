<template>
  <q-form @submit.prevent.stop="onSubmit" class="delete__container">
    <h5>Excluir peças</h5>
    <span class="inputs__container">
      <q-select
        v-model="option"
        class="inputs"
        dense
        standout="bg-grey-9"
        color="grey-9"
        label="Peça"
        :options="options"
      />
      <BaseInput
        v-model="amount"
        class="inputs"
        type="number"
        label="Quantidade"
      />
      <q-btn label="Excluir" color="grey-8" type="submit" />
    </span>
  </q-form>
</template>

<script>
export default {
  name: "DeleteComponent",
  data() {
    return {
      option: null,
      amount: null,
    };
  },
  computed: {
    options() {
      return this.$store.state.Parts.parts.map((value) => value.name);
    },
  },
  methods: {
    async onSubmit() {
      let option = Object.assign(
        {},
        this.$store.state.Parts.parts.filter(
          (value) => value.name == this.option
        )[0]
      );

      option.amount -= this.amount;

      const response = await this.$store.dispatch("deleteQuantityPart", option);

      if (response) {
        await this.$store.dispatch("getParts");
        this.$q.notify({
          message: "Unidade(s) deletada(s) com sucesso!",
          type: "positive",
          icon: "done",
        });
      } else {
        this.$q.notify({
          message: "Ocorreu algum erro.",
          type: "negative",
          icon: "sms_fail",
        });
      }
    },
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
