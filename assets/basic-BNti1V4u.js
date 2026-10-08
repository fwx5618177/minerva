import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- KeyValueEditorBasic.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// \`value\` is an array of { id, key, value } rows; \`minerva-change\` fires when
// a field is committed (blur) or a row is added / removed.

type Entry = { id: string; key: string; value: string };
type Editor = HTMLElement & {
  value: Entry[];
  updateComplete: Promise<boolean>;
};

const editor = ref<Editor>();
const outputText = ref("");

const show = () => {
  const pairs = editor.value!.value.map(({ key, value }) => [key, value]);
  outputText.value = JSON.stringify(Object.fromEntries(pairs), null, 2);
};

onMounted(() => {
  void editor.value!.updateComplete.then(show);
});
<\/script>

<template>
  <div style="display: grid; gap: 8px; max-width: 560px">
    <span id="kv-env-label">Environment variables</span>
    <minerva-key-value-editor
      id="kv-env"
      aria-labelledby="kv-env-label"
      key-label="Variable"
      value-label="Value"
      value='{"NODE_ENV":"production","PORT":"8080"}'
      ref="editor"
      @minerva-change="show"
    ></minerva-key-value-editor>
    <pre id="kv-env-json" style="margin: 0; font-size: 12px">{{
      outputText
    }}</pre>
  </div>
</template>
`,angular:`// key-value-editor-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// \`value\` is an array of { id, key, value } rows; \`minerva-change\` fires when
// a field is committed (blur) or a row is added / removed.
type Entry = { id: string; key: string; value: string };
type Editor = HTMLElement & {
  value: Entry[];
  updateComplete: Promise<boolean>;
};

@Component({
  selector: "app-key-value-editor-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px; max-width: 560px">
      <span id="kv-env-label">Environment variables</span>
      <minerva-key-value-editor
        id="kv-env"
        aria-labelledby="kv-env-label"
        key-label="Variable"
        value-label="Value"
        value='{"NODE_ENV":"production","PORT":"8080"}'
        #editor
        (minerva-change)="show($event)"
      ></minerva-key-value-editor>
      <pre id="kv-env-json" style="margin: 0; font-size: 12px">{{
        outputText
      }}</pre>
    </div>
  \`,
})
export class KeyValueEditorBasicComponent implements AfterViewInit {
  @ViewChild("editor") editor!: ElementRef<Editor>;
  outputText = "";

  show = () => {
    const pairs = this.editor.nativeElement.value.map(({ key, value }) => [
      key,
      value,
    ]);
    this.outputText = JSON.stringify(Object.fromEntries(pairs), null, 2);
  };

  ngAfterViewInit(): void {
    void this.editor.nativeElement.updateComplete.then(this.show);
  }
}
`,svelte:`<!-- KeyValueEditorBasic.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // \`value\` is an array of { id, key, value } rows; \`minerva-change\` fires when
  // a field is committed (blur) or a row is added / removed.

  type Entry = { id: string; key: string; value: string };
  type Editor = HTMLElement & {
    value: Entry[];
    updateComplete: Promise<boolean>;
  };

  let editor: Editor;
  let outputText = $state("");

  const show = () => {
    const pairs = editor.value.map(({ key, value }) => [key, value]);
    outputText = JSON.stringify(Object.fromEntries(pairs), null, 2);
  };

  onMount(() => {
    void editor.updateComplete.then(show);
  });
<\/script>

<div style="display: grid; gap: 8px; max-width: 560px">
  <span id="kv-env-label">Environment variables</span>
  <minerva-key-value-editor
    id="kv-env"
    aria-labelledby="kv-env-label"
    key-label="Variable"
    value-label="Value"
    value={"{\\"NODE_ENV\\":\\"production\\",\\"PORT\\":\\"8080\\"}"}
    bind:this={editor}
    onminerva-change={show}
  ></minerva-key-value-editor>
  <pre id="kv-env-json" style="margin: 0; font-size: 12px">{outputText}</pre>
</div>
`,solid:`// KeyValueEditorBasic.tsx

import { createSignal, onMount } from "solid-js";

// \`value\` is an array of { id, key, value } rows; \`minerva-change\` fires when
// a field is committed (blur) or a row is added / removed.
type Entry = { id: string; key: string; value: string };
type Editor = HTMLElement & {
  value: Entry[];
  updateComplete: Promise<boolean>;
};

export default function KeyValueEditorBasic() {
  let editor!: Editor;
  const [outputText, setOutputText] = createSignal("");

  const show = () => {
    const pairs = editor.value.map(({ key, value }) => [key, value]);
    setOutputText(JSON.stringify(Object.fromEntries(pairs), null, 2));
  };

  onMount(() => {
    void editor.updateComplete.then(show);
  });

  return (
    <div style="display: grid; gap: 8px; max-width: 560px">
      <span id="kv-env-label">Environment variables</span>
      <minerva-key-value-editor
        id="kv-env"
        aria-labelledby="kv-env-label"
        key-label="Variable"
        value-label="Value"
        value='{"NODE_ENV":"production","PORT":"8080"}'
        ref={editor}
        on:minerva-change={show}
      ></minerva-key-value-editor>
      <pre id="kv-env-json" style="margin: 0; font-size: 12px">
        {outputText()}
      </pre>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px; max-width: 560px">
  <span id="kv-env-label">Environment variables</span>
  <minerva-key-value-editor
    id="kv-env"
    aria-labelledby="kv-env-label"
    key-label="Variable"
    value-label="Value"
    value='{"NODE_ENV":"production","PORT":"8080"}'
  ></minerva-key-value-editor>
  <pre id="kv-env-json" style="margin: 0; font-size: 12px"></pre>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // \`value\` is an array of { id, key, value } rows; \`minerva-change\` fires when
  // a field is committed (blur) or a row is added / removed.
  const editor = document.querySelector("#kv-env");
  const output = document.querySelector("#kv-env-json");
  const show = () => {
    const pairs = editor.value.map(({ key, value }) => [key, value]);
    output.textContent = JSON.stringify(Object.fromEntries(pairs), null, 2);
  };
  editor.addEventListener("minerva-change", show);
  void editor.updateComplete.then(show);
<\/script>
`}})))()}n();export{t as default};