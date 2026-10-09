import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { Radio, RadioGroup, VStack } from "minerva-design/vue";
<\/script>
<template>
  <VStack :gap="3" align="start"
    ><RadioGroup
      name="partly-disabled"
      label="Partly disabled"
      default-value="a"
      direction="horizontal"
      ><Radio value="a" label="Available" /><Radio
        value="b"
        label="Sold out"
        disabled /></RadioGroup
    ><RadioGroup
      name="all-disabled"
      label="Disabled group"
      default-value="a"
      direction="horizontal"
      disabled
      ><Radio value="a" label="Option A" /><Radio
        value="b"
        label="Option B" /></RadioGroup
  ></VStack>
</template>
`})))()}n();export{t as default};