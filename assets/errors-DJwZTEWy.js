import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref, computed } from "vue";
import { KeyValueEditor } from "minerva-design/vue";
const entries = ref([{ id: "empty", key: "", value: "token" }]);
const errors = computed(() => {
  const result: Record<string, { key?: string; value?: string }> = {};
  if (!entries.value[0]?.key)
    result.empty = { key: "A header name is required" };
  return result;
});
<\/script>
<template>
  <KeyValueEditor v-model="entries" :errors="errors" />
</template>
`})))()}n();export{t as default};