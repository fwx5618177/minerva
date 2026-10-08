import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MonacoCodeEditorBasic.vue -->

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

// The editor runs on the app's own Monaco engine (never a CDN): load the
// optional entry and the engine, then pass it as the \`monaco\` property. It
// follows the page / <minerva-config> theme and submits its value with the
// form. In an app:
//   import "minerva-design/web-components/code-editor";
//   import * as monaco from "monaco-editor"; // + workers (MonacoEnvironment)
//   editor.monaco = monaco;

import type { CodeEditorEngine } from "minerva-design/web-components/code-editor";

const editor = ref<
  HTMLElement & { monaco?: CodeEditorEngine; value: string }
>();
const form = ref<HTMLFormElement>();
const outputText = ref("");

let cancelled = false;
const onInput = () => {
  outputText.value = \`\${editor.value!.value.length} characters\`;
};
const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const source = String(new FormData(form.value!).get("source") ?? "");
  outputText.value = \`Submitted \${source.length} characters\`;
};

onMounted(() => {
  void Promise.all([
    import("minerva-design/web-components/code-editor"),
    // If the engine cannot load, the editor falls back to its textarea
    import("../engine").then(
      (m) => m.monaco,
      () => undefined,
    ),
  ]).then(([, engine]) => {
    if (!cancelled && engine) editor.value!.monaco = engine;
  });
});

onBeforeUnmount(() => {
  cancelled = true;
});
<\/script>

<template>
  <form
    id="source-form"
    style="display: grid; gap: 8px"
    ref="form"
    @submit="onSubmit"
  >
    <minerva-code-editor
      id="html-editor"
      name="source"
      label="HTML source"
      language="html"
      height="240"
      value="<h1>Hello</h1>&#10;<p>Edit me.</p>&#10;"
      ref="editor"
      @minerva-input="onInput"
    ></minerva-code-editor>
    <p style="margin: 0">
      <minerva-button type="submit" size="small">Submit</minerva-button>
      <output id="html-length">{{ outputText }}</output>
    </p>
  </form>
</template>
`,angular:`// monaco-code-editor-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
  type OnDestroy,
} from "@angular/core";

// The editor runs on the app's own Monaco engine (never a CDN): load the
// optional entry and the engine, then pass it as the \`monaco\` property. It
// follows the page / <minerva-config> theme and submits its value with the
// form. In an app:
//   import "minerva-design/web-components/code-editor";
//   import * as monaco from "monaco-editor"; // + workers (MonacoEnvironment)
//   editor.monaco = monaco;
import type { CodeEditorEngine } from "minerva-design/web-components/code-editor";

@Component({
  selector: "app-monaco-code-editor-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form
      id="source-form"
      style="display: grid; gap: 8px"
      #form
      (submit)="onSubmit($event)"
    >
      <minerva-code-editor
        id="html-editor"
        name="source"
        label="HTML source"
        language="html"
        height="240"
        value="<h1>Hello</h1>&#10;<p>Edit me.</p>&#10;"
        #editor
        (minerva-input)="onInput($event)"
      ></minerva-code-editor>
      <p style="margin: 0">
        <minerva-button type="submit" size="small">Submit</minerva-button>
        <output id="html-length">{{ outputText }}</output>
      </p>
    </form>
  \`,
})
export class MonacoCodeEditorBasicComponent
  implements AfterViewInit, OnDestroy
{
  @ViewChild("editor") editor!: ElementRef<
    HTMLElement & { monaco?: CodeEditorEngine; value: string }
  >;
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  outputText = "";

  cancelled = false;
  onInput = () => {
    this.outputText = \`\${this.editor.nativeElement.value.length} characters\`;
  };
  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const source = String(
      new FormData(this.form.nativeElement).get("source") ?? "",
    );
    this.outputText = \`Submitted \${source.length} characters\`;
  };

  ngAfterViewInit(): void {
    void Promise.all([
      import("minerva-design/web-components/code-editor"),
      // If the engine cannot load, the editor falls back to its textarea
      import("../engine").then(
        (m) => m.monaco,
        () => undefined,
      ),
    ]).then(([, engine]) => {
      if (!this.cancelled && engine) this.editor.nativeElement.monaco = engine;
    });
  }

  ngOnDestroy(): void {
    this.cancelled = true;
  }
}
`,svelte:`<!-- MonacoCodeEditorBasic.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // The editor runs on the app's own Monaco engine (never a CDN): load the
  // optional entry and the engine, then pass it as the \`monaco\` property. It
  // follows the page / <minerva-config> theme and submits its value with the
  // form. In an app:
  //   import "minerva-design/web-components/code-editor";
  //   import * as monaco from "monaco-editor"; // + workers (MonacoEnvironment)
  //   editor.monaco = monaco;

  import type { CodeEditorEngine } from "minerva-design/web-components/code-editor";

  let editor: HTMLElement & { monaco?: CodeEditorEngine; value: string };
  let form: HTMLFormElement;
  let outputText = $state("");

  let cancelled = false;
  const onInput = () => {
    outputText = \`\${editor.value.length} characters\`;
  };
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const source = String(new FormData(form).get("source") ?? "");
    outputText = \`Submitted \${source.length} characters\`;
  };

  onMount(() => {
    void Promise.all([
      import("minerva-design/web-components/code-editor"),
      // If the engine cannot load, the editor falls back to its textarea
      import("../engine").then(
        (m) => m.monaco,
        () => undefined,
      ),
    ]).then(([, engine]) => {
      if (!cancelled && engine) editor.monaco = engine;
    });
    return () => {
      cancelled = true;
    };
  });
<\/script>

<form
  id="source-form"
  style="display: grid; gap: 8px"
  bind:this={form}
  onsubmit={onSubmit}
>
  <minerva-code-editor
    id="html-editor"
    name="source"
    label="HTML source"
    language="html"
    height="240"
    value="<h1>Hello</h1>&#10;<p>Edit me.</p>&#10;"
    bind:this={editor}
    onminerva-input={onInput}
  ></minerva-code-editor>
  <p style="margin: 0">
    <minerva-button type="submit" size="small">Submit</minerva-button>
    <output id="html-length">{outputText}</output>
  </p>
</form>
`,solid:`// MonacoCodeEditorBasic.tsx

import { createSignal, onCleanup, onMount } from "solid-js";

// The editor runs on the app's own Monaco engine (never a CDN): load the
// optional entry and the engine, then pass it as the \`monaco\` property. It
// follows the page / <minerva-config> theme and submits its value with the
// form. In an app:
//   import "minerva-design/web-components/code-editor";
//   import * as monaco from "monaco-editor"; // + workers (MonacoEnvironment)
//   editor.monaco = monaco;
import type { CodeEditorEngine } from "minerva-design/web-components/code-editor";

export default function MonacoCodeEditorBasic() {
  let editor!: HTMLElement & { monaco?: CodeEditorEngine; value: string };
  let form!: HTMLFormElement;
  const [outputText, setOutputText] = createSignal("");

  let cancelled = false;
  const onInput = () => {
    setOutputText(\`\${editor.value.length} characters\`);
  };
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const source = String(new FormData(form).get("source") ?? "");
    setOutputText(\`Submitted \${source.length} characters\`);
  };

  onMount(() => {
    void Promise.all([
      import("minerva-design/web-components/code-editor"),
      // If the engine cannot load, the editor falls back to its textarea
      import("../engine").then(
        (m) => m.monaco,
        () => undefined,
      ),
    ]).then(([, engine]) => {
      if (!cancelled && engine) editor.monaco = engine;
    });
  });

  onCleanup(() => {
    cancelled = true;
  });

  return (
    <form
      id="source-form"
      style="display: grid; gap: 8px"
      ref={form}
      on:submit={onSubmit}
    >
      <minerva-code-editor
        id="html-editor"
        name="source"
        label="HTML source"
        language="html"
        height="240"
        value="<h1>Hello</h1>&#10;<p>Edit me.</p>&#10;"
        ref={editor}
        on:minerva-input={onInput}
      ></minerva-code-editor>
      <p style="margin: 0">
        <minerva-button type="submit" size="small">
          Submit
        </minerva-button>
        <output id="html-length">{outputText()}</output>
      </p>
    </form>
  );
}
`,html:`<form id="source-form" style="display: grid; gap: 8px">
  <minerva-code-editor
    id="html-editor"
    name="source"
    label="HTML source"
    language="html"
    height="240"
    value="<h1>Hello</h1>&#10;<p>Edit me.</p>&#10;"
  ></minerva-code-editor>
  <p style="margin: 0">
    <minerva-button type="submit" size="small">Submit</minerva-button>
    <output id="html-length"></output>
  </p>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The editor runs on the app's own Monaco engine (never a CDN): load the
  // optional entry and the engine, then pass it as the \`monaco\` property. It
  // follows the page / <minerva-config> theme and submits its value with the
  // form. In an app:
  //   import "minerva-design/web-components/code-editor";
  //   import * as monaco from "monaco-editor"; // + workers (MonacoEnvironment)
  //   editor.monaco = monaco;
  const editor = document.querySelector("#html-editor");
  const form = document.querySelector("#source-form");
  const output = document.querySelector("#html-length");
  let cancelled = false;
  void Promise.all([
    import("minerva-design/web-components/code-editor"),
    // If the engine cannot load, the editor falls back to its textarea
    import("../engine").then(
      (m) => m.monaco,
      () => undefined,
    ),
  ]).then(([, engine]) => {
    if (!cancelled && engine) editor.monaco = engine;
  });
  const onInput = () => {
    output.value = \`\${editor.value.length} characters\`;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const source = String(new FormData(form).get("source") ?? "");
    output.value = \`Submitted \${source.length} characters\`;
  };
  editor.addEventListener("minerva-input", onInput);
  form.addEventListener("submit", onSubmit);
<\/script>
`}})))()}n();export{t as default};