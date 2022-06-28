<template>
  <div class="new_client__container">
    <h4>Insira os dados do cliente</h4>
    <div class="personal__data">
      <h5>Dados pessoais</h5>
      <BaseInput class="inputs" label="Nome" maxlength="50" />
      <BaseInput class="inputs" label="Sobrenome" maxlength="100" />
      <BaseInput class="inputs" label="RG" mask="##.###.###-#" />
      <BaseInput class="inputs" label="CPF" mask="###.###.###-##" />
    </div>
    <hr />
    <div class="address__data">
      <h5>Endereço</h5>
      <BaseInput class="inputs" label="Estado (UF)" maxlength="2" />
      <BaseInput class="inputs" label="Cidade" maxlength="50" />
      <BaseInput class="inputs" label="Bairro" maxlength="100" />
      <BaseInput class="inputs" label="Rua" maxlength="100" />
      <BaseInput class="inputs" label="Complemento (opcional)" maxlength="50" />
      <BaseInput class="inputs" label="CEP" maxlength="50" />
    </div>
    <hr />
    <div class="contact__data">
      <h5>Contato</h5>
      <BaseInput
        class="inputs"
        label="Telefone para contato"
        maxlength="(##) #-####-####"
      />
      <BaseInput class="inputs" label="Email" maxlength="50" />
    </div>
    <div class="btn__container">
      <q-btn class="btn" label="Cadastrar" color="grey-8" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NewClientComponent",
};
</script>

<style scoped>
/* Containers */
.personal__data,
.address__data,
.contact__data,
.new_client__container,
.btn__container {
  display: flex;
}
.personal__data,
.address__data,
.contact__data,
.new_client__container,
.btn__container {
  width: 100%;
}
.personal__data,
.address__data,
.contact__data {
  justify-content: space-between;
  flex-wrap: wrap;
}
.new_client__container,
.address__data {
  flex-wrap: wrap;
}
.new_client__container {
  justify-content: center;
  padding: 2%;
  width: 100%;
  background-color: var(--color-light-grey);
}
.btn__container {
  justify-content: flex-end;
}
/* Elements */
.personal__data .inputs {
  width: 23%;
}
.address__data .inputs {
  width: 32%;
}
.contact__data .inputs {
  width: 48%;
}
.personal__data h5,
.address__data h5,
.contact__data h5 {
  width: 100%;
}
.inputs {
  margin: 1% 0;
}
.btn {
  width: 20%;
  margin-top: 2%;
}
hr {
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  margin: 2% 0;
}
</style>
