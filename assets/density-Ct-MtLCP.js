import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ListDensity.vue -->

<template>
  <div
    style="
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    "
  >
    <minerva-list density="compact" aria-label="Compact list">
      <minerva-list-item primary="Compact density"></minerva-list-item>
      <minerva-list-item primary="Shorter rows"></minerva-list-item>
      <minerva-list-item primary="Same dividers"></minerva-list-item>
    </minerva-list>
    <minerva-list no-dividers aria-label="List without dividers">
      <minerva-list-item primary="No dividers"></minerva-list-item>
      <minerva-list-item primary="Default density"></minerva-list-item>
      <minerva-list-item primary="Quiet grouping"></minerva-list-item>
    </minerva-list>
    <minerva-list
      aria-label="Customized list"
      style="
        --list-divider-color: var(--primary-color);
        --list-item-padding-x: 12px;
      "
    >
      <minerva-list-item primary="CSS variables"></minerva-list-item>
      <minerva-list-item primary="Divider color"></minerva-list-item>
      <minerva-list-item primary="Horizontal padding"></minerva-list-item>
    </minerva-list>
  </div>
</template>
`,angular:`// list-density.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-list-density",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      "
    >
      <minerva-list density="compact" aria-label="Compact list">
        <minerva-list-item primary="Compact density"></minerva-list-item>
        <minerva-list-item primary="Shorter rows"></minerva-list-item>
        <minerva-list-item primary="Same dividers"></minerva-list-item>
      </minerva-list>
      <minerva-list no-dividers aria-label="List without dividers">
        <minerva-list-item primary="No dividers"></minerva-list-item>
        <minerva-list-item primary="Default density"></minerva-list-item>
        <minerva-list-item primary="Quiet grouping"></minerva-list-item>
      </minerva-list>
      <minerva-list
        aria-label="Customized list"
        style="
          --list-divider-color: var(--primary-color);
          --list-item-padding-x: 12px;
        "
      >
        <minerva-list-item primary="CSS variables"></minerva-list-item>
        <minerva-list-item primary="Divider color"></minerva-list-item>
        <minerva-list-item primary="Horizontal padding"></minerva-list-item>
      </minerva-list>
    </div>
  \`,
})
export class ListDensityComponent {}
`,svelte:`<!-- ListDensity.svelte -->

<div
  style="
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  "
>
  <minerva-list density="compact" aria-label="Compact list">
    <minerva-list-item primary="Compact density"></minerva-list-item>
    <minerva-list-item primary="Shorter rows"></minerva-list-item>
    <minerva-list-item primary="Same dividers"></minerva-list-item>
  </minerva-list>
  <minerva-list no-dividers aria-label="List without dividers">
    <minerva-list-item primary="No dividers"></minerva-list-item>
    <minerva-list-item primary="Default density"></minerva-list-item>
    <minerva-list-item primary="Quiet grouping"></minerva-list-item>
  </minerva-list>
  <minerva-list
    aria-label="Customized list"
    style="
      --list-divider-color: var(--primary-color);
      --list-item-padding-x: 12px;
    "
  >
    <minerva-list-item primary="CSS variables"></minerva-list-item>
    <minerva-list-item primary="Divider color"></minerva-list-item>
    <minerva-list-item primary="Horizontal padding"></minerva-list-item>
  </minerva-list>
</div>
`,solid:`// ListDensity.tsx

export default function ListDensity() {
  return (
    <div
      style="
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      "
    >
      <minerva-list density="compact" aria-label="Compact list">
        <minerva-list-item primary="Compact density"></minerva-list-item>
        <minerva-list-item primary="Shorter rows"></minerva-list-item>
        <minerva-list-item primary="Same dividers"></minerva-list-item>
      </minerva-list>
      <minerva-list no-dividers aria-label="List without dividers">
        <minerva-list-item primary="No dividers"></minerva-list-item>
        <minerva-list-item primary="Default density"></minerva-list-item>
        <minerva-list-item primary="Quiet grouping"></minerva-list-item>
      </minerva-list>
      <minerva-list
        aria-label="Customized list"
        style="
          --list-divider-color: var(--primary-color);
          --list-item-padding-x: 12px;
        "
      >
        <minerva-list-item primary="CSS variables"></minerva-list-item>
        <minerva-list-item primary="Divider color"></minerva-list-item>
        <minerva-list-item primary="Horizontal padding"></minerva-list-item>
      </minerva-list>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  "
>
  <minerva-list density="compact" aria-label="Compact list">
    <minerva-list-item primary="Compact density"></minerva-list-item>
    <minerva-list-item primary="Shorter rows"></minerva-list-item>
    <minerva-list-item primary="Same dividers"></minerva-list-item>
  </minerva-list>
  <minerva-list no-dividers aria-label="List without dividers">
    <minerva-list-item primary="No dividers"></minerva-list-item>
    <minerva-list-item primary="Default density"></minerva-list-item>
    <minerva-list-item primary="Quiet grouping"></minerva-list-item>
  </minerva-list>
  <minerva-list
    aria-label="Customized list"
    style="
      --list-divider-color: var(--primary-color);
      --list-item-padding-x: 12px;
    "
  >
    <minerva-list-item primary="CSS variables"></minerva-list-item>
    <minerva-list-item primary="Divider color"></minerva-list-item>
    <minerva-list-item primary="Horizontal padding"></minerva-list-item>
  </minerva-list>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};