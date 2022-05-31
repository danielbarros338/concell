<template>
  <div class="add__container">
    <div class="repo__container">
      <h5>Reposição de peça</h5>
      <span class="inputs__container">
        <q-select
          v-model="repositionPart.name"
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
    <q-form class="repo__container" @submit.prevent.stop="addNewPart">
      <h5>Cadastrar nova peça</h5>
      <div class="inputs__container">
        <BaseInput
          v-model="newPart.name"
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
        <q-btn
          label="Adicionar"
          type="submit"
          color="grey-8"
          :disabled="isDisabledNewPart"
        />
      </div>
    </q-form>
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
        name: "",
        amount: null,
        value: null,
      },
    };
  },
  computed: {
    options() {
      return this.$store.state.Parts.parts.map((value) => value.name);
    },
    isDisabledNewPart() {
      const isNull = Object.values(this.newPart).filter((value) => !value);
      return isNull.length != 0 ? true : false;
    },
  },
  methods: {
    async addNewPart() {
      this.newPart.value = this.newPart.value.replace(",", ".");
      this.newPart.value = Number(this.newPart.value);

      const response = await this.$store.dispatch("setPart", this.newPart);
      if (response) {
        this.$store.dispatch("getParts");
        this.$q.notify({
          message: "Peça adicionada com sucesso!",
          icon: "done",
          type: "positive",
        });
      } else {
        this.$q.notify({
          message: "Erro ao adicionar peça!",
          icon: "sms_fail",
          type: "negative",
        });
      }
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
