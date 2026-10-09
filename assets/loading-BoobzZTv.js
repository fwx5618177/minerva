import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ToastProvider, Button, toast } from "minerva-design/vue";
function save() {
  void toast.promise(
    new Promise<string>((resolve) =>
      setTimeout(() => resolve("Saved changes"), 700),
    ),
    {
      loading: "Saving…",
      success: (message) => message,
      error: "Unable to save",
    },
  );
}
<\/script>
<template>
  <ToastProvider
    ><Button @click="save">Save changes with progress</Button></ToastProvider
  >
</template>
`})))()}n();export{t as default};