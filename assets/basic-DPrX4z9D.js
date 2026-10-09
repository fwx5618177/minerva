import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TagInputBasic.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// \`value\` is a property holding a new array after every change; the
// \`value\` attribute only sets the initial tags.

const tags = ref<HTMLElement & { value: string[] }>();
const resultText = ref("");

const show = () =>
  (resultText.value = \`Tags: \${tags.value!.value.join(", ") || "—"}\`);

onMounted(() => {
  show();
});
<\/script>

<template>
  <minerva-tag-input
    id="tags"
    aria-label="Tags"
    placeholder="Type a tag and press Enter"
    value="React"
    options="React, Vue, Svelte, Solid"
    ref="tags"
    @minerva-change="show"
  ></minerva-tag-input>
  <output id="result" style="display: block; margin-top: 8px">{{
    resultText
  }}</output>
</template>
`,angular:`// tag-input-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// \`value\` is a property holding a new array after every change; the
// \`value\` attribute only sets the initial tags.

@Component({
  selector: "app-tag-input-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-tag-input
      id="tags"
      aria-label="Tags"
      placeholder="Type a tag and press Enter"
      value="React"
      options="React, Vue, Svelte, Solid"
      #tags
      (minerva-change)="show($event)"
    ></minerva-tag-input>
    <output id="result" style="display: block; margin-top: 8px">{{
      resultText
    }}</output>
  \`,
})
export class TagInputBasicComponent implements AfterViewInit {
  @ViewChild("tags") tags!: ElementRef<HTMLElement & { value: string[] }>;
  resultText = "";

  show = () =>
    (this.resultText = \`Tags: \${this.tags.nativeElement.value.join(", ") || "—"}\`);

  ngAfterViewInit(): void {
    this.show();
  }
}
`,svelte:`<!-- TagInputBasic.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // \`value\` is a property holding a new array after every change; the
  // \`value\` attribute only sets the initial tags.

  let tags: HTMLElement & { value: string[] };
  let resultText = $state("");

  const show = () => (resultText = \`Tags: \${tags.value.join(", ") || "—"}\`);

  onMount(() => {
    show();
  });
<\/script>

<minerva-tag-input
  id="tags"
  aria-label="Tags"
  placeholder="Type a tag and press Enter"
  value="React"
  options="React, Vue, Svelte, Solid"
  bind:this={tags}
  onminerva-change={show}
></minerva-tag-input>
<output id="result" style="display: block; margin-top: 8px">{resultText}</output>
`,solid:`// TagInputBasic.tsx

import { createSignal, onMount } from "solid-js";

// \`value\` is a property holding a new array after every change; the
// \`value\` attribute only sets the initial tags.

export default function TagInputBasic() {
  let tags!: HTMLElement & { value: string[] };
  const [resultText, setResultText] = createSignal("");

  const show = () => setResultText(\`Tags: \${tags.value.join(", ") || "—"}\`);

  onMount(() => {
    show();
  });

  return (
    <>
      <minerva-tag-input
        id="tags"
        aria-label="Tags"
        placeholder="Type a tag and press Enter"
        value="React"
        options="React, Vue, Svelte, Solid"
        ref={tags}
        on:minerva-change={show}
      ></minerva-tag-input>
      <output id="result" style="display: block; margin-top: 8px">
        {resultText()}
      </output>
    </>
  );
}
`,html:`<minerva-tag-input
  id="tags"
  aria-label="Tags"
  placeholder="Type a tag and press Enter"
  value="React"
  options="React, Vue, Svelte, Solid"
></minerva-tag-input>
<output id="result" style="display: block; margin-top: 8px"></output>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`value\` is a property holding a new array after every change; the
  // \`value\` attribute only sets the initial tags.
  const tags = document.querySelector("#tags");
  const result = document.querySelector("#result");
  const show = () => (result.value = \`Tags: \${tags.value.join(", ") || "—"}\`);
  show();
  tags.addEventListener("minerva-change", show);
<\/script>
`}})))()}n();export{t as default};