import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { TimePicker } from "minerva-design/vue";
const min = new Date(2026, 0, 1, 9);
const max = new Date(2026, 0, 1, 17);
const time = ref<Date | null>(new Date(2026, 0, 1, 10, 30));
<\/script>
<template>
  <TimePicker
    v-model="time"
    label="Office hours"
    :min-time="min"
    :max-time="max"
    :minute-step="15"
    :show-second="false"
    format="HH:mm"
  />
</template>
`})))()}n();export{t as default};