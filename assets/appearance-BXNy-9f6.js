import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PaginationAppearance.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <minerva-pagination total="200" size="small"></minerva-pagination>
    <minerva-pagination
      total="200"
      current="4"
      shape="circle"
      variant="outline"
    ></minerva-pagination>
    <minerva-pagination
      total="200"
      current="10"
      size="large"
      shape="square"
      variant="ghost"
      sibling-count="1"
      boundary-count="1"
    ></minerva-pagination>
    <minerva-pagination total="200" current="2" disabled></minerva-pagination>
  </div>
</template>
`,angular:`// pagination-appearance.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-pagination-appearance",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <minerva-pagination total="200" size="small"></minerva-pagination>
      <minerva-pagination
        total="200"
        current="4"
        shape="circle"
        variant="outline"
      ></minerva-pagination>
      <minerva-pagination
        total="200"
        current="10"
        size="large"
        shape="square"
        variant="ghost"
        sibling-count="1"
        boundary-count="1"
      ></minerva-pagination>
      <minerva-pagination total="200" current="2" disabled></minerva-pagination>
    </div>
  \`,
})
export class PaginationAppearanceComponent {}
`,svelte:`<!-- PaginationAppearance.svelte -->

<div style="display: grid; gap: 12px">
  <minerva-pagination total="200" size="small"></minerva-pagination>
  <minerva-pagination
    total="200"
    current="4"
    shape="circle"
    variant="outline"
  ></minerva-pagination>
  <minerva-pagination
    total="200"
    current="10"
    size="large"
    shape="square"
    variant="ghost"
    sibling-count="1"
    boundary-count="1"
  ></minerva-pagination>
  <minerva-pagination total="200" current="2" disabled></minerva-pagination>
</div>
`,solid:`// PaginationAppearance.tsx

export default function PaginationAppearance() {
  return (
    <div style="display: grid; gap: 12px">
      <minerva-pagination total="200" size="small"></minerva-pagination>
      <minerva-pagination
        total="200"
        current="4"
        shape="circle"
        variant="outline"
      ></minerva-pagination>
      <minerva-pagination
        total="200"
        current="10"
        size="large"
        shape="square"
        variant="ghost"
        sibling-count="1"
        boundary-count="1"
      ></minerva-pagination>
      <minerva-pagination total="200" current="2" disabled></minerva-pagination>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <minerva-pagination total="200" size="small"></minerva-pagination>
  <minerva-pagination
    total="200"
    current="4"
    shape="circle"
    variant="outline"
  ></minerva-pagination>
  <minerva-pagination
    total="200"
    current="10"
    size="large"
    shape="square"
    variant="ghost"
    sibling-count="1"
    boundary-count="1"
  ></minerva-pagination>
  <minerva-pagination total="200" current="2" disabled></minerva-pagination>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};