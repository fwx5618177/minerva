import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TagBasic.vue -->

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-tag>Neutral</minerva-tag>
    <minerva-tag color="primary">Primary</minerva-tag>
    <minerva-tag color="success">Success</minerva-tag>
    <minerva-tag color="warning">Warning</minerva-tag>
    <minerva-tag color="danger">Danger</minerva-tag>
    <minerva-tag color="info">Info</minerva-tag>
  </div>
</template>
`,angular:`// tag-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tag-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-tag>Neutral</minerva-tag>
      <minerva-tag color="primary">Primary</minerva-tag>
      <minerva-tag color="success">Success</minerva-tag>
      <minerva-tag color="warning">Warning</minerva-tag>
      <minerva-tag color="danger">Danger</minerva-tag>
      <minerva-tag color="info">Info</minerva-tag>
    </div>
  \`,
})
export class TagBasicComponent {}
`,svelte:`<!-- TagBasic.svelte -->

<div style="display: flex; flex-wrap: wrap; gap: 8px">
  <minerva-tag>Neutral</minerva-tag>
  <minerva-tag color="primary">Primary</minerva-tag>
  <minerva-tag color="success">Success</minerva-tag>
  <minerva-tag color="warning">Warning</minerva-tag>
  <minerva-tag color="danger">Danger</minerva-tag>
  <minerva-tag color="info">Info</minerva-tag>
</div>
`,solid:`// TagBasic.tsx

export default function TagBasic() {
  return (
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-tag>Neutral</minerva-tag>
      <minerva-tag color="primary">Primary</minerva-tag>
      <minerva-tag color="success">Success</minerva-tag>
      <minerva-tag color="warning">Warning</minerva-tag>
      <minerva-tag color="danger">Danger</minerva-tag>
      <minerva-tag color="info">Info</minerva-tag>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 8px">
  <minerva-tag>Neutral</minerva-tag>
  <minerva-tag color="primary">Primary</minerva-tag>
  <minerva-tag color="success">Success</minerva-tag>
  <minerva-tag color="warning">Warning</minerva-tag>
  <minerva-tag color="danger">Danger</minerva-tag>
  <minerva-tag color="info">Info</minerva-tag>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};