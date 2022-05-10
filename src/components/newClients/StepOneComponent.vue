<template>
  <q-card-section class="content__container">
    <BaseInput
      v-model="client.name"
      class="inputs"
      label="Nome"
      maxlength="50"
    />
    <BaseInput
      v-model="client.surname"
      class="inputs"
      label="Sobrenome"
      maxlength="100"
    />
    <BaseInput
      v-model="client.rg"
      class="inputs"
      label="RG"
      mask="##.###.###-#"
    />
    <BaseInput
      v-model="client.cpf"
      class="inputs"
      label="CPF"
      mask="###.###.###-##"
    />
    <div class="btn__container">
      <q-btn class="btns" label="Próximo" @click="$emit('click', 2)" />
    </div>
  </q-card-section>
</template>

<script>
export default {
  name: "StepOneComponent",
  data() {
    return {
      client: {
        name: null,
        surname: null,
        rg: null,
        cpf: null,
      },
    };
  },
};
</script>

<style scoped>
.inputs {
  margin: 2% 0;
}
.btn__container {
  display: flex;
  justify-content: flex-end;
}
</style>
