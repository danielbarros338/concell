<template>
  <div class="content__container">
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
  </div>
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
