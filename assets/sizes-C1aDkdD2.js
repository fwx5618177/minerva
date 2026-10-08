import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- LoadingStateSizes.vue -->

<template>
  <div
    style="
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    "
  >
    <minerva-loading-state
      size="small"
      label="Section"
      style="border: 1px dashed var(--border-color)"
    ></minerva-loading-state>
    <minerva-loading-state
      size="medium"
      label="Page"
      style="border: 1px dashed var(--border-color)"
    ></minerva-loading-state>
    <minerva-loading-state
      size="large"
      style="border: 1px dashed var(--border-color)"
      >Loading <strong>reports</strong>…</minerva-loading-state
    >
  </div>
</template>
`,angular:`// loading-state-sizes.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-loading-state-sizes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      "
    >
      <minerva-loading-state
        size="small"
        label="Section"
        style="border: 1px dashed var(--border-color)"
      ></minerva-loading-state>
      <minerva-loading-state
        size="medium"
        label="Page"
        style="border: 1px dashed var(--border-color)"
      ></minerva-loading-state>
      <minerva-loading-state
        size="large"
        style="border: 1px dashed var(--border-color)"
        >Loading <strong>reports</strong>…</minerva-loading-state
      >
    </div>
  \`,
})
export class LoadingStateSizesComponent {}
`,svelte:`<!-- LoadingStateSizes.svelte -->

<div
  style="
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  "
>
  <minerva-loading-state
    size="small"
    label="Section"
    style="border: 1px dashed var(--border-color)"
  ></minerva-loading-state>
  <minerva-loading-state
    size="medium"
    label="Page"
    style="border: 1px dashed var(--border-color)"
  ></minerva-loading-state>
  <minerva-loading-state
    size="large"
    style="border: 1px dashed var(--border-color)"
    >Loading <strong>reports</strong>…</minerva-loading-state>
</div>
`,solid:`// LoadingStateSizes.tsx

export default function LoadingStateSizes() {
  return (
    <div
      style="
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      "
    >
      <minerva-loading-state
        size="small"
        label="Section"
        style="border: 1px dashed var(--border-color)"
      ></minerva-loading-state>
      <minerva-loading-state
        size="medium"
        label="Page"
        style="border: 1px dashed var(--border-color)"
      ></minerva-loading-state>
      <minerva-loading-state
        size="large"
        style="border: 1px dashed var(--border-color)"
      >
        Loading <strong>reports</strong>…
      </minerva-loading-state>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  "
>
  <minerva-loading-state
    size="small"
    label="Section"
    style="border: 1px dashed var(--border-color)"
  ></minerva-loading-state>
  <minerva-loading-state
    size="medium"
    label="Page"
    style="border: 1px dashed var(--border-color)"
  ></minerva-loading-state>
  <minerva-loading-state
    size="large"
    style="border: 1px dashed var(--border-color)"
    >Loading <strong>reports</strong>…</minerva-loading-state
  >
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};