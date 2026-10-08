import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DividerVariants.vue -->

<template>
  <minerva-divider variant="solid"></minerva-divider>
  <minerva-divider variant="dashed" thickness="2"></minerva-divider>
  <minerva-divider variant="dotted" thickness="3"></minerva-divider>
  <minerva-divider elevation spacing="24"></minerva-divider>
  <minerva-divider length="50%"></minerva-divider>
  <minerva-divider text-align="left">Left</minerva-divider>
  <minerva-divider text-align="right" variant="dashed">Right</minerva-divider>
</template>
`,angular:`// divider-variants.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-divider-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-divider variant="solid"></minerva-divider>
    <minerva-divider variant="dashed" thickness="2"></minerva-divider>
    <minerva-divider variant="dotted" thickness="3"></minerva-divider>
    <minerva-divider elevation spacing="24"></minerva-divider>
    <minerva-divider length="50%"></minerva-divider>
    <minerva-divider text-align="left">Left</minerva-divider>
    <minerva-divider text-align="right" variant="dashed">Right</minerva-divider>
  \`,
})
export class DividerVariantsComponent {}
`,svelte:`<!-- DividerVariants.svelte -->

<minerva-divider variant="solid"></minerva-divider>
<minerva-divider variant="dashed" thickness="2"></minerva-divider>
<minerva-divider variant="dotted" thickness="3"></minerva-divider>
<minerva-divider elevation spacing="24"></minerva-divider>
<minerva-divider length="50%"></minerva-divider>
<minerva-divider text-align="left">Left</minerva-divider>
<minerva-divider text-align="right" variant="dashed">Right</minerva-divider>
`,solid:`// DividerVariants.tsx

export default function DividerVariants() {
  return (
    <>
      <minerva-divider variant="solid"></minerva-divider>
      <minerva-divider variant="dashed" thickness="2"></minerva-divider>
      <minerva-divider variant="dotted" thickness="3"></minerva-divider>
      <minerva-divider elevation spacing="24"></minerva-divider>
      <minerva-divider length="50%"></minerva-divider>
      <minerva-divider text-align="left">Left</minerva-divider>
      <minerva-divider text-align="right" variant="dashed">
        Right
      </minerva-divider>
    </>
  );
}
`,html:`<minerva-divider variant="solid"></minerva-divider>
<minerva-divider variant="dashed" thickness="2"></minerva-divider>
<minerva-divider variant="dotted" thickness="3"></minerva-divider>
<minerva-divider elevation spacing="24"></minerva-divider>
<minerva-divider length="50%"></minerva-divider>
<minerva-divider text-align="left">Left</minerva-divider>
<minerva-divider text-align="right" variant="dashed">Right</minerva-divider>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};