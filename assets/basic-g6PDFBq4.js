import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ButtonBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

const outputText = ref("Clicked 0 times");

let count = 0;
const click = () => {
  outputText.value = \`Clicked \${++count} times\`;
};
<\/script>

<template>
  <minerva-hstack gap="3" wrap>
    <minerva-button @click="click">Click me</minerva-button>
    <output aria-live="polite">{{ outputText }}</output>
  </minerva-hstack>
</template>
`,angular:`// button-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-button-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-hstack gap="3" wrap>
      <minerva-button (click)="click($event)">Click me</minerva-button>
      <output aria-live="polite">{{ outputText }}</output>
    </minerva-hstack>
  \`,
})
export class ButtonBasicComponent {
  outputText = "Clicked 0 times";

  count = 0;
  click = () => {
    this.outputText = \`Clicked \${++this.count} times\`;
  };
}
`,svelte:`<!-- ButtonBasic.svelte -->

<script lang="ts">
  let outputText = $state("Clicked 0 times");

  let count = 0;
  const click = () => {
    outputText = \`Clicked \${++count} times\`;
  };
<\/script>

<minerva-hstack gap="3" wrap>
  <minerva-button onclick={click}>Click me</minerva-button>
  <output aria-live="polite">{outputText}</output>
</minerva-hstack>
`,solid:`// ButtonBasic.tsx

import { createSignal } from "solid-js";

export default function ButtonBasic() {
  const [outputText, setOutputText] = createSignal("Clicked 0 times");

  let count = 0;
  const click = () => {
    setOutputText(\`Clicked \${++count} times\`);
  };

  return (
    <minerva-hstack gap="3" wrap>
      <minerva-button on:click={click}>Click me</minerva-button>
      <output aria-live="polite">{outputText()}</output>
    </minerva-hstack>
  );
}
`,html:`<minerva-hstack gap="3" wrap>
  <minerva-button>Click me</minerva-button>
  <output aria-live="polite">Clicked 0 times</output>
</minerva-hstack>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  const button = document.querySelector("minerva-button");
  const output = document.querySelector("output");
  let count = 0;
  const click = () => {
    output.textContent = \`Clicked \${++count} times\`;
  };
  button.addEventListener("click", click);
<\/script>
`}})))()}n();export{t as default};