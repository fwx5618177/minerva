import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "minerva-design/vue";
const name = ref("");
<\/script>
<template>
  <FormControl required :invalid="!name"
    ><FormLabel
      >Workspace <template #required-indicator>(required)</template></FormLabel
    ><Input v-model="name" /><FormHelperText
      >Use a memorable name</FormHelperText
    ><FormErrorMessage
      >A workspace name is required</FormErrorMessage
    ></FormControl
  >
</template>
`})))()}n();export{t as default};