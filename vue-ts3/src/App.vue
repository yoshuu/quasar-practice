<script setup>
import { ref } from "vue";
import apple from "./apple.js";
const selection = ref();
</script>
<template>
  <q-select
    counter
    multiple
    style="width: 250px"
    v-model="selection"
    :options="apple"
    use-chips
    :hide-dropdown-icon="true"
  >
  </q-select>
</template>
<style scoped>
.q-field__control {
  color: red !important;
}
</style>
