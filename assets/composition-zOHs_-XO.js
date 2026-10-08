import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SkeletonComposition.vue -->

<template>
  <div
    role="status"
    aria-busy="true"
    aria-label="Loading article"
    style="display: grid; gap: 16px; max-width: 480px"
  >
    <div style="display: flex; gap: 12px; align-items: center">
      <minerva-skeleton
        decorative
        variant="circular"
        size="40"
      ></minerva-skeleton>
      <minerva-skeleton decorative width="160" height="16"></minerva-skeleton>
    </div>
    <minerva-skeleton
      decorative
      variant="rounded"
      width="100%"
      height="160"
    ></minerva-skeleton>
    <minerva-skeleton-text lines="4"></minerva-skeleton-text>
    <minerva-skeleton-text
      lines="2"
      line-height="12px"
      gap="1"
      no-shrink-last
      animation="wave"
    ></minerva-skeleton-text>
  </div>
</template>
`,angular:`// skeleton-composition.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-skeleton-composition",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading article"
      style="display: grid; gap: 16px; max-width: 480px"
    >
      <div style="display: flex; gap: 12px; align-items: center">
        <minerva-skeleton
          decorative
          variant="circular"
          size="40"
        ></minerva-skeleton>
        <minerva-skeleton decorative width="160" height="16"></minerva-skeleton>
      </div>
      <minerva-skeleton
        decorative
        variant="rounded"
        width="100%"
        height="160"
      ></minerva-skeleton>
      <minerva-skeleton-text lines="4"></minerva-skeleton-text>
      <minerva-skeleton-text
        lines="2"
        line-height="12px"
        gap="1"
        no-shrink-last
        animation="wave"
      ></minerva-skeleton-text>
    </div>
  \`,
})
export class SkeletonCompositionComponent {}
`,svelte:`<!-- SkeletonComposition.svelte -->

<div
  role="status"
  aria-busy="true"
  aria-label="Loading article"
  style="display: grid; gap: 16px; max-width: 480px"
>
  <div style="display: flex; gap: 12px; align-items: center">
    <minerva-skeleton
      decorative
      variant="circular"
      size="40"
    ></minerva-skeleton>
    <minerva-skeleton decorative width="160" height="16"></minerva-skeleton>
  </div>
  <minerva-skeleton
    decorative
    variant="rounded"
    width="100%"
    height="160"
  ></minerva-skeleton>
  <minerva-skeleton-text lines="4"></minerva-skeleton-text>
  <minerva-skeleton-text
    lines="2"
    line-height="12px"
    gap="1"
    no-shrink-last
    animation="wave"
  ></minerva-skeleton-text>
</div>
`,solid:`// SkeletonComposition.tsx

export default function SkeletonComposition() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading article"
      style="display: grid; gap: 16px; max-width: 480px"
    >
      <div style="display: flex; gap: 12px; align-items: center">
        <minerva-skeleton
          decorative
          variant="circular"
          size="40"
        ></minerva-skeleton>
        <minerva-skeleton decorative width="160" height="16"></minerva-skeleton>
      </div>
      <minerva-skeleton
        decorative
        variant="rounded"
        width="100%"
        height="160"
      ></minerva-skeleton>
      <minerva-skeleton-text lines="4"></minerva-skeleton-text>
      <minerva-skeleton-text
        lines="2"
        line-height="12px"
        gap="1"
        no-shrink-last
        animation="wave"
      ></minerva-skeleton-text>
    </div>
  );
}
`,html:`<div
  role="status"
  aria-busy="true"
  aria-label="Loading article"
  style="display: grid; gap: 16px; max-width: 480px"
>
  <div style="display: flex; gap: 12px; align-items: center">
    <minerva-skeleton
      decorative
      variant="circular"
      size="40"
    ></minerva-skeleton>
    <minerva-skeleton decorative width="160" height="16"></minerva-skeleton>
  </div>
  <minerva-skeleton
    decorative
    variant="rounded"
    width="100%"
    height="160"
  ></minerva-skeleton>
  <minerva-skeleton-text lines="4"></minerva-skeleton-text>
  <minerva-skeleton-text
    lines="2"
    line-height="12px"
    gap="1"
    no-shrink-last
    animation="wave"
  ></minerva-skeleton-text>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};