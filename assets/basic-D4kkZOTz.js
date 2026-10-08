import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ProgressBasic.vue -->

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
    <minerva-progress></minerva-progress>
    <minerva-progress variant="circle"></minerva-progress>
    <minerva-progress variant="wave"></minerva-progress>
    <minerva-progress variant="bar"></minerva-progress>
    <minerva-progress variant="dottedBar"></minerva-progress>
  </div>
</template>
`,angular:`// progress-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-progress-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
      <minerva-progress></minerva-progress>
      <minerva-progress variant="circle"></minerva-progress>
      <minerva-progress variant="wave"></minerva-progress>
      <minerva-progress variant="bar"></minerva-progress>
      <minerva-progress variant="dottedBar"></minerva-progress>
    </div>
  \`,
})
export class ProgressBasicComponent {}
`,svelte:`<!-- ProgressBasic.svelte -->

<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <minerva-progress></minerva-progress>
  <minerva-progress variant="circle"></minerva-progress>
  <minerva-progress variant="wave"></minerva-progress>
  <minerva-progress variant="bar"></minerva-progress>
  <minerva-progress variant="dottedBar"></minerva-progress>
</div>
`,solid:`// ProgressBasic.tsx

export default function ProgressBasic() {
  return (
    <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
      <minerva-progress></minerva-progress>
      <minerva-progress variant="circle"></minerva-progress>
      <minerva-progress variant="wave"></minerva-progress>
      <minerva-progress variant="bar"></minerva-progress>
      <minerva-progress variant="dottedBar"></minerva-progress>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <minerva-progress></minerva-progress>
  <minerva-progress variant="circle"></minerva-progress>
  <minerva-progress variant="wave"></minerva-progress>
  <minerva-progress variant="bar"></minerva-progress>
  <minerva-progress variant="dottedBar"></minerva-progress>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};