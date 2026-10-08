import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ButtonColorsVariants.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-button color="primary">Primary</minerva-button>
      <minerva-button color="success">Success</minerva-button>
      <minerva-button color="warning">Warning</minerva-button>
      <minerva-button color="danger">Danger</minerva-button>
      <minerva-button color="info">Info</minerva-button>
      <minerva-button color="neutral">Neutral</minerva-button>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-button variant="solid">Solid</minerva-button>
      <minerva-button variant="outline">Outline</minerva-button>
      <minerva-button variant="ghost">Ghost</minerva-button>
      <minerva-button variant="link">Link</minerva-button>
    </div>
  </div>
</template>
`,angular:`// button-colors-variants.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-button-colors-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-button color="primary">Primary</minerva-button>
        <minerva-button color="success">Success</minerva-button>
        <minerva-button color="warning">Warning</minerva-button>
        <minerva-button color="danger">Danger</minerva-button>
        <minerva-button color="info">Info</minerva-button>
        <minerva-button color="neutral">Neutral</minerva-button>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-button variant="solid">Solid</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
        <minerva-button variant="ghost">Ghost</minerva-button>
        <minerva-button variant="link">Link</minerva-button>
      </div>
    </div>
  \`,
})
export class ButtonColorsVariantsComponent {}
`,svelte:`<!-- ButtonColorsVariants.svelte -->

<div style="display: grid; gap: 12px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-button color="primary">Primary</minerva-button>
    <minerva-button color="success">Success</minerva-button>
    <minerva-button color="warning">Warning</minerva-button>
    <minerva-button color="danger">Danger</minerva-button>
    <minerva-button color="info">Info</minerva-button>
    <minerva-button color="neutral">Neutral</minerva-button>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-button variant="solid">Solid</minerva-button>
    <minerva-button variant="outline">Outline</minerva-button>
    <minerva-button variant="ghost">Ghost</minerva-button>
    <minerva-button variant="link">Link</minerva-button>
  </div>
</div>
`,solid:`// ButtonColorsVariants.tsx

export default function ButtonColorsVariants() {
  return (
    <div style="display: grid; gap: 12px">
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-button color="primary">Primary</minerva-button>
        <minerva-button color="success">Success</minerva-button>
        <minerva-button color="warning">Warning</minerva-button>
        <minerva-button color="danger">Danger</minerva-button>
        <minerva-button color="info">Info</minerva-button>
        <minerva-button color="neutral">Neutral</minerva-button>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-button variant="solid">Solid</minerva-button>
        <minerva-button variant="outline">Outline</minerva-button>
        <minerva-button variant="ghost">Ghost</minerva-button>
        <minerva-button variant="link">Link</minerva-button>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-button color="primary">Primary</minerva-button>
    <minerva-button color="success">Success</minerva-button>
    <minerva-button color="warning">Warning</minerva-button>
    <minerva-button color="danger">Danger</minerva-button>
    <minerva-button color="info">Info</minerva-button>
    <minerva-button color="neutral">Neutral</minerva-button>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-button variant="solid">Solid</minerva-button>
    <minerva-button variant="outline">Outline</minerva-button>
    <minerva-button variant="ghost">Ghost</minerva-button>
    <minerva-button variant="link">Link</minerva-button>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};