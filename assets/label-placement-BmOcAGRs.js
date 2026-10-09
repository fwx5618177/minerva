import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { Switch, VStack } from "minerva-design/vue";
const placements = ["start", "end", "top", "bottom"] as const;
<\/script>
<template>
  <VStack :gap="3"
    ><Switch
      v-for="placement in placements"
      :key="placement"
      :label="\`Label at \${placement}\`"
      :label-placement="placement"
      default-checked
  /></VStack>
</template>
`})))()}n();export{t as default};