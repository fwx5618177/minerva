import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- NumberInputForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Out-of-range or non-numeric drafts make the field invalid (custom
// below-min / above-max messages here), so submitting reports them. The
// committed value is submitted with its precision; reset restores \`value\`.

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
    id="ni-form"
    style="display: grid; gap: 8px; max-width: 280px"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <label for="ni-form-qty">Quantity (1 to 99)</label>
    <minerva-number-input
      id="ni-form-qty"
      name="quantity"
      required
      min="1"
      max="99"
      show-stepper
      below-min-message="Order at least one item."
      above-max-message="99 items at most per order."
    ></minerva-number-input>
    <label for="ni-form-discount">Discount (%)</label>
    <minerva-number-input
      id="ni-form-discount"
      name="discount"
      value="5"
      min="0"
      max="50"
      step="0.5"
    ></minerva-number-input>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Order</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="ni-form-result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// number-input-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Out-of-range or non-numeric drafts make the field invalid (custom
// below-min / above-max messages here), so submitting reports them. The
// committed value is submitted with its precision; reset restores \`value\`.

@Component({
  selector: "app-number-input-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="ni-form"
      style="display: grid; gap: 8px; max-width: 280px"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <label for="ni-form-qty">Quantity (1 to 99)</label>
      <minerva-number-input
        id="ni-form-qty"
        name="quantity"
        required
        min="1"
        max="99"
        show-stepper
        below-min-message="Order at least one item."
        above-max-message="99 items at most per order."
      ></minerva-number-input>
      <label for="ni-form-discount">Discount (%)</label>
      <minerva-number-input
        id="ni-form-discount"
        name="discount"
        value="5"
        min="0"
        max="50"
        step="0.5"
      ></minerva-number-input>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Order</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="ni-form-result">{{ resultText }}</output>
    </form>
  \`,
})
export class NumberInputFormComponent {
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
`,svelte:`<!-- NumberInputForm.svelte -->

<script lang="ts">
  // Out-of-range or non-numeric drafts make the field invalid (custom
  // below-min / above-max messages here), so submitting reports them. The
  // committed value is submitted with its precision; reset restores \`value\`.

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
  id="ni-form"
  style="display: grid; gap: 8px; max-width: 280px"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <label for="ni-form-qty">Quantity (1 to 99)</label>
  <minerva-number-input
    id="ni-form-qty"
    name="quantity"
    required
    min="1"
    max="99"
    show-stepper
    below-min-message="Order at least one item."
    above-max-message="99 items at most per order."
  ></minerva-number-input>
  <label for="ni-form-discount">Discount (%)</label>
  <minerva-number-input
    id="ni-form-discount"
    name="discount"
    value="5"
    min="0"
    max="50"
    step="0.5"
  ></minerva-number-input>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Order</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="ni-form-result">{resultText}</output>
</form>
`,solid:`// NumberInputForm.tsx

import { createSignal } from "solid-js";

// Out-of-range or non-numeric drafts make the field invalid (custom
// below-min / above-max messages here), so submitting reports them. The
// committed value is submitted with its precision; reset restores \`value\`.

export default function NumberInputForm() {
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
      id="ni-form"
      style="display: grid; gap: 8px; max-width: 280px"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <label for="ni-form-qty">Quantity (1 to 99)</label>
      <minerva-number-input
        id="ni-form-qty"
        name="quantity"
        required
        min="1"
        max="99"
        show-stepper
        below-min-message="Order at least one item."
        above-max-message="99 items at most per order."
      ></minerva-number-input>
      <label for="ni-form-discount">Discount (%)</label>
      <minerva-number-input
        id="ni-form-discount"
        name="discount"
        value="5"
        min="0"
        max="50"
        step="0.5"
      ></minerva-number-input>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Order</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="ni-form-result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="ni-form" style="display: grid; gap: 8px; max-width: 280px">
  <label for="ni-form-qty">Quantity (1 to 99)</label>
  <minerva-number-input
    id="ni-form-qty"
    name="quantity"
    required
    min="1"
    max="99"
    show-stepper
    below-min-message="Order at least one item."
    above-max-message="99 items at most per order."
  ></minerva-number-input>
  <label for="ni-form-discount">Discount (%)</label>
  <minerva-number-input
    id="ni-form-discount"
    name="discount"
    value="5"
    min="0"
    max="50"
    step="0.5"
  ></minerva-number-input>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Order</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="ni-form-result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Out-of-range or non-numeric drafts make the field invalid (custom
  // below-min / above-max messages here), so submitting reports them. The
  // committed value is submitted with its precision; reset restores \`value\`.
  const form = document.querySelector("#ni-form");
  const result = document.querySelector("#ni-form-result");
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