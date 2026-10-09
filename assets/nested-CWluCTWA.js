import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ConfigProvider, Button, Box, VStack } from "minerva-design/vue";
<\/script>
<template>
  <VStack :gap="3" align="stretch"
    ><ConfigProvider theme="light"
      ><Box :p="4" bg="surface"
        ><Button>Light scope</Button
        ><ConfigProvider theme="dark"
          ><Box :p="4" :mt="3" bg="surface"
            ><Button>Nested dark scope</Button></Box
          ></ConfigProvider
        ></Box
      ></ConfigProvider
    ></VStack
  >
</template>
`})))()}n();export{t as default};