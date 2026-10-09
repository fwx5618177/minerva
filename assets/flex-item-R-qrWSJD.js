import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DividerFlexItem.vue -->

<template>
  <div style="display: flex; align-items: center; gap: 12px; height: 48px">
    <span>Edit</span
    ><minerva-divider
      orientation="vertical"
      flex-item
      spacing="0"
    ></minerva-divider
    ><span>Share</span
    ><minerva-divider
      orientation="vertical"
      flex-item
      spacing="0"
    ></minerva-divider
    ><span>Delete</span>
  </div>
</template>
`,angular:`// divider-flex-item.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-divider-flex-item",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; align-items: center; gap: 12px; height: 48px">
      <span>Edit</span
      ><minerva-divider
        orientation="vertical"
        flex-item
        spacing="0"
      ></minerva-divider
      ><span>Share</span
      ><minerva-divider
        orientation="vertical"
        flex-item
        spacing="0"
      ></minerva-divider
      ><span>Delete</span>
    </div>
  \`,
})
export class DividerFlexItemComponent {}
`,svelte:`<!-- DividerFlexItem.svelte -->

<div style="display: flex; align-items: center; gap: 12px; height: 48px">
  <span>Edit</span><minerva-divider
    orientation="vertical"
    flex-item
    spacing="0"
  ></minerva-divider><span>Share</span><minerva-divider
    orientation="vertical"
    flex-item
    spacing="0"
  ></minerva-divider><span>Delete</span>
</div>
`,solid:`// DividerFlexItem.tsx

export default function DividerFlexItem() {
  return (
    <div style="display: flex; align-items: center; gap: 12px; height: 48px">
      <span>Edit</span>
      <minerva-divider
        orientation="vertical"
        flex-item
        spacing="0"
      ></minerva-divider>
      <span>Share</span>
      <minerva-divider
        orientation="vertical"
        flex-item
        spacing="0"
      ></minerva-divider>
      <span>Delete</span>
    </div>
  );
}
`,html:`<div style="display: flex; align-items: center; gap: 12px; height: 48px">
  <span>Edit</span
  ><minerva-divider
    orientation="vertical"
    flex-item
    spacing="0"
  ></minerva-divider
  ><span>Share</span
  ><minerva-divider
    orientation="vertical"
    flex-item
    spacing="0"
  ></minerva-divider
  ><span>Delete</span>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};