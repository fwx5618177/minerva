import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- BadgeColorsVariants.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-badge color="primary">Primary</minerva-badge>
      <minerva-badge color="success">Success</minerva-badge>
      <minerva-badge color="warning">Warning</minerva-badge>
      <minerva-badge color="danger">Danger</minerva-badge>
      <minerva-badge color="info">Info</minerva-badge>
      <minerva-badge color="neutral">Neutral</minerva-badge>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-badge variant="solid">Solid</minerva-badge>
      <minerva-badge variant="subtle">Subtle</minerva-badge>
      <minerva-badge variant="outline">Outline</minerva-badge>
      <minerva-badge size="small">Small</minerva-badge>
      <minerva-badge size="medium">Medium</minerva-badge>
      <minerva-badge size="large">Large</minerva-badge>
      <minerva-badge border-radius="4px" border-width="2px" variant="outline"
        >Custom</minerva-badge
      >
    </div>
  </div>
</template>
`,angular:`// badge-colors-variants.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-badge-colors-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-badge color="primary">Primary</minerva-badge>
        <minerva-badge color="success">Success</minerva-badge>
        <minerva-badge color="warning">Warning</minerva-badge>
        <minerva-badge color="danger">Danger</minerva-badge>
        <minerva-badge color="info">Info</minerva-badge>
        <minerva-badge color="neutral">Neutral</minerva-badge>
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center"
      >
        <minerva-badge variant="solid">Solid</minerva-badge>
        <minerva-badge variant="subtle">Subtle</minerva-badge>
        <minerva-badge variant="outline">Outline</minerva-badge>
        <minerva-badge size="small">Small</minerva-badge>
        <minerva-badge size="medium">Medium</minerva-badge>
        <minerva-badge size="large">Large</minerva-badge>
        <minerva-badge border-radius="4px" border-width="2px" variant="outline"
          >Custom</minerva-badge
        >
      </div>
    </div>
  \`,
})
export class BadgeColorsVariantsComponent {}
`,svelte:`<!-- BadgeColorsVariants.svelte -->

<div style="display: grid; gap: 12px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-badge color="primary">Primary</minerva-badge>
    <minerva-badge color="success">Success</minerva-badge>
    <minerva-badge color="warning">Warning</minerva-badge>
    <minerva-badge color="danger">Danger</minerva-badge>
    <minerva-badge color="info">Info</minerva-badge>
    <minerva-badge color="neutral">Neutral</minerva-badge>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-badge variant="solid">Solid</minerva-badge>
    <minerva-badge variant="subtle">Subtle</minerva-badge>
    <minerva-badge variant="outline">Outline</minerva-badge>
    <minerva-badge size="small">Small</minerva-badge>
    <minerva-badge size="medium">Medium</minerva-badge>
    <minerva-badge size="large">Large</minerva-badge>
    <minerva-badge border-radius="4px" border-width="2px" variant="outline"
      >Custom</minerva-badge>
  </div>
</div>
`,solid:`// BadgeColorsVariants.tsx

export default function BadgeColorsVariants() {
  return (
    <div style="display: grid; gap: 12px">
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-badge color="primary">Primary</minerva-badge>
        <minerva-badge color="success">Success</minerva-badge>
        <minerva-badge color="warning">Warning</minerva-badge>
        <minerva-badge color="danger">Danger</minerva-badge>
        <minerva-badge color="info">Info</minerva-badge>
        <minerva-badge color="neutral">Neutral</minerva-badge>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
        <minerva-badge variant="solid">Solid</minerva-badge>
        <minerva-badge variant="subtle">Subtle</minerva-badge>
        <minerva-badge variant="outline">Outline</minerva-badge>
        <minerva-badge size="small">Small</minerva-badge>
        <minerva-badge size="medium">Medium</minerva-badge>
        <minerva-badge size="large">Large</minerva-badge>
        <minerva-badge border-radius="4px" border-width="2px" variant="outline">
          Custom
        </minerva-badge>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-badge color="primary">Primary</minerva-badge>
    <minerva-badge color="success">Success</minerva-badge>
    <minerva-badge color="warning">Warning</minerva-badge>
    <minerva-badge color="danger">Danger</minerva-badge>
    <minerva-badge color="info">Info</minerva-badge>
    <minerva-badge color="neutral">Neutral</minerva-badge>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-badge variant="solid">Solid</minerva-badge>
    <minerva-badge variant="subtle">Subtle</minerva-badge>
    <minerva-badge variant="outline">Outline</minerva-badge>
    <minerva-badge size="small">Small</minerva-badge>
    <minerva-badge size="medium">Medium</minerva-badge>
    <minerva-badge size="large">Large</minerva-badge>
    <minerva-badge border-radius="4px" border-width="2px" variant="outline"
      >Custom</minerva-badge
    >
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};