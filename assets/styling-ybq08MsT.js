import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- StepsStyling.vue -->

<script setup lang="ts">
type Step = { value: string; label: string };

const styledItems = [
  { value: "draft", label: "Draft" },
  { value: "review", label: "Review" },
  { value: "publish", label: "Publish" },
];
<\/script>

<template>
  <minerva-steps
    id="styled"
    class="brand-steps"
    value="review"
    style="
      --steps-accent-color: var(--success-color);
      --steps-indicator-size: 2rem;
      --steps-gap: 24px;
      --steps-connector-min-width: 3rem;
    "
    :items.prop="styledItems"
  ></minerva-steps>
</template>

<style>
.brand-steps::part(label) {
  font-weight: 600;
}
</style>
`,angular:`// steps-styling.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

type Step = { value: string; label: string };

@Component({
  selector: "app-steps-styling",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-steps
      id="styled"
      class="brand-steps"
      value="review"
      style="
        --steps-accent-color: var(--success-color);
        --steps-indicator-size: 2rem;
        --steps-gap: 24px;
        --steps-connector-min-width: 3rem;
      "
      [items]="styledItems"
    ></minerva-steps>
  \`,
  styles: \`
    .brand-steps::part(label) {
      font-weight: 600;
    }
  \`,
})
export class StepsStylingComponent {
  styledItems = [
    { value: "draft", label: "Draft" },
    { value: "review", label: "Review" },
    { value: "publish", label: "Publish" },
  ];
}
`,svelte:`<!-- StepsStyling.svelte -->

<script lang="ts">
  type Step = { value: string; label: string };

  const styledItems = [
    { value: "draft", label: "Draft" },
    { value: "review", label: "Review" },
    { value: "publish", label: "Publish" },
  ];
<\/script>

<minerva-steps
  id="styled"
  class="brand-steps"
  value="review"
  style="
    --steps-accent-color: var(--success-color);
    --steps-indicator-size: 2rem;
    --steps-gap: 24px;
    --steps-connector-min-width: 3rem;
  "
  items={styledItems}
></minerva-steps>

<style>
    .brand-steps::part(label) {
      font-weight: 600;
    }
</style>
`,solid:`// StepsStyling.tsx

type Step = { value: string; label: string };

export default function StepsStyling() {
  const styledItems = [
    { value: "draft", label: "Draft" },
    { value: "review", label: "Review" },
    { value: "publish", label: "Publish" },
  ];

  return (
    <>
      <style>{\`
        .brand-steps::part(label) {
          font-weight: 600;
        }
      \`}</style>
      <minerva-steps
        id="styled"
        class="brand-steps"
        value="review"
        style="
          --steps-accent-color: var(--success-color);
          --steps-indicator-size: 2rem;
          --steps-gap: 24px;
          --steps-connector-min-width: 3rem;
        "
        prop:items={styledItems}
      ></minerva-steps>
    </>
  );
}
`,html:`<style>
  .brand-steps::part(label) {
    font-weight: 600;
  }
</style>
<minerva-steps
  id="styled"
  class="brand-steps"
  value="review"
  style="
    --steps-accent-color: var(--success-color);
    --steps-indicator-size: 2rem;
    --steps-gap: 24px;
    --steps-connector-min-width: 3rem;
  "
></minerva-steps>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  document.querySelector("#styled").items = [
    { value: "draft", label: "Draft" },
    { value: "review", label: "Review" },
    { value: "publish", label: "Publish" },
  ];
<\/script>
`}})))()}n();export{t as default};