import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import {
  ConfigProvider,
  PaletteToggle,
  Button,
  HStack,
} from "minerva-design/vue";
const palette = ref<"editorial" | "tech" | "graphite" | "cool" | null>("tech");
<\/script>
<template>
  <ConfigProvider v-model:palette="palette"
    ><HStack :gap="3"
      ><PaletteToggle /><Button>Palette preview</Button
      ><output>{{ palette || "default" }}</output></HStack
    ></ConfigProvider
  >
</template>
`})))()}n();export{t as default};