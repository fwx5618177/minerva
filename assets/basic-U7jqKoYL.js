import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { NumberInput, VStack } from "minerva-design/vue";
const value = ref<number | null>(2);
<\/script>
<template>
  <VStack :gap="3" align="stretch"
    ><NumberInput
      v-model="value"
      :min="0"
      :max="10"
      aria-label="Quantity"
    /><output>Quantity: {{ value }}</output></VStack
  >
</template>
`})))()}n();export{t as default};