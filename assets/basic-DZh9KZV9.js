import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- FormLayoutBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The layout sits inside a native <form>: submit, reset and validation stay
// native. One column on narrow containers, two from 480px.

const form = ref<HTMLFormElement>();
const resultText = ref("");

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const data = new FormData(form.value!);
  resultText.value = \`Saved \${data.get("first")} \${data.get("last")}\`;
};
const onReset = () => (resultText.value = "");
<\/script>

<template>
  <form id="profile" ref="form" @submit="onSubmit" @reset="onReset">
    <minerva-form-layout columns="1 2" gap="4">
      <minerva-form-control label="First name" required>
        <minerva-input name="first" autocomplete="given-name"></minerva-input>
      </minerva-form-control>
      <minerva-form-control label="Last name" required>
        <minerva-input name="last" autocomplete="family-name"></minerva-input>
      </minerva-form-control>
      <minerva-form-control label="Email" helper-text="We never share it.">
        <minerva-input name="email" type="email"></minerva-input>
      </minerva-form-control>
      <minerva-form-control label="Phone">
        <minerva-input name="phone" type="tel"></minerva-input>
      </minerva-form-control>
      <minerva-grid-item full-width>
        <minerva-form-control label="About you">
          <minerva-textarea name="about" rows="3"></minerva-textarea>
        </minerva-form-control>
      </minerva-grid-item>
      <minerva-grid-item full-width>
        <div style="display: flex; gap: 8px; align-items: center">
          <minerva-button type="submit">Save</minerva-button>
          <minerva-button type="reset" variant="ghost" color="neutral"
            >Reset</minerva-button
          >
          <output id="result">{{ resultText }}</output>
        </div>
      </minerva-grid-item>
    </minerva-form-layout>
  </form>
</template>
`,angular:`// form-layout-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The layout sits inside a native <form>: submit, reset and validation stay
// native. One column on narrow containers, two from 480px.

@Component({
  selector: "app-form-layout-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="profile"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <minerva-form-layout columns="1 2" gap="4">
        <minerva-form-control label="First name" required>
          <minerva-input name="first" autocomplete="given-name"></minerva-input>
        </minerva-form-control>
        <minerva-form-control label="Last name" required>
          <minerva-input name="last" autocomplete="family-name"></minerva-input>
        </minerva-form-control>
        <minerva-form-control label="Email" helper-text="We never share it.">
          <minerva-input name="email" type="email"></minerva-input>
        </minerva-form-control>
        <minerva-form-control label="Phone">
          <minerva-input name="phone" type="tel"></minerva-input>
        </minerva-form-control>
        <minerva-grid-item full-width>
          <minerva-form-control label="About you">
            <minerva-textarea name="about" rows="3"></minerva-textarea>
          </minerva-form-control>
        </minerva-grid-item>
        <minerva-grid-item full-width>
          <div style="display: flex; gap: 8px; align-items: center">
            <minerva-button type="submit">Save</minerva-button>
            <minerva-button type="reset" variant="ghost" color="neutral"
              >Reset</minerva-button
            >
            <output id="result">{{ resultText }}</output>
          </div>
        </minerva-grid-item>
      </minerva-form-layout>
    </form>
  \`,
})
export class FormLayoutBasicComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const data = new FormData(this.form.nativeElement);
    this.resultText = \`Saved \${data.get("first")} \${data.get("last")}\`;
  };
  onReset = () => (this.resultText = "");
}
`,svelte:`<!-- FormLayoutBasic.svelte -->

<script lang="ts">
  // The layout sits inside a native <form>: submit, reset and validation stay
  // native. One column on narrow containers, two from 480px.

  let form: HTMLFormElement;
  let resultText = $state("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const data = new FormData(form);
    resultText = \`Saved \${data.get("first")} \${data.get("last")}\`;
  };
  const onReset = () => (resultText = "");
<\/script>

<form id="profile" bind:this={form} onsubmit={onSubmit} onreset={onReset}>
  <minerva-form-layout columns="1 2" gap="4">
    <minerva-form-control label="First name" required>
      <minerva-input name="first" autocomplete="given-name"></minerva-input>
    </minerva-form-control>
    <minerva-form-control label="Last name" required>
      <minerva-input name="last" autocomplete="family-name"></minerva-input>
    </minerva-form-control>
    <minerva-form-control label="Email" helper-text="We never share it.">
      <minerva-input name="email" type="email"></minerva-input>
    </minerva-form-control>
    <minerva-form-control label="Phone">
      <minerva-input name="phone" type="tel"></minerva-input>
    </minerva-form-control>
    <minerva-grid-item full-width>
      <minerva-form-control label="About you">
        <minerva-textarea name="about" rows="3"></minerva-textarea>
      </minerva-form-control>
    </minerva-grid-item>
    <minerva-grid-item full-width>
      <div style="display: flex; gap: 8px; align-items: center">
        <minerva-button type="submit">Save</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button>
        <output id="result">{resultText}</output>
      </div>
    </minerva-grid-item>
  </minerva-form-layout>
</form>
`,solid:`// FormLayoutBasic.tsx

import { createSignal } from "solid-js";

// The layout sits inside a native <form>: submit, reset and validation stay
// native. One column on narrow containers, two from 480px.

export default function FormLayoutBasic() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const data = new FormData(form);
    setResultText(\`Saved \${data.get("first")} \${data.get("last")}\`);
  };
  const onReset = () => setResultText("");

  return (
    <form id="profile" ref={form} on:submit={onSubmit} on:reset={onReset}>
      <minerva-form-layout columns="1 2" gap="4">
        <minerva-form-control label="First name" required>
          <minerva-input name="first" autocomplete="given-name"></minerva-input>
        </minerva-form-control>
        <minerva-form-control label="Last name" required>
          <minerva-input name="last" autocomplete="family-name"></minerva-input>
        </minerva-form-control>
        <minerva-form-control label="Email" helper-text="We never share it.">
          <minerva-input name="email" type="email"></minerva-input>
        </minerva-form-control>
        <minerva-form-control label="Phone">
          <minerva-input name="phone" type="tel"></minerva-input>
        </minerva-form-control>
        <minerva-grid-item full-width>
          <minerva-form-control label="About you">
            <minerva-textarea name="about" rows="3"></minerva-textarea>
          </minerva-form-control>
        </minerva-grid-item>
        <minerva-grid-item full-width>
          <div style="display: flex; gap: 8px; align-items: center">
            <minerva-button type="submit">Save</minerva-button>
            <minerva-button type="reset" variant="ghost" color="neutral">
              Reset
            </minerva-button>
            <output id="result">{resultText()}</output>
          </div>
        </minerva-grid-item>
      </minerva-form-layout>
    </form>
  );
}
`,html:`<form id="profile">
  <minerva-form-layout columns="1 2" gap="4">
    <minerva-form-control label="First name" required>
      <minerva-input name="first" autocomplete="given-name"></minerva-input>
    </minerva-form-control>
    <minerva-form-control label="Last name" required>
      <minerva-input name="last" autocomplete="family-name"></minerva-input>
    </minerva-form-control>
    <minerva-form-control label="Email" helper-text="We never share it.">
      <minerva-input name="email" type="email"></minerva-input>
    </minerva-form-control>
    <minerva-form-control label="Phone">
      <minerva-input name="phone" type="tel"></minerva-input>
    </minerva-form-control>
    <minerva-grid-item full-width>
      <minerva-form-control label="About you">
        <minerva-textarea name="about" rows="3"></minerva-textarea>
      </minerva-form-control>
    </minerva-grid-item>
    <minerva-grid-item full-width>
      <div style="display: flex; gap: 8px; align-items: center">
        <minerva-button type="submit">Save</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
        <output id="result"></output>
      </div>
    </minerva-grid-item>
  </minerva-form-layout>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // The layout sits inside a native <form>: submit, reset and validation stay
  // native. One column on narrow containers, two from 480px.
  const form = document.querySelector("#profile");
  const result = document.querySelector("#result");
  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(form);
    result.value = \`Saved \${data.get("first")} \${data.get("last")}\`;
  };
  const onReset = () => (result.value = "");
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};