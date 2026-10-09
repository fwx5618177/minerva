import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { RatingScale } from "minerva-design/vue";
const dimensions = ref([
  { key: "quality", label: "Quality", value: 8 },
  { key: "speed", label: "Speed", value: 6 },
  { key: "support", label: "Support", value: 9 },
]);
<\/script>
<template>
  <RatingScale
    :dimensions="dimensions"
    @change="
      (key, value) => {
        dimensions = dimensions.map((item) =>
          item.key === key ? { ...item, value } : item,
        );
      }
    "
  />
</template>
`})))()}n();export{t as default};