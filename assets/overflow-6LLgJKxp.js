import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PageTabsOverflow.vue -->

<template>
  <minerva-page-tabs
    aria-label="Open files"
    active-value="file-9"
    scroll-left-label="Earlier files"
    scroll-right-label="Later files"
    style="max-width: 480px"
  >
    <minerva-page-tab value="file-1" label="index.ts"></minerva-page-tab>
    <minerva-page-tab value="file-2" label="router.ts"></minerva-page-tab>
    <minerva-page-tab
      value="file-3"
      label="store.ts"
      disabled
    ></minerva-page-tab>
    <minerva-page-tab value="file-4" label="theme.scss"></minerva-page-tab>
    <minerva-page-tab value="file-5" label="README.md"></minerva-page-tab>
    <minerva-page-tab value="file-6" label="package.json"></minerva-page-tab>
    <minerva-page-tab value="file-7" label="vite.config.ts"></minerva-page-tab>
    <minerva-page-tab value="file-8" label="tsconfig.json"></minerva-page-tab>
    <minerva-page-tab value="file-9" label="CHANGELOG.md"></minerva-page-tab>
    <minerva-page-tab value="file-10" label="LICENSE"></minerva-page-tab>
  </minerva-page-tabs>
</template>
`,angular:`// page-tabs-overflow.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-page-tabs-overflow",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-page-tabs
      aria-label="Open files"
      active-value="file-9"
      scroll-left-label="Earlier files"
      scroll-right-label="Later files"
      style="max-width: 480px"
    >
      <minerva-page-tab value="file-1" label="index.ts"></minerva-page-tab>
      <minerva-page-tab value="file-2" label="router.ts"></minerva-page-tab>
      <minerva-page-tab
        value="file-3"
        label="store.ts"
        disabled
      ></minerva-page-tab>
      <minerva-page-tab value="file-4" label="theme.scss"></minerva-page-tab>
      <minerva-page-tab value="file-5" label="README.md"></minerva-page-tab>
      <minerva-page-tab value="file-6" label="package.json"></minerva-page-tab>
      <minerva-page-tab
        value="file-7"
        label="vite.config.ts"
      ></minerva-page-tab>
      <minerva-page-tab value="file-8" label="tsconfig.json"></minerva-page-tab>
      <minerva-page-tab value="file-9" label="CHANGELOG.md"></minerva-page-tab>
      <minerva-page-tab value="file-10" label="LICENSE"></minerva-page-tab>
    </minerva-page-tabs>
  \`,
})
export class PageTabsOverflowComponent {}
`,svelte:`<!-- PageTabsOverflow.svelte -->

<minerva-page-tabs
  aria-label="Open files"
  active-value="file-9"
  scroll-left-label="Earlier files"
  scroll-right-label="Later files"
  style="max-width: 480px"
>
  <minerva-page-tab value="file-1" label="index.ts"></minerva-page-tab>
  <minerva-page-tab value="file-2" label="router.ts"></minerva-page-tab>
  <minerva-page-tab value="file-3" label="store.ts" disabled></minerva-page-tab>
  <minerva-page-tab value="file-4" label="theme.scss"></minerva-page-tab>
  <minerva-page-tab value="file-5" label="README.md"></minerva-page-tab>
  <minerva-page-tab value="file-6" label="package.json"></minerva-page-tab>
  <minerva-page-tab value="file-7" label="vite.config.ts"></minerva-page-tab>
  <minerva-page-tab value="file-8" label="tsconfig.json"></minerva-page-tab>
  <minerva-page-tab value="file-9" label="CHANGELOG.md"></minerva-page-tab>
  <minerva-page-tab value="file-10" label="LICENSE"></minerva-page-tab>
</minerva-page-tabs>
`,solid:`// PageTabsOverflow.tsx

export default function PageTabsOverflow() {
  return (
    <minerva-page-tabs
      aria-label="Open files"
      active-value="file-9"
      scroll-left-label="Earlier files"
      scroll-right-label="Later files"
      style="max-width: 480px"
    >
      <minerva-page-tab value="file-1" label="index.ts"></minerva-page-tab>
      <minerva-page-tab value="file-2" label="router.ts"></minerva-page-tab>
      <minerva-page-tab
        value="file-3"
        label="store.ts"
        disabled
      ></minerva-page-tab>
      <minerva-page-tab value="file-4" label="theme.scss"></minerva-page-tab>
      <minerva-page-tab value="file-5" label="README.md"></minerva-page-tab>
      <minerva-page-tab value="file-6" label="package.json"></minerva-page-tab>
      <minerva-page-tab
        value="file-7"
        label="vite.config.ts"
      ></minerva-page-tab>
      <minerva-page-tab value="file-8" label="tsconfig.json"></minerva-page-tab>
      <minerva-page-tab value="file-9" label="CHANGELOG.md"></minerva-page-tab>
      <minerva-page-tab value="file-10" label="LICENSE"></minerva-page-tab>
    </minerva-page-tabs>
  );
}
`,html:`<minerva-page-tabs
  aria-label="Open files"
  active-value="file-9"
  scroll-left-label="Earlier files"
  scroll-right-label="Later files"
  style="max-width: 480px"
>
  <minerva-page-tab value="file-1" label="index.ts"></minerva-page-tab>
  <minerva-page-tab value="file-2" label="router.ts"></minerva-page-tab>
  <minerva-page-tab value="file-3" label="store.ts" disabled></minerva-page-tab>
  <minerva-page-tab value="file-4" label="theme.scss"></minerva-page-tab>
  <minerva-page-tab value="file-5" label="README.md"></minerva-page-tab>
  <minerva-page-tab value="file-6" label="package.json"></minerva-page-tab>
  <minerva-page-tab value="file-7" label="vite.config.ts"></minerva-page-tab>
  <minerva-page-tab value="file-8" label="tsconfig.json"></minerva-page-tab>
  <minerva-page-tab value="file-9" label="CHANGELOG.md"></minerva-page-tab>
  <minerva-page-tab value="file-10" label="LICENSE"></minerva-page-tab>
</minerva-page-tabs>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};