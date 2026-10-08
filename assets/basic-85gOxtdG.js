import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PaginationBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Without a listener cancelling it, the element updates \`current\` itself;
// minerva-page-change reports the new page and page size.

const pager = ref<HTMLElement & { totalPages: number }>();
const outputText = ref("Page 1 of 5");

const onChange = (event: Event) => {
  const { page } = (event as CustomEvent<{ page: number }>).detail;
  outputText.value = \`Page \${page} of \${pager.value!.totalPages}\`;
};
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <minerva-pagination
      id="pager"
      total="50"
      ref="pager"
      @minerva-page-change="onChange"
    ></minerva-pagination>
    <output id="page" aria-live="polite">{{ outputText }}</output>
  </div>
</template>
`,angular:`// pagination-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Without a listener cancelling it, the element updates \`current\` itself;
// minerva-page-change reports the new page and page size.

@Component({
  selector: "app-pagination-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <minerva-pagination
        id="pager"
        total="50"
        #pager
        (minerva-page-change)="onChange($event)"
      ></minerva-pagination>
      <output id="page" aria-live="polite">{{ outputText }}</output>
    </div>
  \`,
})
export class PaginationBasicComponent {
  @ViewChild("pager") pager!: ElementRef<HTMLElement & { totalPages: number }>;
  outputText = "Page 1 of 5";

  onChange = (event: Event) => {
    const { page } = (event as CustomEvent<{ page: number }>).detail;
    this.outputText = \`Page \${page} of \${this.pager.nativeElement.totalPages}\`;
  };
}
`,svelte:`<!-- PaginationBasic.svelte -->

<script lang="ts">
  // Without a listener cancelling it, the element updates \`current\` itself;
  // minerva-page-change reports the new page and page size.

  let pager: HTMLElement & { totalPages: number };
  let outputText = $state("Page 1 of 5");

  const onChange = (event: Event) => {
    const { page } = (event as CustomEvent<{ page: number }>).detail;
    outputText = \`Page \${page} of \${pager.totalPages}\`;
  };
<\/script>

<div style="display: grid; gap: 12px">
  <minerva-pagination
    id="pager"
    total="50"
    bind:this={pager}
    onminerva-page-change={onChange}
  ></minerva-pagination>
  <output id="page" aria-live="polite">{outputText}</output>
</div>
`,solid:`// PaginationBasic.tsx

import { createSignal } from "solid-js";

// Without a listener cancelling it, the element updates \`current\` itself;
// minerva-page-change reports the new page and page size.

export default function PaginationBasic() {
  let pager!: HTMLElement & { totalPages: number };
  const [outputText, setOutputText] = createSignal("Page 1 of 5");

  const onChange = (event: Event) => {
    const { page } = (event as CustomEvent<{ page: number }>).detail;
    setOutputText(\`Page \${page} of \${pager.totalPages}\`);
  };

  return (
    <div style="display: grid; gap: 12px">
      <minerva-pagination
        id="pager"
        total="50"
        ref={pager}
        on:minerva-page-change={onChange}
      ></minerva-pagination>
      <output id="page" aria-live="polite">
        {outputText()}
      </output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <minerva-pagination id="pager" total="50"></minerva-pagination>
  <output id="page" aria-live="polite">Page 1 of 5</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Without a listener cancelling it, the element updates \`current\` itself;
  // minerva-page-change reports the new page and page size.
  const pager = document.querySelector("#pager");
  const output = document.querySelector("#page");
  const onChange = (event) => {
    const { page } = event.detail;
    output.value = \`Page \${page} of \${pager.totalPages}\`;
  };
  pager.addEventListener("minerva-page-change", onChange);
<\/script>
`}})))()}n();export{t as default};