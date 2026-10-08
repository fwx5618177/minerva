import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AutoCompleteBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`options\` is a JS property. Typing filters the options (label contains
// the text); picking one fires minerva-select and fills the input, Enter
// with no active option fires minerva-submit with the trimmed text.

type Option = { label: string; value: string };

const logText = ref("");

const inputOptions = ["Apple", "Apricot", "Banana", "Blueberry", "Cherry"].map(
  (label) => ({ label, value: label.toLowerCase() }),
);
const onSelect = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  logText.value = \`minerva-select: \${value}\`;
};
const onSubmit = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  logText.value = \`minerva-submit: \${value}\`;
};
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 320px">
    <minerva-autocomplete
      id="fruit"
      label="Fruit"
      placeholder="Type a fruit, then Enter"
      :options.prop="inputOptions"
      @minerva-select="onSelect"
      @minerva-submit="onSubmit"
    ></minerva-autocomplete>
    <output id="log">{{ logText }}</output>
  </div>
</template>
`,angular:`// auto-complete-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// \`options\` is a JS property. Typing filters the options (label contains
// the text); picking one fires minerva-select and fills the input, Enter
// with no active option fires minerva-submit with the trimmed text.
type Option = { label: string; value: string };

@Component({
  selector: "app-auto-complete-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 320px">
      <minerva-autocomplete
        id="fruit"
        label="Fruit"
        placeholder="Type a fruit, then Enter"
        [options]="inputOptions"
        (minerva-select)="onSelect($event)"
        (minerva-submit)="onSubmit($event)"
      ></minerva-autocomplete>
      <output id="log">{{ logText }}</output>
    </div>
  \`,
})
export class AutoCompleteBasicComponent {
  logText = "";

  inputOptions = ["Apple", "Apricot", "Banana", "Blueberry", "Cherry"].map(
    (label) => ({ label, value: label.toLowerCase() }),
  );
  onSelect = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    this.logText = \`minerva-select: \${value}\`;
  };
  onSubmit = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    this.logText = \`minerva-submit: \${value}\`;
  };
}
`,svelte:`<!-- AutoCompleteBasic.svelte -->

<script lang="ts">
  // \`options\` is a JS property. Typing filters the options (label contains
  // the text); picking one fires minerva-select and fills the input, Enter
  // with no active option fires minerva-submit with the trimmed text.

  type Option = { label: string; value: string };

  let logText = $state("");

  const inputOptions = ["Apple", "Apricot", "Banana", "Blueberry", "Cherry"].map(
    (label) => ({ label, value: label.toLowerCase() }),
  );
  const onSelect = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    logText = \`minerva-select: \${value}\`;
  };
  const onSubmit = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    logText = \`minerva-submit: \${value}\`;
  };
<\/script>

<div style="display: grid; gap: 12px; max-width: 320px">
  <minerva-autocomplete
    id="fruit"
    label="Fruit"
    placeholder="Type a fruit, then Enter"
    options={inputOptions}
    onminerva-select={onSelect}
    onminerva-submit={onSubmit}
  ></minerva-autocomplete>
  <output id="log">{logText}</output>
</div>
`,solid:`// AutoCompleteBasic.tsx

import { createSignal } from "solid-js";

// \`options\` is a JS property. Typing filters the options (label contains
// the text); picking one fires minerva-select and fills the input, Enter
// with no active option fires minerva-submit with the trimmed text.
type Option = { label: string; value: string };

export default function AutoCompleteBasic() {
  const [logText, setLogText] = createSignal("");

  const inputOptions = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
  ].map((label) => ({ label, value: label.toLowerCase() }));
  const onSelect = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    setLogText(\`minerva-select: \${value}\`);
  };
  const onSubmit = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    setLogText(\`minerva-submit: \${value}\`);
  };

  return (
    <div style="display: grid; gap: 12px; max-width: 320px">
      <minerva-autocomplete
        id="fruit"
        label="Fruit"
        placeholder="Type a fruit, then Enter"
        prop:options={inputOptions}
        on:minerva-select={onSelect}
        on:minerva-submit={onSubmit}
      ></minerva-autocomplete>
      <output id="log">{logText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 320px">
  <minerva-autocomplete
    id="fruit"
    label="Fruit"
    placeholder="Type a fruit, then Enter"
  ></minerva-autocomplete>
  <output id="log"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`options\` is a JS property. Typing filters the options (label contains
  // the text); picking one fires minerva-select and fills the input, Enter
  // with no active option fires minerva-submit with the trimmed text.
  const input = document.querySelector("#fruit");
  const log = document.querySelector("#log");
  input.options = ["Apple", "Apricot", "Banana", "Blueberry", "Cherry"].map(
    (label) => ({ label, value: label.toLowerCase() }),
  );
  const onSelect = (event) => {
    const { value } = event.detail;
    log.value = \`minerva-select: \${value}\`;
  };
  const onSubmit = (event) => {
    const { value } = event.detail;
    log.value = \`minerva-submit: \${value}\`;
  };
  input.addEventListener("minerva-select", onSelect);
  input.addEventListener("minerva-submit", onSubmit);
<\/script>
`}})))()}n();export{t as default};