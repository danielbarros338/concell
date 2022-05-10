<template>
  <div class="content__container">
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
  </div>
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
