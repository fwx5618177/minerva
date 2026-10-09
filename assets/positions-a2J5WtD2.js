import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { Badge, Avatar, HStack } from "minerva-design/vue";
const positions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const;
<\/script>
<template>
  <HStack :gap="3" wrap
    ><Badge
      v-for="position in positions"
      :key="position"
      :position="position"
      :content="3"
      ><Avatar name="Ada Lovelace" /></Badge
  ></HStack>
</template>
`})))()}n();export{t as default};