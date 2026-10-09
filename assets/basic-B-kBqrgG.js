import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { Textarea, VStack } from "minerva-design/vue";
const text = ref("");
<\/script>
<template>
  <VStack :gap="3" align="stretch"
    ><Textarea
      v-model="text"
      aria-label="Message"
      placeholder="Write a message…"
    /><output>{{ text.length }} characters</output></VStack
  >
</template>
`})))()}n();export{t as default};