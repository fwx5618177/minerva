import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- StackHstackVstack.vue -->

<template>
  <minerva-vstack gap="4">
    <minerva-hstack gap="2">
      <minerva-button size="small">Save</minerva-button>
      <minerva-button size="small" variant="outline" color="neutral"
        >Cancel</minerva-button
      >
      <span>HStack centers its items</span>
    </minerva-hstack>
    <minerva-hstack
      gap="2"
      justify="between"
      style="padding: 8px; border: 1px dashed var(--border-color)"
    >
      <span>justify="between"</span>
      <minerva-button size="small" variant="ghost">Edit</minerva-button>
    </minerva-hstack>
    <minerva-stack direction="row-reverse" gap="2" align="end">
      <minerva-box p="2" bg="bg.muted" rounded="sm">1</minerva-box>
      <minerva-box p="4" bg="bg.muted" rounded="sm">2</minerva-box>
      <minerva-box p="6" bg="bg.muted" rounded="sm"
        >3 (row-reverse, align end)</minerva-box
      >
    </minerva-stack>
  </minerva-vstack>
</template>
`,angular:`// stack-hstack-vstack.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-stack-hstack-vstack",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-vstack gap="4">
      <minerva-hstack gap="2">
        <minerva-button size="small">Save</minerva-button>
        <minerva-button size="small" variant="outline" color="neutral"
          >Cancel</minerva-button
        >
        <span>HStack centers its items</span>
      </minerva-hstack>
      <minerva-hstack
        gap="2"
        justify="between"
        style="padding: 8px; border: 1px dashed var(--border-color)"
      >
        <span>justify="between"</span>
        <minerva-button size="small" variant="ghost">Edit</minerva-button>
      </minerva-hstack>
      <minerva-stack direction="row-reverse" gap="2" align="end">
        <minerva-box p="2" bg="bg.muted" rounded="sm">1</minerva-box>
        <minerva-box p="4" bg="bg.muted" rounded="sm">2</minerva-box>
        <minerva-box p="6" bg="bg.muted" rounded="sm"
          >3 (row-reverse, align end)</minerva-box
        >
      </minerva-stack>
    </minerva-vstack>
  \`,
})
export class StackHstackVstackComponent {}
`,svelte:`<!-- StackHstackVstack.svelte -->

<minerva-vstack gap="4">
  <minerva-hstack gap="2">
    <minerva-button size="small">Save</minerva-button>
    <minerva-button size="small" variant="outline" color="neutral"
      >Cancel</minerva-button>
    <span>HStack centers its items</span>
  </minerva-hstack>
  <minerva-hstack
    gap="2"
    justify="between"
    style="padding: 8px; border: 1px dashed var(--border-color)"
  >
    <span>justify="between"</span>
    <minerva-button size="small" variant="ghost">Edit</minerva-button>
  </minerva-hstack>
  <minerva-stack direction="row-reverse" gap="2" align="end">
    <minerva-box p="2" bg="bg.muted" rounded="sm">1</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="sm">2</minerva-box>
    <minerva-box p="6" bg="bg.muted" rounded="sm"
      >3 (row-reverse, align end)</minerva-box>
  </minerva-stack>
</minerva-vstack>
`,solid:`// StackHstackVstack.tsx

export default function StackHstackVstack() {
  return (
    <minerva-vstack gap="4">
      <minerva-hstack gap="2">
        <minerva-button size="small">Save</minerva-button>
        <minerva-button size="small" variant="outline" color="neutral">
          Cancel
        </minerva-button>
        <span>HStack centers its items</span>
      </minerva-hstack>
      <minerva-hstack
        gap="2"
        justify="between"
        style="padding: 8px; border: 1px dashed var(--border-color)"
      >
        <span>justify="between"</span>
        <minerva-button size="small" variant="ghost">
          Edit
        </minerva-button>
      </minerva-hstack>
      <minerva-stack direction="row-reverse" gap="2" align="end">
        <minerva-box p="2" bg="bg.muted" rounded="sm">
          1
        </minerva-box>
        <minerva-box p="4" bg="bg.muted" rounded="sm">
          2
        </minerva-box>
        <minerva-box p="6" bg="bg.muted" rounded="sm">
          3 (row-reverse, align end)
        </minerva-box>
      </minerva-stack>
    </minerva-vstack>
  );
}
`,html:`<minerva-vstack gap="4">
  <minerva-hstack gap="2">
    <minerva-button size="small">Save</minerva-button>
    <minerva-button size="small" variant="outline" color="neutral"
      >Cancel</minerva-button
    >
    <span>HStack centers its items</span>
  </minerva-hstack>
  <minerva-hstack
    gap="2"
    justify="between"
    style="padding: 8px; border: 1px dashed var(--border-color)"
  >
    <span>justify="between"</span>
    <minerva-button size="small" variant="ghost">Edit</minerva-button>
  </minerva-hstack>
  <minerva-stack direction="row-reverse" gap="2" align="end">
    <minerva-box p="2" bg="bg.muted" rounded="sm">1</minerva-box>
    <minerva-box p="4" bg="bg.muted" rounded="sm">2</minerva-box>
    <minerva-box p="6" bg="bg.muted" rounded="sm"
      >3 (row-reverse, align end)</minerva-box
    >
  </minerva-stack>
</minerva-vstack>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};