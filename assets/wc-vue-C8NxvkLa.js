import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{g as r,h as i,l as a,n as o,t as s,u as c}from"./DocPage-CVA4UCUb.js";import{nt as l,rt as u}from"./io5-BO4aBax7.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),l(),r(),o(),c(),d=n(),f=`// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // <minerva-*> tags are custom elements, not Vue components
          isCustomElement: (tag) => tag.startsWith("minerva-"),
        },
      },
    }),
  ],
});`,p=`// main.ts
import { createApp } from "vue";
import "minerva-design/web-components"; // or per element: ".../select", ".../switch"
import "minerva-design/tokens.css";
import App from "./App.vue";

createApp(App).mount("#app");`,m=`<script setup lang="ts">
import { ref } from "vue";

const name = ref("Ada");
const plan = ref("pro");
const notify = ref(true);
const saving = ref(false);
const plans = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
];
<\/script>

<template>
  <!-- :value is set as a property; the event carries the new value -->
  <minerva-input
    aria-label="Name"
    :value="name"
    @minerva-input="name = $event.detail.value"
  />

  <!-- arrays and objects are properties too -->
  <minerva-select
    aria-label="Plan"
    :options="plans"
    :value="plan"
    @minerva-change="plan = $event.detail.value"
  />

  <minerva-switch
    label="Email notifications"
    :checked="notify"
    @minerva-change="notify = $event.detail.checked"
  />

  <!-- booleans: a plain boolean, set as a property -->
  <minerva-button :loading="saving" :disabled="!name" @click="saving = true">
    Save
  </minerva-button>
</template>`,h=`<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
const dirty = ref(true);

// the user asked to close: keep the modal open while there are changes
function onOpenChange(event: CustomEvent<{ open: boolean }>) {
  if (!event.detail.open && dirty.value) event.preventDefault();
  else open.value = event.detail.open;
}
<\/script>

<template>
  <minerva-modal label="Edit profile" :open="open" @minerva-open-change="onOpenChange">
    ...
  </minerva-modal>
</template>`,g=`// tsconfig.json (or tsconfig.app.json)
{
  "compilerOptions": {
    "types": ["minerva-design/web-components/vue"]
  }
}`,_=`// nuxt.config.ts
export default defineNuxtConfig({
  css: ["minerva-design/tokens.css"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("minerva-"),
    },
  },
});

// plugins/minerva.client.ts: the .client suffix runs it in the browser only
import "minerva-design/web-components";

export default defineNuxtPlugin(() => {});`,v=()=>{let{t:e}=u(),t=t=>e(`docs.wc-vue.${t}`),n=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`setup`,children:[(0,d.jsx)(`h2`,{id:`setup`,children:t(`setup.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`setup.text`)}),(0,d.jsx)(i,{code:f,language:`ts`}),(0,d.jsx)(`p`,{className:a.prose,children:t(`setup.register`)}),(0,d.jsx)(i,{code:p,language:`ts`})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`binding`,children:[(0,d.jsx)(`h2`,{id:`binding`,children:t(`binding.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`binding.text`)}),(0,d.jsx)(i,{code:m,language:`html`,title:`App.vue`}),(0,d.jsxs)(`ul`,{className:a.prose,children:[(0,d.jsx)(`li`,{children:t(`binding.properties`)}),(0,d.jsx)(`li`,{children:t(`binding.booleans`)}),(0,d.jsx)(`li`,{children:t(`binding.events`)}),(0,d.jsx)(`li`,{children:t(`binding.vModel`)})]})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`controlled`,children:[(0,d.jsx)(`h2`,{id:`controlled`,children:t(`controlled.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`controlled.text`)}),(0,d.jsx)(i,{code:h,language:`html`})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`types`,children:[(0,d.jsx)(`h2`,{id:`types`,children:t(`types.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`types.text`)}),(0,d.jsx)(i,{code:g,language:`json`})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`nuxt`,children:[(0,d.jsx)(`h2`,{id:`nuxt`,children:t(`nuxt.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`nuxt.text`)}),(0,d.jsx)(i,{code:_,language:`ts`})]})]});return(0,d.jsx)(s,{id:`wc-vue`,intro:n})}})))()}y();export{v as default};