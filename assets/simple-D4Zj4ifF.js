import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PaginationSimple.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <minerva-pagination total="120" simple></minerva-pagination>
    <minerva-pagination
      total="120"
      current="3"
      hide-numbers
    ></minerva-pagination>
    <minerva-pagination total="500" current="25" responsive>
      <span slot="prev-icon" aria-hidden="true">←</span>
      <span slot="next-icon" aria-hidden="true">→</span>
      <span slot="jump-prev-icon" aria-hidden="true">«</span>
      <span slot="jump-next-icon" aria-hidden="true">»</span>
    </minerva-pagination>
  </div>
</template>
`,angular:`// pagination-simple.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-pagination-simple",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <minerva-pagination total="120" simple></minerva-pagination>
      <minerva-pagination
        total="120"
        current="3"
        hide-numbers
      ></minerva-pagination>
      <minerva-pagination total="500" current="25" responsive>
        <span slot="prev-icon" aria-hidden="true">←</span>
        <span slot="next-icon" aria-hidden="true">→</span>
        <span slot="jump-prev-icon" aria-hidden="true">«</span>
        <span slot="jump-next-icon" aria-hidden="true">»</span>
      </minerva-pagination>
    </div>
  \`,
})
export class PaginationSimpleComponent {}
`,svelte:`<!-- PaginationSimple.svelte -->

<div style="display: grid; gap: 12px">
  <minerva-pagination total="120" simple></minerva-pagination>
  <minerva-pagination total="120" current="3" hide-numbers></minerva-pagination>
  <minerva-pagination total="500" current="25" responsive>
    <span slot="prev-icon" aria-hidden="true">←</span>
    <span slot="next-icon" aria-hidden="true">→</span>
    <span slot="jump-prev-icon" aria-hidden="true">«</span>
    <span slot="jump-next-icon" aria-hidden="true">»</span>
  </minerva-pagination>
</div>
`,solid:`// PaginationSimple.tsx

export default function PaginationSimple() {
  return (
    <div style="display: grid; gap: 12px">
      <minerva-pagination total="120" simple></minerva-pagination>
      <minerva-pagination
        total="120"
        current="3"
        hide-numbers
      ></minerva-pagination>
      <minerva-pagination total="500" current="25" responsive>
        <span slot="prev-icon" aria-hidden="true">
          ←
        </span>
        <span slot="next-icon" aria-hidden="true">
          →
        </span>
        <span slot="jump-prev-icon" aria-hidden="true">
          «
        </span>
        <span slot="jump-next-icon" aria-hidden="true">
          »
        </span>
      </minerva-pagination>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <minerva-pagination total="120" simple></minerva-pagination>
  <minerva-pagination total="120" current="3" hide-numbers></minerva-pagination>
  <minerva-pagination total="500" current="25" responsive>
    <span slot="prev-icon" aria-hidden="true">←</span>
    <span slot="next-icon" aria-hidden="true">→</span>
    <span slot="jump-prev-icon" aria-hidden="true">«</span>
    <span slot="jump-next-icon" aria-hidden="true">»</span>
  </minerva-pagination>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};