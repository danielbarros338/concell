<template>
  <q-card-section class="content__container">
    <BaseInput
      v-model="client.state"
      class="inputs"
      label="Estado (UF)"
      maxlength="2"
    />
    <BaseInput
      v-model="client.city"
      class="inputs"
      label="Cidade"
      maxlength="50"
    />
    <BaseInput
      v-model="client.district"
      class="inputs"
      label="Bairro"
      maxlength="100"
    />
    <BaseInput
      v-model="client.street"
      class="inputs"
      label="Rua"
      maxlength="100"
    />
    <BaseInput
      v-model="client.comp"
      class="inputs"
      label="Complemento (opcional)"
      maxlength="50"
    />
    <BaseInput v-model="client.cep" class="inputs" label="CEP" maxlength="50" />
    <div class="btn__container">
      <q-btn
        class="btns"
        label="Anterior"
        :to="{ name: 'dashboard.newclients.1' }"
      />
      <q-btn
        class="btns"
        label="Próximo"
        :to="{ name: 'dashboard.newclients.3' }"
      />
    </div>
  </q-card-section>
</template>

<script>
export default {
  name: "StepTwoComponent",
  data() {
    return {
      client: {
        state: null,
        city: null,
        district: null,
        street: null,
        comp: null,
        cep: null,
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
