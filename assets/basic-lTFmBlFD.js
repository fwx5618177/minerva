import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { TagInput, VStack } from "minerva-design/vue";
const tags = ref(["Vue"]);
<\/script>
<template>
  <VStack :gap="3" align="stretch"
    ><TagInput
      v-model="tags"
      :options="['Vue', 'Angular', 'React']"
      aria-label="Frameworks"
    /><output>{{ tags.join(", ") }}</output></VStack
  >
</template>
`})))()}n();export{t as default};