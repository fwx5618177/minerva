import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TimePickerForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Submits a 24-hour value under \`name\`; \`required\` blocks an empty field and
// form.reset() restores the \`value\` attribute.

const form = ref<HTMLFormElement>();
const resultText = ref("");

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  resultText.value = \`start = \${new FormData(form.value!).get("start")}\`;
};
const onReset = () => (resultText.value = "");
<\/script>

<template>
  <form
    id="booking"
    style="display: grid; gap: 8px; justify-items: start"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <label for="start">Start time</label>
    <minerva-time-picker
      id="start"
      name="start"
      format="HH:mm"
      hide-second
      minute-step="30"
      value="10:00"
      required
    ></minerva-time-picker>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Book</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// time-picker-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Submits a 24-hour value under \`name\`; \`required\` blocks an empty field and
// form.reset() restores the \`value\` attribute.

@Component({
  selector: "app-time-picker-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="booking"
      style="display: grid; gap: 8px; justify-items: start"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <label for="start">Start time</label>
      <minerva-time-picker
        id="start"
        name="start"
        format="HH:mm"
        hide-second
        minute-step="30"
        value="10:00"
        required
      ></minerva-time-picker>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Book</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="result">{{ resultText }}</output>
    </form>
  \`,
})
export class TimePickerFormComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    this.resultText = \`start = \${new FormData(this.form.nativeElement).get("start")}\`;
  };
  onReset = () => (this.resultText = "");
}
`,svelte:`<!-- TimePickerForm.svelte -->

<script lang="ts">
  // Submits a 24-hour value under \`name\`; \`required\` blocks an empty field and
  // form.reset() restores the \`value\` attribute.

  let form: HTMLFormElement;
  let resultText = $state("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    resultText = \`start = \${new FormData(form).get("start")}\`;
  };
  const onReset = () => (resultText = "");
<\/script>

<form
  id="booking"
  style="display: grid; gap: 8px; justify-items: start"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <label for="start">Start time</label>
  <minerva-time-picker
    id="start"
    name="start"
    format="HH:mm"
    hide-second
    minute-step="30"
    value="10:00"
    required
  ></minerva-time-picker>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Book</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="result">{resultText}</output>
</form>
`,solid:`// TimePickerForm.tsx

import { createSignal } from "solid-js";

// Submits a 24-hour value under \`name\`; \`required\` blocks an empty field and
// form.reset() restores the \`value\` attribute.

export default function TimePickerForm() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    setResultText(\`start = \${new FormData(form).get("start")}\`);
  };
  const onReset = () => setResultText("");

  return (
    <form
      id="booking"
      style="display: grid; gap: 8px; justify-items: start"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <label for="start">Start time</label>
      <minerva-time-picker
        id="start"
        name="start"
        format="HH:mm"
        hide-second
        minute-step="30"
        value="10:00"
        required
      ></minerva-time-picker>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Book</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="booking" style="display: grid; gap: 8px; justify-items: start">
  <label for="start">Start time</label>
  <minerva-time-picker
    id="start"
    name="start"
    format="HH:mm"
    hide-second
    minute-step="30"
    value="10:00"
    required
  ></minerva-time-picker>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Book</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Submits a 24-hour value under \`name\`; \`required\` blocks an empty field and
  // form.reset() restores the \`value\` attribute.
  const form = document.querySelector("#booking");
  const result = document.querySelector("#result");
  const onSubmit = (event) => {
    event.preventDefault();
    result.value = \`start = \${new FormData(form).get("start")}\`;
  };
  const onReset = () => (result.value = "");
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};