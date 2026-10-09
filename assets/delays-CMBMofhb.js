import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { Tooltip, Button } from "minerva-design/vue";
<\/script>
<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap">
    <Tooltip content="Appears immediately" :enter-delay="0"
      ><Button variant="outline">Immediate</Button></Tooltip
    ><Tooltip
      content="Waits before opening and stays briefly"
      :enter-delay="800"
      :leave-delay="500"
      ><Button variant="outline">800ms enter / 500ms leave</Button></Tooltip
    >
  </div>
</template>
`})))()}n();export{t as default};