import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SwitchSideLabels.vue -->

<template>
  <div style="display: grid; gap: 16px; justify-items: start">
    <minerva-switch
      off-label="Monthly"
      on-label="Yearly"
      aria-label="Yearly billing"
    ></minerva-switch>
    <minerva-switch
      variant="segmented"
      off-label="List"
      on-label="Grid"
      checked
      aria-label="View"
    ></minerva-switch>
    <minerva-switch
      variant="segmented"
      size="small"
      color="success"
      off-label="Draft"
      on-label="Published"
      aria-label="Publication status"
    ></minerva-switch>
  </div>
</template>
`,angular:`// switch-side-labels.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-switch-side-labels",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px; justify-items: start">
      <minerva-switch
        off-label="Monthly"
        on-label="(Yearly)"
        aria-label="Yearly billing"
      ></minerva-switch>
      <minerva-switch
        variant="segmented"
        off-label="List"
        on-label="(Grid)"
        checked
        aria-label="View"
      ></minerva-switch>
      <minerva-switch
        variant="segmented"
        size="small"
        color="success"
        off-label="Draft"
        on-label="(Published)"
        aria-label="Publication status"
      ></minerva-switch>
    </div>
  \`,
})
export class SwitchSideLabelsComponent {}
`,svelte:`<!-- SwitchSideLabels.svelte -->

<div style="display: grid; gap: 16px; justify-items: start">
  <minerva-switch
    off-label="Monthly"
    on-label="Yearly"
    aria-label="Yearly billing"
  ></minerva-switch>
  <minerva-switch
    variant="segmented"
    off-label="List"
    on-label="Grid"
    checked
    aria-label="View"
  ></minerva-switch>
  <minerva-switch
    variant="segmented"
    size="small"
    color="success"
    off-label="Draft"
    on-label="Published"
    aria-label="Publication status"
  ></minerva-switch>
</div>
`,solid:`// SwitchSideLabels.tsx

export default function SwitchSideLabels() {
  return (
    <div style="display: grid; gap: 16px; justify-items: start">
      <minerva-switch
        off-label="Monthly"
        on-label="Yearly"
        aria-label="Yearly billing"
      ></minerva-switch>
      <minerva-switch
        variant="segmented"
        off-label="List"
        on-label="Grid"
        checked
        aria-label="View"
      ></minerva-switch>
      <minerva-switch
        variant="segmented"
        size="small"
        color="success"
        off-label="Draft"
        on-label="Published"
        aria-label="Publication status"
      ></minerva-switch>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px; justify-items: start">
  <minerva-switch
    off-label="Monthly"
    on-label="Yearly"
    aria-label="Yearly billing"
  ></minerva-switch>
  <minerva-switch
    variant="segmented"
    off-label="List"
    on-label="Grid"
    checked
    aria-label="View"
  ></minerva-switch>
  <minerva-switch
    variant="segmented"
    size="small"
    color="success"
    off-label="Draft"
    on-label="Published"
    aria-label="Publication status"
  ></minerva-switch>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};