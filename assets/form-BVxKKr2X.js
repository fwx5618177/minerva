import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SelectForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The select is form-associated: it submits \`value\` under \`name\`, \`required\`
// blocks submission while empty, form.reset() restores the \`value\`
// attribute and a disabled <fieldset> disables it.

const form = ref<HTMLFormElement>();
const fields = ref<HTMLFieldSetElement>();
const disable = ref<HTMLInputElement>();
const resultText = ref("");

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  resultText.value = JSON.stringify(
    Object.fromEntries(new FormData(form.value!)),
  );
};
const onReset = () => {
  resultText.value = "";
  fields.value!.disabled = false;
};
const onToggle = () => (fields.value!.disabled = disable.value!.checked);
<\/script>

<template>
  <form
    id="order"
    style="display: grid; gap: 12px; max-width: 320px"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <fieldset
      id="fields"
      style="display: grid; gap: 12px; border: 0; padding: 0; margin: 0"
      ref="fields"
    >
      <label style="display: grid; gap: 4px">
        Shipping
        <minerva-select name="shipping" value="standard">
          <minerva-option value="standard">Standard (3–5 days)</minerva-option>
          <minerva-option value="express">Express (1–2 days)</minerva-option>
        </minerva-select>
      </label>
      <label style="display: grid; gap: 4px">
        Gift wrap (required)
        <minerva-select name="wrap" placeholder="Choose a wrap" required>
          <minerva-option value="none">No wrap</minerva-option>
          <minerva-option value="paper">Paper</minerva-option>
          <minerva-option value="box">Box</minerva-option>
        </minerva-select>
      </label>
    </fieldset>
    <label style="display: flex; gap: 6px; align-items: center">
      <input id="disable" type="checkbox" ref="disable" @change="onToggle" />
      Disable the fieldset
    </label>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Order</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// select-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The select is form-associated: it submits \`value\` under \`name\`, \`required\`
// blocks submission while empty, form.reset() restores the \`value\`
// attribute and a disabled <fieldset> disables it.

@Component({
  selector: "app-select-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="order"
      style="display: grid; gap: 12px; max-width: 320px"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <fieldset
        id="fields"
        style="display: grid; gap: 12px; border: 0; padding: 0; margin: 0"
        #fields
      >
        <label style="display: grid; gap: 4px">
          Shipping
          <minerva-select name="shipping" value="standard">
            <minerva-option value="standard"
              >Standard (3–5 days)</minerva-option
            >
            <minerva-option value="express">Express (1–2 days)</minerva-option>
          </minerva-select>
        </label>
        <label style="display: grid; gap: 4px">
          Gift wrap (required)
          <minerva-select name="wrap" placeholder="Choose a wrap" required>
            <minerva-option value="none">No wrap</minerva-option>
            <minerva-option value="paper">Paper</minerva-option>
            <minerva-option value="box">Box</minerva-option>
          </minerva-select>
        </label>
      </fieldset>
      <label style="display: flex; gap: 6px; align-items: center">
        <input
          id="disable"
          type="checkbox"
          #disable
          (change)="onToggle($event)"
        />
        Disable the fieldset
      </label>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Order</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="result">{{ resultText }}</output>
    </form>
  \`,
})
export class SelectFormComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  @ViewChild("fields") fields!: ElementRef<HTMLFieldSetElement>;
  @ViewChild("disable") disable!: ElementRef<HTMLInputElement>;
  resultText = "";

  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    this.resultText = JSON.stringify(
      Object.fromEntries(new FormData(this.form.nativeElement)),
    );
  };
  onReset = () => {
    this.resultText = "";
    this.fields.nativeElement.disabled = false;
  };
  onToggle = () =>
    (this.fields.nativeElement.disabled = this.disable.nativeElement.checked);
}
`,svelte:`<!-- SelectForm.svelte -->

<script lang="ts">
  // The select is form-associated: it submits \`value\` under \`name\`, \`required\`
  // blocks submission while empty, form.reset() restores the \`value\`
  // attribute and a disabled <fieldset> disables it.

  let form: HTMLFormElement;
  let fields: HTMLFieldSetElement;
  let disable: HTMLInputElement;
  let resultText = $state("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    resultText = JSON.stringify(Object.fromEntries(new FormData(form)));
  };
  const onReset = () => {
    resultText = "";
    fields.disabled = false;
  };
  const onToggle = () => (fields.disabled = disable.checked);
<\/script>

<form
  id="order"
  style="display: grid; gap: 12px; max-width: 320px"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <fieldset
    id="fields"
    style="display: grid; gap: 12px; border: 0; padding: 0; margin: 0"
    bind:this={fields}
  >
    <label style="display: grid; gap: 4px">
      Shipping
      <minerva-select name="shipping" value="standard">
        <minerva-option value="standard">Standard (3–5 days)</minerva-option>
        <minerva-option value="express">Express (1–2 days)</minerva-option>
      </minerva-select>
    </label>
    <label style="display: grid; gap: 4px">
      Gift wrap (required)
      <minerva-select name="wrap" placeholder="Choose a wrap" required>
        <minerva-option value="none">No wrap</minerva-option>
        <minerva-option value="paper">Paper</minerva-option>
        <minerva-option value="box">Box</minerva-option>
      </minerva-select>
    </label>
  </fieldset>
  <label style="display: flex; gap: 6px; align-items: center">
    <input
      id="disable"
      type="checkbox"
      bind:this={disable}
      onchange={onToggle}
    /> Disable the fieldset
  </label>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Order</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="result">{resultText}</output>
</form>
`,solid:`// SelectForm.tsx

import { createSignal } from "solid-js";

// The select is form-associated: it submits \`value\` under \`name\`, \`required\`
// blocks submission while empty, form.reset() restores the \`value\`
// attribute and a disabled <fieldset> disables it.

export default function SelectForm() {
  let form!: HTMLFormElement;
  let fields!: HTMLFieldSetElement;
  let disable!: HTMLInputElement;
  const [resultText, setResultText] = createSignal("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    setResultText(JSON.stringify(Object.fromEntries(new FormData(form))));
  };
  const onReset = () => {
    setResultText("");
    fields.disabled = false;
  };
  const onToggle = () => (fields.disabled = disable.checked);

  return (
    <form
      id="order"
      style="display: grid; gap: 12px; max-width: 320px"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <fieldset
        id="fields"
        style="display: grid; gap: 12px; border: 0; padding: 0; margin: 0"
        ref={fields}
      >
        <label style="display: grid; gap: 4px">
          Shipping
          <minerva-select name="shipping" value="standard">
            <minerva-option value="standard">
              Standard (3–5 days)
            </minerva-option>
            <minerva-option value="express">Express (1–2 days)</minerva-option>
          </minerva-select>
        </label>
        <label style="display: grid; gap: 4px">
          Gift wrap (required)
          <minerva-select name="wrap" placeholder="Choose a wrap" required>
            <minerva-option value="none">No wrap</minerva-option>
            <minerva-option value="paper">Paper</minerva-option>
            <minerva-option value="box">Box</minerva-option>
          </minerva-select>
        </label>
      </fieldset>
      <label style="display: flex; gap: 6px; align-items: center">
        <input
          id="disable"
          type="checkbox"
          ref={disable}
          on:change={onToggle}
        />{" "}
        Disable the fieldset
      </label>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Order</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="order" style="display: grid; gap: 12px; max-width: 320px">
  <fieldset
    id="fields"
    style="display: grid; gap: 12px; border: 0; padding: 0; margin: 0"
  >
    <label style="display: grid; gap: 4px">
      Shipping
      <minerva-select name="shipping" value="standard">
        <minerva-option value="standard">Standard (3–5 days)</minerva-option>
        <minerva-option value="express">Express (1–2 days)</minerva-option>
      </minerva-select>
    </label>
    <label style="display: grid; gap: 4px">
      Gift wrap (required)
      <minerva-select name="wrap" placeholder="Choose a wrap" required>
        <minerva-option value="none">No wrap</minerva-option>
        <minerva-option value="paper">Paper</minerva-option>
        <minerva-option value="box">Box</minerva-option>
      </minerva-select>
    </label>
  </fieldset>
  <label style="display: flex; gap: 6px; align-items: center">
    <input id="disable" type="checkbox" /> Disable the fieldset
  </label>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Order</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The select is form-associated: it submits \`value\` under \`name\`, \`required\`
  // blocks submission while empty, form.reset() restores the \`value\`
  // attribute and a disabled <fieldset> disables it.
  const form = document.querySelector("#order");
  const fields = document.querySelector("#fields");
  const disable = document.querySelector("#disable");
  const result = document.querySelector("#result");
  const onSubmit = (event) => {
    event.preventDefault();
    result.value = JSON.stringify(Object.fromEntries(new FormData(form)));
  };
  const onReset = () => {
    result.value = "";
    fields.disabled = false;
  };
  const onToggle = () => (fields.disabled = disable.checked);
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
  disable.addEventListener("change", onToggle);
<\/script>
`}})))()}n();export{t as default};