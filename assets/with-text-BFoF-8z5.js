import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DividerWithText.vue -->

<template>
  <div style="width: 100%">
    <minerva-divider text-align="left">Left</minerva-divider
    ><minerva-divider>Center</minerva-divider
    ><minerva-divider text-align="right" variant="dashed" thickness="3"
      >Right</minerva-divider
    >
  </div>
</template>
`,angular:`// divider-with-text.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-divider-with-text",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="width: 100%">
      <minerva-divider text-align="left">Left</minerva-divider
      ><minerva-divider>Center</minerva-divider
      ><minerva-divider text-align="right" variant="dashed" thickness="3"
        >Right</minerva-divider
      >
    </div>
  \`,
})
export class DividerWithTextComponent {}
`,svelte:`<!-- DividerWithText.svelte -->

<div style="width: 100%">
  <minerva-divider text-align="left">Left</minerva-divider><minerva-divider>Center</minerva-divider><minerva-divider text-align="right" variant="dashed" thickness="3"
    >Right</minerva-divider>
</div>
`,solid:`// DividerWithText.tsx

export default function DividerWithText() {
  return (
    <div style="width: 100%">
      <minerva-divider text-align="left">Left</minerva-divider>
      <minerva-divider>Center</minerva-divider>
      <minerva-divider text-align="right" variant="dashed" thickness="3">
        Right
      </minerva-divider>
    </div>
  );
}
`,html:`<div style="width: 100%">
  <minerva-divider text-align="left">Left</minerva-divider
  ><minerva-divider>Center</minerva-divider
  ><minerva-divider text-align="right" variant="dashed" thickness="3"
    >Right</minerva-divider
  >
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};