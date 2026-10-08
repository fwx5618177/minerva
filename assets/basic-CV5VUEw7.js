import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DividerBasic.vue -->

<template>
  <p style="margin: 0">Account settings</p>
  <minerva-divider></minerva-divider>
  <p style="margin: 0">Notifications</p>
  <minerva-divider>or</minerva-divider>
  <p style="margin: 0">Privacy</p>
</template>
`,angular:`// divider-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-divider-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <p style="margin: 0">Account settings</p>
    <minerva-divider></minerva-divider>
    <p style="margin: 0">Notifications</p>
    <minerva-divider>or</minerva-divider>
    <p style="margin: 0">Privacy</p>
  \`,
})
export class DividerBasicComponent {}
`,svelte:`<!-- DividerBasic.svelte -->

<p style="margin: 0">Account settings</p>
<minerva-divider></minerva-divider>
<p style="margin: 0">Notifications</p>
<minerva-divider>or</minerva-divider>
<p style="margin: 0">Privacy</p>
`,solid:`// DividerBasic.tsx

export default function DividerBasic() {
  return (
    <>
      <p style="margin: 0">Account settings</p>
      <minerva-divider></minerva-divider>
      <p style="margin: 0">Notifications</p>
      <minerva-divider>or</minerva-divider>
      <p style="margin: 0">Privacy</p>
    </>
  );
}
`,html:`<p style="margin: 0">Account settings</p>
<minerva-divider></minerva-divider>
<p style="margin: 0">Notifications</p>
<minerva-divider>or</minerva-divider>
<p style="margin: 0">Privacy</p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};