import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DividerVariants.vue -->

<template>
  <div style="width: 100%">
    <minerva-divider variant="solid"></minerva-divider
    ><minerva-divider variant="dashed"></minerva-divider
    ><minerva-divider variant="dotted"></minerva-divider>
  </div>
</template>
`,angular:`// divider-variants.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-divider-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="width: 100%">
      <minerva-divider variant="solid"></minerva-divider
      ><minerva-divider variant="dashed"></minerva-divider
      ><minerva-divider variant="dotted"></minerva-divider>
    </div>
  \`,
})
export class DividerVariantsComponent {}
`,svelte:`<!-- DividerVariants.svelte -->

<div style="width: 100%">
  <minerva-divider variant="solid"></minerva-divider><minerva-divider variant="dashed"></minerva-divider><minerva-divider variant="dotted"></minerva-divider>
</div>
`,solid:`// DividerVariants.tsx

export default function DividerVariants() {
  return (
    <div style="width: 100%">
      <minerva-divider variant="solid"></minerva-divider>
      <minerva-divider variant="dashed"></minerva-divider>
      <minerva-divider variant="dotted"></minerva-divider>
    </div>
  );
}
`,html:`<div style="width: 100%">
  <minerva-divider variant="solid"></minerva-divider
  ><minerva-divider variant="dashed"></minerva-divider
  ><minerva-divider variant="dotted"></minerva-divider>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};