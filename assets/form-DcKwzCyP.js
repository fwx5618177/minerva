import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { RadioGroup, Radio, FormField } from "minerva-design/vue";
const value = ref<string | number | null>("monthly");
<\/script>
<template>
  <FormField label="Subscription" required
    ><RadioGroup v-model="value" name="subscription" label="Subscription"
      ><Radio value="monthly" label="Monthly" /><Radio
        value="annual"
        label="Annual" /></RadioGroup></FormField
  ><output>Selected: {{ value }}</output>
</template>
`})))()}n();export{t as default};