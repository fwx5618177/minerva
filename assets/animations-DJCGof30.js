import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { Tooltip, Button } from "minerva-design/vue";
const values = [
  "fade",
  "scale",
  "shift-away",
  "shift-toward",
  "perspective",
] as const;
<\/script>
<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 24px">
    <Tooltip
      v-for="value in values"
      :key="value"
      :animation="value"
      :content="value"
      arrow
      ><Button variant="outline">{{ value }}</Button></Tooltip
    >
  </div>
</template>
`})))()}n();export{t as default};