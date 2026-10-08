import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ButtonForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// type="submit" submits the owning form through requestSubmit(), so the
// browser validates it first; type="reset" resets it.

const form = ref<HTMLFormElement>();
const resultText = ref("");

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  resultText.value = \`Subscribed \${new FormData(form.value!).get("email")}\`;
};
const onReset = () => (resultText.value = "");
<\/script>

<template>
  <form
    id="newsletter"
    style="display: flex; flex-wrap: wrap; gap: 8px; align-items: end"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <label style="display: grid; gap: 4px">
      Email
      <input name="email" type="email" required placeholder="you@example.com" />
    </label>
    <minerva-button type="submit">Subscribe</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
    <output id="result" style="flex-basis: 100%">{{ resultText }}</output>
  </form>
</template>
`,angular:`// button-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// type="submit" submits the owning form through requestSubmit(), so the
// browser validates it first; type="reset" resets it.

@Component({
  selector: "app-button-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="newsletter"
      style="display: flex; flex-wrap: wrap; gap: 8px; align-items: end"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <label style="display: grid; gap: 4px">
        Email
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </label>
      <minerva-button type="submit">Subscribe</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
      <output id="result" style="flex-basis: 100%">{{ resultText }}</output>
    </form>
  \`,
})
export class ButtonFormComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    this.resultText = \`Subscribed \${new FormData(this.form.nativeElement).get("email")}\`;
  };
  onReset = () => (this.resultText = "");
}
`,svelte:`<!-- ButtonForm.svelte -->

<script lang="ts">
  // type="submit" submits the owning form through requestSubmit(), so the
  // browser validates it first; type="reset" resets it.

  let form: HTMLFormElement;
  let resultText = $state("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    resultText = \`Subscribed \${new FormData(form).get("email")}\`;
  };
  const onReset = () => (resultText = "");
<\/script>

<form
  id="newsletter"
  style="display: flex; flex-wrap: wrap; gap: 8px; align-items: end"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <label style="display: grid; gap: 4px">
    Email
    <input name="email" type="email" required placeholder="you@example.com" />
  </label>
  <minerva-button type="submit">Subscribe</minerva-button>
  <minerva-button type="reset" variant="ghost" color="neutral"
    >Reset</minerva-button>
  <output id="result" style="flex-basis: 100%">{resultText}</output>
</form>
`,solid:`// ButtonForm.tsx

import { createSignal } from "solid-js";

// type="submit" submits the owning form through requestSubmit(), so the
// browser validates it first; type="reset" resets it.

export default function ButtonForm() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    setResultText(\`Subscribed \${new FormData(form).get("email")}\`);
  };
  const onReset = () => setResultText("");

  return (
    <form
      id="newsletter"
      style="display: flex; flex-wrap: wrap; gap: 8px; align-items: end"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <label style="display: grid; gap: 4px">
        Email
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </label>
      <minerva-button type="submit">Subscribe</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral">
        Reset
      </minerva-button>
      <output id="result" style="flex-basis: 100%">
        {resultText()}
      </output>
    </form>
  );
}
`,html:`<form
  id="newsletter"
  style="display: flex; flex-wrap: wrap; gap: 8px; align-items: end"
>
  <label style="display: grid; gap: 4px">
    Email
    <input name="email" type="email" required placeholder="you@example.com" />
  </label>
  <minerva-button type="submit">Subscribe</minerva-button>
  <minerva-button type="reset" variant="ghost" color="neutral"
    >Reset</minerva-button
  >
  <output id="result" style="flex-basis: 100%"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // type="submit" submits the owning form through requestSubmit(), so the
  // browser validates it first; type="reset" resets it.
  const form = document.querySelector("#newsletter");
  const result = document.querySelector("#result");
  const onSubmit = (event) => {
    event.preventDefault();
    result.value = \`Subscribed \${new FormData(form).get("email")}\`;
  };
  const onReset = () => (result.value = "");
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};