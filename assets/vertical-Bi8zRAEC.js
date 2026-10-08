import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TabsVertical.vue -->

<template>
  <minerva-tabs
    label="Documentation"
    orientation="vertical"
    activation-mode="manual"
    no-loop
    value="install"
  >
    <minerva-tab value="install">Installation</minerva-tab>
    <minerva-tab value="usage">Usage</minerva-tab>
    <minerva-tab value="theming">Theming</minerva-tab>
    <minerva-tab-panel value="install"
      >npm install @minerva/lib-web-components</minerva-tab-panel
    >
    <minerva-tab-panel value="usage"
      >Import the package once, then use the elements in any
      HTML.</minerva-tab-panel
    >
    <minerva-tab-panel value="theming"
      >Override the CSS variables on :root or on an element.</minerva-tab-panel
    >
  </minerva-tabs>
</template>
`,angular:`// tabs-vertical.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tabs-vertical",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-tabs
      label="Documentation"
      orientation="vertical"
      activation-mode="manual"
      no-loop
      value="install"
    >
      <minerva-tab value="install">Installation</minerva-tab>
      <minerva-tab value="usage">Usage</minerva-tab>
      <minerva-tab value="theming">Theming</minerva-tab>
      <minerva-tab-panel value="install"
        >npm install &#64;minerva/lib-web-components</minerva-tab-panel
      >
      <minerva-tab-panel value="usage"
        >Import the package once, then use the elements in any
        HTML.</minerva-tab-panel
      >
      <minerva-tab-panel value="theming"
        >Override the CSS variables on :root or on an
        element.</minerva-tab-panel
      >
    </minerva-tabs>
  \`,
})
export class TabsVerticalComponent {}
`,svelte:`<!-- TabsVertical.svelte -->

<minerva-tabs
  label="Documentation"
  orientation="vertical"
  activation-mode="manual"
  no-loop
  value="install"
>
  <minerva-tab value="install">Installation</minerva-tab>
  <minerva-tab value="usage">Usage</minerva-tab>
  <minerva-tab value="theming">Theming</minerva-tab>
  <minerva-tab-panel value="install"
    >npm install @minerva/lib-web-components</minerva-tab-panel>
  <minerva-tab-panel value="usage"
    >Import the package once, then use the elements in any
    HTML.</minerva-tab-panel>
  <minerva-tab-panel value="theming"
    >Override the CSS variables on :root or on an element.</minerva-tab-panel>
</minerva-tabs>
`,solid:`// TabsVertical.tsx

export default function TabsVertical() {
  return (
    <minerva-tabs
      label="Documentation"
      orientation="vertical"
      activation-mode="manual"
      no-loop
      value="install"
    >
      <minerva-tab value="install">Installation</minerva-tab>
      <minerva-tab value="usage">Usage</minerva-tab>
      <minerva-tab value="theming">Theming</minerva-tab>
      <minerva-tab-panel value="install">
        npm install @minerva/lib-web-components
      </minerva-tab-panel>
      <minerva-tab-panel value="usage">
        Import the package once, then use the elements in any HTML.
      </minerva-tab-panel>
      <minerva-tab-panel value="theming">
        Override the CSS variables on :root or on an element.
      </minerva-tab-panel>
    </minerva-tabs>
  );
}
`,html:`<minerva-tabs
  label="Documentation"
  orientation="vertical"
  activation-mode="manual"
  no-loop
  value="install"
>
  <minerva-tab value="install">Installation</minerva-tab>
  <minerva-tab value="usage">Usage</minerva-tab>
  <minerva-tab value="theming">Theming</minerva-tab>
  <minerva-tab-panel value="install"
    >npm install @minerva/lib-web-components</minerva-tab-panel
  >
  <minerva-tab-panel value="usage"
    >Import the package once, then use the elements in any
    HTML.</minerva-tab-panel
  >
  <minerva-tab-panel value="theming"
    >Override the CSS variables on :root or on an element.</minerva-tab-panel
  >
</minerva-tabs>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};