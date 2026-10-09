import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t=`<script setup lang="ts">
import { ref } from "vue";
import { Menu, Button, type MenuEntry } from "minerva-design/vue";
const result = ref("");
const items: MenuEntry[] = [
  {
    key: "share",
    label: "Share",
    children: [
      { key: "email", label: "Email" },
      {
        key: "team",
        label: "Team",
        children: [
          { key: "design", label: "Design" },
          { key: "engineering", label: "Engineering" },
        ],
      },
    ],
  },
  {
    key: "export",
    label: "Export",
    children: [
      { key: "pdf", label: "PDF" },
      { key: "csv", label: "CSV", disabled: true },
    ],
  },
];
<\/script>
<template>
  <div>
    <Menu :items="items" @select="(item) => (result = String(item.label))"
      ><Button>Nested actions</Button></Menu
    ><output>{{ result }}</output>
  </div>
</template>
`})))()}n();export{t as default};