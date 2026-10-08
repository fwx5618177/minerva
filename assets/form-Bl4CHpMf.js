import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- KeyValueEditorForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The rows are submitted under \`name\` as one JSON string ([{ key, value }],
// ids omitted); \`required\` blocks an empty editor (remove the row to see
// it). Reset restores the rows of the \`value\` attribute.

const form = ref<HTMLFormElement>();
const resultText = ref("");

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const entries = [...new FormData(form.value!)].map(
    ([key, value]) => \`\${key}=\${value}\`,
  );
  resultText.value = \`FormData: \${entries.join(", ") || "(empty)"}\`;
};
const onReset = () => (resultText.value = "");
<\/script>

<template>
  <form
    id="kv-form"
    style="display: grid; gap: 8px; max-width: 560px"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <span id="kv-form-label">Labels (at least one)</span>
    <minerva-key-value-editor
      name="labels"
      required
      aria-labelledby="kv-form-label"
      value='[{"key":"team","value":"platform"}]'
    ></minerva-key-value-editor>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Save</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="kv-form-result" style="font-family: monospace">{{
      resultText
    }}</output>
  </form>
</template>
`,angular:`// key-value-editor-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The rows are submitted under \`name\` as one JSON string ([{ key, value }],
// ids omitted); \`required\` blocks an empty editor (remove the row to see
// it). Reset restores the rows of the \`value\` attribute.

@Component({
  selector: "app-key-value-editor-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="kv-form"
      style="display: grid; gap: 8px; max-width: 560px"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <span id="kv-form-label">Labels (at least one)</span>
      <minerva-key-value-editor
        name="labels"
        required
        aria-labelledby="kv-form-label"
        value='[{"key":"team","value":"platform"}]'
      ></minerva-key-value-editor>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Save</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="kv-form-result" style="font-family: monospace">{{
        resultText
      }}</output>
    </form>
  \`,
})
export class KeyValueEditorFormComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const entries = [...new FormData(this.form.nativeElement)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    this.resultText = \`FormData: \${entries.join(", ") || "(empty)"}\`;
  };
  onReset = () => (this.resultText = "");
}
`,svelte:`<!-- KeyValueEditorForm.svelte -->

<script lang="ts">
  // The rows are submitted under \`name\` as one JSON string ([{ key, value }],
  // ids omitted); \`required\` blocks an empty editor (remove the row to see
  // it). Reset restores the rows of the \`value\` attribute.

  let form: HTMLFormElement;
  let resultText = $state("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    resultText = \`FormData: \${entries.join(", ") || "(empty)"}\`;
  };
  const onReset = () => (resultText = "");
<\/script>

<form
  id="kv-form"
  style="display: grid; gap: 8px; max-width: 560px"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <span id="kv-form-label">Labels (at least one)</span>
  <minerva-key-value-editor
    name="labels"
    required
    aria-labelledby="kv-form-label"
    value={"[{\\"key\\":\\"team\\",\\"value\\":\\"platform\\"}]"}
  ></minerva-key-value-editor>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Save</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="kv-form-result" style="font-family: monospace">{resultText}</output>
</form>
`,solid:`// KeyValueEditorForm.tsx

import { createSignal } from "solid-js";

// The rows are submitted under \`name\` as one JSON string ([{ key, value }],
// ids omitted); \`required\` blocks an empty editor (remove the row to see
// it). Reset restores the rows of the \`value\` attribute.

export default function KeyValueEditorForm() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    setResultText(\`FormData: \${entries.join(", ") || "(empty)"}\`);
  };
  const onReset = () => setResultText("");

  return (
    <form
      id="kv-form"
      style="display: grid; gap: 8px; max-width: 560px"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <span id="kv-form-label">Labels (at least one)</span>
      <minerva-key-value-editor
        name="labels"
        required
        aria-labelledby="kv-form-label"
        value='[{"key":"team","value":"platform"}]'
      ></minerva-key-value-editor>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Save</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="kv-form-result" style="font-family: monospace">
        {resultText()}
      </output>
    </form>
  );
}
`,html:`<form id="kv-form" style="display: grid; gap: 8px; max-width: 560px">
  <span id="kv-form-label">Labels (at least one)</span>
  <minerva-key-value-editor
    name="labels"
    required
    aria-labelledby="kv-form-label"
    value='[{"key":"team","value":"platform"}]'
  ></minerva-key-value-editor>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Save</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="kv-form-result" style="font-family: monospace"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // The rows are submitted under \`name\` as one JSON string ([{ key, value }],
  // ids omitted); \`required\` blocks an empty editor (remove the row to see
  // it). Reset restores the rows of the \`value\` attribute.
  const form = document.querySelector("#kv-form");
  const result = document.querySelector("#kv-form-result");
  const onSubmit = (event) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    result.value = \`FormData: \${entries.join(", ") || "(empty)"}\`;
  };
  const onReset = () => (result.value = "");
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};