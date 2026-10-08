import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- InputForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The browser validates the inputs on submit (required, type, minlength,
// pattern) and reports the first invalid one; \`invalid\` styles the fields
// that failed until they are edited. Reset restores the \`value\` attributes.

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
    .value!.querySelectorAll<Field>("minerva-input")
    .forEach((field) => (field.invalid = false));
};
<\/script>

<template>
  <form
    id="in-form"
    style="display: grid; gap: 8px; max-width: 360px"
    ref="form"
    @invalid.capture="onInvalid"
    @minerva-input="onInput"
    @submit="onSubmit"
    @reset="onReset"
  >
    <label for="in-form-email">Email</label>
    <minerva-input
      id="in-form-email"
      name="email"
      type="email"
      required
      placeholder="you@example.com"
    ></minerva-input>
    <label for="in-form-user">Username (3 to 16 lowercase letters)</label>
    <minerva-input
      id="in-form-user"
      name="username"
      required
      minlength="3"
      maxlength="16"
      pattern="[a-z]+"
      show-char-count
    ></minerva-input>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Sign up</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="in-form-result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// input-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
  type OnDestroy,
} from "@angular/core";

// The browser validates the inputs on submit (required, type, minlength,
// pattern) and reports the first invalid one; \`invalid\` styles the fields
// that failed until they are edited. Reset restores the \`value\` attributes.
type Field = HTMLElement & { invalid: boolean; validity?: ValidityState };

@Component({
  selector: "app-input-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="in-form"
      style="display: grid; gap: 8px; max-width: 360px"
      #form
      (minerva-input)="onInput($event)"
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <label for="in-form-email">Email</label>
      <minerva-input
        id="in-form-email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
      ></minerva-input>
      <label for="in-form-user">Username (3 to 16 lowercase letters)</label>
      <minerva-input
        id="in-form-user"
        name="username"
        required
        minlength="3"
        maxlength="16"
        pattern="[a-z]+"
        show-char-count
      ></minerva-input>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Sign up</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="in-form-result">{{ resultText }}</output>
    </form>
  \`,
})
export class InputFormComponent implements AfterViewInit, OnDestroy {
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
      .querySelectorAll<Field>("minerva-input")
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
`,svelte:`<!-- InputForm.svelte -->

<script lang="ts">
  // The browser validates the inputs on submit (required, type, minlength,
  // pattern) and reports the first invalid one; \`invalid\` styles the fields
  // that failed until they are edited. Reset restores the \`value\` attributes.

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
      .querySelectorAll<Field>("minerva-input")
      .forEach((field) => (field.invalid = false));
  };
<\/script>

<form
  id="in-form"
  style="display: grid; gap: 8px; max-width: 360px"
  bind:this={form}
  oninvalidcapture={onInvalid}
  onminerva-input={onInput}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <label for="in-form-email">Email</label>
  <minerva-input
    id="in-form-email"
    name="email"
    type="email"
    required
    placeholder="you@example.com"
  ></minerva-input>
  <label for="in-form-user">Username (3 to 16 lowercase letters)</label>
  <minerva-input
    id="in-form-user"
    name="username"
    required
    minlength="3"
    maxlength="16"
    pattern="[a-z]+"
    show-char-count
  ></minerva-input>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Sign up</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="in-form-result">{resultText}</output>
</form>
`,solid:`// InputForm.tsx

import { createSignal } from "solid-js";

// The browser validates the inputs on submit (required, type, minlength,
// pattern) and reports the first invalid one; \`invalid\` styles the fields
// that failed until they are edited. Reset restores the \`value\` attributes.
type Field = HTMLElement & { invalid: boolean; validity?: ValidityState };

export default function InputForm() {
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
      .querySelectorAll<Field>("minerva-input")
      .forEach((field) => (field.invalid = false));
  };

  return (
    <form
      id="in-form"
      style="display: grid; gap: 8px; max-width: 360px"
      ref={form}
      oncapture:invalid={onInvalid}
      on:minerva-input={onInput}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <label for="in-form-email">Email</label>
      <minerva-input
        id="in-form-email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
      ></minerva-input>
      <label for="in-form-user">Username (3 to 16 lowercase letters)</label>
      <minerva-input
        id="in-form-user"
        name="username"
        required
        minlength="3"
        maxlength="16"
        pattern="[a-z]+"
        show-char-count
      ></minerva-input>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Sign up</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="in-form-result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="in-form" style="display: grid; gap: 8px; max-width: 360px">
  <label for="in-form-email">Email</label>
  <minerva-input
    id="in-form-email"
    name="email"
    type="email"
    required
    placeholder="you@example.com"
  ></minerva-input>
  <label for="in-form-user">Username (3 to 16 lowercase letters)</label>
  <minerva-input
    id="in-form-user"
    name="username"
    required
    minlength="3"
    maxlength="16"
    pattern="[a-z]+"
    show-char-count
  ></minerva-input>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Sign up</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="in-form-result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // The browser validates the inputs on submit (required, type, minlength,
  // pattern) and reports the first invalid one; \`invalid\` styles the fields
  // that failed until they are edited. Reset restores the \`value\` attributes.
  const form = document.querySelector("#in-form");
  const result = document.querySelector("#in-form-result");
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
      .querySelectorAll("minerva-input")
      .forEach((field) => (field.invalid = false));
  };
  form.addEventListener("invalid", onInvalid, true);
  form.addEventListener("minerva-input", onInput);
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};