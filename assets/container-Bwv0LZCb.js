import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ResponsiveGridContainer.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Columns follow the grid's own width (container queries), not the viewport:
// 1 column below 480px, 2 from 480px (md inherits sm), 4 from 1200px.

const input = ref<HTMLInputElement>();
const frame = ref<HTMLElement>();
const valueText = ref("1300px");

const onInput = () => {
  frame.value!.style.width = \`\${input.value!.value}px\`;
  valueText.value = \`\${input.value!.value}px\`;
};
<\/script>

<template>
  <label style="display: flex; gap: 8px; align-items: center">
    Container width
    <input
      id="width"
      type="range"
      min="280"
      max="1300"
      step="10"
      value="1300"
      ref="input"
      @input="onInput"
    />
    <output id="value">{{ valueText }}</output>
  </label>
  <div
    id="frame"
    style="
      max-width: 100%;
      width: 1300px;
      margin-top: 12px;
      padding: 8px;
      border: 1px dashed var(--border-color);
    "
    ref="frame"
  >
    <minerva-responsive-grid
      columns='{"base": 1, "sm": 2, "lg": 4}'
      row-gap="2"
      column-gap="6"
    >
      <minerva-box p="4" bg="bg.muted" rounded="md">A</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">B</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">C</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">D</minerva-box>
    </minerva-responsive-grid>
  </div>
</template>
`,angular:`// responsive-grid-container.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Columns follow the grid's own width (container queries), not the viewport:
// 1 column below 480px, 2 from 480px (md inherits sm), 4 from 1200px.

@Component({
  selector: "app-responsive-grid-container",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <label style="display: flex; gap: 8px; align-items: center">
      Container width
      <input
        id="width"
        type="range"
        min="280"
        max="1300"
        step="10"
        value="1300"
        #input
        (input)="onInput($event)"
      />
      <output id="value">{{ valueText }}</output>
    </label>
    <div
      id="frame"
      style="
        max-width: 100%;
        width: 1300px;
        margin-top: 12px;
        padding: 8px;
        border: 1px dashed var(--border-color);
      "
      #frame
    >
      <minerva-responsive-grid
        columns='{"base": 1, "sm": 2, "lg": 4}'
        row-gap="2"
        column-gap="6"
      >
        <minerva-box p="4" bg="bg.muted" rounded="md">A</minerva-box>
        <minerva-box p="4" bg="bg.muted" rounded="md">B</minerva-box>
        <minerva-box p="4" bg="bg.muted" rounded="md">C</minerva-box>
        <minerva-box p="4" bg="bg.muted" rounded="md">D</minerva-box>
      </minerva-responsive-grid>
    </div>
  \`,
})
export class ResponsiveGridContainerComponent {
  @ViewChild("input") input!: ElementRef<HTMLInputElement>;
  @ViewChild("frame") frame!: ElementRef<HTMLElement>;
  valueText = "1300px";

  onInput = () => {
    this.frame.nativeElement.style.width = \`\${this.input.nativeElement.value}px\`;
    this.valueText = \`\${this.input.nativeElement.value}px\`;
  };
}
`,svelte:`<!-- ResponsiveGridContainer.svelte -->

<script lang="ts">
  // Columns follow the grid's own width (container queries), not the viewport:
  // 1 column below 480px, 2 from 480px (md inherits sm), 4 from 1200px.

  let input: HTMLInputElement;
  let frame: HTMLElement;
  let valueText = $state("1300px");

  const onInput = () => {
    frame.style.width = \`\${input.value}px\`;
    valueText = \`\${input.value}px\`;
  };
<\/script>

<label style="display: flex; gap: 8px; align-items: center">
  Container width
  <input
    id="width"
    type="range"
    min="280"
    max="1300"
    step="10"
    value="1300"
    bind:this={input}
    oninput={onInput}
  />
  <output id="value">{valueText}</output>
</label>
<div
  id="frame"
  style="
    max-width: 100%;
    width: 1300px;
    margin-top: 12px;
    padding: 8px;
    border: 1px dashed var(--border-color);
  "
  bind:this={frame}
>
  <minerva-responsive-grid
    columns={"{\\"base\\": 1, \\"sm\\": 2, \\"lg\\": 4}"}
    row-gap="2"
    column-gap="6"
  >
    <minerva-box p="4" bg="bg.muted" rounded="md">A</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">B</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">C</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">D</minerva-box>
  </minerva-responsive-grid>
</div>
`,solid:`// ResponsiveGridContainer.tsx

import { createSignal } from "solid-js";

// Columns follow the grid's own width (container queries), not the viewport:
// 1 column below 480px, 2 from 480px (md inherits sm), 4 from 1200px.

export default function ResponsiveGridContainer() {
  let input!: HTMLInputElement;
  let frame!: HTMLElement;
  const [valueText, setValueText] = createSignal("1300px");

  const onInput = () => {
    frame.style.width = \`\${input.value}px\`;
    setValueText(\`\${input.value}px\`);
  };

  return (
    <>
      <label style="display: flex; gap: 8px; align-items: center">
        Container width
        <input
          id="width"
          type="range"
          min="280"
          max="1300"
          step="10"
          value="1300"
          ref={input}
          on:input={onInput}
        />
        <output id="value">{valueText()}</output>
      </label>
      <div
        id="frame"
        style="
          max-width: 100%;
          width: 1300px;
          margin-top: 12px;
          padding: 8px;
          border: 1px dashed var(--border-color);
        "
        ref={frame}
      >
        <minerva-responsive-grid
          columns='{"base": 1, "sm": 2, "lg": 4}'
          row-gap="2"
          column-gap="6"
        >
          <minerva-box p="4" bg="bg.muted" rounded="md">
            A
          </minerva-box>
          <minerva-box p="4" bg="bg.muted" rounded="md">
            B
          </minerva-box>
          <minerva-box p="4" bg="bg.muted" rounded="md">
            C
          </minerva-box>
          <minerva-box p="4" bg="bg.muted" rounded="md">
            D
          </minerva-box>
        </minerva-responsive-grid>
      </div>
    </>
  );
}
`,html:`<label style="display: flex; gap: 8px; align-items: center">
  Container width
  <input id="width" type="range" min="280" max="1300" step="10" value="1300" />
  <output id="value">1300px</output>
</label>
<div
  id="frame"
  style="
    max-width: 100%;
    width: 1300px;
    margin-top: 12px;
    padding: 8px;
    border: 1px dashed var(--border-color);
  "
>
  <minerva-responsive-grid
    columns='{"base": 1, "sm": 2, "lg": 4}'
    row-gap="2"
    column-gap="6"
  >
    <minerva-box p="4" bg="bg.muted" rounded="md">A</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">B</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">C</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">D</minerva-box>
  </minerva-responsive-grid>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Columns follow the grid's own width (container queries), not the viewport:
  // 1 column below 480px, 2 from 480px (md inherits sm), 4 from 1200px.
  const input = document.querySelector("#width");
  const value = document.querySelector("#value");
  const frame = document.querySelector("#frame");
  const onInput = () => {
    frame.style.width = \`\${input.value}px\`;
    value.value = \`\${input.value}px\`;
  };
  input.addEventListener("input", onInput);
<\/script>
`}})))()}n();export{t as default};