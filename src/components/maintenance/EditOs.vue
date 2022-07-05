<template>
  <div class="edit_os__container">
    <h4>Editar ordem de serviço</h4>
    <div class="choice_os edit__container">
      <h5>Escolha a OS</h5>
      <q-select
        v-model="choiceOs"
        dense
        standout="bg-grey-9"
        color="grey-9"
        label="Nº OS"
        :options="os"
      />
    </div>
    <hr />
    <div class="aprove_status edit__container">
      <h5>Aprovação do cliente</h5>
      <span>
        <q-radio
          v-model="userChoice"
          type="radio"
          label="Sim"
          name="userChoice"
          :val="1"
        />
        <q-radio v-model="userChoice" label="Não" name="userChoice" :val="0" />
        <q-radio
          v-model="userChoice"
          label="Aguardando"
          name="userChoice"
          :val="2"
        />
      </span>
    </div>
    <hr />
    <div class="maintenance_status edit__container">
      <h5>Status da manutenção</h5>
      <span>
        <q-radio
          v-model="maintenanceStatus"
          label="Finalizada"
          name="maintenanceStatusChoice"
          :val="1"
        />
        <q-radio
          v-model="maintenanceStatus"
          label="Aguardando aprovação"
          name="maintenanceStatusChoice"
          :val="2"
        />
        <q-radio
          v-model="maintenanceStatus"
          label="Em manutenção"
          name="maintenanceStatusChoice"
          :val="3"
        />
        <q-radio
          v-model="maintenanceStatus"
          label="Aguardando peças"
          name="maintenanceStatusChoice"
          :val="4"
        />
        <q-radio
          v-model="maintenanceStatus"
          label="Perda total"
          name="maintenanceStatusChoice"
          :val="5"
        />
      </span>
    </div>
    <hr />
    <div class="used_parts edit__container">
      <h5>Partes utilizadas</h5>
      <q-select
        v-model="usedPart"
        dense
        standout="bg-grey-9"
        color="grey-9"
        label="Partes"
        :options="parts"
        @update:model-value="addPart"
      />
      <div class="parts__selected edit__container">
        <span
          class="part__element"
          v-for="(part, index) of usedParts"
          :key="`part${index}`"
        >
          {{ part }}
          <span class="close__element" @click="close(index)">X</span>
        </span>
      </div>
    </div>
    <hr />
    <div class="price edit__container">
      <h5>Valor da manutenção</h5>
      <BaseInput placeholder="R$" mask="#,##" reverse-fill-mask />
    </div>
    <div class="btn__container">
      <q-btn class="btn" label="Finalizar Edição" color="grey-8" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EditList",
  data() {
    return {
      choiceOs: null,
      userChoice: null,
      maintenanceStatus: null,
      usedPart: null,
      usedParts: [],
    };
  },
  async created() {
    await this.$store.dispatch("getParts");
  },
  computed: {
    os() {
      return this.$store.state.Problems.osList.map(
        (value) => `Nº ${value.OS_number}`
      );
    },
    parts() {
      return this.$store.state.Parts.parts.map((value) => value.name);
    },
  },
  methods: {
    addPart(part) {
      this.usedParts.push(part);
    },
    close(index) {
      this.usedParts[index] = "delete";
      this.usedParts = this.usedParts.filter((value) => value !== "delete");
    },
  },
};
</script>

<style scoped>
/* Containers */
.edit_os__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 2%;
  background-color: var(--color-light-grey);
}
.edit__container,
.btn__container {
  width: 100%;
}
.edit__container:first-of-type,
.btn__container {
  margin-top: 2%;
}
.btn {
  display: relative;
  float: right;
}
/* Elements */
hr {
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  margin: 2% 0;
}
.part__element {
  padding: 1% 1.5%;
  border-radius: 20px;
  box-shadow: 0 0 4px #555;
  background-color: var(--color-bg-grey);
  color: #fff;
  margin: 0 1%;
}
.close__element {
  font-weight: 800;
  margin-left: 1.5%;
  cursor: pointer;
}
</style>
