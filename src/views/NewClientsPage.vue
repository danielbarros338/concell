<template>
  <q-page>
    <q-card class="new_clients__card">
      <h3>Cadastro de clientes</h3>
      <div class="content__container">
        <StepOneComponent v-if="step == 1" @click="getStep" />
        <StepTwoComponent v-if="step == 2" @click="getStep" />
        <StepThreeComponent v-if="step == 3" @click="getStep" />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import StepOneComponent from "src/components/newClients/StepOneComponent.vue";
import StepTwoComponent from "src/components/newClients/StepTwoComponent.vue";
import StepThreeComponent from "src/components/newClients/StepThreeComponent.vue";

export default {
  name: "NewClients",
  components: {
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
  },
  data() {
    return {
      step: 1,
      client: {
        name: null,
        surname: null,
        rg: null,
        cpf: null,
        state: null,
        city: null,
        district: null,
        street: null,
        comp: null,
        cep: null,
        cellphone: null,
        email: null,
      },
    };
  },
  methods: {
    getStep(emit) {
      if (typeof emit === "number") this.step = emit;
      if (emit === 4) {
        alert("Implementar mensagem de cadastro com sucesso");
        this.step = 1;
      }
    },
  },
};
</script>

<style scoped>
.new_clients__card {
  padding: 1%;
  background-color: var(--color-secondary);
}
.content__container .inputs {
  margin-top: 2%;
  width: 100%;
}
</style>
