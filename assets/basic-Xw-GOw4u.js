import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- InputBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Web Components emit their next value in CustomEvent.detail.
// The owner writes it back through the element's value property.

const input = ref<HTMLElement & { value: string }>();

let value = "";
const inputValue = value;
const onInput = (event: Event) => {
  value = (event as CustomEvent<{ value: string }>).detail.value;
  input.value!.value = value;
};
<\/script>

<template>
  <minerva-input aria-label="Name" placeholder="Uncontrolled"></minerva-input>
  <minerva-input
    id="controlled-name"
    aria-label="Controlled"
    placeholder="Controlled"
    ref="input"
    :value.prop="inputValue"
    @minerva-input="onInput"
  ></minerva-input>
</template>
`,angular:`// input-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Web Components emit their next value in CustomEvent.detail.
// The owner writes it back through the element's value property.

@Component({
  selector: "app-input-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-input aria-label="Name" placeholder="Uncontrolled"></minerva-input>
    <minerva-input
      id="controlled-name"
      aria-label="Controlled"
      placeholder="Controlled"
      #input
      [value]="inputValue"
      (minerva-input)="onInput($event)"
    ></minerva-input>
  \`,
})
export class InputBasicComponent {
  @ViewChild("input") input!: ElementRef<HTMLElement & { value: string }>;

  value = "";
  inputValue = this.value;
  onInput = (event: Event) => {
    this.value = (event as CustomEvent<{ value: string }>).detail.value;
    this.input.nativeElement.value = this.value;
  };
}
`,svelte:`<!-- InputBasic.svelte -->

<script lang="ts">
  // Web Components emit their next value in CustomEvent.detail.
  // The owner writes it back through the element's value property.

  let input: HTMLElement & { value: string };

  let value = "";
  const inputValue = value;
  const onInput = (event: Event) => {
    value = (event as CustomEvent<{ value: string }>).detail.value;
    input.value = value;
  };
<\/script>

<minerva-input aria-label="Name" placeholder="Uncontrolled"></minerva-input>
<minerva-input
  id="controlled-name"
  aria-label="Controlled"
  placeholder="Controlled"
  bind:this={input}
  value={inputValue}
  onminerva-input={onInput}
></minerva-input>
`,solid:`// InputBasic.tsx

// Web Components emit their next value in CustomEvent.detail.
// The owner writes it back through the element's value property.

export default function InputBasic() {
  let input!: HTMLElement & { value: string };

  let value = "";
  const inputValue = value;
  const onInput = (event: Event) => {
    value = (event as CustomEvent<{ value: string }>).detail.value;
    input.value = value;
  };

  return (
    <>
      <minerva-input
        aria-label="Name"
        placeholder="Uncontrolled"
      ></minerva-input>
      <minerva-input
        id="controlled-name"
        aria-label="Controlled"
        placeholder="Controlled"
        ref={input}
        prop:value={inputValue}
        on:minerva-input={onInput}
      ></minerva-input>
    </>
  );
}
`,html:`<minerva-input aria-label="Name" placeholder="Uncontrolled"></minerva-input>
<minerva-input
  id="controlled-name"
  aria-label="Controlled"
  placeholder="Controlled"
></minerva-input>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Web Components emit their next value in CustomEvent.detail.
  // The owner writes it back through the element's value property.
  const input = document.querySelector("#controlled-name");
  let value = "";
  input.value = value;
  const onInput = (event) => {
    value = event.detail.value;
    input.value = value;
  };
  input.addEventListener("minerva-input", onInput);
<\/script>
`}})))()}n();export{t as default};