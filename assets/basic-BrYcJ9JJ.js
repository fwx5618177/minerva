import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import {
  ConfigProvider,
  Button,
  ThemeToggle,
  HStack,
} from "minerva-design/vue";
import type { ConfigProviderTheme } from "minerva-design/vue";
const theme = ref<ConfigProviderTheme>("light");
<\/script>
<template>
  <ConfigProvider v-model:theme="theme"
    ><HStack :gap="3"
      ><Button>Scoped action</Button><ThemeToggle /><output
        >Theme: {{ theme }}</output
      ></HStack
    ></ConfigProvider
  >
</template>
`})))()}n();export{t as default};