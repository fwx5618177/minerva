import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { HStack, IconButton } from "minerva-design/vue";
const count = ref(0);
<\/script>
<template>
  <HStack :gap="3" align="center" wrap
    ><IconButton label="Add" @click="count++"
      ><template #icon>+</template></IconButton
    ><IconButton label="Settings"><template #icon>⚙</template></IconButton
    ><IconButton label="Delete"><template #icon>⌫</template></IconButton
    ><output aria-live="polite">{{
      count === 0 ? "Nothing added yet" : \`Added \${count} item(s)\`
    }}</output></HStack
  >
</template>
`})))()}n();export{t as default};