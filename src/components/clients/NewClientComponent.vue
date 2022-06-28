<template>
  <q-form class="new_client__container" @submit.prevent.stop="insertData">
    <h4>Insira os dados do cliente</h4>
    <div class="personal__data">
      <h5>Dados pessoais</h5>
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
        unmasked-value
        mask="##.###.###-#"
      />
      <BaseInput
        v-model="client.cpf"
        class="inputs"
        label="CPF"
        unmasked-value
        mask="###.###.###-##"
      />
    </div>
    <hr />
    <div class="address__data">
      <h5>Endereço</h5>
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
      <BaseInput
        v-model="client.cep"
        class="inputs"
        label="CEP"
        maxlength="50"
        unmasked-value
        mask="#####-###"
      />
    </div>
    <hr />
    <div class="contact__data">
      <h5>Contato</h5>
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
    <div class="btn__container">
      <q-btn class="btn" label="Cadastrar" color="grey-8" type="submit" />
    </div>
  </q-form>
</template>

<script>
export default {
  name: "NewClientComponent",
  data() {
    return {
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
    async insertData() {
      let response = await this.$store.dispatch("insertPeople", this.client);
      console.log(response);

      if (response.code == 201) {
        this.$q.notify({
          message: response.message,
          icon: "check",
          color: "positive",
        });

        this.$router.push({ name: "dashboard.newmaintenance" });
      }

      if (response.code != 201)
        this.$q.notify({
          message: response.message,
          icon: "cancel",
          color: "negative",
        });
    },
  },
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
