import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TextareaBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`minerva-input\` fires on every keystroke with detail.value.

const outputText = ref("0 words");

const onInput = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  const words = value.trim() ? value.trim().split(/\\s+/).length : 0;
  outputText.value = \`\${words} word\${words === 1 ? "" : "s"}\`;
};
<\/script>

<template>
  <div style="display: grid; gap: 8px; max-width: 420px">
    <label for="ta-bio">Bio</label>
    <minerva-textarea
      id="ta-bio"
      rows="4"
      placeholder="Tell us about yourself"
      @minerva-input="onInput"
    ></minerva-textarea>
    <output id="ta-bio-count">{{ outputText }}</output>
  </div>
</template>
`,angular:`// textarea-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// \`minerva-input\` fires on every keystroke with detail.value.

@Component({
  selector: "app-textarea-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px; max-width: 420px">
      <label for="ta-bio">Bio</label>
      <minerva-textarea
        id="ta-bio"
        rows="4"
        placeholder="Tell us about yourself"
        (minerva-input)="onInput($event)"
      ></minerva-textarea>
      <output id="ta-bio-count">{{ outputText }}</output>
    </div>
  \`,
})
export class TextareaBasicComponent {
  outputText = "0 words";

  onInput = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    const words = value.trim() ? value.trim().split(/\\s+/).length : 0;
    this.outputText = \`\${words} word\${words === 1 ? "" : "s"}\`;
  };
}
`,svelte:`<!-- TextareaBasic.svelte -->

<script lang="ts">
  // \`minerva-input\` fires on every keystroke with detail.value.

  let outputText = $state("0 words");

  const onInput = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    const words = value.trim() ? value.trim().split(/\\s+/).length : 0;
    outputText = \`\${words} word\${words === 1 ? "" : "s"}\`;
  };
<\/script>

<div style="display: grid; gap: 8px; max-width: 420px">
  <label for="ta-bio">Bio</label>
  <minerva-textarea
    id="ta-bio"
    rows="4"
    placeholder="Tell us about yourself"
    onminerva-input={onInput}
  ></minerva-textarea>
  <output id="ta-bio-count">{outputText}</output>
</div>
`,solid:`// TextareaBasic.tsx

import { createSignal } from "solid-js";

// \`minerva-input\` fires on every keystroke with detail.value.

export default function TextareaBasic() {
  const [outputText, setOutputText] = createSignal("0 words");

  const onInput = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    const words = value.trim() ? value.trim().split(/\\s+/).length : 0;
    setOutputText(\`\${words} word\${words === 1 ? "" : "s"}\`);
  };

  return (
    <div style="display: grid; gap: 8px; max-width: 420px">
      <label for="ta-bio">Bio</label>
      <minerva-textarea
        id="ta-bio"
        rows="4"
        placeholder="Tell us about yourself"
        on:minerva-input={onInput}
      ></minerva-textarea>
      <output id="ta-bio-count">{outputText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px; max-width: 420px">
  <label for="ta-bio">Bio</label>
  <minerva-textarea
    id="ta-bio"
    rows="4"
    placeholder="Tell us about yourself"
  ></minerva-textarea>
  <output id="ta-bio-count">0 words</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`minerva-input\` fires on every keystroke with detail.value.
  const textarea = document.querySelector("#ta-bio");
  const output = document.querySelector("#ta-bio-count");
  const onInput = (event) => {
    const { value } = event.detail;
    const words = value.trim() ? value.trim().split(/\\s+/).length : 0;
    output.value = \`\${words} word\${words === 1 ? "" : "s"}\`;
  };
  textarea.addEventListener("minerva-input", onInput);
<\/script>
`}})))()}n();export{t as default};