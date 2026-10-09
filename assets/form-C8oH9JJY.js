import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- UploadForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Every listed file is submitted under \`name\` (multipart FormData);
// \`required\` blocks submission without files and reset empties the list.

const form = ref<HTMLFormElement>();
const resultText = ref("");

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const files = new FormData(form.value!).getAll("receipts") as File[];
  resultText.value = \`FormData: \${files.map((file) => \`\${file.name} (\${file.size} B)\`).join(", ")}\`;
};
const onReset = () => (resultText.value = "");
<\/script>

<template>
  <form
    id="up-form"
    style="display: grid; gap: 12px; max-width: 480px"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <minerva-upload
      name="receipts"
      label="Receipts (PDF or image)"
      accept=".pdf,image/*"
      multiple
      required
      removable
    ></minerva-upload>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Submit expense</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="up-form-result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// upload-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Every listed file is submitted under \`name\` (multipart FormData);
// \`required\` blocks submission without files and reset empties the list.

@Component({
  selector: "app-upload-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="up-form"
      style="display: grid; gap: 12px; max-width: 480px"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <minerva-upload
        name="receipts"
        label="Receipts (PDF or image)"
        accept=".pdf,image/*"
        multiple
        required
        removable
      ></minerva-upload>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Submit expense</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="up-form-result">{{ resultText }}</output>
    </form>
  \`,
})
export class UploadFormComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const files = new FormData(this.form.nativeElement).getAll(
      "receipts",
    ) as File[];
    this.resultText = \`FormData: \${files.map((file) => \`\${file.name} (\${file.size} B)\`).join(", ")}\`;
  };
  onReset = () => (this.resultText = "");
}
`,svelte:`<!-- UploadForm.svelte -->

<script lang="ts">
  // Every listed file is submitted under \`name\` (multipart FormData);
  // \`required\` blocks submission without files and reset empties the list.

  let form: HTMLFormElement;
  let resultText = $state("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const files = new FormData(form).getAll("receipts") as File[];
    resultText = \`FormData: \${files.map((file) => \`\${file.name} (\${file.size} B)\`).join(", ")}\`;
  };
  const onReset = () => (resultText = "");
<\/script>

<form
  id="up-form"
  style="display: grid; gap: 12px; max-width: 480px"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <minerva-upload
    name="receipts"
    label="Receipts (PDF or image)"
    accept=".pdf,image/*"
    multiple
    required
    removable
  ></minerva-upload>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Submit expense</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="up-form-result">{resultText}</output>
</form>
`,solid:`// UploadForm.tsx

import { createSignal } from "solid-js";

// Every listed file is submitted under \`name\` (multipart FormData);
// \`required\` blocks submission without files and reset empties the list.

export default function UploadForm() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const files = new FormData(form).getAll("receipts") as File[];
    setResultText(
      \`FormData: \${files.map((file) => \`\${file.name} (\${file.size} B)\`).join(", ")}\`,
    );
  };
  const onReset = () => setResultText("");

  return (
    <form
      id="up-form"
      style="display: grid; gap: 12px; max-width: 480px"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <minerva-upload
        name="receipts"
        label="Receipts (PDF or image)"
        accept=".pdf,image/*"
        multiple
        required
        removable
      ></minerva-upload>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Submit expense</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="up-form-result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="up-form" style="display: grid; gap: 12px; max-width: 480px">
  <minerva-upload
    name="receipts"
    label="Receipts (PDF or image)"
    accept=".pdf,image/*"
    multiple
    required
    removable
  ></minerva-upload>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Submit expense</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="up-form-result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Every listed file is submitted under \`name\` (multipart FormData);
  // \`required\` blocks submission without files and reset empties the list.
  const form = document.querySelector("#up-form");
  const result = document.querySelector("#up-form-result");
  const onSubmit = (event) => {
    event.preventDefault();
    const files = new FormData(form).getAll("receipts");
    result.value = \`FormData: \${files.map((file) => \`\${file.name} (\${file.size} B)\`).join(", ")}\`;
  };
  const onReset = () => (result.value = "");
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};