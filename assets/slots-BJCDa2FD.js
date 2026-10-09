import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { List, ListItem, Avatar, Button } from "minerva-design/vue";
const invited = ref(false);
<\/script>
<template>
  <List
    ><ListItem primary="Ada Lovelace" secondary="Workspace owner"
      ><template #icon><Avatar name="Ada Lovelace" /></template
      ><template #actions
        ><Button variant="outline" size="small" @click="invited = true"
          >Send invitation</Button
        ></template
      ></ListItem
    ></List
  ><output>{{ invited ? "Invitation sent" : "" }}</output>
</template>
`})))()}n();export{t as default};