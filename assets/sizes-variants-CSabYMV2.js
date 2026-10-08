import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TextareaSizesVariants.vue -->

<template>
  <div style="display: grid; gap: 12px; max-width: 420px">
    <minerva-textarea
      size="small"
      rows="2"
      aria-label="Small"
      placeholder="Small"
    ></minerva-textarea>
    <minerva-textarea
      size="large"
      rows="2"
      aria-label="Large"
      placeholder="Large"
    ></minerva-textarea>
    <minerva-textarea
      variant="filled"
      rows="2"
      aria-label="Filled"
      placeholder="Filled"
    ></minerva-textarea>
    <minerva-textarea
      readonly
      rows="2"
      value="Read-only text"
      aria-label="Read-only"
    ></minerva-textarea>
    <minerva-textarea
      disabled
      rows="2"
      value="Disabled"
      aria-label="Disabled"
    ></minerva-textarea>
    <minerva-textarea
      invalid
      rows="2"
      value="Invalid"
      aria-label="Invalid"
    ></minerva-textarea>
  </div>
</template>
`,angular:`// textarea-sizes-variants.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-textarea-sizes-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 420px">
      <minerva-textarea
        size="small"
        rows="2"
        aria-label="Small"
        placeholder="Small"
      ></minerva-textarea>
      <minerva-textarea
        size="large"
        rows="2"
        aria-label="Large"
        placeholder="Large"
      ></minerva-textarea>
      <minerva-textarea
        variant="filled"
        rows="2"
        aria-label="Filled"
        placeholder="Filled"
      ></minerva-textarea>
      <minerva-textarea
        readonly
        rows="2"
        value="Read-only text"
        aria-label="Read-only"
      ></minerva-textarea>
      <minerva-textarea
        disabled
        rows="2"
        value="Disabled"
        aria-label="Disabled"
      ></minerva-textarea>
      <minerva-textarea
        invalid
        rows="2"
        value="Invalid"
        aria-label="Invalid"
      ></minerva-textarea>
    </div>
  \`,
})
export class TextareaSizesVariantsComponent {}
`,svelte:`<!-- TextareaSizesVariants.svelte -->

<div style="display: grid; gap: 12px; max-width: 420px">
  <minerva-textarea
    size="small"
    rows="2"
    aria-label="Small"
    placeholder="Small"
  ></minerva-textarea>
  <minerva-textarea
    size="large"
    rows="2"
    aria-label="Large"
    placeholder="Large"
  ></minerva-textarea>
  <minerva-textarea
    variant="filled"
    rows="2"
    aria-label="Filled"
    placeholder="Filled"
  ></minerva-textarea>
  <minerva-textarea
    readonly
    rows="2"
    value="Read-only text"
    aria-label="Read-only"
  ></minerva-textarea>
  <minerva-textarea
    disabled
    rows="2"
    value="Disabled"
    aria-label="Disabled"
  ></minerva-textarea>
  <minerva-textarea
    invalid
    rows="2"
    value="Invalid"
    aria-label="Invalid"
  ></minerva-textarea>
</div>
`,solid:`// TextareaSizesVariants.tsx

export default function TextareaSizesVariants() {
  return (
    <div style="display: grid; gap: 12px; max-width: 420px">
      <minerva-textarea
        size="small"
        rows="2"
        aria-label="Small"
        placeholder="Small"
      ></minerva-textarea>
      <minerva-textarea
        size="large"
        rows="2"
        aria-label="Large"
        placeholder="Large"
      ></minerva-textarea>
      <minerva-textarea
        variant="filled"
        rows="2"
        aria-label="Filled"
        placeholder="Filled"
      ></minerva-textarea>
      <minerva-textarea
        readonly
        rows="2"
        value="Read-only text"
        aria-label="Read-only"
      ></minerva-textarea>
      <minerva-textarea
        disabled
        rows="2"
        value="Disabled"
        aria-label="Disabled"
      ></minerva-textarea>
      <minerva-textarea
        invalid
        rows="2"
        value="Invalid"
        aria-label="Invalid"
      ></minerva-textarea>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 420px">
  <minerva-textarea
    size="small"
    rows="2"
    aria-label="Small"
    placeholder="Small"
  ></minerva-textarea>
  <minerva-textarea
    size="large"
    rows="2"
    aria-label="Large"
    placeholder="Large"
  ></minerva-textarea>
  <minerva-textarea
    variant="filled"
    rows="2"
    aria-label="Filled"
    placeholder="Filled"
  ></minerva-textarea>
  <minerva-textarea
    readonly
    rows="2"
    value="Read-only text"
    aria-label="Read-only"
  ></minerva-textarea>
  <minerva-textarea
    disabled
    rows="2"
    value="Disabled"
    aria-label="Disabled"
  ></minerva-textarea>
  <minerva-textarea
    invalid
    rows="2"
    value="Invalid"
    aria-label="Invalid"
  ></minerva-textarea>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};