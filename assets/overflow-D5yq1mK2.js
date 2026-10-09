import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { PageTabs, PageTab, Box } from "minerva-design/vue";
const active = ref("1");
<\/script>
<template>
  <Box max-w="560px"
    ><PageTabs :active-value="active" aria-label="Many documents"
      ><PageTab
        v-for="n in 12"
        :key="n"
        :value="String(n)"
        :label="\`Document \${n}\`"
        :active="active === String(n)"
        @select="active = String(n)" /></PageTabs
  ></Box>
</template>
`})))()}n();export{t as default};