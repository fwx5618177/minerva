import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- KeyValueEditorErrors.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Validation belongs to the consumer: \`errors\` (by row id) shows messages
// under the fields, setCustomValidity() makes the element invalid in forms.

type Entry = { id: string; key: string; value: string };
type Editor = HTMLElement & {
  value: Entry[];
  errors?: Record<string, { key?: string; value?: string }>;
  setCustomValidity(message: string): void;
  updateComplete: Promise<boolean>;
};

const editor = ref<Editor>();
const statusText = ref("");

const validate = () => {
  const errors: Record<string, { key?: string; value?: string }> = {};
  const seen = new Set<string>();
  for (const { id, key } of editor.value!.value) {
    const name = key.trim().toLowerCase();
    if (!name) errors[id] = { key: "A header name is required." };
    else if (seen.has(name))
      errors[id] = { key: "Duplicate header (names are case-insensitive)." };
    seen.add(name);
  }
  const count = Object.keys(errors).length;
  editor.value!.errors = errors;
  editor.value!.setCustomValidity(count ? "Fix the highlighted headers." : "");
  statusText.value = count ? \`\${count} row(s) to fix\` : "All headers are valid";
};

onMounted(() => {
  void editor.value!.updateComplete.then(validate);
});
<\/script>

<template>
  <div style="display: grid; gap: 8px; max-width: 560px">
    <minerva-key-value-editor
      id="kv-headers"
      aria-label="HTTP headers"
      key-label="Header"
      value-label="Value"
      add-label="Add header"
      remove-label="Remove header"
      value='[{"key":"Accept","value":"application/json"},{"key":"accept","value":"text/html"},{"key":"","value":"orphan"}]'
      ref="editor"
      @minerva-input="validate"
      @minerva-change="validate"
    ></minerva-key-value-editor>
    <output id="kv-headers-status">{{ statusText }}</output>
  </div>
</template>
`,angular:`// key-value-editor-errors.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// Validation belongs to the consumer: \`errors\` (by row id) shows messages
// under the fields, setCustomValidity() makes the element invalid in forms.
type Entry = { id: string; key: string; value: string };
type Editor = HTMLElement & {
  value: Entry[];
  errors?: Record<string, { key?: string; value?: string }>;
  setCustomValidity(message: string): void;
  updateComplete: Promise<boolean>;
};

@Component({
  selector: "app-key-value-editor-errors",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px; max-width: 560px">
      <minerva-key-value-editor
        id="kv-headers"
        aria-label="HTTP headers"
        key-label="Header"
        value-label="Value"
        add-label="Add header"
        remove-label="Remove header"
        value='[{"key":"Accept","value":"application/json"},{"key":"accept","value":"text/html"},{"key":"","value":"orphan"}]'
        #editor
        (minerva-input)="validate($event)"
        (minerva-change)="validate($event)"
      ></minerva-key-value-editor>
      <output id="kv-headers-status">{{ statusText }}</output>
    </div>
  \`,
})
export class KeyValueEditorErrorsComponent implements AfterViewInit {
  @ViewChild("editor") editor!: ElementRef<Editor>;
  statusText = "";

  validate = () => {
    const errors: Record<string, { key?: string; value?: string }> = {};
    const seen = new Set<string>();
    for (const { id, key } of this.editor.nativeElement.value) {
      const name = key.trim().toLowerCase();
      if (!name) errors[id] = { key: "A header name is required." };
      else if (seen.has(name))
        errors[id] = { key: "Duplicate header (names are case-insensitive)." };
      seen.add(name);
    }
    const count = Object.keys(errors).length;
    this.editor.nativeElement.errors = errors;
    this.editor.nativeElement.setCustomValidity(
      count ? "Fix the highlighted headers." : "",
    );
    this.statusText = count
      ? \`\${count} row(s) to fix\`
      : "All headers are valid";
  };

  ngAfterViewInit(): void {
    void this.editor.nativeElement.updateComplete.then(this.validate);
  }
}
`,svelte:`<!-- KeyValueEditorErrors.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // Validation belongs to the consumer: \`errors\` (by row id) shows messages
  // under the fields, setCustomValidity() makes the element invalid in forms.

  type Entry = { id: string; key: string; value: string };
  type Editor = HTMLElement & {
    value: Entry[];
    errors?: Record<string, { key?: string; value?: string }>;
    setCustomValidity(message: string): void;
    updateComplete: Promise<boolean>;
  };

  let editor: Editor;
  let statusText = $state("");

  const validate = () => {
    const errors: Record<string, { key?: string; value?: string }> = {};
    const seen = new Set<string>();
    for (const { id, key } of editor.value) {
      const name = key.trim().toLowerCase();
      if (!name) errors[id] = { key: "A header name is required." };
      else if (seen.has(name))
        errors[id] = { key: "Duplicate header (names are case-insensitive)." };
      seen.add(name);
    }
    const count = Object.keys(errors).length;
    editor.errors = errors;
    editor.setCustomValidity(count ? "Fix the highlighted headers." : "");
    statusText = count ? \`\${count} row(s) to fix\` : "All headers are valid";
  };

  onMount(() => {
    void editor.updateComplete.then(validate);
  });
<\/script>

<div style="display: grid; gap: 8px; max-width: 560px">
  <minerva-key-value-editor
    id="kv-headers"
    aria-label="HTTP headers"
    key-label="Header"
    value-label="Value"
    add-label="Add header"
    remove-label="Remove header"
    value={"[{\\"key\\":\\"Accept\\",\\"value\\":\\"application/json\\"},{\\"key\\":\\"accept\\",\\"value\\":\\"text/html\\"},{\\"key\\":\\"\\",\\"value\\":\\"orphan\\"}]"}
    bind:this={editor}
    onminerva-input={validate}
    onminerva-change={validate}
  ></minerva-key-value-editor>
  <output id="kv-headers-status">{statusText}</output>
</div>
`,solid:`// KeyValueEditorErrors.tsx

import { createSignal, onMount } from "solid-js";

// Validation belongs to the consumer: \`errors\` (by row id) shows messages
// under the fields, setCustomValidity() makes the element invalid in forms.
type Entry = { id: string; key: string; value: string };
type Editor = HTMLElement & {
  value: Entry[];
  errors?: Record<string, { key?: string; value?: string }>;
  setCustomValidity(message: string): void;
  updateComplete: Promise<boolean>;
};

export default function KeyValueEditorErrors() {
  let editor!: Editor;
  const [statusText, setStatusText] = createSignal("");

  const validate = () => {
    const errors: Record<string, { key?: string; value?: string }> = {};
    const seen = new Set<string>();
    for (const { id, key } of editor.value) {
      const name = key.trim().toLowerCase();
      if (!name) errors[id] = { key: "A header name is required." };
      else if (seen.has(name))
        errors[id] = { key: "Duplicate header (names are case-insensitive)." };
      seen.add(name);
    }
    const count = Object.keys(errors).length;
    editor.errors = errors;
    editor.setCustomValidity(count ? "Fix the highlighted headers." : "");
    setStatusText(count ? \`\${count} row(s) to fix\` : "All headers are valid");
  };

  onMount(() => {
    void editor.updateComplete.then(validate);
  });

  return (
    <div style="display: grid; gap: 8px; max-width: 560px">
      <minerva-key-value-editor
        id="kv-headers"
        aria-label="HTTP headers"
        key-label="Header"
        value-label="Value"
        add-label="Add header"
        remove-label="Remove header"
        value='[{"key":"Accept","value":"application/json"},{"key":"accept","value":"text/html"},{"key":"","value":"orphan"}]'
        ref={editor}
        on:minerva-input={validate}
        on:minerva-change={validate}
      ></minerva-key-value-editor>
      <output id="kv-headers-status">{statusText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px; max-width: 560px">
  <minerva-key-value-editor
    id="kv-headers"
    aria-label="HTTP headers"
    key-label="Header"
    value-label="Value"
    add-label="Add header"
    remove-label="Remove header"
    value='[{"key":"Accept","value":"application/json"},{"key":"accept","value":"text/html"},{"key":"","value":"orphan"}]'
  ></minerva-key-value-editor>
  <output id="kv-headers-status"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Validation belongs to the consumer: \`errors\` (by row id) shows messages
  // under the fields, setCustomValidity() makes the element invalid in forms.
  const editor = document.querySelector("#kv-headers");
  const status = document.querySelector("#kv-headers-status");
  const validate = () => {
    const errors = {};
    const seen = new Set();
    for (const { id, key } of editor.value) {
      const name = key.trim().toLowerCase();
      if (!name) errors[id] = { key: "A header name is required." };
      else if (seen.has(name))
        errors[id] = { key: "Duplicate header (names are case-insensitive)." };
      seen.add(name);
    }
    const count = Object.keys(errors).length;
    editor.errors = errors;
    editor.setCustomValidity(count ? "Fix the highlighted headers." : "");
    status.value = count ? \`\${count} row(s) to fix\` : "All headers are valid";
  };
  editor.addEventListener("minerva-input", validate);
  editor.addEventListener("minerva-change", validate);
  void editor.updateComplete.then(validate);
<\/script>
`}})))()}n();export{t as default};