import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CodeBlockOverflow.vue -->

<script setup lang="ts">
// Long lines scroll horizontally with no-wrap; max-height caps the block.
// The region is focusable, so it scrolls with the keyboard too.

type CodeBlock = HTMLElement & { code?: string };

const lines = Array.from(
  { length: 20 },
  (_, i) =>
    \`[12:00:\${String(i).padStart(2, "0")}] step \${i + 1}/20 ok \` +
    "-- compiled packages/web-components/src/components with no warnings",
).join("\\n");
const logCode = lines;
const wrappedCode = lines;
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <minerva-code-block
      id="log"
      language="log"
      no-wrap
      max-height="160"
      aria-label="Build log"
      :code.prop="logCode"
    ></minerva-code-block>
    <minerva-code-block
      id="wrapped"
      max-height="8rem"
      aria-label="Wrapped log"
      style="--code-block-bg: var(--primary-color-subtle)"
      :code.prop="wrappedCode"
    ></minerva-code-block>
  </div>
</template>
`,angular:`// code-block-overflow.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Long lines scroll horizontally with no-wrap; max-height caps the block.
// The region is focusable, so it scrolls with the keyboard too.
type CodeBlock = HTMLElement & { code?: string };

@Component({
  selector: "app-code-block-overflow",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <minerva-code-block
        id="log"
        language="log"
        no-wrap
        max-height="160"
        aria-label="Build log"
        [code]="logCode"
      ></minerva-code-block>
      <minerva-code-block
        id="wrapped"
        max-height="8rem"
        aria-label="Wrapped log"
        style="--code-block-bg: var(--primary-color-subtle)"
        [code]="wrappedCode"
      ></minerva-code-block>
    </div>
  \`,
})
export class CodeBlockOverflowComponent {
  lines = Array.from(
    { length: 20 },
    (_, i) =>
      \`[12:00:\${String(i).padStart(2, "0")}] step \${i + 1}/20 ok \` +
      "-- compiled packages/web-components/src/components with no warnings",
  ).join("\\n");
  logCode = this.lines;
  wrappedCode = this.lines;
}
`,svelte:`<!-- CodeBlockOverflow.svelte -->

<script lang="ts">
  // Long lines scroll horizontally with no-wrap; max-height caps the block.
  // The region is focusable, so it scrolls with the keyboard too.

  type CodeBlock = HTMLElement & { code?: string };

  const lines = Array.from(
    { length: 20 },
    (_, i) =>
      \`[12:00:\${String(i).padStart(2, "0")}] step \${i + 1}/20 ok \` +
      "-- compiled packages/web-components/src/components with no warnings",
  ).join("\\n");
  const logCode = lines;
  const wrappedCode = lines;
<\/script>

<div style="display: grid; gap: 12px">
  <minerva-code-block
    id="log"
    language="log"
    no-wrap
    max-height="160"
    aria-label="Build log"
    code={logCode}
  ></minerva-code-block>
  <minerva-code-block
    id="wrapped"
    max-height="8rem"
    aria-label="Wrapped log"
    style="--code-block-bg: var(--primary-color-subtle)"
    code={wrappedCode}
  ></minerva-code-block>
</div>
`,solid:`// CodeBlockOverflow.tsx

// Long lines scroll horizontally with no-wrap; max-height caps the block.
// The region is focusable, so it scrolls with the keyboard too.
type CodeBlock = HTMLElement & { code?: string };

export default function CodeBlockOverflow() {
  const lines = Array.from(
    { length: 20 },
    (_, i) =>
      \`[12:00:\${String(i).padStart(2, "0")}] step \${i + 1}/20 ok \` +
      "-- compiled packages/web-components/src/components with no warnings",
  ).join("\\n");
  const logCode = lines;
  const wrappedCode = lines;

  return (
    <div style="display: grid; gap: 12px">
      <minerva-code-block
        id="log"
        language="log"
        no-wrap
        max-height="160"
        aria-label="Build log"
        prop:code={logCode}
      ></minerva-code-block>
      <minerva-code-block
        id="wrapped"
        max-height="8rem"
        aria-label="Wrapped log"
        style="--code-block-bg: var(--primary-color-subtle)"
        prop:code={wrappedCode}
      ></minerva-code-block>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <minerva-code-block
    id="log"
    language="log"
    no-wrap
    max-height="160"
    aria-label="Build log"
  ></minerva-code-block>
  <minerva-code-block
    id="wrapped"
    max-height="8rem"
    aria-label="Wrapped log"
    style="--code-block-bg: var(--primary-color-subtle)"
  ></minerva-code-block>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Long lines scroll horizontally with no-wrap; max-height caps the block.
  // The region is focusable, so it scrolls with the keyboard too.
  const lines = Array.from(
    { length: 20 },
    (_, i) =>
      \`[12:00:\${String(i).padStart(2, "0")}] step \${i + 1}/20 ok \` +
      "-- compiled packages/web-components/src/components with no warnings",
  ).join("\\n");
  document.querySelector("#log").code = lines;
  document.querySelector("#wrapped").code = lines;
<\/script>
`}})))()}n();export{t as default};