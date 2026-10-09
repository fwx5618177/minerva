import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { ConfirmDialog, Button, VStack } from "minerva-design/vue";
const open = ref(false);
const result = ref("");
<\/script>
<template>
  <VStack :gap="3" align="stretch"
    ><Button color="danger" @click="open = true">Delete project</Button
    ><ConfirmDialog
      v-model:open="open"
      title="Delete this project?"
      description="This action cannot be undone."
      color="danger"
      @confirm="
        open = false;
        result = 'Project deleted';
      "
    /><output>{{ result }}</output></VStack
  >
</template>
`})))()}n();export{t as default};