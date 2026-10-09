import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { Card, CardContent, VStack } from "minerva-design/vue";
const count = ref(0);
<\/script>
<template>
  <VStack :gap="3" align="stretch"
    ><Card interactive tabindex="0" @click="count++" @keydown.enter="count++"
      ><CardContent
        ><h3>Open project</h3>
        <p>Activate this interactive card.</p></CardContent
      ></Card
    ><output>Opened {{ count }} times</output></VStack
  >
</template>
`})))()}n();export{t as default};