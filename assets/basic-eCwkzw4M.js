import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CheckboxBasic.vue -->

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px">
    <minerva-checkbox label="Remember me"></minerva-checkbox>
    <minerva-checkbox checked
      >Email <strong>notifications</strong></minerva-checkbox
    >
    <minerva-checkbox
      indeterminate
      label="Partially selected"
    ></minerva-checkbox>
    <minerva-checkbox disabled label="Disabled"></minerva-checkbox>
  </div>
</template>
`,angular:`// checkbox-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-checkbox-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 16px">
      <minerva-checkbox label="Remember me"></minerva-checkbox>
      <minerva-checkbox checked
        >Email <strong>notifications</strong></minerva-checkbox
      >
      <minerva-checkbox
        indeterminate
        label="Partially selected"
      ></minerva-checkbox>
      <minerva-checkbox disabled label="Disabled"></minerva-checkbox>
    </div>
  \`,
})
export class CheckboxBasicComponent {}
`,svelte:`<!-- CheckboxBasic.svelte -->

<div style="display: flex; flex-wrap: wrap; gap: 16px">
  <minerva-checkbox label="Remember me"></minerva-checkbox>
  <minerva-checkbox checked
    >Email <strong>notifications</strong></minerva-checkbox>
  <minerva-checkbox indeterminate label="Partially selected"></minerva-checkbox>
  <minerva-checkbox disabled label="Disabled"></minerva-checkbox>
</div>
`,solid:`// CheckboxBasic.tsx

export default function CheckboxBasic() {
  return (
    <div style="display: flex; flex-wrap: wrap; gap: 16px">
      <minerva-checkbox label="Remember me"></minerva-checkbox>
      <minerva-checkbox checked>
        Email <strong>notifications</strong>
      </minerva-checkbox>
      <minerva-checkbox
        indeterminate
        label="Partially selected"
      ></minerva-checkbox>
      <minerva-checkbox disabled label="Disabled"></minerva-checkbox>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 16px">
  <minerva-checkbox label="Remember me"></minerva-checkbox>
  <minerva-checkbox checked
    >Email <strong>notifications</strong></minerva-checkbox
  >
  <minerva-checkbox indeterminate label="Partially selected"></minerva-checkbox>
  <minerva-checkbox disabled label="Disabled"></minerva-checkbox>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};