import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MenuCheckboxRadio.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Checkbox / radio items stay open by default and fire minerva-change;
// the menu toggles their \`checked\` attribute.

type Change = CustomEvent<{ value: string; checked?: boolean }>;

const resultText = ref("");

const onChange = (event: Event) => {
  const { value, checked } = (event as Change).detail;
  resultText.value =
    checked === undefined
      ? \`Density: \${value}\`
      : \`\${value}: \${checked ? "shown" : "hidden"}\`;
};
<\/script>

<template>
  <minerva-menu
    id="view-menu"
    align="start"
    size="small"
    @minerva-change="onChange"
  >
    <minerva-button slot="trigger" variant="outline">View</minerva-button>
    <minerva-menu-label>Panels</minerva-menu-label>
    <minerva-menu-checkbox-item value="sidebar" checked
      >Sidebar</minerva-menu-checkbox-item
    >
    <minerva-menu-checkbox-item value="minimap"
      >Minimap</minerva-menu-checkbox-item
    >
    <minerva-menu-separator></minerva-menu-separator>
    <minerva-menu-group label="Density">
      <minerva-menu-radio-item value="compact">Compact</minerva-menu-radio-item>
      <minerva-menu-radio-item value="comfortable" checked
        >Comfortable</minerva-menu-radio-item
      >
      <minerva-menu-radio-item value="spacious"
        >Spacious</minerva-menu-radio-item
      >
    </minerva-menu-group>
  </minerva-menu>
  <p id="view-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// menu-checkbox-radio.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Checkbox / radio items stay open by default and fire minerva-change;
// the menu toggles their \`checked\` attribute.
type Change = CustomEvent<{ value: string; checked?: boolean }>;

@Component({
  selector: "app-menu-checkbox-radio",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-menu
      id="view-menu"
      align="start"
      size="small"
      (minerva-change)="onChange($event)"
    >
      <minerva-button slot="trigger" variant="outline">View</minerva-button>
      <minerva-menu-label>Panels</minerva-menu-label>
      <minerva-menu-checkbox-item value="sidebar" checked
        >Sidebar</minerva-menu-checkbox-item
      >
      <minerva-menu-checkbox-item value="minimap"
        >Minimap</minerva-menu-checkbox-item
      >
      <minerva-menu-separator></minerva-menu-separator>
      <minerva-menu-group label="Density">
        <minerva-menu-radio-item value="compact"
          >Compact</minerva-menu-radio-item
        >
        <minerva-menu-radio-item value="comfortable" checked
          >Comfortable</minerva-menu-radio-item
        >
        <minerva-menu-radio-item value="spacious"
          >Spacious</minerva-menu-radio-item
        >
      </minerva-menu-group>
    </minerva-menu>
    <p id="view-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class MenuCheckboxRadioComponent {
  resultText = "";

  onChange = (event: Event) => {
    const { value, checked } = (event as Change).detail;
    this.resultText =
      checked === undefined
        ? \`Density: \${value}\`
        : \`\${value}: \${checked ? "shown" : "hidden"}\`;
  };
}
`,svelte:`<!-- MenuCheckboxRadio.svelte -->

<script lang="ts">
  // Checkbox / radio items stay open by default and fire minerva-change;
  // the menu toggles their \`checked\` attribute.

  type Change = CustomEvent<{ value: string; checked?: boolean }>;

  let resultText = $state("");

  const onChange = (event: Event) => {
    const { value, checked } = (event as Change).detail;
    resultText =
      checked === undefined
        ? \`Density: \${value}\`
        : \`\${value}: \${checked ? "shown" : "hidden"}\`;
  };
<\/script>

<minerva-menu
  id="view-menu"
  align="start"
  size="small"
  onminerva-change={onChange}
>
  <minerva-button slot="trigger" variant="outline">View</minerva-button>
  <minerva-menu-label>Panels</minerva-menu-label>
  <minerva-menu-checkbox-item value="sidebar" checked
    >Sidebar</minerva-menu-checkbox-item>
  <minerva-menu-checkbox-item value="minimap"
    >Minimap</minerva-menu-checkbox-item>
  <minerva-menu-separator></minerva-menu-separator>
  <minerva-menu-group label="Density">
    <minerva-menu-radio-item value="compact">Compact</minerva-menu-radio-item>
    <minerva-menu-radio-item value="comfortable" checked
      >Comfortable</minerva-menu-radio-item>
    <minerva-menu-radio-item value="spacious">Spacious</minerva-menu-radio-item>
  </minerva-menu-group>
</minerva-menu>
<p id="view-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// MenuCheckboxRadio.tsx

import { createSignal } from "solid-js";

// Checkbox / radio items stay open by default and fire minerva-change;
// the menu toggles their \`checked\` attribute.
type Change = CustomEvent<{ value: string; checked?: boolean }>;

export default function MenuCheckboxRadio() {
  const [resultText, setResultText] = createSignal("");

  const onChange = (event: Event) => {
    const { value, checked } = (event as Change).detail;
    setResultText(
      checked === undefined
        ? \`Density: \${value}\`
        : \`\${value}: \${checked ? "shown" : "hidden"}\`,
    );
  };

  return (
    <>
      <minerva-menu
        id="view-menu"
        align="start"
        size="small"
        on:minerva-change={onChange}
      >
        <minerva-button slot="trigger" variant="outline">
          View
        </minerva-button>
        <minerva-menu-label>Panels</minerva-menu-label>
        <minerva-menu-checkbox-item value="sidebar" checked>
          Sidebar
        </minerva-menu-checkbox-item>
        <minerva-menu-checkbox-item value="minimap">
          Minimap
        </minerva-menu-checkbox-item>
        <minerva-menu-separator></minerva-menu-separator>
        <minerva-menu-group label="Density">
          <minerva-menu-radio-item value="compact">
            Compact
          </minerva-menu-radio-item>
          <minerva-menu-radio-item value="comfortable" checked>
            Comfortable
          </minerva-menu-radio-item>
          <minerva-menu-radio-item value="spacious">
            Spacious
          </minerva-menu-radio-item>
        </minerva-menu-group>
      </minerva-menu>
      <p id="view-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-menu id="view-menu" align="start" size="small">
  <minerva-button slot="trigger" variant="outline">View</minerva-button>
  <minerva-menu-label>Panels</minerva-menu-label>
  <minerva-menu-checkbox-item value="sidebar" checked
    >Sidebar</minerva-menu-checkbox-item
  >
  <minerva-menu-checkbox-item value="minimap"
    >Minimap</minerva-menu-checkbox-item
  >
  <minerva-menu-separator></minerva-menu-separator>
  <minerva-menu-group label="Density">
    <minerva-menu-radio-item value="compact">Compact</minerva-menu-radio-item>
    <minerva-menu-radio-item value="comfortable" checked
      >Comfortable</minerva-menu-radio-item
    >
    <minerva-menu-radio-item value="spacious">Spacious</minerva-menu-radio-item>
  </minerva-menu-group>
</minerva-menu>
<p id="view-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Checkbox / radio items stay open by default and fire minerva-change;
  // the menu toggles their \`checked\` attribute.
  const menu = document.querySelector("#view-menu");
  const result = document.querySelector("#view-result");
  const onChange = (event) => {
    const { value, checked } = event.detail;
    result.textContent =
      checked === undefined
        ? \`Density: \${value}\`
        : \`\${value}: \${checked ? "shown" : "hidden"}\`;
  };
  menu.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};