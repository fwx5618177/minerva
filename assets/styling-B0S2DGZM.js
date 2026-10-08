import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DescriptionListStyling.vue -->

<template>
  <minerva-description-list
    class="compact-specs"
    style="
      max-width: 480px;
      --description-list-row-padding-y: 4px;
      --description-list-gap: 24px;
      --description-list-font-size: 0.875rem;
      --description-list-border-color: transparent;
    "
  >
    <minerva-description-item label="CPU">8 vCPU</minerva-description-item>
    <minerva-description-item label="Memory">32 GiB</minerva-description-item>
    <minerva-description-item label="Region"
      >eu-west-3</minerva-description-item
    >
  </minerva-description-list>
</template>

<style>
.compact-specs::part(term) {
  font-weight: 600;
}
.compact-specs::part(row):hover {
  background: var(--primary-color-subtle);
}
</style>
`,angular:`// description-list-styling.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-description-list-styling",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-description-list
      class="compact-specs"
      style="
        max-width: 480px;
        --description-list-row-padding-y: 4px;
        --description-list-gap: 24px;
        --description-list-font-size: 0.875rem;
        --description-list-border-color: transparent;
      "
    >
      <minerva-description-item label="CPU">8 vCPU</minerva-description-item>
      <minerva-description-item label="Memory">32 GiB</minerva-description-item>
      <minerva-description-item label="Region"
        >eu-west-3</minerva-description-item
      >
    </minerva-description-list>
  \`,
  styles: \`
    .compact-specs::part(term) {
      font-weight: 600;
    }
    .compact-specs::part(row):hover {
      background: var(--primary-color-subtle);
    }
  \`,
})
export class DescriptionListStylingComponent {}
`,svelte:`<!-- DescriptionListStyling.svelte -->

<minerva-description-list
  class="compact-specs"
  style="
    max-width: 480px;
    --description-list-row-padding-y: 4px;
    --description-list-gap: 24px;
    --description-list-font-size: 0.875rem;
    --description-list-border-color: transparent;
  "
>
  <minerva-description-item label="CPU">8 vCPU</minerva-description-item>
  <minerva-description-item label="Memory">32 GiB</minerva-description-item>
  <minerva-description-item label="Region">eu-west-3</minerva-description-item>
</minerva-description-list>

<style>
    .compact-specs::part(term) {
      font-weight: 600;
    }
    .compact-specs::part(row):hover {
      background: var(--primary-color-subtle);
    }
</style>
`,solid:`// DescriptionListStyling.tsx

export default function DescriptionListStyling() {
  return (
    <>
      <style>{\`
        .compact-specs::part(term) {
          font-weight: 600;
        }
        .compact-specs::part(row):hover {
          background: var(--primary-color-subtle);
        }
      \`}</style>
      <minerva-description-list
        class="compact-specs"
        style="
          max-width: 480px;
          --description-list-row-padding-y: 4px;
          --description-list-gap: 24px;
          --description-list-font-size: 0.875rem;
          --description-list-border-color: transparent;
        "
      >
        <minerva-description-item label="CPU">8 vCPU</minerva-description-item>
        <minerva-description-item label="Memory">
          32 GiB
        </minerva-description-item>
        <minerva-description-item label="Region">
          eu-west-3
        </minerva-description-item>
      </minerva-description-list>
    </>
  );
}
`,html:`<style>
  .compact-specs::part(term) {
    font-weight: 600;
  }
  .compact-specs::part(row):hover {
    background: var(--primary-color-subtle);
  }
</style>
<minerva-description-list
  class="compact-specs"
  style="
    max-width: 480px;
    --description-list-row-padding-y: 4px;
    --description-list-gap: 24px;
    --description-list-font-size: 0.875rem;
    --description-list-border-color: transparent;
  "
>
  <minerva-description-item label="CPU">8 vCPU</minerva-description-item>
  <minerva-description-item label="Memory">32 GiB</minerva-description-item>
  <minerva-description-item label="Region">eu-west-3</minerva-description-item>
</minerva-description-list>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};