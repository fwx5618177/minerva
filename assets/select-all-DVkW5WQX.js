import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { Checkbox, VStack } from "minerva-design/vue";
const selected = ref([true, false, false]);
<\/script>
<template>
  <VStack :gap="3" align="stretch"
    ><Checkbox
      :model-value="selected.every(Boolean)"
      :indeterminate="selected.some(Boolean) && !selected.every(Boolean)"
      label="Select all"
      @update:model-value="
        (value) => (selected = selected.map(() => value))
      " /><Checkbox
      v-for="(_, index) in selected"
      :key="index"
      v-model="selected[index]"
      :label="\`Option \${index + 1}\`"
  /></VStack>
</template>
`})))()}n();export{t as default};