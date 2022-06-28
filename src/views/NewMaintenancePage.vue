<template>
  <q-page>
    <q-form class="new_maintenance__container" @submit.prevent.stop="saveData">
      <h4>Criando nova Ordem de Serviço</h4>
      <div class="client__data">
        <h5>Cliente</h5>
        <small>Selecione o cliente pelo nome ou ID</small>
        <BaseInput
          v-model="client.ID_client"
          class="inputs"
          label="ID"
          maxlength="50"
        />
        <q-select
          v-model="client.name"
          dense
          class="inputs"
          standout="bg-grey-9"
          color="grey-9"
          label="Nome do cliente"
          :options="clientsName"
        />
      </div>
      <hr />
      <div class="mobile__data">
        <h5>Celular</h5>
        <small>Insira as informações relacionadas ao problema no celular</small>
        <BaseInput v-model="client.brand" class="inputs" label="Marca" />
        <BaseInput
          v-model="client.model"
          class="inputs"
          label="Modelo"
          maxlength="50"
        />
        <BaseInput
          v-model="client.nr_serie"
          class="inputs"
          label="Série"
          maxlength="100"
        />
        <BaseInput
          v-model="client.imei"
          class="inputs"
          label="IMEI"
          maxlength="100"
        />
      </div>
      <hr />
      <div class="problem__data">
        <h5>Problema</h5>
        <small>Descreva o problema relatado pelo cliente</small>
        <BaseInput
          v-model="client.description"
          class="inputs"
          type="textarea"
          label="Descreva o problema"
          autogrow
        />
      </div>
      <div class="btn__container">
        <q-btn class="btn" label="Cadastrar" color="grey-8" type="submit" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: "NewMaintenanceComponent",
  data() {
    return {
      clients: [],
      clientsName: [],
      client: {
        ID_client: null,
        name: "",
        brand: "",
        model: "",
        nr_serie: "",
        imei: null,
        description: "",
      },
    };
  },
  async created() {
    this.clients = await this.$store.dispatch("getNamePeoples");
    this.clientsName = this.clients.map((value) => value.name);
  },
  methods: {
    async saveData() {
      const client = this.clients.find(
        (value) => value.name == this.client.name
      );
      this.client.ID_client = client.ID_client;

      await this.$store.dispatch("createNewOs", this.client);
    },
  },
};
</script>

<style scoped>
/* Containers */
.client__data,
.mobile__data,
.problem__data,
.new_maintenance__container,
.btn__container {
  display: flex;
}
.client__data,
.mobile__data,
.problem__data,
.btn__container {
  width: 100%;
}
.client__data,
.mobile__data {
  justify-content: space-between;
  flex-wrap: wrap;
}
.new_maintenance__container,
.mobile__data,
.problem__data {
  flex-wrap: wrap;
}
.new_maintenance__container {
  justify-content: center;
  padding: 2%;
  width: 90%;
  margin-top: 15%;
  background-color: var(--color-light-grey);
}
.btn__container {
  justify-content: flex-end;
}
.problem__data {
  justify-content: center;
}
/* Elements */
.client__data .inputs {
  width: 48%;
}
.mobile__data .inputs {
  width: 32%;
}
.problem__data .inputs {
  width: 100%;
}
.client__data h5,
.client__data small,
.mobile__data h5,
.mobile__data small,
.problem__data h5,
.problem__data small {
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
