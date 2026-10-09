import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { Table, Button, type TableColumn } from "minerva-design/vue";
const loading = ref(true);
const columns = [
  { key: "name", header: "Name" },
  { key: "status", header: "Status" },
];
<\/script>
<template>
  <div style="display: grid; gap: 12px">
    <Button variant="outline" @click="loading = !loading">{{
      loading ? "Show empty state" : "Show loading state"
    }}</Button
    ><Table
      :columns="columns"
      :data="[]"
      :loading="loading"
      :loading-rows="3"
      empty-text="No jobs yet"
      aria-label="Jobs"
    />
  </div>
</template>
`})))()}n();export{t as default};