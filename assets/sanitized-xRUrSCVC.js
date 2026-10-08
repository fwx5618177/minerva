import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- HtmlPreviewSanitized.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Scripts, event handlers and remote resources are removed (DOMPurify +
// CSP in a sandboxed iframe): edit the source, nothing runs.

type Preview = HTMLElement & { html: string };

const source = ref<HTMLTextAreaElement>();
const preview = ref<Preview>();

const sourceValue = [
  '<p style="color: crimson">Styled text stays.</p>',
  "<script>alert('removed')<\\/script>",
  '<img src="x" onerror="alert(\\'removed\\')" alt="Broken image">',
  "<button onclick=\\"alert('removed')\\">Inert button</button>",
].join("\\n");
const sync = () => (preview.value!.html = source.value!.value);

onMounted(() => {
  sync();
});
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <label style="display: grid; gap: 4px">
      Untrusted HTML
      <textarea
        id="source"
        rows="5"
        style="font-family: monospace"
        ref="source"
        :value.prop="sourceValue"
        @input="sync"
      ></textarea>
    </label>
    <minerva-html-preview
      id="preview"
      label="Sanitized preview"
      height="160"
      ref="preview"
    ></minerva-html-preview>
  </div>
</template>
`,angular:`// html-preview-sanitized.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// Scripts, event handlers and remote resources are removed (DOMPurify +
// CSP in a sandboxed iframe): edit the source, nothing runs.
type Preview = HTMLElement & { html: string };

@Component({
  selector: "app-html-preview-sanitized",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <label style="display: grid; gap: 4px">
        Untrusted HTML
        <textarea
          id="source"
          rows="5"
          style="font-family: monospace"
          #source
          [value]="sourceValue"
          (input)="sync($event)"
        ></textarea>
      </label>
      <minerva-html-preview
        id="preview"
        label="Sanitized preview"
        height="160"
        #preview
      ></minerva-html-preview>
    </div>
  \`,
})
export class HtmlPreviewSanitizedComponent implements AfterViewInit {
  @ViewChild("source") source!: ElementRef<HTMLTextAreaElement>;
  @ViewChild("preview") preview!: ElementRef<Preview>;

  sourceValue = [
    '<p style="color: crimson">Styled text stays.</p>',
    "<script>alert('removed')<\/script>",
    '<img src="x" onerror="alert(\\'removed\\')" alt="Broken image">',
    "<button onclick=\\"alert('removed')\\">Inert button</button>",
  ].join("\\n");
  sync = () =>
    (this.preview.nativeElement.html = this.source.nativeElement.value);

  ngAfterViewInit(): void {
    this.sync();
  }
}
`,svelte:`<!-- HtmlPreviewSanitized.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // Scripts, event handlers and remote resources are removed (DOMPurify +
  // CSP in a sandboxed iframe): edit the source, nothing runs.

  type Preview = HTMLElement & { html: string };

  let source: HTMLTextAreaElement;
  let preview: Preview;

  const sourceValue = [
    '<p style="color: crimson">Styled text stays.</p>',
    "<script>alert('removed')<\\/script>",
    '<img src="x" onerror="alert(\\'removed\\')" alt="Broken image">',
    "<button onclick=\\"alert('removed')\\">Inert button</button>",
  ].join("\\n");
  const sync = () => (preview.html = source.value);

  onMount(() => {
    sync();
  });
<\/script>

<div style="display: grid; gap: 12px">
  <label style="display: grid; gap: 4px">
    Untrusted HTML
    <textarea
      id="source"
      rows="5"
      style="font-family: monospace"
      bind:this={source}
      value={sourceValue}
      oninput={sync}
    ></textarea>
  </label>
  <minerva-html-preview
    id="preview"
    label="Sanitized preview"
    height="160"
    bind:this={preview}
  ></minerva-html-preview>
</div>
`,solid:`// HtmlPreviewSanitized.tsx

import { onMount } from "solid-js";

// Scripts, event handlers and remote resources are removed (DOMPurify +
// CSP in a sandboxed iframe): edit the source, nothing runs.
type Preview = HTMLElement & { html: string };

export default function HtmlPreviewSanitized() {
  let source!: HTMLTextAreaElement;
  let preview!: Preview;

  const sourceValue = [
    '<p style="color: crimson">Styled text stays.</p>',
    "<script>alert('removed')<\/script>",
    '<img src="x" onerror="alert(\\'removed\\')" alt="Broken image">',
    "<button onclick=\\"alert('removed')\\">Inert button</button>",
  ].join("\\n");
  const sync = () => (preview.html = source.value);

  onMount(() => {
    sync();
  });

  return (
    <div style="display: grid; gap: 12px">
      <label style="display: grid; gap: 4px">
        Untrusted HTML
        <textarea
          id="source"
          rows="5"
          style="font-family: monospace"
          ref={source}
          prop:value={sourceValue}
          on:input={sync}
        ></textarea>
      </label>
      <minerva-html-preview
        id="preview"
        label="Sanitized preview"
        height="160"
        ref={preview}
      ></minerva-html-preview>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <label style="display: grid; gap: 4px">
    Untrusted HTML
    <textarea id="source" rows="5" style="font-family: monospace"></textarea>
  </label>
  <minerva-html-preview
    id="preview"
    label="Sanitized preview"
    height="160"
  ></minerva-html-preview>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Scripts, event handlers and remote resources are removed (DOMPurify +
  // CSP in a sandboxed iframe): edit the source, nothing runs.
  const source = document.querySelector("#source");
  const preview = document.querySelector("#preview");
  source.value = [
    '<p style="color: crimson">Styled text stays.</p>',
    "<script>alert('removed')<\\/script>",
    '<img src="x" onerror="alert(\\'removed\\')" alt="Broken image">',
    "<button onclick=\\"alert('removed')\\">Inert button</button>",
  ].join("\\n");
  const sync = () => (preview.html = source.value);
  sync();
  source.addEventListener("input", sync);
<\/script>
`}})))()}n();export{t as default};