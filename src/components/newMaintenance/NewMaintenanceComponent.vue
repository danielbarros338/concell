<template>
  <div class="new_maintenance__container">
    <h4>Criando nova Ordem de Serviço</h4>
    <div class="personal__data">
      <h5>Cliente</h5>
      <small>Selecione o cliente pelo nome ou ID</small>
      <BaseInput class="inputs" label="ID" maxlength="50" />
      <q-select
        dense
        standout="bg-grey-9"
        color="grey-9"
        label="Nome do cliente"
        :options="options"
      />
    </div>
    <hr />
    <div class="address__data">
      <h5>Celular</h5>
      <small>Insira as informações relacionadas ao problema no celular</small>
      <BaseInput class="inputs" label="Marca" maxlength="2" />
      <BaseInput class="inputs" label="Modelo" maxlength="50" />
      <BaseInput class="inputs" label="Série" maxlength="100" />
      <BaseInput class="inputs" label="IMEI" maxlength="100" />
    </div>
    <hr />
    <div class="contact__data">
      <h5>Problema</h5>
      <small>Descreva o problema relatado pelo cliente</small>
      <BaseInput type="textarea" label="Descreva o problema" />
    </div>
    <div class="btn__container">
      <q-btn class="btn" label="Cadastrar" color="grey-8" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NewMaintenanceComponent",
  data() {
    return {
      options: ["Fulanin", "Cicranin"],
    };
  },
};
</script>

<style scoped>
/* Containers */
.personal__data,
.address__data,
.contact__data,
.new_maintenance__container,
.btn__container {
  display: flex;
}
.personal__data,
.address__data,
.contact__data,
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
  width: 80%;
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
