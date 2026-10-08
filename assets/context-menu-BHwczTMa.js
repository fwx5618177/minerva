import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MenuContextMenu.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Same entries and events as <minerva-menu>, opened at the pointer.

type Detail = { value: string; checked?: boolean };

const resultText = ref("");

const onEvent = (event: Event) => {
  const { value, checked } = (event as CustomEvent<Detail>).detail;
  resultText.value = \`\${event.type}: \${value}\${
    checked === undefined ? "" : \` = \${checked}\`
  }\`;
};
<\/script>

<template>
  <minerva-context-menu
    id="canvas-menu"
    @minerva-select="onEvent"
    @minerva-change="onEvent"
  >
    <div
      tabindex="0"
      style="
        display: grid;
        place-items: center;
        height: 140px;
        border: 1px dashed currentColor;
        border-radius: 8px;
      "
    >
      Right click here (long press on touch, Shift+F10 when focused)
    </div>
    <minerva-menu-item value="cut" shortcut="Ctrl+X">Cut</minerva-menu-item>
    <minerva-menu-item value="copy" shortcut="Ctrl+C">Copy</minerva-menu-item>
    <minerva-menu-item value="paste" shortcut="Ctrl+V" disabled
      >Paste</minerva-menu-item
    >
    <minerva-menu-separator></minerva-menu-separator>
    <minerva-menu-checkbox-item value="grid" checked
      >Show grid</minerva-menu-checkbox-item
    >
  </minerva-context-menu>
  <p id="canvas-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// menu-context-menu.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Same entries and events as <minerva-menu>, opened at the pointer.
type Detail = { value: string; checked?: boolean };

@Component({
  selector: "app-menu-context-menu",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-context-menu
      id="canvas-menu"
      (minerva-select)="onEvent($event)"
      (minerva-change)="onEvent($event)"
    >
      <div
        tabindex="0"
        style="
          display: grid;
          place-items: center;
          height: 140px;
          border: 1px dashed currentColor;
          border-radius: 8px;
        "
      >
        Right click here (long press on touch, Shift+F10 when focused)
      </div>
      <minerva-menu-item value="cut" shortcut="Ctrl+X">Cut</minerva-menu-item>
      <minerva-menu-item value="copy" shortcut="Ctrl+C">Copy</minerva-menu-item>
      <minerva-menu-item value="paste" shortcut="Ctrl+V" disabled
        >Paste</minerva-menu-item
      >
      <minerva-menu-separator></minerva-menu-separator>
      <minerva-menu-checkbox-item value="grid" checked
        >Show grid</minerva-menu-checkbox-item
      >
    </minerva-context-menu>
    <p id="canvas-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class MenuContextMenuComponent {
  resultText = "";

  onEvent = (event: Event) => {
    const { value, checked } = (event as CustomEvent<Detail>).detail;
    this.resultText = \`\${event.type}: \${value}\${
      checked === undefined ? "" : \` = \${checked}\`
    }\`;
  };
}
`,svelte:`<!-- MenuContextMenu.svelte -->

<script lang="ts">
  // Same entries and events as <minerva-menu>, opened at the pointer.

  type Detail = { value: string; checked?: boolean };

  let resultText = $state("");

  const onEvent = (event: Event) => {
    const { value, checked } = (event as CustomEvent<Detail>).detail;
    resultText = \`\${event.type}: \${value}\${
      checked === undefined ? "" : \` = \${checked}\`
    }\`;
  };
<\/script>

<minerva-context-menu
  id="canvas-menu"
  onminerva-select={onEvent}
  onminerva-change={onEvent}
>
  <div
    tabindex="0"
    style="
      display: grid;
      place-items: center;
      height: 140px;
      border: 1px dashed currentColor;
      border-radius: 8px;
    "
  >
    Right click here (long press on touch, Shift+F10 when focused)
  </div>
  <minerva-menu-item value="cut" shortcut="Ctrl+X">Cut</minerva-menu-item>
  <minerva-menu-item value="copy" shortcut="Ctrl+C">Copy</minerva-menu-item>
  <minerva-menu-item value="paste" shortcut="Ctrl+V" disabled
    >Paste</minerva-menu-item>
  <minerva-menu-separator></minerva-menu-separator>
  <minerva-menu-checkbox-item value="grid" checked
    >Show grid</minerva-menu-checkbox-item>
</minerva-context-menu>
<p id="canvas-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// MenuContextMenu.tsx

import { createSignal } from "solid-js";

// Same entries and events as <minerva-menu>, opened at the pointer.
type Detail = { value: string; checked?: boolean };

export default function MenuContextMenu() {
  const [resultText, setResultText] = createSignal("");

  const onEvent = (event: Event) => {
    const { value, checked } = (event as CustomEvent<Detail>).detail;
    setResultText(
      \`\${event.type}: \${value}\${checked === undefined ? "" : \` = \${checked}\`}\`,
    );
  };

  return (
    <>
      <minerva-context-menu
        id="canvas-menu"
        on:minerva-select={onEvent}
        on:minerva-change={onEvent}
      >
        <div
          tabindex="0"
          style="
            display: grid;
            place-items: center;
            height: 140px;
            border: 1px dashed currentColor;
            border-radius: 8px;
          "
        >
          Right click here (long press on touch, Shift+F10 when focused)
        </div>
        <minerva-menu-item value="cut" shortcut="Ctrl+X">
          Cut
        </minerva-menu-item>
        <minerva-menu-item value="copy" shortcut="Ctrl+C">
          Copy
        </minerva-menu-item>
        <minerva-menu-item value="paste" shortcut="Ctrl+V" disabled>
          Paste
        </minerva-menu-item>
        <minerva-menu-separator></minerva-menu-separator>
        <minerva-menu-checkbox-item value="grid" checked>
          Show grid
        </minerva-menu-checkbox-item>
      </minerva-context-menu>
      <p id="canvas-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-context-menu id="canvas-menu">
  <div
    tabindex="0"
    style="
      display: grid;
      place-items: center;
      height: 140px;
      border: 1px dashed currentColor;
      border-radius: 8px;
    "
  >
    Right click here (long press on touch, Shift+F10 when focused)
  </div>
  <minerva-menu-item value="cut" shortcut="Ctrl+X">Cut</minerva-menu-item>
  <minerva-menu-item value="copy" shortcut="Ctrl+C">Copy</minerva-menu-item>
  <minerva-menu-item value="paste" shortcut="Ctrl+V" disabled
    >Paste</minerva-menu-item
  >
  <minerva-menu-separator></minerva-menu-separator>
  <minerva-menu-checkbox-item value="grid" checked
    >Show grid</minerva-menu-checkbox-item
  >
</minerva-context-menu>
<p id="canvas-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Same entries and events as <minerva-menu>, opened at the pointer.
  const menu = document.querySelector("#canvas-menu");
  const result = document.querySelector("#canvas-result");
  const onEvent = (event) => {
    const { value, checked } = event.detail;
    result.textContent = \`\${event.type}: \${value}\${checked === undefined ? "" : \` = \${checked}\`}\`;
  };
  menu.addEventListener("minerva-select", onEvent);
  menu.addEventListener("minerva-change", onEvent);
<\/script>
`}})))()}n();export{t as default};