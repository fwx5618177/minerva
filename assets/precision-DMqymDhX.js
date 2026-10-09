import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { NumberInput, FormField } from "minerva-design/vue";
const value = ref<number | null>(12.5);
<\/script>
<template>
  <FormField label="Unit price" helper-text="Steps of 0.25"
    ><NumberInput v-model="value" :step="0.25" :precision="2" :min="0"
  /></FormField>
</template>
`})))()}n();export{t as default};