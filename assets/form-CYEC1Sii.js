import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { Checkbox, FormField } from "minerva-design/vue";
const accepted = ref(false);
<\/script>
<template>
  <FormField
    label="Terms"
    required
    :invalid="!accepted"
    error-message="Accept the terms to continue"
    ><Checkbox v-model="accepted" label="I accept the terms" name="terms"
  /></FormField>
</template>
`})))()}n();export{t as default};