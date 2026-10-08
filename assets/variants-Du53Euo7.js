import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CardVariants.vue -->

<template>
  <div
    style="
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    "
  >
    <minerva-card variant="default" padding="medium">
      <minerva-card-title>Default</minerva-card-title>
      <minerva-card-description>Border and surface</minerva-card-description>
    </minerva-card>
    <minerva-card variant="outline" padding="medium">
      <minerva-card-title>Outline</minerva-card-title>
      <minerva-card-description>Border only</minerva-card-description>
    </minerva-card>
    <minerva-card variant="elevated" padding="medium">
      <minerva-card-title>Elevated</minerva-card-title>
      <minerva-card-description>Shadowed</minerva-card-description>
    </minerva-card>
    <minerva-card variant="filled" padding="medium">
      <minerva-card-title>Filled</minerva-card-title>
      <minerva-card-description>Muted block</minerva-card-description>
    </minerva-card>
    <minerva-card variant="ghost" padding="medium">
      <minerva-card-title>Ghost</minerva-card-title>
      <minerva-card-description>Transparent</minerva-card-description>
    </minerva-card>
  </div>
</template>
`,angular:`// card-variants.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-card-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      "
    >
      <minerva-card variant="default" padding="medium">
        <minerva-card-title>Default</minerva-card-title>
        <minerva-card-description>Border and surface</minerva-card-description>
      </minerva-card>
      <minerva-card variant="outline" padding="medium">
        <minerva-card-title>Outline</minerva-card-title>
        <minerva-card-description>Border only</minerva-card-description>
      </minerva-card>
      <minerva-card variant="elevated" padding="medium">
        <minerva-card-title>Elevated</minerva-card-title>
        <minerva-card-description>Shadowed</minerva-card-description>
      </minerva-card>
      <minerva-card variant="filled" padding="medium">
        <minerva-card-title>Filled</minerva-card-title>
        <minerva-card-description>Muted block</minerva-card-description>
      </minerva-card>
      <minerva-card variant="ghost" padding="medium">
        <minerva-card-title>Ghost</minerva-card-title>
        <minerva-card-description>Transparent</minerva-card-description>
      </minerva-card>
    </div>
  \`,
})
export class CardVariantsComponent {}
`,svelte:`<!-- CardVariants.svelte -->

<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  "
>
  <minerva-card variant="default" padding="medium">
    <minerva-card-title>Default</minerva-card-title>
    <minerva-card-description>Border and surface</minerva-card-description>
  </minerva-card>
  <minerva-card variant="outline" padding="medium">
    <minerva-card-title>Outline</minerva-card-title>
    <minerva-card-description>Border only</minerva-card-description>
  </minerva-card>
  <minerva-card variant="elevated" padding="medium">
    <minerva-card-title>Elevated</minerva-card-title>
    <minerva-card-description>Shadowed</minerva-card-description>
  </minerva-card>
  <minerva-card variant="filled" padding="medium">
    <minerva-card-title>Filled</minerva-card-title>
    <minerva-card-description>Muted block</minerva-card-description>
  </minerva-card>
  <minerva-card variant="ghost" padding="medium">
    <minerva-card-title>Ghost</minerva-card-title>
    <minerva-card-description>Transparent</minerva-card-description>
  </minerva-card>
</div>
`,solid:`// CardVariants.tsx

export default function CardVariants() {
  return (
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      "
    >
      <minerva-card variant="default" padding="medium">
        <minerva-card-title>Default</minerva-card-title>
        <minerva-card-description>Border and surface</minerva-card-description>
      </minerva-card>
      <minerva-card variant="outline" padding="medium">
        <minerva-card-title>Outline</minerva-card-title>
        <minerva-card-description>Border only</minerva-card-description>
      </minerva-card>
      <minerva-card variant="elevated" padding="medium">
        <minerva-card-title>Elevated</minerva-card-title>
        <minerva-card-description>Shadowed</minerva-card-description>
      </minerva-card>
      <minerva-card variant="filled" padding="medium">
        <minerva-card-title>Filled</minerva-card-title>
        <minerva-card-description>Muted block</minerva-card-description>
      </minerva-card>
      <minerva-card variant="ghost" padding="medium">
        <minerva-card-title>Ghost</minerva-card-title>
        <minerva-card-description>Transparent</minerva-card-description>
      </minerva-card>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  "
>
  <minerva-card variant="default" padding="medium">
    <minerva-card-title>Default</minerva-card-title>
    <minerva-card-description>Border and surface</minerva-card-description>
  </minerva-card>
  <minerva-card variant="outline" padding="medium">
    <minerva-card-title>Outline</minerva-card-title>
    <minerva-card-description>Border only</minerva-card-description>
  </minerva-card>
  <minerva-card variant="elevated" padding="medium">
    <minerva-card-title>Elevated</minerva-card-title>
    <minerva-card-description>Shadowed</minerva-card-description>
  </minerva-card>
  <minerva-card variant="filled" padding="medium">
    <minerva-card-title>Filled</minerva-card-title>
    <minerva-card-description>Muted block</minerva-card-description>
  </minerva-card>
  <minerva-card variant="ghost" padding="medium">
    <minerva-card-title>Ghost</minerva-card-title>
    <minerva-card-description>Transparent</minerva-card-description>
  </minerva-card>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};