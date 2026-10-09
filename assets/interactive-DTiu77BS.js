import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- RatingInteractive.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Click the left / right half of a star, or use the arrow keys,
// PageUp / PageDown and Home / End once the stars are focused.

const resultText = ref("");

const onChange = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: number }>).detail;
  resultText.value = \`minerva-change: \${value}\`;
};
<\/script>

<template>
  <minerva-rating
    id="score"
    interactive
    aria-label="Your score"
    value="6"
    size="large"
    show-value
    @minerva-change="onChange"
  ></minerva-rating>
  <output id="result" style="display: block; margin-top: 8px">{{
    resultText
  }}</output>
</template>
`,angular:`// rating-interactive.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Click the left / right half of a star, or use the arrow keys,
// PageUp / PageDown and Home / End once the stars are focused.

@Component({
  selector: "app-rating-interactive",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-rating
      id="score"
      interactive
      aria-label="Your score"
      value="6"
      size="large"
      show-value
      (minerva-change)="onChange($event)"
    ></minerva-rating>
    <output id="result" style="display: block; margin-top: 8px">{{
      resultText
    }}</output>
  \`,
})
export class RatingInteractiveComponent {
  resultText = "";

  onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: number }>).detail;
    this.resultText = \`minerva-change: \${value}\`;
  };
}
`,svelte:`<!-- RatingInteractive.svelte -->

<script lang="ts">
  // Click the left / right half of a star, or use the arrow keys,
  // PageUp / PageDown and Home / End once the stars are focused.

  let resultText = $state("");

  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: number }>).detail;
    resultText = \`minerva-change: \${value}\`;
  };
<\/script>

<minerva-rating
  id="score"
  interactive
  aria-label="Your score"
  value="6"
  size="large"
  show-value
  onminerva-change={onChange}
></minerva-rating>
<output id="result" style="display: block; margin-top: 8px">{resultText}</output>
`,solid:`// RatingInteractive.tsx

import { createSignal } from "solid-js";

// Click the left / right half of a star, or use the arrow keys,
// PageUp / PageDown and Home / End once the stars are focused.

export default function RatingInteractive() {
  const [resultText, setResultText] = createSignal("");

  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: number }>).detail;
    setResultText(\`minerva-change: \${value}\`);
  };

  return (
    <>
      <minerva-rating
        id="score"
        interactive
        aria-label="Your score"
        value="6"
        size="large"
        show-value
        on:minerva-change={onChange}
      ></minerva-rating>
      <output id="result" style="display: block; margin-top: 8px">
        {resultText()}
      </output>
    </>
  );
}
`,html:`<minerva-rating
  id="score"
  interactive
  aria-label="Your score"
  value="6"
  size="large"
  show-value
></minerva-rating>
<output id="result" style="display: block; margin-top: 8px"></output>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Click the left / right half of a star, or use the arrow keys,
  // PageUp / PageDown and Home / End once the stars are focused.
  const score = document.querySelector("#score");
  const result = document.querySelector("#result");
  const onChange = (event) => {
    const { value } = event.detail;
    result.value = \`minerva-change: \${value}\`;
  };
  score.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};