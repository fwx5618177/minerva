import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CascaderForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The submitted value is the displayed text; \`required\` blocks submission
// while empty and form.reset() restores the \`value\` attribute.

type Option = { value: string; label: string; children?: Option[] };
type Cascader = HTMLElement & { options: Option[] };

const form = ref<HTMLFormElement>();
const resultText = ref("");

const destinationOptions = [
  {
    value: "fr",
    label: "France",
    children: [
      { value: "paris", label: "Paris" },
      { value: "lyon", label: "Lyon" },
    ],
  },
  {
    value: "jp",
    label: "Japan",
    children: [
      { value: "tokyo", label: "Tokyo" },
      { value: "osaka", label: "Osaka" },
    ],
  },
];
const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  resultText.value = \`destination = \${new FormData(form.value!).get("destination")}\`;
};
const onReset = () => (resultText.value = "");
<\/script>

<template>
  <form
    id="shipping"
    style="display: grid; gap: 8px; justify-items: start"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <label for="destination">Destination</label>
    <minerva-cascader
      id="destination"
      name="destination"
      value='["fr","paris"]'
      required
      :options.prop="destinationOptions"
    ></minerva-cascader>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Submit</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// cascader-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The submitted value is the displayed text; \`required\` blocks submission
// while empty and form.reset() restores the \`value\` attribute.
type Option = { value: string; label: string; children?: Option[] };
type Cascader = HTMLElement & { options: Option[] };

@Component({
  selector: "app-cascader-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="shipping"
      style="display: grid; gap: 8px; justify-items: start"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <label for="destination">Destination</label>
      <minerva-cascader
        id="destination"
        name="destination"
        value='["fr","paris"]'
        required
        [options]="destinationOptions"
      ></minerva-cascader>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Submit</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="result">{{ resultText }}</output>
    </form>
  \`,
})
export class CascaderFormComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  destinationOptions = [
    {
      value: "fr",
      label: "France",
      children: [
        { value: "paris", label: "Paris" },
        { value: "lyon", label: "Lyon" },
      ],
    },
    {
      value: "jp",
      label: "Japan",
      children: [
        { value: "tokyo", label: "Tokyo" },
        { value: "osaka", label: "Osaka" },
      ],
    },
  ];
  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    this.resultText = \`destination = \${new FormData(this.form.nativeElement).get("destination")}\`;
  };
  onReset = () => (this.resultText = "");
}
`,svelte:`<!-- CascaderForm.svelte -->

<script lang="ts">
  // The submitted value is the displayed text; \`required\` blocks submission
  // while empty and form.reset() restores the \`value\` attribute.

  type Option = { value: string; label: string; children?: Option[] };
  type Cascader = HTMLElement & { options: Option[] };

  let form: HTMLFormElement;
  let resultText = $state("");

  const destinationOptions = [
    {
      value: "fr",
      label: "France",
      children: [
        { value: "paris", label: "Paris" },
        { value: "lyon", label: "Lyon" },
      ],
    },
    {
      value: "jp",
      label: "Japan",
      children: [
        { value: "tokyo", label: "Tokyo" },
        { value: "osaka", label: "Osaka" },
      ],
    },
  ];
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    resultText = \`destination = \${new FormData(form).get("destination")}\`;
  };
  const onReset = () => (resultText = "");
<\/script>

<form
  id="shipping"
  style="display: grid; gap: 8px; justify-items: start"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <label for="destination">Destination</label>
  <minerva-cascader
    id="destination"
    name="destination"
    value='["fr","paris"]'
    required
    options={destinationOptions}
  ></minerva-cascader>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Submit</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="result">{resultText}</output>
</form>
`,solid:`// CascaderForm.tsx

import { createSignal } from "solid-js";

// The submitted value is the displayed text; \`required\` blocks submission
// while empty and form.reset() restores the \`value\` attribute.
type Option = { value: string; label: string; children?: Option[] };
type Cascader = HTMLElement & { options: Option[] };

export default function CascaderForm() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const destinationOptions = [
    {
      value: "fr",
      label: "France",
      children: [
        { value: "paris", label: "Paris" },
        { value: "lyon", label: "Lyon" },
      ],
    },
    {
      value: "jp",
      label: "Japan",
      children: [
        { value: "tokyo", label: "Tokyo" },
        { value: "osaka", label: "Osaka" },
      ],
    },
  ];
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    setResultText(\`destination = \${new FormData(form).get("destination")}\`);
  };
  const onReset = () => setResultText("");

  return (
    <form
      id="shipping"
      style="display: grid; gap: 8px; justify-items: start"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <label for="destination">Destination</label>
      <minerva-cascader
        id="destination"
        name="destination"
        value='["fr","paris"]'
        required
        prop:options={destinationOptions}
      ></minerva-cascader>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Submit</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="shipping" style="display: grid; gap: 8px; justify-items: start">
  <label for="destination">Destination</label>
  <minerva-cascader
    id="destination"
    name="destination"
    value='["fr","paris"]'
    required
  ></minerva-cascader>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Submit</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // The submitted value is the displayed text; \`required\` blocks submission
  // while empty and form.reset() restores the \`value\` attribute.
  const form = document.querySelector("#shipping");
  const result = document.querySelector("#result");
  document.querySelector("#destination").options = [
    {
      value: "fr",
      label: "France",
      children: [
        { value: "paris", label: "Paris" },
        { value: "lyon", label: "Lyon" },
      ],
    },
    {
      value: "jp",
      label: "Japan",
      children: [
        { value: "tokyo", label: "Tokyo" },
        { value: "osaka", label: "Osaka" },
      ],
    },
  ];
  const onSubmit = (event) => {
    event.preventDefault();
    result.value = \`destination = \${new FormData(form).get("destination")}\`;
  };
  const onReset = () => (result.value = "");
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};