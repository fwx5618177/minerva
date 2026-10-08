import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SelectOptionsProperty.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`options\` is a JS property (flat options and / or labelled groups),
// rendered before any <minerva-option> children. minerva-open-change is
// cancelable: preventDefault() keeps the listbox closed.

type Option = { value: string; label: string; disabled?: boolean };
type Group = { label: string; options: Option[] };

const lock = ref<HTMLInputElement>();
const logText = ref("");

const selectOptions = [
  {
    label: "Europe",
    options: [
      { value: "fr", label: "France" },
      { value: "de", label: "Germany" },
      { value: "it", label: "Italy", disabled: true },
    ],
  },
  {
    label: "Asia",
    options: [
      { value: "cn", label: "China" },
      { value: "jp", label: "Japan" },
    ],
  },
];
const onChange = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  logText.value = \`minerva-change: \${value}\`;
};
const onOpenChange = (event: Event) => {
  if (lock.value!.checked) event.preventDefault();
};
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 320px">
    <minerva-select
      id="country"
      aria-label="Country"
      placeholder="Choose a country"
      :options.prop="selectOptions"
      @minerva-change="onChange"
      @minerva-open-change="onOpenChange"
    >
    </minerva-select>
    <label style="display: flex; gap: 6px; align-items: center">
      <input id="lock" type="checkbox" ref="lock" />
      Keep closed (cancel minerva-open-change)
    </label>
    <output id="log">{{ logText }}</output>
  </div>
</template>
`,angular:`// select-options-property.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// \`options\` is a JS property (flat options and / or labelled groups),
// rendered before any <minerva-option> children. minerva-open-change is
// cancelable: preventDefault() keeps the listbox closed.
type Option = { value: string; label: string; disabled?: boolean };
type Group = { label: string; options: Option[] };

@Component({
  selector: "app-select-options-property",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 320px">
      <minerva-select
        id="country"
        aria-label="Country"
        placeholder="Choose a country"
        [options]="selectOptions"
        (minerva-change)="onChange($event)"
        (minerva-open-change)="onOpenChange($event)"
      >
      </minerva-select>
      <label style="display: flex; gap: 6px; align-items: center">
        <input id="lock" type="checkbox" #lock />
        Keep closed (cancel minerva-open-change)
      </label>
      <output id="log">{{ logText }}</output>
    </div>
  \`,
})
export class SelectOptionsPropertyComponent {
  @ViewChild("lock") lock!: ElementRef<HTMLInputElement>;
  logText = "";

  selectOptions = [
    {
      label: "Europe",
      options: [
        { value: "fr", label: "France" },
        { value: "de", label: "Germany" },
        { value: "it", label: "Italy", disabled: true },
      ],
    },
    {
      label: "Asia",
      options: [
        { value: "cn", label: "China" },
        { value: "jp", label: "Japan" },
      ],
    },
  ];
  onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    this.logText = \`minerva-change: \${value}\`;
  };
  onOpenChange = (event: Event) => {
    if (this.lock.nativeElement.checked) event.preventDefault();
  };
}
`,svelte:`<!-- SelectOptionsProperty.svelte -->

<script lang="ts">
  // \`options\` is a JS property (flat options and / or labelled groups),
  // rendered before any <minerva-option> children. minerva-open-change is
  // cancelable: preventDefault() keeps the listbox closed.

  type Option = { value: string; label: string; disabled?: boolean };
  type Group = { label: string; options: Option[] };

  let lock: HTMLInputElement;
  let logText = $state("");

  const selectOptions = [
    {
      label: "Europe",
      options: [
        { value: "fr", label: "France" },
        { value: "de", label: "Germany" },
        { value: "it", label: "Italy", disabled: true },
      ],
    },
    {
      label: "Asia",
      options: [
        { value: "cn", label: "China" },
        { value: "jp", label: "Japan" },
      ],
    },
  ];
  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    logText = \`minerva-change: \${value}\`;
  };
  const onOpenChange = (event: Event) => {
    if (lock.checked) event.preventDefault();
  };
<\/script>

<div style="display: grid; gap: 12px; max-width: 320px">
  <minerva-select
    id="country"
    aria-label="Country"
    placeholder="Choose a country"
    options={selectOptions}
    onminerva-change={onChange}
    onminerva-open-change={onOpenChange}
  >
  </minerva-select>
  <label style="display: flex; gap: 6px; align-items: center">
    <input id="lock" type="checkbox" bind:this={lock} />
    Keep closed (cancel minerva-open-change)
  </label>
  <output id="log">{logText}</output>
</div>
`,solid:`// SelectOptionsProperty.tsx

import { createSignal } from "solid-js";

// \`options\` is a JS property (flat options and / or labelled groups),
// rendered before any <minerva-option> children. minerva-open-change is
// cancelable: preventDefault() keeps the listbox closed.
type Option = { value: string; label: string; disabled?: boolean };
type Group = { label: string; options: Option[] };

export default function SelectOptionsProperty() {
  let lock!: HTMLInputElement;
  const [logText, setLogText] = createSignal("");

  const selectOptions = [
    {
      label: "Europe",
      options: [
        { value: "fr", label: "France" },
        { value: "de", label: "Germany" },
        { value: "it", label: "Italy", disabled: true },
      ],
    },
    {
      label: "Asia",
      options: [
        { value: "cn", label: "China" },
        { value: "jp", label: "Japan" },
      ],
    },
  ];
  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    setLogText(\`minerva-change: \${value}\`);
  };
  const onOpenChange = (event: Event) => {
    if (lock.checked) event.preventDefault();
  };

  return (
    <div style="display: grid; gap: 12px; max-width: 320px">
      <minerva-select
        id="country"
        aria-label="Country"
        placeholder="Choose a country"
        prop:options={selectOptions}
        on:minerva-change={onChange}
        on:minerva-open-change={onOpenChange}
      ></minerva-select>
      <label style="display: flex; gap: 6px; align-items: center">
        <input id="lock" type="checkbox" ref={lock} />
        Keep closed (cancel minerva-open-change)
      </label>
      <output id="log">{logText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 320px">
  <minerva-select
    id="country"
    aria-label="Country"
    placeholder="Choose a country"
  >
  </minerva-select>
  <label style="display: flex; gap: 6px; align-items: center">
    <input id="lock" type="checkbox" />
    Keep closed (cancel minerva-open-change)
  </label>
  <output id="log"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`options\` is a JS property (flat options and / or labelled groups),
  // rendered before any <minerva-option> children. minerva-open-change is
  // cancelable: preventDefault() keeps the listbox closed.
  const select = document.querySelector("#country");
  const lock = document.querySelector("#lock");
  const log = document.querySelector("#log");
  select.options = [
    {
      label: "Europe",
      options: [
        { value: "fr", label: "France" },
        { value: "de", label: "Germany" },
        { value: "it", label: "Italy", disabled: true },
      ],
    },
    {
      label: "Asia",
      options: [
        { value: "cn", label: "China" },
        { value: "jp", label: "Japan" },
      ],
    },
  ];
  const onChange = (event) => {
    const { value } = event.detail;
    log.value = \`minerva-change: \${value}\`;
  };
  const onOpenChange = (event) => {
    if (lock.checked) event.preventDefault();
  };
  select.addEventListener("minerva-change", onChange);
  select.addEventListener("minerva-open-change", onOpenChange);
<\/script>
`}})))()}n();export{t as default};