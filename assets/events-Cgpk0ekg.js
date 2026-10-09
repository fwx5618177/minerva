import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { Tooltip, Button } from "minerva-design/vue";
const opened = ref(0);
const closed = ref(0);
<\/script>
<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Tooltip content="Press Escape to close" @open="opened++" @close="closed++"
      ><Button>Hover or focus me</Button></Tooltip
    ><output>Opened: {{ opened }} · Closed: {{ closed }}</output>
  </div>
</template>
`})))()}n();export{t as default};