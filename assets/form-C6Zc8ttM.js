import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { TagInput, FormField } from "minerva-design/vue";
const tags = ref<string[]>([]);
<\/script>
<template>
  <FormField
    label="Project tags"
    required
    :invalid="!tags.length"
    error-message="Add at least one tag"
    ><TagInput
      v-model="tags"
      name="tags"
      :options="['design', 'engineering', 'research']"
  /></FormField>
</template>
`})))()}n();export{t as default};