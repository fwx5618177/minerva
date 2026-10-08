import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- RatingForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The score is submitted under \`name\`; \`required\` rejects a 0 score
// (valueMissing) and form.reset() restores the \`value\` attribute.

const form = ref<HTMLFormElement>();
const resultText = ref("");

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  resultText.value = \`score = \${new FormData(form.value!).get("score")}\`;
};
const onReset = () => (resultText.value = "");
<\/script>

<template>
  <form
    id="review"
    style="display: grid; gap: 8px; justify-items: start"
    ref="form"
    @submit="onSubmit"
    @reset="onReset"
  >
    <label for="review-score">Your rating (required)</label>
    <minerva-rating
      id="review-score"
      interactive
      name="score"
      max="5"
      show-value
      required
    ></minerva-rating>
    <div style="display: flex; gap: 8px">
      <minerva-button type="submit">Send</minerva-button>
      <minerva-button type="reset" variant="ghost" color="neutral"
        >Reset</minerva-button
      >
    </div>
    <output id="result">{{ resultText }}</output>
  </form>
</template>
`,angular:`// rating-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The score is submitted under \`name\`; \`required\` rejects a 0 score
// (valueMissing) and form.reset() restores the \`value\` attribute.

@Component({
  selector: "app-rating-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="review"
      style="display: grid; gap: 8px; justify-items: start"
      #form
      (submit)="onSubmit($event)"
      (reset)="onReset($event)"
    >
      <label for="review-score">Your rating (required)</label>
      <minerva-rating
        id="review-score"
        interactive
        name="score"
        max="5"
        show-value
        required
      ></minerva-rating>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Send</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral"
          >Reset</minerva-button
        >
      </div>
      <output id="result">{{ resultText }}</output>
    </form>
  \`,
})
export class RatingFormComponent {
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    this.resultText = \`score = \${new FormData(this.form.nativeElement).get("score")}\`;
  };
  onReset = () => (this.resultText = "");
}
`,svelte:`<!-- RatingForm.svelte -->

<script lang="ts">
  // The score is submitted under \`name\`; \`required\` rejects a 0 score
  // (valueMissing) and form.reset() restores the \`value\` attribute.

  let form: HTMLFormElement;
  let resultText = $state("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    resultText = \`score = \${new FormData(form).get("score")}\`;
  };
  const onReset = () => (resultText = "");
<\/script>

<form
  id="review"
  style="display: grid; gap: 8px; justify-items: start"
  bind:this={form}
  onsubmit={onSubmit}
  onreset={onReset}
>
  <label for="review-score">Your rating (required)</label>
  <minerva-rating
    id="review-score"
    interactive
    name="score"
    max="5"
    show-value
    required
  ></minerva-rating>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Send</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button>
  </div>
  <output id="result">{resultText}</output>
</form>
`,solid:`// RatingForm.tsx

import { createSignal } from "solid-js";

// The score is submitted under \`name\`; \`required\` rejects a 0 score
// (valueMissing) and form.reset() restores the \`value\` attribute.

export default function RatingForm() {
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    setResultText(\`score = \${new FormData(form).get("score")}\`);
  };
  const onReset = () => setResultText("");

  return (
    <form
      id="review"
      style="display: grid; gap: 8px; justify-items: start"
      ref={form}
      on:submit={onSubmit}
      on:reset={onReset}
    >
      <label for="review-score">Your rating (required)</label>
      <minerva-rating
        id="review-score"
        interactive
        name="score"
        max="5"
        show-value
        required
      ></minerva-rating>
      <div style="display: flex; gap: 8px">
        <minerva-button type="submit">Send</minerva-button>
        <minerva-button type="reset" variant="ghost" color="neutral">
          Reset
        </minerva-button>
      </div>
      <output id="result">{resultText()}</output>
    </form>
  );
}
`,html:`<form id="review" style="display: grid; gap: 8px; justify-items: start">
  <label for="review-score">Your rating (required)</label>
  <minerva-rating
    id="review-score"
    interactive
    name="score"
    max="5"
    show-value
    required
  ></minerva-rating>
  <div style="display: flex; gap: 8px">
    <minerva-button type="submit">Send</minerva-button>
    <minerva-button type="reset" variant="ghost" color="neutral"
      >Reset</minerva-button
    >
  </div>
  <output id="result"></output>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The score is submitted under \`name\`; \`required\` rejects a 0 score
  // (valueMissing) and form.reset() restores the \`value\` attribute.
  const form = document.querySelector("#review");
  const result = document.querySelector("#result");
  const onSubmit = (event) => {
    event.preventDefault();
    result.value = \`score = \${new FormData(form).get("score")}\`;
  };
  const onReset = () => (result.value = "");
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", onReset);
<\/script>
`}})))()}n();export{t as default};