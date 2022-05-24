<template>
  <q-input dense standout="bg-grey-9" color="grey-9">
    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "BaseInput",
};
</script>
