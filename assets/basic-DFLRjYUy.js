import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- InputBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`minerva-input\` fires on every keystroke with detail.value; \`change\` /
// \`minerva-change\` when the value is committed (blur / Enter).

const echoText = ref("Hello!");

const onInput = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  echoText.value = value ? \`Hello, \${value}!\` : "Hello!";
};
<\/script>

<template>
  <div style="display: grid; gap: 8px; max-width: 360px">
    <label for="in-name">Full name</label>
    <minerva-input
      id="in-name"
      placeholder="Ada Lovelace"
      autocomplete="name"
      @minerva-input="onInput"
    ></minerva-input>
    <output id="in-name-echo">{{ echoText }}</output>
  </div>
</template>
`,angular:`// input-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// \`minerva-input\` fires on every keystroke with detail.value; \`change\` /
// \`minerva-change\` when the value is committed (blur / Enter).

@Component({
  selector: "app-input-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px; max-width: 360px">
      <label for="in-name">Full name</label>
      <minerva-input
        id="in-name"
        placeholder="Ada Lovelace"
        autocomplete="name"
        (minerva-input)="onInput($event)"
      ></minerva-input>
      <output id="in-name-echo">{{ echoText }}</output>
    </div>
  \`,
})
export class InputBasicComponent {
  echoText = "Hello!";

  onInput = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    this.echoText = value ? \`Hello, \${value}!\` : "Hello!";
  };
}
`,svelte:`<!-- InputBasic.svelte -->

<script lang="ts">
  // \`minerva-input\` fires on every keystroke with detail.value; \`change\` /
  // \`minerva-change\` when the value is committed (blur / Enter).

  let echoText = $state("Hello!");

  const onInput = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    echoText = value ? \`Hello, \${value}!\` : "Hello!";
  };
<\/script>

<div style="display: grid; gap: 8px; max-width: 360px">
  <label for="in-name">Full name</label>
  <minerva-input
    id="in-name"
    placeholder="Ada Lovelace"
    autocomplete="name"
    onminerva-input={onInput}
  ></minerva-input>
  <output id="in-name-echo">{echoText}</output>
</div>
`,solid:`// InputBasic.tsx

import { createSignal } from "solid-js";

// \`minerva-input\` fires on every keystroke with detail.value; \`change\` /
// \`minerva-change\` when the value is committed (blur / Enter).

export default function InputBasic() {
  const [echoText, setEchoText] = createSignal("Hello!");

  const onInput = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    setEchoText(value ? \`Hello, \${value}!\` : "Hello!");
  };

  return (
    <div style="display: grid; gap: 8px; max-width: 360px">
      <label for="in-name">Full name</label>
      <minerva-input
        id="in-name"
        placeholder="Ada Lovelace"
        autocomplete="name"
        on:minerva-input={onInput}
      ></minerva-input>
      <output id="in-name-echo">{echoText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px; max-width: 360px">
  <label for="in-name">Full name</label>
  <minerva-input
    id="in-name"
    placeholder="Ada Lovelace"
    autocomplete="name"
  ></minerva-input>
  <output id="in-name-echo">Hello!</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`minerva-input\` fires on every keystroke with detail.value; \`change\` /
  // \`minerva-change\` when the value is committed (blur / Enter).
  const input = document.querySelector("#in-name");
  const echo = document.querySelector("#in-name-echo");
  const onInput = (event) => {
    const { value } = event.detail;
    echo.value = value ? \`Hello, \${value}!\` : "Hello!";
  };
  input.addEventListener("minerva-input", onInput);
<\/script>
`}})))()}n();export{t as default};