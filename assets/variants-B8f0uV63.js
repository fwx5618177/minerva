import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DescriptionListVariants.vue -->

<template>
  <div
    style="
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      align-items: start;
    "
  >
    <minerva-description-list bordered>
      <minerva-description-item label="Project"
        >minerva-docs</minerva-description-item
      >
      <minerva-description-item label="Region"
        >Frankfurt (fra1)</minerva-description-item
      >
      <minerva-description-item label="Runtime"
        >Node.js 22</minerva-description-item
      >
      <minerva-description-item label="Updated"
        >2 minutes ago</minerva-description-item
      >
    </minerva-description-list>
    <minerva-description-list striped>
      <minerva-description-item label="Project"
        >minerva-docs</minerva-description-item
      >
      <minerva-description-item label="Region"
        >Frankfurt (fra1)</minerva-description-item
      >
      <minerva-description-item label="Runtime"
        >Node.js 22</minerva-description-item
      >
      <minerva-description-item label="Updated"
        >2 minutes ago</minerva-description-item
      >
    </minerva-description-list>
  </div>
</template>
`,angular:`// description-list-variants.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-description-list-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        align-items: start;
      "
    >
      <minerva-description-list bordered>
        <minerva-description-item label="Project"
          >minerva-docs</minerva-description-item
        >
        <minerva-description-item label="Region"
          >Frankfurt (fra1)</minerva-description-item
        >
        <minerva-description-item label="Runtime"
          >Node.js 22</minerva-description-item
        >
        <minerva-description-item label="Updated"
          >2 minutes ago</minerva-description-item
        >
      </minerva-description-list>
      <minerva-description-list striped>
        <minerva-description-item label="Project"
          >minerva-docs</minerva-description-item
        >
        <minerva-description-item label="Region"
          >Frankfurt (fra1)</minerva-description-item
        >
        <minerva-description-item label="Runtime"
          >Node.js 22</minerva-description-item
        >
        <minerva-description-item label="Updated"
          >2 minutes ago</minerva-description-item
        >
      </minerva-description-list>
    </div>
  \`,
})
export class DescriptionListVariantsComponent {}
`,svelte:`<!-- DescriptionListVariants.svelte -->

<div
  style="
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    align-items: start;
  "
>
  <minerva-description-list bordered>
    <minerva-description-item label="Project"
      >minerva-docs</minerva-description-item>
    <minerva-description-item label="Region"
      >Frankfurt (fra1)</minerva-description-item>
    <minerva-description-item label="Runtime"
      >Node.js 22</minerva-description-item>
    <minerva-description-item label="Updated"
      >2 minutes ago</minerva-description-item>
  </minerva-description-list>
  <minerva-description-list striped>
    <minerva-description-item label="Project"
      >minerva-docs</minerva-description-item>
    <minerva-description-item label="Region"
      >Frankfurt (fra1)</minerva-description-item>
    <minerva-description-item label="Runtime"
      >Node.js 22</minerva-description-item>
    <minerva-description-item label="Updated"
      >2 minutes ago</minerva-description-item>
  </minerva-description-list>
</div>
`,solid:`// DescriptionListVariants.tsx

export default function DescriptionListVariants() {
  return (
    <div
      style="
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        align-items: start;
      "
    >
      <minerva-description-list bordered>
        <minerva-description-item label="Project">
          minerva-docs
        </minerva-description-item>
        <minerva-description-item label="Region">
          Frankfurt (fra1)
        </minerva-description-item>
        <minerva-description-item label="Runtime">
          Node.js 22
        </minerva-description-item>
        <minerva-description-item label="Updated">
          2 minutes ago
        </minerva-description-item>
      </minerva-description-list>
      <minerva-description-list striped>
        <minerva-description-item label="Project">
          minerva-docs
        </minerva-description-item>
        <minerva-description-item label="Region">
          Frankfurt (fra1)
        </minerva-description-item>
        <minerva-description-item label="Runtime">
          Node.js 22
        </minerva-description-item>
        <minerva-description-item label="Updated">
          2 minutes ago
        </minerva-description-item>
      </minerva-description-list>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    align-items: start;
  "
>
  <minerva-description-list bordered>
    <minerva-description-item label="Project"
      >minerva-docs</minerva-description-item
    >
    <minerva-description-item label="Region"
      >Frankfurt (fra1)</minerva-description-item
    >
    <minerva-description-item label="Runtime"
      >Node.js 22</minerva-description-item
    >
    <minerva-description-item label="Updated"
      >2 minutes ago</minerva-description-item
    >
  </minerva-description-list>
  <minerva-description-list striped>
    <minerva-description-item label="Project"
      >minerva-docs</minerva-description-item
    >
    <minerva-description-item label="Region"
      >Frankfurt (fra1)</minerva-description-item
    >
    <minerva-description-item label="Runtime"
      >Node.js 22</minerva-description-item
    >
    <minerva-description-item label="Updated"
      >2 minutes ago</minerva-description-item
    >
  </minerva-description-list>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};