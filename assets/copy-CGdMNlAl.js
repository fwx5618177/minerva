import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CodeBlockCopy.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`code\` holds the text (never parsed as HTML); the copy button and copy()
// write it to the clipboard. minerva-copy reports the result.

type CodeBlock = HTMLElement & { code?: string; copy(): Promise<boolean> };

const block = ref<CodeBlock>();
const statusText = ref("");

const blockCode = JSON.stringify(
  { event: "invoice.paid", id: "evt_1042", amount: 12900, currency: "EUR" },
  null,
  2,
);
const onCopy = (event: Event) => {
  const { text, success } = (
    event as CustomEvent<{ text: string; success: boolean }>
  ).detail;
  statusText.value = success ? \`Copied \${text.length} characters\` : "Failed";
};
const onClick = () => void block.value!.copy();
<\/script>

<template>
  <minerva-code-block
    id="payload"
    language="json"
    copyable
    aria-label="Webhook payload"
    ref="block"
    :code.prop="blockCode"
    @minerva-copy="onCopy"
  ></minerva-code-block>
  <p style="display: flex; gap: 8px; align-items: center">
    <minerva-button
      id="copy"
      size="small"
      variant="outline"
      color="neutral"
      @click="onClick"
      >Copy from outside</minerva-button
    >
    <output id="status">{{ statusText }}</output>
  </p>
</template>
`,angular:`// code-block-copy.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// \`code\` holds the text (never parsed as HTML); the copy button and copy()
// write it to the clipboard. minerva-copy reports the result.
type CodeBlock = HTMLElement & { code?: string; copy(): Promise<boolean> };

@Component({
  selector: "app-code-block-copy",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-code-block
      id="payload"
      language="json"
      copyable
      aria-label="Webhook payload"
      #block
      [code]="blockCode"
      (minerva-copy)="onCopy($event)"
    ></minerva-code-block>
    <p style="display: flex; gap: 8px; align-items: center">
      <minerva-button
        id="copy"
        size="small"
        variant="outline"
        color="neutral"
        (click)="onClick($event)"
        >Copy from outside</minerva-button
      >
      <output id="status">{{ statusText }}</output>
    </p>
  \`,
})
export class CodeBlockCopyComponent {
  @ViewChild("block") block!: ElementRef<CodeBlock>;
  statusText = "";

  blockCode = JSON.stringify(
    { event: "invoice.paid", id: "evt_1042", amount: 12900, currency: "EUR" },
    null,
    2,
  );
  onCopy = (event: Event) => {
    const { text, success } = (
      event as CustomEvent<{ text: string; success: boolean }>
    ).detail;
    this.statusText = success ? \`Copied \${text.length} characters\` : "Failed";
  };
  onClick = () => void this.block.nativeElement.copy();
}
`,svelte:`<!-- CodeBlockCopy.svelte -->

<script lang="ts">
  // \`code\` holds the text (never parsed as HTML); the copy button and copy()
  // write it to the clipboard. minerva-copy reports the result.

  type CodeBlock = HTMLElement & { code?: string; copy(): Promise<boolean> };

  let block: CodeBlock;
  let statusText = $state("");

  const blockCode = JSON.stringify(
    { event: "invoice.paid", id: "evt_1042", amount: 12900, currency: "EUR" },
    null,
    2,
  );
  const onCopy = (event: Event) => {
    const { text, success } = (
      event as CustomEvent<{ text: string; success: boolean }>
    ).detail;
    statusText = success ? \`Copied \${text.length} characters\` : "Failed";
  };
  const onClick = () => void block.copy();
<\/script>

<minerva-code-block
  id="payload"
  language="json"
  copyable
  aria-label="Webhook payload"
  bind:this={block}
  code={blockCode}
  onminerva-copy={onCopy}
></minerva-code-block>
<p style="display: flex; gap: 8px; align-items: center">
  <minerva-button
    id="copy"
    size="small"
    variant="outline"
    color="neutral"
    onclick={onClick}
  >Copy from outside</minerva-button>
  <output id="status">{statusText}</output>
</p>
`,solid:`// CodeBlockCopy.tsx

import { createSignal } from "solid-js";

// \`code\` holds the text (never parsed as HTML); the copy button and copy()
// write it to the clipboard. minerva-copy reports the result.
type CodeBlock = HTMLElement & { code?: string; copy(): Promise<boolean> };

export default function CodeBlockCopy() {
  let block!: CodeBlock;
  const [statusText, setStatusText] = createSignal("");

  const blockCode = JSON.stringify(
    { event: "invoice.paid", id: "evt_1042", amount: 12900, currency: "EUR" },
    null,
    2,
  );
  const onCopy = (event: Event) => {
    const { text, success } = (
      event as CustomEvent<{ text: string; success: boolean }>
    ).detail;
    setStatusText(success ? \`Copied \${text.length} characters\` : "Failed");
  };
  const onClick = () => void block.copy();

  return (
    <>
      <minerva-code-block
        id="payload"
        language="json"
        copyable
        aria-label="Webhook payload"
        ref={block}
        prop:code={blockCode}
        on:minerva-copy={onCopy}
      ></minerva-code-block>
      <p style="display: flex; gap: 8px; align-items: center">
        <minerva-button
          id="copy"
          size="small"
          variant="outline"
          color="neutral"
          on:click={onClick}
        >
          Copy from outside
        </minerva-button>
        <output id="status">{statusText()}</output>
      </p>
    </>
  );
}
`,html:`<minerva-code-block
  id="payload"
  language="json"
  copyable
  aria-label="Webhook payload"
></minerva-code-block>
<p style="display: flex; gap: 8px; align-items: center">
  <minerva-button id="copy" size="small" variant="outline" color="neutral"
    >Copy from outside</minerva-button
  >
  <output id="status"></output>
</p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`code\` holds the text (never parsed as HTML); the copy button and copy()
  // write it to the clipboard. minerva-copy reports the result.
  const block = document.querySelector("#payload");
  const button = document.querySelector("#copy");
  const status = document.querySelector("#status");
  block.code = JSON.stringify(
    { event: "invoice.paid", id: "evt_1042", amount: 12900, currency: "EUR" },
    null,
    2,
  );
  const onCopy = (event) => {
    const { text, success } = event.detail;
    status.value = success ? \`Copied \${text.length} characters\` : "Failed";
  };
  const onClick = () => void block.copy();
  block.addEventListener("minerva-copy", onCopy);
  button.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};