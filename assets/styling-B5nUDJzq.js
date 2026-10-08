import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TextLinkStyling.vue -->

<template>
  <div
    style="
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      --text-link-color: var(--success-color);
      --text-link-font-weight: 600;
      --text-link-underline-offset: 4px;
    "
  >
    <minerva-text-link href="https://example.com" target="_blank" rel="noopener"
      >Custom color</minerva-text-link
    >
    <minerva-text-link
      href="https://example.com"
      target="_blank"
      rel="noopener"
      style="--text-link-text-decoration: none"
      >No underline</minerva-text-link
    >
  </div>
</template>
`,angular:`// text-link-styling.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-text-link-styling",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        --text-link-color: var(--success-color);
        --text-link-font-weight: 600;
        --text-link-underline-offset: 4px;
      "
    >
      <minerva-text-link
        href="https://example.com"
        target="_blank"
        rel="noopener"
        >Custom color</minerva-text-link
      >
      <minerva-text-link
        href="https://example.com"
        target="_blank"
        rel="noopener"
        style="--text-link-text-decoration: none"
        >No underline</minerva-text-link
      >
    </div>
  \`,
})
export class TextLinkStylingComponent {}
`,svelte:`<!-- TextLinkStyling.svelte -->

<div
  style="
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    --text-link-color: var(--success-color);
    --text-link-font-weight: 600;
    --text-link-underline-offset: 4px;
  "
>
  <minerva-text-link href="https://example.com" target="_blank" rel="noopener"
    >Custom color</minerva-text-link>
  <minerva-text-link
    href="https://example.com"
    target="_blank"
    rel="noopener"
    style="--text-link-text-decoration: none"
    >No underline</minerva-text-link>
</div>
`,solid:`// TextLinkStyling.tsx

export default function TextLinkStyling() {
  return (
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        --text-link-color: var(--success-color);
        --text-link-font-weight: 600;
        --text-link-underline-offset: 4px;
      "
    >
      <minerva-text-link
        href="https://example.com"
        target="_blank"
        rel="noopener"
      >
        Custom color
      </minerva-text-link>
      <minerva-text-link
        href="https://example.com"
        target="_blank"
        rel="noopener"
        style="--text-link-text-decoration: none"
      >
        No underline
      </minerva-text-link>
    </div>
  );
}
`,html:`<div
  style="
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    --text-link-color: var(--success-color);
    --text-link-font-weight: 600;
    --text-link-underline-offset: 4px;
  "
>
  <minerva-text-link href="https://example.com" target="_blank" rel="noopener"
    >Custom color</minerva-text-link
  >
  <minerva-text-link
    href="https://example.com"
    target="_blank"
    rel="noopener"
    style="--text-link-text-decoration: none"
    >No underline</minerva-text-link
  >
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};