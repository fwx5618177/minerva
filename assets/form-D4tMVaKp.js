import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TextareaForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// required / minlength / maxlength use the browser's messages on submit;
// \`invalid\` styles the field after a failed submit until it is fixed.
// Reset restores the \`value\` attribute.

type Field = HTMLElement & { invalid: boolean; validity?: ValidityState };

const form = ref<HTMLFormElement>();
const resultText = ref("");

const onInvalid = (event: Event) => ((event.target as Field).invalid = true);
const onInput = (event: Event) => {
  const field = event.target as Field;
  if (field.validity?.valid) field.invalid = false;
};
const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const entries = [...new FormData(form.value!)].map(
    ([key, value]) => \`\${key}=\${value}\`,
  );
  resultText.value = \`FormData: \${entries.join(", ")}\`;
};
const onReset = () => {
  resultText.value = "";
  form
    .value!.querySelectorAll<Field>("minerva-textarea")
    .forEach((field) => (field.invalid = false));
};
<\/script>

<template>
  <form
    id="ta-form"
    style="display: grid; gap: 8px; max-width: 420px"
    ref="form"
    @invalid.capture="onInvalid"
    @minerva-input="onInput"
    @submit="onSubmit"
    @reset="onReset"
  >
    <label for="ta-form-feedback">Feedback (20 to 200 characters)</label>
    <minerva-textarea
      id="ta-form-feedback"
      name="feedback"
      rows="4"
      required
      minlength="20"
      maxlength="200"
      placeholder="What did you like? What can we improve?"
    ></minerva-textarea>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Send</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="ta-form-result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// textarea-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
  type OnDestroy,
} from "@angular/core";

// required / minlength / maxlength use the browser's messages on submit;
// \`invalid\` styles the field after a failed submit until it is fixed.
// Reset restores the \`value\` attribute.
type Field = HTMLElement & { invalid: boolean; validity?: ValidityState };

@Component({
  selector: "app-textarea-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="ta-form"
      style="display: grid; gap: 8px; max-width: 420px"
      #form
      (minerva-input)="onInput($event)"
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <label for="ta-form-feedback">Feedback (20 to 200 characters)</label>
      <minerva-textarea
        id="ta-form-feedback"
        name="feedback"
        rows="4"
        required
        minlength="20"
        maxlength="200"
        placeholder="What did you like? What can we improve?"
      ></minerva-textarea>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Send</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="ta-form-result">{{ resultText }}</output>
    </form>
  \`,
})
export class TextareaFormComponent implements AfterViewInit, OnDestroy {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  onInvalid = (event: Event) => ((event.target as Field).invalid = true);
  onInput = (event: Event) => {
    const field = event.target as Field;
    if (field.validity?.valid) field.invalid = false;
  };
  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const entries = [...new FormData(this.form.nativeElement)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    this.resultText = \`FormData: \${entries.join(", ")}\`;
  };
  onReset = () => {
    this.resultText = "";
    this.form.nativeElement
      .querySelectorAll<Field>("minerva-textarea")
      .forEach((field) => (field.invalid = false));
  };

  ngAfterViewInit(): void {
    this.form.nativeElement.addEventListener("invalid", this.onInvalid, true);
  }

  ngOnDestroy(): void {
    this.form.nativeElement.removeEventListener(
      "invalid",
      this.onInvalid,
      true,
    );
  }
}
`,svelte:`<!-- TextareaForm.svelte -->

<script lang="ts">
  // required / minlength / maxlength use the browser's messages on submit;
  // \`invalid\` styles the field after a failed submit until it is fixed.
  // Reset restores the \`value\` attribute.

  type Field = HTMLElement & { invalid: boolean; validity?: ValidityState };

  let form: HTMLFormElement;
  let resultText = $state("");

  const onInvalid = (event: Event) => ((event.target as Field).invalid = true);
  const onInput = (event: Event) => {
    const field = event.target as Field;
    if (field.validity?.valid) field.invalid = false;
  };
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    resultText = \`FormData: \${entries.join(", ")}\`;
  };
  const onReset = () => {
    resultText = "";
    form
      .querySelectorAll<Field>("minerva-textarea")
      .forEach((field) => (field.invalid = false));
  };
<\/script>

<form
  id="ta-form"
  style="display: grid; gap: 8px; max-width: 420px"
  bind:this={form}
  oninvalidcapture={onInvalid}
  onminerva-input={onInput}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <label for="ta-form-feedback">Feedback (20 to 200 characters)</label>
  <minerva-textarea
    id="ta-form-feedback"
    name="feedback"
    rows="4"
    required
    minlength="20"
    maxlength="200"
    placeholder="What did you like? What can we improve?"
  ></minerva-textarea>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Send</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="ta-form-result">{resultText}</output>
</form>
`,solid:`// TextareaForm.tsx

import { createSignal } from "solid-js";

// required / minlength / maxlength use the browser's messages on submit;
// \`invalid\` styles the field after a failed submit until it is fixed.
// Reset restores the \`value\` attribute.
type Field = HTMLElement & { invalid: boolean; validity?: ValidityState };

export default function TextareaForm() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const onInvalid = (event: Event) => ((event.target as Field).invalid = true);
  const onInput = (event: Event) => {
    const field = event.target as Field;
    if (field.validity?.valid) field.invalid = false;
  };
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    setResultText(\`FormData: \${entries.join(", ")}\`);
  };
  const onReset = () => {
    setResultText("");
    form
      .querySelectorAll<Field>("minerva-textarea")
      .forEach((field) => (field.invalid = false));
  };

  return (
    <form
      id="ta-form"
      style="display: grid; gap: 8px; max-width: 420px"
      ref={form}
      oncapture:invalid={onInvalid}
      on:minerva-input={onInput}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <label for="ta-form-feedback">Feedback (20 to 200 characters)</label>
      <minerva-textarea
        id="ta-form-feedback"
        name="feedback"
        rows="4"
        required
        minlength="20"
        maxlength="200"
        placeholder="What did you like? What can we improve?"
      ></minerva-textarea>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Send</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="ta-form-result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="ta-form" style="display: grid; gap: 8px; max-width: 420px">
  <label for="ta-form-feedback">Feedback (20 to 200 characters)</label>
  <minerva-textarea
    id="ta-form-feedback"
    name="feedback"
    rows="4"
    required
    minlength="20"
    maxlength="200"
    placeholder="What did you like? What can we improve?"
  ></minerva-textarea>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Send</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="ta-form-result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // required / minlength / maxlength use the browser's messages on submit;
  // \`invalid\` styles the field after a failed submit until it is fixed.
  // Reset restores the \`value\` attribute.
  const form = document.querySelector("#ta-form");
  const result = document.querySelector("#ta-form-result");
  const onInvalid = (event) => (event.target.invalid = true);
  const onInput = (event) => {
    const field = event.target;
    if (field.validity?.valid) field.invalid = false;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    result.value = \`FormData: \${entries.join(", ")}\`;
  };
  const onReset = () => {
    result.value = "";
    form
      .querySelectorAll("minerva-textarea")
      .forEach((field) => (field.invalid = false));
  };
  form.addEventListener("invalid", onInvalid, true);
  form.addEventListener("minerva-input", onInput);
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};