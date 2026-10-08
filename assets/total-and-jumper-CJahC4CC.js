import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PaginationTotalAndJumper.vue -->

<script setup lang="ts">
// totalRender is a JS property: it receives the total and the
// [first, last] items of the current page.

const pagerTotalRender = (total, [first, last]) =>
  \`\${first}–\${last} of \${total} results\`;
<\/script>

<template>
  <minerva-pagination
    id="results"
    total="485"
    page-size="20"
    page-size-options="10,20,50"
    show-total
    show-size-changer
    show-quick-jumper
    :totalRender.prop="pagerTotalRender"
  ></minerva-pagination>
</template>
`,angular:`// pagination-total-and-jumper.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// totalRender is a JS property: it receives the total and the
// [first, last] items of the current page.

@Component({
  selector: "app-pagination-total-and-jumper",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-pagination
      id="results"
      total="485"
      page-size="20"
      page-size-options="10,20,50"
      show-total
      show-size-changer
      show-quick-jumper
      [totalRender]="pagerTotalRender"
    ></minerva-pagination>
  \`,
})
export class PaginationTotalAndJumperComponent {
  pagerTotalRender = (total, [first, last]) =>
    \`\${first}–\${last} of \${total} results\`;
}
`,svelte:`<!-- PaginationTotalAndJumper.svelte -->

<script lang="ts">
  // totalRender is a JS property: it receives the total and the
  // [first, last] items of the current page.

  const pagerTotalRender = (total, [first, last]) =>
    \`\${first}–\${last} of \${total} results\`;
<\/script>

<minerva-pagination
  id="results"
  total="485"
  page-size="20"
  page-size-options="10,20,50"
  show-total
  show-size-changer
  show-quick-jumper
  totalRender={pagerTotalRender}
></minerva-pagination>
`,solid:`// PaginationTotalAndJumper.tsx

// totalRender is a JS property: it receives the total and the
// [first, last] items of the current page.

export default function PaginationTotalAndJumper() {
  const pagerTotalRender = (total, [first, last]) =>
    \`\${first}–\${last} of \${total} results\`;

  return (
    <minerva-pagination
      id="results"
      total="485"
      page-size="20"
      page-size-options="10,20,50"
      show-total
      show-size-changer
      show-quick-jumper
      prop:totalRender={pagerTotalRender}
    ></minerva-pagination>
  );
}
`,html:`<minerva-pagination
  id="results"
  total="485"
  page-size="20"
  page-size-options="10,20,50"
  show-total
  show-size-changer
  show-quick-jumper
></minerva-pagination>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // totalRender is a JS property: it receives the total and the
  // [first, last] items of the current page.
  const pager = document.querySelector("#results");
  pager.totalRender = (total, [first, last]) =>
    \`\${first}–\${last} of \${total} results\`;
<\/script>
`}})))()}n();export{t as default};