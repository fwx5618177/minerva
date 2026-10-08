import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- FormControlForm.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// \`novalidate\` turns off the browser bubbles: on submit, each field shows
// its own error message (\`invalid\`) when its control fails validation, and
// clears it once the control is valid again. Reset clears everything.

type Control = HTMLElement & {
  checkValidity(): boolean;
  validity?: ValidityState;
};
type Field = HTMLElement & { invalid: boolean; controlElement: Control | null };

const form = ref<HTMLFormElement>();
const resultText = ref("");

let fields: Field[] = [];
const control = (field: Field) => field.controlElement!;
const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  for (const field of fields) field.invalid = !control(field).checkValidity();
  const firstInvalid = fields.find((field) => field.invalid);
  if (firstInvalid) {
    control(firstInvalid).focus();
    resultText.value = "";
    return;
  }
  const entries = [...new FormData(form.value!)].map(
    ([key, value]) => \`\${key}=\${value}\`,
  );
  resultText.value = \`FormData: \${entries.join(", ")}\`;
};
const onEdit = (event: Event) => {
  const field = (event.target as HTMLElement).closest<Field>(
    "minerva-form-control",
  );
  if (field?.invalid && control(field).validity?.valid) field.invalid = false;
};
const onReset = () => {
  resultText.value = "";
  fields.forEach((field) => (field.invalid = false));
};

onMounted(() => {
  fields = Array.from(
    form.value!.querySelectorAll<Field>("minerva-form-control"),
  );
});
<\/script>

<template>
  <form
    id="fc-form"
    novalidate
    style="display: grid; gap: 16px; max-width: 360px"
    ref="form"
    @submit="onSubmit"
    @change="onEdit"
    @minerva-input="onEdit"
    @reset="onReset"
  >
    <minerva-form-control
      label="Email"
      required
      error-message="Enter a valid email address."
    >
      <minerva-input name="email" type="email"></minerva-input>
    </minerva-form-control>
    <minerva-form-control
      label="Seats"
      helper-text="Between 1 and 20."
      error-message="Choose between 1 and 20 seats."
    >
      <minerva-number-input
        name="seats"
        value="1"
        min="1"
        max="20"
        show-stepper
      ></minerva-number-input>
    </minerva-form-control>
    <minerva-form-control
      label="Terms"
      required
      error-message="Accept the terms to continue."
    >
      <minerva-checkbox
        name="terms"
        label="I accept the terms"
      ></minerva-checkbox>
    </minerva-form-control>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Create account</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="fc-form-result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// form-control-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// \`novalidate\` turns off the browser bubbles: on submit, each field shows
// its own error message (\`invalid\`) when its control fails validation, and
// clears it once the control is valid again. Reset clears everything.
type Control = HTMLElement & {
  checkValidity(): boolean;
  validity?: ValidityState;
};
type Field = HTMLElement & { invalid: boolean; controlElement: Control | null };

@Component({
  selector: "app-form-control-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="fc-form"
      novalidate
      style="display: grid; gap: 16px; max-width: 360px"
      #form
      (submit)="onSubmit($event)"
      (change)="onEdit($event)"
      (minerva-input)="onEdit($event)"
      (reset)="onReset($event)"
    >
      <minerva-form-control
        label="Email"
        required
        error-message="Enter a valid email address."
      >
        <minerva-input name="email" type="email"></minerva-input>
      </minerva-form-control>
      <minerva-form-control
        label="Seats"
        helper-text="Between 1 and 20."
        error-message="Choose between 1 and 20 seats."
      >
        <minerva-number-input
          name="seats"
          value="1"
          min="1"
          max="20"
          show-stepper
        ></minerva-number-input>
      </minerva-form-control>
      <minerva-form-control
        label="Terms"
        required
        error-message="Accept the terms to continue."
      >
        <minerva-checkbox
          name="terms"
          label="I accept the terms"
        ></minerva-checkbox>
      </minerva-form-control>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Create account</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="fc-form-result">{{ resultText }}</output>
    </form>
  \`,
})
export class FormControlFormComponent implements AfterViewInit {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  fields: Field[] = [];
  control = (field: Field) => field.controlElement!;
  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    for (const field of this.fields)
      field.invalid = !this.control(field).checkValidity();
    const firstInvalid = this.fields.find((field) => field.invalid);
    if (firstInvalid) {
      this.control(firstInvalid).focus();
      this.resultText = "";
      return;
    }
    const entries = [...new FormData(this.form.nativeElement)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    this.resultText = \`FormData: \${entries.join(", ")}\`;
  };
  onEdit = (event: Event) => {
    const field = (event.target as HTMLElement).closest<Field>(
      "minerva-form-control",
    );
    if (field?.invalid && this.control(field).validity?.valid)
      field.invalid = false;
  };
  onReset = () => {
    this.resultText = "";
    this.fields.forEach((field) => (field.invalid = false));
  };

  ngAfterViewInit(): void {
    this.fields = Array.from(
      this.form.nativeElement.querySelectorAll<Field>("minerva-form-control"),
    );
  }
}
`,svelte:`<!-- FormControlForm.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // \`novalidate\` turns off the browser bubbles: on submit, each field shows
  // its own error message (\`invalid\`) when its control fails validation, and
  // clears it once the control is valid again. Reset clears everything.

  type Control = HTMLElement & {
    checkValidity(): boolean;
    validity?: ValidityState;
  };
  type Field = HTMLElement & { invalid: boolean; controlElement: Control | null };

  let form: HTMLFormElement;
  let resultText = $state("");

  let fields: Field[] = [];
  const control = (field: Field) => field.controlElement!;
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    for (const field of fields) field.invalid = !control(field).checkValidity();
    const firstInvalid = fields.find((field) => field.invalid);
    if (firstInvalid) {
      control(firstInvalid).focus();
      resultText = "";
      return;
    }
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    resultText = \`FormData: \${entries.join(", ")}\`;
  };
  const onEdit = (event: Event) => {
    const field = (event.target as HTMLElement).closest<Field>(
      "minerva-form-control",
    );
    if (field?.invalid && control(field).validity?.valid) field.invalid = false;
  };
  const onReset = () => {
    resultText = "";
    fields.forEach((field) => (field.invalid = false));
  };

  onMount(() => {
    fields = Array.from(form.querySelectorAll<Field>("minerva-form-control"));
  });
<\/script>

<form
  id="fc-form"
  novalidate
  style="display: grid; gap: 16px; max-width: 360px"
  bind:this={form}
  onsubmit={onSubmit}
  onchange={onEdit}
  onminerva-input={onEdit}
  onreset={onReset}
>
  <minerva-form-control
    label="Email"
    required
    error-message="Enter a valid email address."
  >
    <minerva-input name="email" type="email"></minerva-input>
  </minerva-form-control>
  <minerva-form-control
    label="Seats"
    helper-text="Between 1 and 20."
    error-message="Choose between 1 and 20 seats."
  >
    <minerva-number-input
      name="seats"
      value="1"
      min="1"
      max="20"
      show-stepper
    ></minerva-number-input>
  </minerva-form-control>
  <minerva-form-control
    label="Terms"
    required
    error-message="Accept the terms to continue."
  >
    <minerva-checkbox
      name="terms"
      label="I accept the terms"
    ></minerva-checkbox>
  </minerva-form-control>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Create account</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="fc-form-result">{resultText}</output>
</form>
`,solid:`// FormControlForm.tsx

import { createSignal, onMount } from "solid-js";

// \`novalidate\` turns off the browser bubbles: on submit, each field shows
// its own error message (\`invalid\`) when its control fails validation, and
// clears it once the control is valid again. Reset clears everything.
type Control = HTMLElement & {
  checkValidity(): boolean;
  validity?: ValidityState;
};
type Field = HTMLElement & { invalid: boolean; controlElement: Control | null };

export default function FormControlForm() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  let fields: Field[] = [];
  const control = (field: Field) => field.controlElement!;
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    for (const field of fields) field.invalid = !control(field).checkValidity();
    const firstInvalid = fields.find((field) => field.invalid);
    if (firstInvalid) {
      control(firstInvalid).focus();
      setResultText("");
      return;
    }
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    setResultText(\`FormData: \${entries.join(", ")}\`);
  };
  const onEdit = (event: Event) => {
    const field = (event.target as HTMLElement).closest<Field>(
      "minerva-form-control",
    );
    if (field?.invalid && control(field).validity?.valid) field.invalid = false;
  };
  const onReset = () => {
    setResultText("");
    fields.forEach((field) => (field.invalid = false));
  };

  onMount(() => {
    fields = Array.from(form.querySelectorAll<Field>("minerva-form-control"));
  });

  return (
    <form
      id="fc-form"
      novalidate
      style="display: grid; gap: 16px; max-width: 360px"
      ref={form}
      on:submit={onSubmit}
      on:change={onEdit}
      on:minerva-input={onEdit}
      on:reset={onReset}
    >
      <minerva-form-control
        label="Email"
        required
        error-message="Enter a valid email address."
      >
        <minerva-input name="email" type="email"></minerva-input>
      </minerva-form-control>
      <minerva-form-control
        label="Seats"
        helper-text="Between 1 and 20."
        error-message="Choose between 1 and 20 seats."
      >
        <minerva-number-input
          name="seats"
          value="1"
          min="1"
          max="20"
          show-stepper
        ></minerva-number-input>
      </minerva-form-control>
      <minerva-form-control
        label="Terms"
        required
        error-message="Accept the terms to continue."
      >
        <minerva-checkbox
          name="terms"
          label="I accept the terms"
        ></minerva-checkbox>
      </minerva-form-control>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Create account</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="fc-form-result">{resultText()}</output>
    </form>
  );
}
`,html:`<form
  id="fc-form"
  novalidate
  style="display: grid; gap: 16px; max-width: 360px"
>
  <minerva-form-control
    label="Email"
    required
    error-message="Enter a valid email address."
  >
    <minerva-input name="email" type="email"></minerva-input>
  </minerva-form-control>
  <minerva-form-control
    label="Seats"
    helper-text="Between 1 and 20."
    error-message="Choose between 1 and 20 seats."
  >
    <minerva-number-input
      name="seats"
      value="1"
      min="1"
      max="20"
      show-stepper
    ></minerva-number-input>
  </minerva-form-control>
  <minerva-form-control
    label="Terms"
    required
    error-message="Accept the terms to continue."
  >
    <minerva-checkbox
      name="terms"
      label="I accept the terms"
    ></minerva-checkbox>
  </minerva-form-control>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Create account</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="fc-form-result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // \`novalidate\` turns off the browser bubbles: on submit, each field shows
  // its own error message (\`invalid\`) when its control fails validation, and
  // clears it once the control is valid again. Reset clears everything.
  const form = document.querySelector("#fc-form");
  const result = document.querySelector("#fc-form-result");
  const fields = Array.from(form.querySelectorAll("minerva-form-control"));
  const control = (field) => field.controlElement;
  const onSubmit = (event) => {
    event.preventDefault();
    for (const field of fields) field.invalid = !control(field).checkValidity();
    const firstInvalid = fields.find((field) => field.invalid);
    if (firstInvalid) {
      control(firstInvalid).focus();
      result.value = "";
      return;
    }
    const entries = [...new FormData(form)].map(
      ([key, value]) => \`\${key}=\${value}\`,
    );
    result.value = \`FormData: \${entries.join(", ")}\`;
  };
  const onEdit = (event) => {
    const field = event.target.closest("minerva-form-control");
    if (field?.invalid && control(field).validity?.valid) field.invalid = false;
  };
  const onReset = () => {
    result.value = "";
    fields.forEach((field) => (field.invalid = false));
  };
  form.addEventListener("submit", onSubmit);
  form.addEventListener("change", onEdit);
  form.addEventListener("minerva-input", onEdit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};