import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DividerVertical.vue -->

<template>
  <div style="display: flex; align-items: center">
    <span>Home</span
    ><minerva-divider
      orientation="vertical"
      length="16"
      spacing="12"
    ></minerva-divider
    ><span>Products</span
    ><minerva-divider
      orientation="vertical"
      length="16"
      spacing="12"
    ></minerva-divider
    ><span>About</span>
  </div>
</template>
`,angular:`// divider-vertical.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-divider-vertical",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; align-items: center">
      <span>Home</span
      ><minerva-divider
        orientation="vertical"
        length="16"
        spacing="12"
      ></minerva-divider
      ><span>Products</span
      ><minerva-divider
        orientation="vertical"
        length="16"
        spacing="12"
      ></minerva-divider
      ><span>About</span>
    </div>
  \`,
})
export class DividerVerticalComponent {}
`,svelte:`<!-- DividerVertical.svelte -->

<div style="display: flex; align-items: center">
  <span>Home</span><minerva-divider
    orientation="vertical"
    length="16"
    spacing="12"
  ></minerva-divider><span>Products</span><minerva-divider
    orientation="vertical"
    length="16"
    spacing="12"
  ></minerva-divider><span>About</span>
</div>
`,solid:`// DividerVertical.tsx

export default function DividerVertical() {
  return (
    <div style="display: flex; align-items: center">
      <span>Home</span>
      <minerva-divider
        orientation="vertical"
        length="16"
        spacing="12"
      ></minerva-divider>
      <span>Products</span>
      <minerva-divider
        orientation="vertical"
        length="16"
        spacing="12"
      ></minerva-divider>
      <span>About</span>
    </div>
  );
}
`,html:`<div style="display: flex; align-items: center">
  <span>Home</span
  ><minerva-divider
    orientation="vertical"
    length="16"
    spacing="12"
  ></minerva-divider
  ><span>Products</span
  ><minerva-divider
    orientation="vertical"
    length="16"
    spacing="12"
  ></minerva-divider
  ><span>About</span>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};