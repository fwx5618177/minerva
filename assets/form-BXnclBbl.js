import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SwitchForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Like a checkbox: a switch that is on submits its \`value\` (default "on"),
// \`required\` keeps the form invalid until it is on, and reset restores the
// \`checked\` attributes.

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
    id="sw-form"
    style="display: grid; gap: 12px; justify-items: start"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <minerva-switch
      name="notifications"
      value="enabled"
      checked
      label="Notifications"
    ></minerva-switch>
    <minerva-switch
      name="consent"
      required
      label="I agree to the data policy"
    ></minerva-switch>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Save</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="sw-form-result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// switch-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Like a checkbox: a switch that is on submits its \`value\` (default "on"),
// \`required\` keeps the form invalid until it is on, and reset restores the
// \`checked\` attributes.

@Component({
  selector: "app-switch-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="sw-form"
      style="display: grid; gap: 12px; justify-items: start"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <minerva-switch
        name="notifications"
        value="enabled"
        checked
        label="Notifications"
      ></minerva-switch>
      <minerva-switch
        name="consent"
        required
        label="I agree to the data policy"
      ></minerva-switch>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Save</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="sw-form-result">{{ resultText }}</output>
    </form>
  \`,
})
export class SwitchFormComponent {
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
`,svelte:`<!-- SwitchForm.svelte -->

<script lang="ts">
  // Like a checkbox: a switch that is on submits its \`value\` (default "on"),
  // \`required\` keeps the form invalid until it is on, and reset restores the
  // \`checked\` attributes.

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
  id="sw-form"
  style="display: grid; gap: 12px; justify-items: start"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <minerva-switch
    name="notifications"
    value="enabled"
    checked
    label="Notifications"
  ></minerva-switch>
  <minerva-switch
    name="consent"
    required
    label="I agree to the data policy"
  ></minerva-switch>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Save</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="sw-form-result">{resultText}</output>
</form>
`,solid:`// SwitchForm.tsx

import { createSignal } from "solid-js";

// Like a checkbox: a switch that is on submits its \`value\` (default "on"),
// \`required\` keeps the form invalid until it is on, and reset restores the
// \`checked\` attributes.

export default function SwitchForm() {
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
      id="sw-form"
      style="display: grid; gap: 12px; justify-items: start"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <minerva-switch
        name="notifications"
        value="enabled"
        checked
        label="Notifications"
      ></minerva-switch>
      <minerva-switch
        name="consent"
        required
        label="I agree to the data policy"
      ></minerva-switch>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Save</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="sw-form-result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="sw-form" style="display: grid; gap: 12px; justify-items: start">
  <minerva-switch
    name="notifications"
    value="enabled"
    checked
    label="Notifications"
  ></minerva-switch>
  <minerva-switch
    name="consent"
    required
    label="I agree to the data policy"
  ></minerva-switch>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Save</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="sw-form-result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Like a checkbox: a switch that is on submits its \`value\` (default "on"),
  // \`required\` keeps the form invalid until it is on, and reset restores the
  // \`checked\` attributes.
  const form = document.querySelector("#sw-form");
  const result = document.querySelector("#sw-form-result");
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