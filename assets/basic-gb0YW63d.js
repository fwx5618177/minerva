import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { VirtualList } from "minerva-design/vue";
const items = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  label: \`Record \${index + 1}\`,
}));
<\/script>
<template>
  <VirtualList
    :items="items"
    :item-height="40"
    :max-height="240"
    aria-label="Records"
    ><template #default="{ item, index }"
      >{{ index + 1 }}. {{ item.label }}</template
    ></VirtualList
  >
</template>
`})))()}n();export{t as default};