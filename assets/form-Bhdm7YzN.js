import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CheckboxForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Submitting validates first (the required box blocks it with the browser's
// message); a checked box submits its \`value\`, an unchecked one nothing.
// Reset restores the \`checked\` attributes.

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
    id="cb-form"
    style="display: grid; gap: 12px; justify-items: start"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <minerva-checkbox
      name="terms"
      required
      label="I accept the terms"
    ></minerva-checkbox>
    <minerva-checkbox
      name="newsletter"
      value="weekly"
      checked
      label="Weekly newsletter"
    ></minerva-checkbox>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Submit</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="cb-form-result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// checkbox-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Submitting validates first (the required box blocks it with the browser's
// message); a checked box submits its \`value\`, an unchecked one nothing.
// Reset restores the \`checked\` attributes.

@Component({
  selector: "app-checkbox-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="cb-form"
      style="display: grid; gap: 12px; justify-items: start"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <minerva-checkbox
        name="terms"
        required
        label="I accept the terms"
      ></minerva-checkbox>
      <minerva-checkbox
        name="newsletter"
        value="weekly"
        checked
        label="Weekly newsletter"
      ></minerva-checkbox>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Submit</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="cb-form-result">{{ resultText }}</output>
    </form>
  \`,
})
export class CheckboxFormComponent {
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
`,svelte:`<!-- CheckboxForm.svelte -->

<script lang="ts">
  // Submitting validates first (the required box blocks it with the browser's
  // message); a checked box submits its \`value\`, an unchecked one nothing.
  // Reset restores the \`checked\` attributes.

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
  id="cb-form"
  style="display: grid; gap: 12px; justify-items: start"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <minerva-checkbox
    name="terms"
    required
    label="I accept the terms"
  ></minerva-checkbox>
  <minerva-checkbox
    name="newsletter"
    value="weekly"
    checked
    label="Weekly newsletter"
  ></minerva-checkbox>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Submit</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="cb-form-result">{resultText}</output>
</form>
`,solid:`// CheckboxForm.tsx

import { createSignal } from "solid-js";

// Submitting validates first (the required box blocks it with the browser's
// message); a checked box submits its \`value\`, an unchecked one nothing.
// Reset restores the \`checked\` attributes.

export default function CheckboxForm() {
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
      id="cb-form"
      style="display: grid; gap: 12px; justify-items: start"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <minerva-checkbox
        name="terms"
        required
        label="I accept the terms"
      ></minerva-checkbox>
      <minerva-checkbox
        name="newsletter"
        value="weekly"
        checked
        label="Weekly newsletter"
      ></minerva-checkbox>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Submit</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="cb-form-result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="cb-form" style="display: grid; gap: 12px; justify-items: start">
  <minerva-checkbox
    name="terms"
    required
    label="I accept the terms"
  ></minerva-checkbox>
  <minerva-checkbox
    name="newsletter"
    value="weekly"
    checked
    label="Weekly newsletter"
  ></minerva-checkbox>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Submit</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="cb-form-result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Submitting validates first (the required box blocks it with the browser's
  // message); a checked box submits its \`value\`, an unchecked one nothing.
  // Reset restores the \`checked\` attributes.
  const form = document.querySelector("#cb-form");
  const result = document.querySelector("#cb-form-result");
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