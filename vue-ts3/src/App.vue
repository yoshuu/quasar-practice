<script setup>
import { ref } from "vue";
const selection = ref();
</script>
<template>
  <q-select v-model="selection" :options="['a', 'b', 'c']">123</q-select>
</template>
<style scoped></style>
