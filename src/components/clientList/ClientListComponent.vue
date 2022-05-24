<template>
  <q-card class="client_list__container">
    <table>
      <tr>
        <th>ID</th>
        <th>Nome do Cliente</th>
        <th>Última OS</th>
      </tr>
      <tr>
        <td>001</td>
        <td>Fulano de tal</td>
        <td>OS 000000</td>
      </tr>
    </table>
  </q-card>
</template>

<script>
export default {
  name: "ClientListComponent",
};
</script>

<style scoped>
.client_list__container {
  display: flex;
  justify-content: center;
  padding: 2%;
  background-color: var(--color-secondary);
}
table {
  width: 90%;
}
table th,
table td {
  text-align: start;
}
table th:last-child,
table td:last-child {
  text-align: end;
}
</style>
