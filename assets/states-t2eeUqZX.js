import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TagInputStates.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <minerva-tag-input
      aria-label="Small"
      size="small"
      value="small"
    ></minerva-tag-input>
    <minerva-tag-input
      aria-label="Large"
      size="large"
      value="large"
    ></minerva-tag-input>
    <minerva-tag-input
      aria-label="Invalid"
      invalid
      value="invalid"
    ></minerva-tag-input>
    <minerva-tag-input
      aria-label="Read-only"
      readonly
      value="archived, 2024"
    ></minerva-tag-input>
    <minerva-tag-input
      aria-label="Disabled"
      disabled
      value="locked"
    ></minerva-tag-input>
  </div>
</template>
`,angular:`// tag-input-states.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-tag-input-states",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <minerva-tag-input
        aria-label="Small"
        size="small"
        value="small"
      ></minerva-tag-input>
      <minerva-tag-input
        aria-label="Large"
        size="large"
        value="large"
      ></minerva-tag-input>
      <minerva-tag-input
        aria-label="Invalid"
        invalid
        value="invalid"
      ></minerva-tag-input>
      <minerva-tag-input
        aria-label="Read-only"
        readonly
        value="archived, 2024"
      ></minerva-tag-input>
      <minerva-tag-input
        aria-label="Disabled"
        disabled
        value="locked"
      ></minerva-tag-input>
    </div>
  \`,
})
export class TagInputStatesComponent {}
`,svelte:`<!-- TagInputStates.svelte -->

<div style="display: grid; gap: 12px">
  <minerva-tag-input
    aria-label="Small"
    size="small"
    value="small"
  ></minerva-tag-input>
  <minerva-tag-input
    aria-label="Large"
    size="large"
    value="large"
  ></minerva-tag-input>
  <minerva-tag-input
    aria-label="Invalid"
    invalid
    value="invalid"
  ></minerva-tag-input>
  <minerva-tag-input
    aria-label="Read-only"
    readonly
    value="archived, 2024"
  ></minerva-tag-input>
  <minerva-tag-input
    aria-label="Disabled"
    disabled
    value="locked"
  ></minerva-tag-input>
</div>
`,solid:`// TagInputStates.tsx

export default function TagInputStates() {
  return (
    <div style="display: grid; gap: 12px">
      <minerva-tag-input
        aria-label="Small"
        size="small"
        value="small"
      ></minerva-tag-input>
      <minerva-tag-input
        aria-label="Large"
        size="large"
        value="large"
      ></minerva-tag-input>
      <minerva-tag-input
        aria-label="Invalid"
        invalid
        value="invalid"
      ></minerva-tag-input>
      <minerva-tag-input
        aria-label="Read-only"
        readonly
        value="archived, 2024"
      ></minerva-tag-input>
      <minerva-tag-input
        aria-label="Disabled"
        disabled
        value="locked"
      ></minerva-tag-input>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <minerva-tag-input
    aria-label="Small"
    size="small"
    value="small"
  ></minerva-tag-input>
  <minerva-tag-input
    aria-label="Large"
    size="large"
    value="large"
  ></minerva-tag-input>
  <minerva-tag-input
    aria-label="Invalid"
    invalid
    value="invalid"
  ></minerva-tag-input>
  <minerva-tag-input
    aria-label="Read-only"
    readonly
    value="archived, 2024"
  ></minerva-tag-input>
  <minerva-tag-input
    aria-label="Disabled"
    disabled
    value="locked"
  ></minerva-tag-input>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};