import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ResponsiveGridBasic.vue -->

<template>
  <minerva-responsive-grid columns="1 2 3 4" gap="3">
    <minerva-box p="4" bg="bg.muted" rounded="md">1</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">2</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">3</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">4</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">5</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">6</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">7</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="md">8</minerva-box>
  </minerva-responsive-grid>
</template>
`,angular:`// responsive-grid-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-responsive-grid-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-responsive-grid columns="1 2 3 4" gap="3">
      <minerva-box p="4" bg="bg.muted" rounded="md">1</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">2</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">3</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">4</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">5</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">6</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">7</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">8</minerva-box>
    </minerva-responsive-grid>
  \`,
})
export class ResponsiveGridBasicComponent {}
`,svelte:`<!-- ResponsiveGridBasic.svelte -->

<minerva-responsive-grid columns="1 2 3 4" gap="3">
  <minerva-box p="4" bg="bg.muted" rounded="md">1</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">2</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">3</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">4</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">5</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">6</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">7</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">8</minerva-box>
</minerva-responsive-grid>
`,solid:`// ResponsiveGridBasic.tsx

export default function ResponsiveGridBasic() {
  return (
    <minerva-responsive-grid columns="1 2 3 4" gap="3">
      <minerva-box p="4" bg="bg.muted" rounded="md">
        1
      </minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        2
      </minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        3
      </minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        4
      </minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        5
      </minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        6
      </minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        7
      </minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="md">
        8
      </minerva-box>
    </minerva-responsive-grid>
  );
}
`,html:`<minerva-responsive-grid columns="1 2 3 4" gap="3">
  <minerva-box p="4" bg="bg.muted" rounded="md">1</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">2</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">3</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">4</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">5</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">6</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">7</minerva-box>
  <minerva-box p="4" bg="bg.muted" rounded="md">8</minerva-box>
</minerva-responsive-grid>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};