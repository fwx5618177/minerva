import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { List, ListItem, IconButton } from "minerva-design/vue";
const devices = ref([
  { id: "phone", name: "iPhone 16", lastUsed: "Used 2 hours ago" },
  { id: "laptop", name: "MacBook Air", lastUsed: "Used yesterday" },
]);
<\/script>
<template>
  <List aria-label="Registered devices" style="width: 100%"
    ><ListItem
      v-for="device in devices"
      :key="device.id"
      :primary="device.name"
      :secondary="device.lastUsed"
      ><template #icon>▣</template
      ><template #actions
        ><IconButton
          :label="\`Delete \${device.name}\`"
          @click="devices = devices.filter((d) => d.id !== device.id)"
          ><template #icon>⌫</template></IconButton
        ></template
      ></ListItem
    ></List
  >
</template>
`})))()}n();export{t as default};