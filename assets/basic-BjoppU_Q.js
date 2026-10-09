import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { Button, HStack } from "minerva-design/vue";
const count = ref(0);
<\/script>
<template>
  <HStack :gap="3" wrap>
    <Button @click="count++">Click me</Button>
    <output aria-live="polite">Clicked {{ count }} times</output>
  </HStack>
</template>
`})))()}n();export{t as default};