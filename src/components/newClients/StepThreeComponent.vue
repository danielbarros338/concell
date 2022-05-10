<template>
  <q-card-section class="content__container">
    <BaseInput
      v-model="client.cellphone"
      class="inputs"
      label="Telefone para contato"
      maxlength="(##) #-####-####"
    />
    <BaseInput
      v-model="client.email"
      class="inputs"
      label="Email"
      maxlength="50"
    />
    <div class="btn__container">
      <q-btn class="btns" label="Anterior" @click="$emit('click', 2)" />
      <q-btn class="btns" label="Concluir" @click="$emit('click', 4)" />
    </div>
  </q-card-section>
</template>

<script>
export default {
  name: "StepThreeComponent",
  data() {
    return {
      client: {
        cellphone: null,
        email: null,
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
  justify-content: space-between;
}
</style>
