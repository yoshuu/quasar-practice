<template>
  <div class="appointment-form column q-col-gutter-sm">
    <q-btn>新增家庭成員</q-btn>
    <div>查詢對象：</div>
    <Select
      :modelValue="null"
      :options="['本人-王大中', '家屬-王小明']"
      style="padding-bottom: 30px"
    />

    <q-btn label="查詢" color="secondary" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
