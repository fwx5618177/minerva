import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { IconButton, HStack } from "minerva-design/vue";
const pinned = ref(false);
<\/script>
<template>
  <HStack :gap="3" wrap
    ><IconButton label="Saving" loading>✓</IconButton
    ><IconButton label="Unavailable" disabled>×</IconButton
    ><IconButton v-model:pressed="pinned" label="Pin item">★</IconButton
    ><output>{{ pinned ? "Pinned" : "Unpinned" }}</output></HStack
  >
</template>
`})))()}n();export{t as default};