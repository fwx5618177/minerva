import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- IconButtonToggle.vue -->

<script setup lang="ts">
import { ref } from "vue";

// toggle buttons expose aria-pressed and fire a cancelable
// minerva-pressed-change; preventDefault() keeps the current state.

const root = ref<HTMLElement>();
const logText = ref("");

const onChange = (event: Event) => {
  const { pressed } = (event as CustomEvent<{ pressed: boolean }>).detail;
  const button = event.target as HTMLElement & { label?: string };
  if (button.id === "locked" && !pressed) {
    event.preventDefault();
    logText.value = "Unpinning was prevented";
    return;
  }
  logText.value = \`\${button.label}: \${pressed ? "on" : "off"}\`;
};
<\/script>

<template>
  <div ref="root" @minerva-pressed-change="onChange">
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-icon-button id="bold" toggle label="Bold">B</minerva-icon-button>
      <minerva-icon-button id="italic" toggle pressed label="Italic"
        >I</minerva-icon-button
      >
      <minerva-icon-button
        id="locked"
        toggle
        label="Pin (locked)"
        tooltip="Pinned items cannot be unpinned here"
        >📌</minerva-icon-button
      >
      <output id="log" aria-live="polite">{{ logText }}</output>
    </div>
  </div>
</template>
`,angular:`// icon-button-toggle.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// toggle buttons expose aria-pressed and fire a cancelable
// minerva-pressed-change; preventDefault() keeps the current state.

@Component({
  selector: "app-icon-button-toggle",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div #root (minerva-pressed-change)="onChange($event)">
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center"
      >
        <minerva-icon-button id="bold" toggle label="Bold"
          >B</minerva-icon-button
        >
        <minerva-icon-button id="italic" toggle pressed label="Italic"
          >I</minerva-icon-button
        >
        <minerva-icon-button
          id="locked"
          toggle
          label="Pin (locked)"
          tooltip="Pinned items cannot be unpinned here"
          >📌</minerva-icon-button
        >
        <output id="log" aria-live="polite">{{ logText }}</output>
      </div>
    </div>
  \`,
})
export class IconButtonToggleComponent {
  @ViewChild("root") root!: ElementRef<HTMLElement>;
  logText = "";

  onChange = (event: Event) => {
    const { pressed } = (event as CustomEvent<{ pressed: boolean }>).detail;
    const button = event.target as HTMLElement & { label?: string };
    if (button.id === "locked" && !pressed) {
      event.preventDefault();
      this.logText = "Unpinning was prevented";
      return;
    }
    this.logText = \`\${button.label}: \${pressed ? "on" : "off"}\`;
  };
}
`,svelte:`<!-- IconButtonToggle.svelte -->

<script lang="ts">
  // toggle buttons expose aria-pressed and fire a cancelable
  // minerva-pressed-change; preventDefault() keeps the current state.

  let root: HTMLElement;
  let logText = $state("");

  const onChange = (event: Event) => {
    const { pressed } = (event as CustomEvent<{ pressed: boolean }>).detail;
    const button = event.target as HTMLElement & { label?: string };
    if (button.id === "locked" && !pressed) {
      event.preventDefault();
      logText = "Unpinning was prevented";
      return;
    }
    logText = \`\${button.label}: \${pressed ? "on" : "off"}\`;
  };
<\/script>

<div
  bind:this={root}
  onminerva-pressed-change={onChange}
>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-icon-button id="bold" toggle label="Bold">B</minerva-icon-button>
    <minerva-icon-button id="italic" toggle pressed label="Italic"
      >I</minerva-icon-button>
    <minerva-icon-button
      id="locked"
      toggle
      label="Pin (locked)"
      tooltip="Pinned items cannot be unpinned here"
      >📌</minerva-icon-button>
    <output id="log" aria-live="polite">{logText}</output>
  </div>
</div>
`,solid:`// IconButtonToggle.tsx

import { createSignal } from "solid-js";

// toggle buttons expose aria-pressed and fire a cancelable
// minerva-pressed-change; preventDefault() keeps the current state.

export default function IconButtonToggle() {
  let root!: HTMLElement;
  const [logText, setLogText] = createSignal("");

  const onChange = (event: Event) => {
    const { pressed } = (event as CustomEvent<{ pressed: boolean }>).detail;
    const button = event.target as HTMLElement & { label?: string };
    if (button.id === "locked" && !pressed) {
      event.preventDefault();
      setLogText("Unpinning was prevented");
      return;
    }
    setLogText(\`\${button.label}: \${pressed ? "on" : "off"}\`);
  };

  return (
    <div ref={root} on:minerva-pressed-change={onChange}>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
        <minerva-icon-button id="bold" toggle label="Bold">
          B
        </minerva-icon-button>
        <minerva-icon-button id="italic" toggle pressed label="Italic">
          I
        </minerva-icon-button>
        <minerva-icon-button
          id="locked"
          toggle
          label="Pin (locked)"
          tooltip="Pinned items cannot be unpinned here"
        >
          📌
        </minerva-icon-button>
        <output id="log" aria-live="polite">
          {logText()}
        </output>
      </div>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
  <minerva-icon-button id="bold" toggle label="Bold">B</minerva-icon-button>
  <minerva-icon-button id="italic" toggle pressed label="Italic"
    >I</minerva-icon-button
  >
  <minerva-icon-button
    id="locked"
    toggle
    label="Pin (locked)"
    tooltip="Pinned items cannot be unpinned here"
    >📌</minerva-icon-button
  >
  <output id="log" aria-live="polite"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // toggle buttons expose aria-pressed and fire a cancelable
  // minerva-pressed-change; preventDefault() keeps the current state.
  const log = document.querySelector("#log");
  const onChange = (event) => {
    const { pressed } = event.detail;
    const button = event.target;
    if (button.id === "locked" && !pressed) {
      event.preventDefault();
      log.value = "Unpinning was prevented";
      return;
    }
    log.value = \`\${button.label}: \${pressed ? "on" : "off"}\`;
  };
  document.addEventListener("minerva-pressed-change", onChange);
<\/script>
`}})))()}n();export{t as default};