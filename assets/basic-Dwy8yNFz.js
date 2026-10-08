import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MenuBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Child elements describe the entries; nested items form a submenu.
// minerva-select gives the item's \`value\` (or its text without one).

type Select = CustomEvent<{ value: string }>;

const resultText = ref("");

const onSelect = (event: Event) =>
  (resultText.value = \`Selected: \${(event as Select).detail.value}\`);
<\/script>

<template>
  <minerva-menu id="file-menu" @minerva-select="onSelect">
    <minerva-button slot="trigger" variant="outline">File</minerva-button>
    <minerva-menu-item value="new" shortcut="Ctrl+N">
      <span slot="icon" aria-hidden="true">＋</span>New file
    </minerva-menu-item>
    <minerva-menu-item value="open" shortcut="Ctrl+O">Open…</minerva-menu-item>
    <minerva-menu-item>
      Share
      <minerva-menu-item value="share-link">Copy link</minerva-menu-item>
      <minerva-menu-item value="share-email">Send by email</minerva-menu-item>
    </minerva-menu-item>
    <minerva-menu-separator></minerva-menu-separator>
    <minerva-menu-group label="Danger zone">
      <minerva-menu-item value="archive">Archive</minerva-menu-item>
      <minerva-menu-item value="delete" disabled>Delete</minerva-menu-item>
    </minerva-menu-group>
  </minerva-menu>
  <p id="file-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// menu-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Child elements describe the entries; nested items form a submenu.
// minerva-select gives the item's \`value\` (or its text without one).
type Select = CustomEvent<{ value: string }>;

@Component({
  selector: "app-menu-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-menu id="file-menu" (minerva-select)="onSelect($event)">
      <minerva-button slot="trigger" variant="outline">File</minerva-button>
      <minerva-menu-item value="new" shortcut="Ctrl+N">
        <span slot="icon" aria-hidden="true">＋</span>New file
      </minerva-menu-item>
      <minerva-menu-item value="open" shortcut="Ctrl+O"
        >Open…</minerva-menu-item
      >
      <minerva-menu-item>
        Share
        <minerva-menu-item value="share-link">Copy link</minerva-menu-item>
        <minerva-menu-item value="share-email">Send by email</minerva-menu-item>
      </minerva-menu-item>
      <minerva-menu-separator></minerva-menu-separator>
      <minerva-menu-group label="Danger zone">
        <minerva-menu-item value="archive">Archive</minerva-menu-item>
        <minerva-menu-item value="delete" disabled>Delete</minerva-menu-item>
      </minerva-menu-group>
    </minerva-menu>
    <p id="file-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class MenuBasicComponent {
  resultText = "";

  onSelect = (event: Event) =>
    (this.resultText = \`Selected: \${(event as Select).detail.value}\`);
}
`,svelte:`<!-- MenuBasic.svelte -->

<script lang="ts">
  // Child elements describe the entries; nested items form a submenu.
  // minerva-select gives the item's \`value\` (or its text without one).

  type Select = CustomEvent<{ value: string }>;

  let resultText = $state("");

  const onSelect = (event: Event) =>
    (resultText = \`Selected: \${(event as Select).detail.value}\`);
<\/script>

<minerva-menu id="file-menu" onminerva-select={onSelect}>
  <minerva-button slot="trigger" variant="outline">File</minerva-button>
  <minerva-menu-item value="new" shortcut="Ctrl+N">
    <span slot="icon" aria-hidden="true">＋</span>New file
  </minerva-menu-item>
  <minerva-menu-item value="open" shortcut="Ctrl+O">Open…</minerva-menu-item>
  <minerva-menu-item>
    Share
    <minerva-menu-item value="share-link">Copy link</minerva-menu-item>
    <minerva-menu-item value="share-email">Send by email</minerva-menu-item>
  </minerva-menu-item>
  <minerva-menu-separator></minerva-menu-separator>
  <minerva-menu-group label="Danger zone">
    <minerva-menu-item value="archive">Archive</minerva-menu-item>
    <minerva-menu-item value="delete" disabled>Delete</minerva-menu-item>
  </minerva-menu-group>
</minerva-menu>
<p id="file-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// MenuBasic.tsx

import { createSignal } from "solid-js";

// Child elements describe the entries; nested items form a submenu.
// minerva-select gives the item's \`value\` (or its text without one).
type Select = CustomEvent<{ value: string }>;

export default function MenuBasic() {
  const [resultText, setResultText] = createSignal("");

  const onSelect = (event: Event) =>
    setResultText(\`Selected: \${(event as Select).detail.value}\`);

  return (
    <>
      <minerva-menu id="file-menu" on:minerva-select={onSelect}>
        <minerva-button slot="trigger" variant="outline">
          File
        </minerva-button>
        <minerva-menu-item value="new" shortcut="Ctrl+N">
          <span slot="icon" aria-hidden="true">
            ＋
          </span>
          New file
        </minerva-menu-item>
        <minerva-menu-item value="open" shortcut="Ctrl+O">
          Open…
        </minerva-menu-item>
        <minerva-menu-item>
          Share
          <minerva-menu-item value="share-link">Copy link</minerva-menu-item>
          <minerva-menu-item value="share-email">
            Send by email
          </minerva-menu-item>
        </minerva-menu-item>
        <minerva-menu-separator></minerva-menu-separator>
        <minerva-menu-group label="Danger zone">
          <minerva-menu-item value="archive">Archive</minerva-menu-item>
          <minerva-menu-item value="delete" disabled>
            Delete
          </minerva-menu-item>
        </minerva-menu-group>
      </minerva-menu>
      <p id="file-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-menu id="file-menu">
  <minerva-button slot="trigger" variant="outline">File</minerva-button>
  <minerva-menu-item value="new" shortcut="Ctrl+N">
    <span slot="icon" aria-hidden="true">＋</span>New file
  </minerva-menu-item>
  <minerva-menu-item value="open" shortcut="Ctrl+O">Open…</minerva-menu-item>
  <minerva-menu-item>
    Share
    <minerva-menu-item value="share-link">Copy link</minerva-menu-item>
    <minerva-menu-item value="share-email">Send by email</minerva-menu-item>
  </minerva-menu-item>
  <minerva-menu-separator></minerva-menu-separator>
  <minerva-menu-group label="Danger zone">
    <minerva-menu-item value="archive">Archive</minerva-menu-item>
    <minerva-menu-item value="delete" disabled>Delete</minerva-menu-item>
  </minerva-menu-group>
</minerva-menu>
<p id="file-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Child elements describe the entries; nested items form a submenu.
  // minerva-select gives the item's \`value\` (or its text without one).
  const menu = document.querySelector("#file-menu");
  const result = document.querySelector("#file-result");
  const onSelect = (event) =>
    (result.textContent = \`Selected: \${event.detail.value}\`);
  menu.addEventListener("minerva-select", onSelect);
<\/script>
`}})))()}n();export{t as default};