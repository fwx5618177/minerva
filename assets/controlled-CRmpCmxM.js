import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TabsControlled.vue -->

<script setup lang="ts">
import { ref } from "vue";

// minerva-change is cancelable: preventDefault() keeps the current tab, e.g.
// while the open tab has unsaved changes.

const dirty = ref<HTMLInputElement>();
const statusText = ref("");

const onChange = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  if (dirty.value!.checked) {
    event.preventDefault();
    statusText.value = \`Save or discard your changes before opening "\${value}".\`;
  } else {
    statusText.value = \`Opened "\${value}".\`;
  }
};
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <label style="display: flex; gap: 8px; align-items: center">
      <input id="dirty" type="checkbox" checked ref="dirty" />
      Unsaved changes in the current tab
    </label>
    <minerva-tabs
      id="editor"
      label="Editor"
      value="draft"
      @minerva-change="onChange"
    >
      <minerva-tab value="draft">Draft</minerva-tab>
      <minerva-tab value="preview">Preview</minerva-tab>
      <minerva-tab value="history">History</minerva-tab>
      <minerva-tab-panel value="draft"
        >Write your article here.</minerva-tab-panel
      >
      <minerva-tab-panel value="preview">Rendered article.</minerva-tab-panel>
      <minerva-tab-panel value="history">Previous versions.</minerva-tab-panel>
    </minerva-tabs>
    <output id="status" aria-live="polite">{{ statusText }}</output>
  </div>
</template>
`,angular:`// tabs-controlled.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// minerva-change is cancelable: preventDefault() keeps the current tab, e.g.
// while the open tab has unsaved changes.

@Component({
  selector: "app-tabs-controlled",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <label style="display: flex; gap: 8px; align-items: center">
        <input id="dirty" type="checkbox" checked #dirty />
        Unsaved changes in the current tab
      </label>
      <minerva-tabs
        id="editor"
        label="Editor"
        value="draft"
        (minerva-change)="onChange($event)"
      >
        <minerva-tab value="draft">Draft</minerva-tab>
        <minerva-tab value="preview">Preview</minerva-tab>
        <minerva-tab value="history">History</minerva-tab>
        <minerva-tab-panel value="draft"
          >Write your article here.</minerva-tab-panel
        >
        <minerva-tab-panel value="preview">Rendered article.</minerva-tab-panel>
        <minerva-tab-panel value="history"
          >Previous versions.</minerva-tab-panel
        >
      </minerva-tabs>
      <output id="status" aria-live="polite">{{ statusText }}</output>
    </div>
  \`,
})
export class TabsControlledComponent {
  @ViewChild("dirty") dirty!: ElementRef<HTMLInputElement>;
  statusText = "";

  onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    if (this.dirty.nativeElement.checked) {
      event.preventDefault();
      this.statusText = \`Save or discard your changes before opening "\${value}".\`;
    } else {
      this.statusText = \`Opened "\${value}".\`;
    }
  };
}
`,svelte:`<!-- TabsControlled.svelte -->

<script lang="ts">
  // minerva-change is cancelable: preventDefault() keeps the current tab, e.g.
  // while the open tab has unsaved changes.

  let dirty: HTMLInputElement;
  let statusText = $state("");

  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    if (dirty.checked) {
      event.preventDefault();
      statusText = \`Save or discard your changes before opening "\${value}".\`;
    } else {
      statusText = \`Opened "\${value}".\`;
    }
  };
<\/script>

<div style="display: grid; gap: 12px">
  <label style="display: flex; gap: 8px; align-items: center">
    <input id="dirty" type="checkbox" checked bind:this={dirty} />
    Unsaved changes in the current tab
  </label>
  <minerva-tabs
    id="editor"
    label="Editor"
    value="draft"
    onminerva-change={onChange}
  >
    <minerva-tab value="draft">Draft</minerva-tab>
    <minerva-tab value="preview">Preview</minerva-tab>
    <minerva-tab value="history">History</minerva-tab>
    <minerva-tab-panel value="draft"
      >Write your article here.</minerva-tab-panel>
    <minerva-tab-panel value="preview">Rendered article.</minerva-tab-panel>
    <minerva-tab-panel value="history">Previous versions.</minerva-tab-panel>
  </minerva-tabs>
  <output id="status" aria-live="polite">{statusText}</output>
</div>
`,solid:`// TabsControlled.tsx

import { createSignal } from "solid-js";

// minerva-change is cancelable: preventDefault() keeps the current tab, e.g.
// while the open tab has unsaved changes.

export default function TabsControlled() {
  let dirty!: HTMLInputElement;
  const [statusText, setStatusText] = createSignal("");

  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    if (dirty.checked) {
      event.preventDefault();
      setStatusText(\`Save or discard your changes before opening "\${value}".\`);
    } else {
      setStatusText(\`Opened "\${value}".\`);
    }
  };

  return (
    <div style="display: grid; gap: 12px">
      <label style="display: flex; gap: 8px; align-items: center">
        <input id="dirty" type="checkbox" checked ref={dirty} />
        Unsaved changes in the current tab
      </label>
      <minerva-tabs
        id="editor"
        label="Editor"
        value="draft"
        on:minerva-change={onChange}
      >
        <minerva-tab value="draft">Draft</minerva-tab>
        <minerva-tab value="preview">Preview</minerva-tab>
        <minerva-tab value="history">History</minerva-tab>
        <minerva-tab-panel value="draft">
          Write your article here.
        </minerva-tab-panel>
        <minerva-tab-panel value="preview">Rendered article.</minerva-tab-panel>
        <minerva-tab-panel value="history">
          Previous versions.
        </minerva-tab-panel>
      </minerva-tabs>
      <output id="status" aria-live="polite">
        {statusText()}
      </output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <label style="display: flex; gap: 8px; align-items: center">
    <input id="dirty" type="checkbox" checked />
    Unsaved changes in the current tab
  </label>
  <minerva-tabs id="editor" label="Editor" value="draft">
    <minerva-tab value="draft">Draft</minerva-tab>
    <minerva-tab value="preview">Preview</minerva-tab>
    <minerva-tab value="history">History</minerva-tab>
    <minerva-tab-panel value="draft"
      >Write your article here.</minerva-tab-panel
    >
    <minerva-tab-panel value="preview">Rendered article.</minerva-tab-panel>
    <minerva-tab-panel value="history">Previous versions.</minerva-tab-panel>
  </minerva-tabs>
  <output id="status" aria-live="polite"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // minerva-change is cancelable: preventDefault() keeps the current tab, e.g.
  // while the open tab has unsaved changes.
  const tabs = document.querySelector("#editor");
  const dirty = document.querySelector("#dirty");
  const status = document.querySelector("#status");
  const onChange = (event) => {
    const { value } = event.detail;
    if (dirty.checked) {
      event.preventDefault();
      status.value = \`Save or discard your changes before opening "\${value}".\`;
    } else {
      status.value = \`Opened "\${value}".\`;
    }
  };
  tabs.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};