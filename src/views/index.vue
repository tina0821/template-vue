<script setup >
import { useSeoMeta } from '@unhead/vue';

useSeoMeta({
  title: 'demo 頁面',
  ogTitle: 'demo 頁面',
  description: 'demo 頁面的 description',
  ogDescription: 'demo 頁面的 description',
});

const colorList = [
  { colorRole: 'primary', colorCode: '#6750A4', class: 'bg-primary' },
  { colorRole: 'secondary', colorCode: '#625B71', class: 'bg-secondary' },
  { colorRole: 'accent', colorCode: '#7D5260', class: 'bg-accent' },
  { colorRole: 'success', colorCode: '#4CAF50', class: 'bg-success' },
  { colorRole: 'danger', colorCode: '#B3261E', class: 'bg-danger' },
  { colorRole: 'warning', colorCode: '#F2B400', class: 'bg-warning' },
  { colorRole: 'info', colorCode: '#1C7ED6', class: 'bg-info' },
];
</script>


<template>
  <ElButton type="success">按鈕</ElButton>
  <ElTable class="bg-info" :data="colorList">
    <ElTableColumn label="顏色名稱">
      <template #default="scope">
        <div>{{ scope.row.colorRole }}</div>
      </template>
    </ElTableColumn>
    <ElTableColumn label="色碼">
      <template #default="scope">
        <div>{{ scope.row.colorCode }}</div>
      </template>
    </ElTableColumn>
    <ElTableColumn label="範例">
      <template #default="scope">
        <div :class="scope.row.class">&nbsp;</div>
      </template>
    </ElTableColumn>
  </ElTable>
</template>


<style scoped></style>
