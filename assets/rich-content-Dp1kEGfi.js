import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ProseRichContent.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Typical use: HTML rendered from Markdown or a rich-text editor. Prose does
// not sanitize: only insert trusted (or sanitized) HTML.

const rendered = \`
<h2>Migration guide</h2>
<ol>
  <li>Install the package.</li>
  <li>Import <code>tokens.css</code> once.</li>
  <li>Replace the components one page at a time.</li>
</ol>
<table>
  <thead><tr><th>React</th><th>Web Component</th></tr></thead>
  <tbody>
    <tr><td><code>&lt;Button&gt;</code></td><td><code>&lt;minerva-button&gt;</code></td></tr>
    <tr><td><code>&lt;Prose&gt;</code></td><td><code>&lt;minerva-prose&gt;</code></td></tr>
  </tbody>
</table>
<pre><code>import "@minerva/lib-web-components";</code></pre>
<hr />
<p><small>Last updated in March 2026.</small></p>\`;

const root = ref<HTMLElement>();

onMounted(() => {
  root.value!.querySelector<HTMLElement>("#article")!.innerHTML = rendered;
});
<\/script>

<template>
  <div ref="root">
    <minerva-prose id="article" style="max-width: 640px"></minerva-prose>
  </div>
</template>
`,angular:`// prose-rich-content.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// Typical use: HTML rendered from Markdown or a rich-text editor. Prose does
// not sanitize: only insert trusted (or sanitized) HTML.
const rendered = \`
<h2>Migration guide</h2>
<ol>
  <li>Install the package.</li>
  <li>Import <code>tokens.css</code> once.</li>
  <li>Replace the components one page at a time.</li>
</ol>
<table>
  <thead><tr><th>React</th><th>Web Component</th></tr></thead>
  <tbody>
    <tr><td><code>&lt;Button&gt;</code></td><td><code>&lt;minerva-button&gt;</code></td></tr>
    <tr><td><code>&lt;Prose&gt;</code></td><td><code>&lt;minerva-prose&gt;</code></td></tr>
  </tbody>
</table>
<pre><code>import "@minerva/lib-web-components";</code></pre>
<hr />
<p><small>Last updated in March 2026.</small></p>\`;

@Component({
  selector: "app-prose-rich-content",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div #root>
      <minerva-prose id="article" style="max-width: 640px"></minerva-prose>
    </div>
  \`,
})
export class ProseRichContentComponent implements AfterViewInit {
  @ViewChild("root") root!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.root.nativeElement.querySelector<HTMLElement>("#article")!.innerHTML =
      rendered;
  }
}
`,svelte:`<!-- ProseRichContent.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // Typical use: HTML rendered from Markdown or a rich-text editor. Prose does
  // not sanitize: only insert trusted (or sanitized) HTML.

  const rendered = \`
  <h2>Migration guide</h2>
  <ol>
    <li>Install the package.</li>
    <li>Import <code>tokens.css</code> once.</li>
    <li>Replace the components one page at a time.</li>
  </ol>
  <table>
    <thead><tr><th>React</th><th>Web Component</th></tr></thead>
    <tbody>
      <tr><td><code>&lt;Button&gt;</code></td><td><code>&lt;minerva-button&gt;</code></td></tr>
      <tr><td><code>&lt;Prose&gt;</code></td><td><code>&lt;minerva-prose&gt;</code></td></tr>
    </tbody>
  </table>
  <pre><code>import "@minerva/lib-web-components";</code></pre>
  <hr />
  <p><small>Last updated in March 2026.</small></p>\`;

  let root: HTMLElement;

  onMount(() => {
    root.querySelector<HTMLElement>("#article")!.innerHTML = rendered;
  });
<\/script>

<div
  bind:this={root}
>
  <minerva-prose id="article" style="max-width: 640px"></minerva-prose>
</div>
`,solid:`// ProseRichContent.tsx

import { onMount } from "solid-js";

// Typical use: HTML rendered from Markdown or a rich-text editor. Prose does
// not sanitize: only insert trusted (or sanitized) HTML.
const rendered = \`
<h2>Migration guide</h2>
<ol>
  <li>Install the package.</li>
  <li>Import <code>tokens.css</code> once.</li>
  <li>Replace the components one page at a time.</li>
</ol>
<table>
  <thead><tr><th>React</th><th>Web Component</th></tr></thead>
  <tbody>
    <tr><td><code>&lt;Button&gt;</code></td><td><code>&lt;minerva-button&gt;</code></td></tr>
    <tr><td><code>&lt;Prose&gt;</code></td><td><code>&lt;minerva-prose&gt;</code></td></tr>
  </tbody>
</table>
<pre><code>import "@minerva/lib-web-components";</code></pre>
<hr />
<p><small>Last updated in March 2026.</small></p>\`;

export default function ProseRichContent() {
  let root!: HTMLElement;

  onMount(() => {
    root.querySelector<HTMLElement>("#article")!.innerHTML = rendered;
  });

  return (
    <div ref={root}>
      <minerva-prose id="article" style="max-width: 640px"></minerva-prose>
    </div>
  );
}
`,html:`<minerva-prose id="article" style="max-width: 640px"></minerva-prose>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Typical use: HTML rendered from Markdown or a rich-text editor. Prose does
  // not sanitize: only insert trusted (or sanitized) HTML.
  // Typical use: HTML rendered from Markdown or a rich-text editor. Prose does
  // not sanitize: only insert trusted (or sanitized) HTML.
  const rendered = \`
  <h2>Migration guide</h2>
  <ol>
    <li>Install the package.</li>
    <li>Import <code>tokens.css</code> once.</li>
    <li>Replace the components one page at a time.</li>
  </ol>
  <table>
    <thead><tr><th>React</th><th>Web Component</th></tr></thead>
    <tbody>
      <tr><td><code>&lt;Button&gt;</code></td><td><code>&lt;minerva-button&gt;</code></td></tr>
      <tr><td><code>&lt;Prose&gt;</code></td><td><code>&lt;minerva-prose&gt;</code></td></tr>
    </tbody>
  </table>
  <pre><code>import "@minerva/lib-web-components";</code></pre>
  <hr />
  <p><small>Last updated in March 2026.</small></p>\`;

  document.querySelector("#article").innerHTML = rendered;
<\/script>
`}})))()}n();export{t as default};