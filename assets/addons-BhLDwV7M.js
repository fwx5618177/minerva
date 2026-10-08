import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- InputAddons.vue -->

<template>
  <div style="display: grid; gap: 12px; max-width: 360px">
    <minerva-input type="url" aria-label="Website" placeholder="example.com">
      <span slot="prefix">https://</span>
    </minerva-input>
    <minerva-input
      type="number"
      aria-label="Weight"
      value="72"
      min="0"
      step="0.5"
    >
      <span slot="suffix">kg</span>
    </minerva-input>
    <minerva-input
      type="search"
      clearable
      value="web components"
      aria-label="Search"
    >
      <span slot="prefix" aria-hidden="true">🔍</span>
    </minerva-input>
    <minerva-input
      show-char-count
      maxlength="40"
      value="Character count"
      aria-label="Title"
    ></minerva-input>
    <minerva-input
      type="password"
      value="correct horse"
      aria-label="Password"
      autocomplete="current-password"
    ></minerva-input>
  </div>
</template>
`,angular:`// input-addons.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-input-addons",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 360px">
      <minerva-input type="url" aria-label="Website" placeholder="example.com">
        <span slot="prefix">https://</span>
      </minerva-input>
      <minerva-input
        type="number"
        aria-label="Weight"
        value="72"
        min="0"
        step="0.5"
      >
        <span slot="suffix">kg</span>
      </minerva-input>
      <minerva-input
        type="search"
        clearable
        value="web components"
        aria-label="Search"
      >
        <span slot="prefix" aria-hidden="true">🔍</span>
      </minerva-input>
      <minerva-input
        show-char-count
        maxlength="40"
        value="Character count"
        aria-label="Title"
      ></minerva-input>
      <minerva-input
        type="password"
        value="correct horse"
        aria-label="Password"
        autocomplete="current-password"
      ></minerva-input>
    </div>
  \`,
})
export class InputAddonsComponent {}
`,svelte:`<!-- InputAddons.svelte -->

<div style="display: grid; gap: 12px; max-width: 360px">
  <minerva-input type="url" aria-label="Website" placeholder="example.com">
    <span slot="prefix">https://</span>
  </minerva-input>
  <minerva-input
    type="number"
    aria-label="Weight"
    value="72"
    min="0"
    step="0.5"
  >
    <span slot="suffix">kg</span>
  </minerva-input>
  <minerva-input
    type="search"
    clearable
    value="web components"
    aria-label="Search"
  >
    <span slot="prefix" aria-hidden="true">🔍</span>
  </minerva-input>
  <minerva-input
    show-char-count
    maxlength="40"
    value="Character count"
    aria-label="Title"
  ></minerva-input>
  <minerva-input
    type="password"
    value="correct horse"
    aria-label="Password"
    autocomplete="current-password"
  ></minerva-input>
</div>
`,solid:`// InputAddons.tsx

export default function InputAddons() {
  return (
    <div style="display: grid; gap: 12px; max-width: 360px">
      <minerva-input type="url" aria-label="Website" placeholder="example.com">
        <span slot="prefix">https://</span>
      </minerva-input>
      <minerva-input
        type="number"
        aria-label="Weight"
        value="72"
        min="0"
        step="0.5"
      >
        <span slot="suffix">kg</span>
      </minerva-input>
      <minerva-input
        type="search"
        clearable
        value="web components"
        aria-label="Search"
      >
        <span slot="prefix" aria-hidden="true">
          🔍
        </span>
      </minerva-input>
      <minerva-input
        show-char-count
        maxlength="40"
        value="Character count"
        aria-label="Title"
      ></minerva-input>
      <minerva-input
        type="password"
        value="correct horse"
        aria-label="Password"
        autocomplete="current-password"
      ></minerva-input>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 360px">
  <minerva-input type="url" aria-label="Website" placeholder="example.com">
    <span slot="prefix">https://</span>
  </minerva-input>
  <minerva-input
    type="number"
    aria-label="Weight"
    value="72"
    min="0"
    step="0.5"
  >
    <span slot="suffix">kg</span>
  </minerva-input>
  <minerva-input
    type="search"
    clearable
    value="web components"
    aria-label="Search"
  >
    <span slot="prefix" aria-hidden="true">🔍</span>
  </minerva-input>
  <minerva-input
    show-char-count
    maxlength="40"
    value="Character count"
    aria-label="Title"
  ></minerva-input>
  <minerva-input
    type="password"
    value="correct horse"
    aria-label="Password"
    autocomplete="current-password"
  ></minerva-input>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};