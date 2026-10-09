import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MonacoCodeEditorFallback.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Without an engine the editor shows its loading state, then (after
// load-timeout) an editable textarea with a Retry button: the value is kept
// and still submitted. Setting \`monaco\` later loads the editor with the
// latest value.

import type { CodeEditorEngine } from "minerva-design/web-components/code-editor";

const editor = ref<HTMLElement & { monaco?: CodeEditorEngine }>();
const statusText = ref("Waiting for an engine…");

const onError = () => {
  statusText.value = "Engine unavailable: textarea fallback";
};
const onClick = async () => {
  const engine = await import("../engine").then(
    (m) => m.monaco,
    () => undefined,
  );
  if (!engine) return;
  editor.value!.monaco = engine;
  statusText.value = "Engine provided";
};

onMounted(() => {
  void import("minerva-design/web-components/code-editor");
});
<\/script>

<template>
  <minerva-code-editor
    id="fallback-editor"
    label="JSON settings"
    language="json"
    height="180"
    load-timeout="1500"
    value='{ "theme": "dark" }'
    ref="editor"
    @minerva-error="onError"
  ></minerva-code-editor>
  <p style="margin: 8px 0 0; display: flex; gap: 8px; align-items: center">
    <minerva-button
      id="load-engine"
      size="small"
      variant="outline"
      color="neutral"
      @click="onClick"
      >Provide the engine</minerva-button
    >
    <output id="fallback-status">{{ statusText }}</output>
  </p>
</template>
`,angular:`// monaco-code-editor-fallback.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// Without an engine the editor shows its loading state, then (after
// load-timeout) an editable textarea with a Retry button: the value is kept
// and still submitted. Setting \`monaco\` later loads the editor with the
// latest value.
import type { CodeEditorEngine } from "minerva-design/web-components/code-editor";

@Component({
  selector: "app-monaco-code-editor-fallback",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-code-editor
      id="fallback-editor"
      label="JSON settings"
      language="json"
      height="180"
      load-timeout="1500"
      value='{ "theme": "dark" }'
      #editor
      (minerva-error)="onError($event)"
    ></minerva-code-editor>
    <p style="margin: 8px 0 0; display: flex; gap: 8px; align-items: center">
      <minerva-button
        id="load-engine"
        size="small"
        variant="outline"
        color="neutral"
        (click)="onClick($event)"
        >Provide the engine</minerva-button
      >
      <output id="fallback-status">{{ statusText }}</output>
    </p>
  \`,
})
export class MonacoCodeEditorFallbackComponent implements AfterViewInit {
  @ViewChild("editor") editor!: ElementRef<
    HTMLElement & { monaco?: CodeEditorEngine }
  >;
  statusText = "Waiting for an engine…";

  onError = () => {
    this.statusText = "Engine unavailable: textarea fallback";
  };
  onClick = async () => {
    const engine = await import("../engine").then(
      (m) => m.monaco,
      () => undefined,
    );
    if (!engine) return;
    this.editor.nativeElement.monaco = engine;
    this.statusText = "Engine provided";
  };

  ngAfterViewInit(): void {
    void import("minerva-design/web-components/code-editor");
  }
}
`,svelte:`<!-- MonacoCodeEditorFallback.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // Without an engine the editor shows its loading state, then (after
  // load-timeout) an editable textarea with a Retry button: the value is kept
  // and still submitted. Setting \`monaco\` later loads the editor with the
  // latest value.

  import type { CodeEditorEngine } from "minerva-design/web-components/code-editor";

  let editor: HTMLElement & { monaco?: CodeEditorEngine };
  let statusText = $state("Waiting for an engine…");

  const onError = () => {
    statusText = "Engine unavailable: textarea fallback";
  };
  const onClick = async () => {
    const engine = await import("../engine").then(
      (m) => m.monaco,
      () => undefined,
    );
    if (!engine) return;
    editor.monaco = engine;
    statusText = "Engine provided";
  };

  onMount(() => {
    void import("minerva-design/web-components/code-editor");
  });
<\/script>

<minerva-code-editor
  id="fallback-editor"
  label="JSON settings"
  language="json"
  height="180"
  load-timeout="1500"
  value={"{ \\"theme\\": \\"dark\\" }"}
  bind:this={editor}
  onminerva-error={onError}
></minerva-code-editor>
<p style="margin: 8px 0 0; display: flex; gap: 8px; align-items: center">
  <minerva-button
    id="load-engine"
    size="small"
    variant="outline"
    color="neutral"
    onclick={onClick}
  >Provide the engine</minerva-button>
  <output id="fallback-status">{statusText}</output>
</p>
`,solid:`// MonacoCodeEditorFallback.tsx

import { createSignal, onMount } from "solid-js";

// Without an engine the editor shows its loading state, then (after
// load-timeout) an editable textarea with a Retry button: the value is kept
// and still submitted. Setting \`monaco\` later loads the editor with the
// latest value.
import type { CodeEditorEngine } from "minerva-design/web-components/code-editor";

export default function MonacoCodeEditorFallback() {
  let editor!: HTMLElement & { monaco?: CodeEditorEngine };
  const [statusText, setStatusText] = createSignal("Waiting for an engine…");

  const onError = () => {
    setStatusText("Engine unavailable: textarea fallback");
  };
  const onClick = async () => {
    const engine = await import("../engine").then(
      (m) => m.monaco,
      () => undefined,
    );
    if (!engine) return;
    editor.monaco = engine;
    setStatusText("Engine provided");
  };

  onMount(() => {
    void import("minerva-design/web-components/code-editor");
  });

  return (
    <>
      <minerva-code-editor
        id="fallback-editor"
        label="JSON settings"
        language="json"
        height="180"
        load-timeout="1500"
        value='{ "theme": "dark" }'
        ref={editor}
        on:minerva-error={onError}
      ></minerva-code-editor>
      <p style="margin: 8px 0 0; display: flex; gap: 8px; align-items: center">
        <minerva-button
          id="load-engine"
          size="small"
          variant="outline"
          color="neutral"
          on:click={onClick}
        >
          Provide the engine
        </minerva-button>
        <output id="fallback-status">{statusText()}</output>
      </p>
    </>
  );
}
`,html:`<minerva-code-editor
  id="fallback-editor"
  label="JSON settings"
  language="json"
  height="180"
  load-timeout="1500"
  value='{ "theme": "dark" }'
></minerva-code-editor>
<p style="margin: 8px 0 0; display: flex; gap: 8px; align-items: center">
  <minerva-button
    id="load-engine"
    size="small"
    variant="outline"
    color="neutral"
    >Provide the engine</minerva-button
  >
  <output id="fallback-status">Waiting for an engine…</output>
</p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Without an engine the editor shows its loading state, then (after
  // load-timeout) an editable textarea with a Retry button: the value is kept
  // and still submitted. Setting \`monaco\` later loads the editor with the
  // latest value.
  const editor = document.querySelector("#fallback-editor");
  const button = document.querySelector("#load-engine");
  const status = document.querySelector("#fallback-status");
  void import("minerva-design/web-components/code-editor");
  const onError = () => {
    status.value = "Engine unavailable: textarea fallback";
  };
  const onClick = async () => {
    const engine = await import("../engine").then(
      (m) => m.monaco,
      () => undefined,
    );
    if (!engine) return;
    editor.monaco = engine;
    status.value = "Engine provided";
  };
  editor.addEventListener("minerva-error", onError);
  button.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};