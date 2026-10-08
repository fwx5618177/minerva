import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- NumberInputBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// ArrowUp / ArrowDown step, PageUp / PageDown step by 10, Home / End jump to
// min / max. \`minerva-change\` fires when a value is committed (blur, Enter,
// stepping), with detail.value (null when cleared).

const outputText = ref("Committed: 2");

const onChange = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: number | null }>).detail;
  outputText.value = \`Committed: \${value ?? "empty"}\`;
};
<\/script>

<template>
  <div style="display: grid; gap: 8px; max-width: 240px">
    <label for="ni-guests">Guests (1 to 12)</label>
    <minerva-number-input
      id="ni-guests"
      value="2"
      min="1"
      max="12"
      show-stepper
      @minerva-change="onChange"
    ></minerva-number-input>
    <output id="ni-guests-value">{{ outputText }}</output>
  </div>
</template>
`,angular:`// number-input-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// ArrowUp / ArrowDown step, PageUp / PageDown step by 10, Home / End jump to
// min / max. \`minerva-change\` fires when a value is committed (blur, Enter,
// stepping), with detail.value (null when cleared).

@Component({
  selector: "app-number-input-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px; max-width: 240px">
      <label for="ni-guests">Guests (1 to 12)</label>
      <minerva-number-input
        id="ni-guests"
        value="2"
        min="1"
        max="12"
        show-stepper
        (minerva-change)="onChange($event)"
      ></minerva-number-input>
      <output id="ni-guests-value">{{ outputText }}</output>
    </div>
  \`,
})
export class NumberInputBasicComponent {
  outputText = "Committed: 2";

  onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: number | null }>).detail;
    this.outputText = \`Committed: \${value ?? "empty"}\`;
  };
}
`,svelte:`<!-- NumberInputBasic.svelte -->

<script lang="ts">
  // ArrowUp / ArrowDown step, PageUp / PageDown step by 10, Home / End jump to
  // min / max. \`minerva-change\` fires when a value is committed (blur, Enter,
  // stepping), with detail.value (null when cleared).

  let outputText = $state("Committed: 2");

  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: number | null }>).detail;
    outputText = \`Committed: \${value ?? "empty"}\`;
  };
<\/script>

<div style="display: grid; gap: 8px; max-width: 240px">
  <label for="ni-guests">Guests (1 to 12)</label>
  <minerva-number-input
    id="ni-guests"
    value="2"
    min="1"
    max="12"
    show-stepper
    onminerva-change={onChange}
  ></minerva-number-input>
  <output id="ni-guests-value">{outputText}</output>
</div>
`,solid:`// NumberInputBasic.tsx

import { createSignal } from "solid-js";

// ArrowUp / ArrowDown step, PageUp / PageDown step by 10, Home / End jump to
// min / max. \`minerva-change\` fires when a value is committed (blur, Enter,
// stepping), with detail.value (null when cleared).

export default function NumberInputBasic() {
  const [outputText, setOutputText] = createSignal("Committed: 2");

  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: number | null }>).detail;
    setOutputText(\`Committed: \${value ?? "empty"}\`);
  };

  return (
    <div style="display: grid; gap: 8px; max-width: 240px">
      <label for="ni-guests">Guests (1 to 12)</label>
      <minerva-number-input
        id="ni-guests"
        value="2"
        min="1"
        max="12"
        show-stepper
        on:minerva-change={onChange}
      ></minerva-number-input>
      <output id="ni-guests-value">{outputText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px; max-width: 240px">
  <label for="ni-guests">Guests (1 to 12)</label>
  <minerva-number-input
    id="ni-guests"
    value="2"
    min="1"
    max="12"
    show-stepper
  ></minerva-number-input>
  <output id="ni-guests-value">Committed: 2</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // ArrowUp / ArrowDown step, PageUp / PageDown step by 10, Home / End jump to
  // min / max. \`minerva-change\` fires when a value is committed (blur, Enter,
  // stepping), with detail.value (null when cleared).
  const input = document.querySelector("#ni-guests");
  const output = document.querySelector("#ni-guests-value");
  const onChange = (event) => {
    const { value } = event.detail;
    output.value = \`Committed: \${value ?? "empty"}\`;
  };
  input.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};