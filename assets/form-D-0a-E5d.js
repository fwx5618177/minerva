import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { JsonField, FormField } from "minerva-design/vue";
const json = ref('{"project":"demo"}');
<\/script>
<template>
  <FormField label="Request body" required helper-text="Enter a JSON object"
    ><JsonField v-model="json" :rows="5"
  /></FormField>
</template>
`})))()}n();export{t as default};