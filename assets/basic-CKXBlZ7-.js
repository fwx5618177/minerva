import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- StackBasic.vue -->

<template>
  <minerva-stack gap="3">
    <minerva-box p="3" bg="bg.muted" rounded="md">First</minerva-box>
    <minerva-box p="3" bg="bg.muted" rounded="md">Second</minerva-box>
    <minerva-box p="3" bg="bg.muted" rounded="md">Third</minerva-box>
  </minerva-stack>
</template>
`,angular:`// stack-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-stack-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-stack gap="3">
      <minerva-box p="3" bg="bg.muted" rounded="md">First</minerva-box>
      <minerva-box p="3" bg="bg.muted" rounded="md">Second</minerva-box>
      <minerva-box p="3" bg="bg.muted" rounded="md">Third</minerva-box>
    </minerva-stack>
  \`,
})
export class StackBasicComponent {}
`,svelte:`<!-- StackBasic.svelte -->

<minerva-stack gap="3">
  <minerva-box p="3" bg="bg.muted" rounded="md">First</minerva-box>
  <minerva-box p="3" bg="bg.muted" rounded="md">Second</minerva-box>
  <minerva-box p="3" bg="bg.muted" rounded="md">Third</minerva-box>
</minerva-stack>
`,solid:`// StackBasic.tsx

export default function StackBasic() {
  return (
    <minerva-stack gap="3">
      <minerva-box p="3" bg="bg.muted" rounded="md">
        First
      </minerva-box>
      <minerva-box p="3" bg="bg.muted" rounded="md">
        Second
      </minerva-box>
      <minerva-box p="3" bg="bg.muted" rounded="md">
        Third
      </minerva-box>
    </minerva-stack>
  );
}
`,html:`<minerva-stack gap="3">
  <minerva-box p="3" bg="bg.muted" rounded="md">First</minerva-box>
  <minerva-box p="3" bg="bg.muted" rounded="md">Second</minerva-box>
  <minerva-box p="3" bg="bg.muted" rounded="md">Third</minerva-box>
</minerva-stack>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};