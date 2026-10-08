import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- JsonFieldForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Broken JSON is \`badInput\` (also while focused), so the form cannot be
// submitted until the text parses; the text itself is submitted. Reset
// restores the \`value\` attribute.

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
    id="jf-form"
    style="display: grid; gap: 8px; max-width: 480px"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <label for="jf-form-payload">Webhook payload</label>
    <minerva-json-field
      id="jf-form-payload"
      name="payload"
      rows="5"
      required
      value='{"event":"deploy",'
    ></minerva-json-field>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Send</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="jf-form-result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// json-field-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Broken JSON is \`badInput\` (also while focused), so the form cannot be
// submitted until the text parses; the text itself is submitted. Reset
// restores the \`value\` attribute.

@Component({
  selector: "app-json-field-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="jf-form"
      style="display: grid; gap: 8px; max-width: 480px"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <label for="jf-form-payload">Webhook payload</label>
      <minerva-json-field
        id="jf-form-payload"
        name="payload"
        rows="5"
        required
        value='{"event":"deploy",'
      ></minerva-json-field>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Send</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="jf-form-result">{{ resultText }}</output>
    </form>
  \`,
})
export class JsonFieldFormComponent {
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
`,svelte:`<!-- JsonFieldForm.svelte -->

<script lang="ts">
  // Broken JSON is \`badInput\` (also while focused), so the form cannot be
  // submitted until the text parses; the text itself is submitted. Reset
  // restores the \`value\` attribute.

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
  id="jf-form"
  style="display: grid; gap: 8px; max-width: 480px"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <label for="jf-form-payload">Webhook payload</label>
  <minerva-json-field
    id="jf-form-payload"
    name="payload"
    rows="5"
    required
    value={"{\\"event\\":\\"deploy\\","}
  ></minerva-json-field>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Send</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="jf-form-result">{resultText}</output>
</form>
`,solid:`// JsonFieldForm.tsx

import { createSignal } from "solid-js";

// Broken JSON is \`badInput\` (also while focused), so the form cannot be
// submitted until the text parses; the text itself is submitted. Reset
// restores the \`value\` attribute.

export default function JsonFieldForm() {
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
      id="jf-form"
      style="display: grid; gap: 8px; max-width: 480px"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <label for="jf-form-payload">Webhook payload</label>
      <minerva-json-field
        id="jf-form-payload"
        name="payload"
        rows="5"
        required
        value='{"event":"deploy",'
      ></minerva-json-field>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Send</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="jf-form-result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="jf-form" style="display: grid; gap: 8px; max-width: 480px">
  <label for="jf-form-payload">Webhook payload</label>
  <minerva-json-field
    id="jf-form-payload"
    name="payload"
    rows="5"
    required
    value='{"event":"deploy",'
  ></minerva-json-field>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Send</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="jf-form-result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Broken JSON is \`badInput\` (also while focused), so the form cannot be
  // submitted until the text parses; the text itself is submitted. Reset
  // restores the \`value\` attribute.
  const form = document.querySelector("#jf-form");
  const result = document.querySelector("#jf-form-result");
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