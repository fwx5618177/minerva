import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { FormLayout, FormField, Input } from "minerva-design/vue";
<\/script>
<template>
  <FormLayout :columns="{ base: 1, sm: 2 }" :row-gap="6" :column-gap="3"
    ><FormField
      v-for="label in ['Street', 'City', 'Region', 'Postal code']"
      :key="label"
      :label="label"
      ><Input /></FormField
  ></FormLayout>
</template>
`})))()}n();export{t as default};