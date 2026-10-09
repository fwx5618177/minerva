import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SplitLayoutOptions.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The split follows the layout's own width (container query).

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
      min="400"
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
    <minerva-split-layout aside-width="240" collapse-below="lg" gap="3">
      <minerva-box p="4" bg="bg.muted" rounded="md">
        Main: splits only from 1200px (collapse-below="lg").
      </minerva-box>
      <minerva-box slot="aside" p="4" bg="bg.subtle" rounded="md">
        Aside: 240px wide, gap="3".
      </minerva-box>
    </minerva-split-layout>
  </div>
</template>
`,angular:`// split-layout-options.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The split follows the layout's own width (container query).

@Component({
  selector: "app-split-layout-options",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <label style="display: flex; gap: 8px; align-items: center">
      Container width
      <input
        id="width"
        type="range"
        min="400"
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
      <minerva-split-layout aside-width="240" collapse-below="lg" gap="3">
        <minerva-box p="4" bg="bg.muted" rounded="md">
          Main: splits only from 1200px (collapse-below="lg").
        </minerva-box>
        <minerva-box slot="aside" p="4" bg="bg.subtle" rounded="md">
          Aside: 240px wide, gap="3".
        </minerva-box>
      </minerva-split-layout>
    </div>
  \`,
})
export class SplitLayoutOptionsComponent {
  @ViewChild("input") input!: ElementRef<HTMLInputElement>;
  @ViewChild("frame") frame!: ElementRef<HTMLElement>;
  valueText = "1300px";

  onInput = () => {
    this.frame.nativeElement.style.width = \`\${this.input.nativeElement.value}px\`;
    this.valueText = \`\${this.input.nativeElement.value}px\`;
  };
}
`,svelte:`<!-- SplitLayoutOptions.svelte -->

<script lang="ts">
  // The split follows the layout's own width (container query).

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
    min="400"
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
  <minerva-split-layout aside-width="240" collapse-below="lg" gap="3">
    <minerva-box p="4" bg="bg.muted" rounded="md">
      Main: splits only from 1200px (collapse-below="lg").
    </minerva-box>
    <minerva-box slot="aside" p="4" bg="bg.subtle" rounded="md">
      Aside: 240px wide, gap="3".
    </minerva-box>
  </minerva-split-layout>
</div>
`,solid:`// SplitLayoutOptions.tsx

import { createSignal } from "solid-js";

// The split follows the layout's own width (container query).

export default function SplitLayoutOptions() {
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
          min="400"
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
        <minerva-split-layout aside-width="240" collapse-below="lg" gap="3">
          <minerva-box p="4" bg="bg.muted" rounded="md">
            Main: splits only from 1200px (collapse-below="lg").
          </minerva-box>
          <minerva-box slot="aside" p="4" bg="bg.subtle" rounded="md">
            Aside: 240px wide, gap="3".
          </minerva-box>
        </minerva-split-layout>
      </div>
    </>
  );
}
`,html:`<label style="display: flex; gap: 8px; align-items: center">
  Container width
  <input id="width" type="range" min="400" max="1300" step="10" value="1300" />
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
  <minerva-split-layout aside-width="240" collapse-below="lg" gap="3">
    <minerva-box p="4" bg="bg.muted" rounded="md">
      Main: splits only from 1200px (collapse-below="lg").
    </minerva-box>
    <minerva-box slot="aside" p="4" bg="bg.subtle" rounded="md">
      Aside: 240px wide, gap="3".
    </minerva-box>
  </minerva-split-layout>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The split follows the layout's own width (container query).
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