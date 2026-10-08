import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- RadioForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The group is the form control: it submits the selected radio's value
// under its name; \`required\` blocks submission while nothing is selected.
// Reset restores the \`value\` attribute.

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
    id="rd-form"
    style="display: grid; gap: 12px; justify-items: start"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <minerva-radio-group
      name="size"
      label="T-shirt size"
      required
      direction="horizontal"
    >
      <minerva-radio value="s" label="S"></minerva-radio>
      <minerva-radio value="m" label="M"></minerva-radio>
      <minerva-radio value="l" label="L"></minerva-radio>
    </minerva-radio-group>
    <minerva-radio-group
      name="color"
      label="Color"
      value="blue"
      direction="horizontal"
    >
      <minerva-radio value="blue" label="Blue"></minerva-radio>
      <minerva-radio value="green" label="Green"></minerva-radio>
    </minerva-radio-group>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Submit</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="rd-form-result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// radio-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The group is the form control: it submits the selected radio's value
// under its name; \`required\` blocks submission while nothing is selected.
// Reset restores the \`value\` attribute.

@Component({
  selector: "app-radio-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="rd-form"
      style="display: grid; gap: 12px; justify-items: start"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <minerva-radio-group
        name="size"
        label="T-shirt size"
        required
        direction="horizontal"
      >
        <minerva-radio value="s" label="S"></minerva-radio>
        <minerva-radio value="m" label="M"></minerva-radio>
        <minerva-radio value="l" label="L"></minerva-radio>
      </minerva-radio-group>
      <minerva-radio-group
        name="color"
        label="Color"
        value="blue"
        direction="horizontal"
      >
        <minerva-radio value="blue" label="Blue"></minerva-radio>
        <minerva-radio value="green" label="Green"></minerva-radio>
      </minerva-radio-group>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Submit</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="rd-form-result">{{ resultText }}</output>
    </form>
  \`,
})
export class RadioFormComponent {
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
`,svelte:`<!-- RadioForm.svelte -->

<script lang="ts">
  // The group is the form control: it submits the selected radio's value
  // under its name; \`required\` blocks submission while nothing is selected.
  // Reset restores the \`value\` attribute.

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
  id="rd-form"
  style="display: grid; gap: 12px; justify-items: start"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <minerva-radio-group
    name="size"
    label="T-shirt size"
    required
    direction="horizontal"
  >
    <minerva-radio value="s" label="S"></minerva-radio>
    <minerva-radio value="m" label="M"></minerva-radio>
    <minerva-radio value="l" label="L"></minerva-radio>
  </minerva-radio-group>
  <minerva-radio-group
    name="color"
    label="Color"
    value="blue"
    direction="horizontal"
  >
    <minerva-radio value="blue" label="Blue"></minerva-radio>
    <minerva-radio value="green" label="Green"></minerva-radio>
  </minerva-radio-group>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Submit</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="rd-form-result">{resultText}</output>
</form>
`,solid:`// RadioForm.tsx

import { createSignal } from "solid-js";

// The group is the form control: it submits the selected radio's value
// under its name; \`required\` blocks submission while nothing is selected.
// Reset restores the \`value\` attribute.

export default function RadioForm() {
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
      id="rd-form"
      style="display: grid; gap: 12px; justify-items: start"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <minerva-radio-group
        name="size"
        label="T-shirt size"
        required
        direction="horizontal"
      >
        <minerva-radio value="s" label="S"></minerva-radio>
        <minerva-radio value="m" label="M"></minerva-radio>
        <minerva-radio value="l" label="L"></minerva-radio>
      </minerva-radio-group>
      <minerva-radio-group
        name="color"
        label="Color"
        value="blue"
        direction="horizontal"
      >
        <minerva-radio value="blue" label="Blue"></minerva-radio>
        <minerva-radio value="green" label="Green"></minerva-radio>
      </minerva-radio-group>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Submit</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="rd-form-result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="rd-form" style="display: grid; gap: 12px; justify-items: start">
  <minerva-radio-group
    name="size"
    label="T-shirt size"
    required
    direction="horizontal"
  >
    <minerva-radio value="s" label="S"></minerva-radio>
    <minerva-radio value="m" label="M"></minerva-radio>
    <minerva-radio value="l" label="L"></minerva-radio>
  </minerva-radio-group>
  <minerva-radio-group
    name="color"
    label="Color"
    value="blue"
    direction="horizontal"
  >
    <minerva-radio value="blue" label="Blue"></minerva-radio>
    <minerva-radio value="green" label="Green"></minerva-radio>
  </minerva-radio-group>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Submit</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="rd-form-result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // The group is the form control: it submits the selected radio's value
  // under its name; \`required\` blocks submission while nothing is selected.
  // Reset restores the \`value\` attribute.
  const form = document.querySelector("#rd-form");
  const result = document.querySelector("#rd-form-result");
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