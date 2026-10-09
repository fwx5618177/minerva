import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ProseScopes.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Inside a shadow root, the element injects its rules into that root (once),
// so it works in other components too.

const host = ref<HTMLElement>();

onMounted(() => {
  const shadow =
    host.value!.shadowRoot ?? host.value!.attachShadow({ mode: "open" });
  shadow.innerHTML = \`<minerva-prose>
      <h4>In a shadow root</h4>
      <ul><li>Lists, <code>code</code> and <a href="https://example.com">links</a></li></ul>
    </minerva-prose>\`;
});
<\/script>

<template>
  <div
    style="
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    "
  >
    <minerva-prose style="--prose-font-size: 0.875rem">
      <h4>Small print</h4>
      <p>
        CSS variables such as <code>--prose-font-size</code> tune the rules per
        instance.
      </p>
    </minerva-prose>
    <div id="host" ref="host"></div>
  </div>
</template>
`,angular:`// prose-scopes.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// Inside a shadow root, the element injects its rules into that root (once),
// so it works in other components too.

@Component({
  selector: "app-prose-scopes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      "
    >
      <minerva-prose style="--prose-font-size: 0.875rem">
        <h4>Small print</h4>
        <p>
          CSS variables such as <code>--prose-font-size</code> tune the rules
          per instance.
        </p>
      </minerva-prose>
      <div id="host" #host></div>
    </div>
  \`,
})
export class ProseScopesComponent implements AfterViewInit {
  @ViewChild("host") host!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const shadow =
      this.host.nativeElement.shadowRoot ??
      this.host.nativeElement.attachShadow({ mode: "open" });
    shadow.innerHTML = \`<minerva-prose>
        <h4>In a shadow root</h4>
        <ul><li>Lists, <code>code</code> and <a href="https://example.com">links</a></li></ul>
      </minerva-prose>\`;
  }
}
`,svelte:`<!-- ProseScopes.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // Inside a shadow root, the element injects its rules into that root (once),
  // so it works in other components too.

  let host: HTMLElement;

  onMount(() => {
    const shadow = host.shadowRoot ?? host.attachShadow({ mode: "open" });
    shadow.innerHTML = \`<minerva-prose>
        <h4>In a shadow root</h4>
        <ul><li>Lists, <code>code</code> and <a href="https://example.com">links</a></li></ul>
      </minerva-prose>\`;
  });
<\/script>

<div
  style="
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  "
>
  <minerva-prose style="--prose-font-size: 0.875rem">
    <h4>Small print</h4>
    <p>
      CSS variables such as <code>--prose-font-size</code> tune the rules per
      instance.
    </p>
  </minerva-prose>
  <div id="host" bind:this={host}></div>
</div>
`,solid:`// ProseScopes.tsx

import { onMount } from "solid-js";

// Inside a shadow root, the element injects its rules into that root (once),
// so it works in other components too.

export default function ProseScopes() {
  let host!: HTMLElement;

  onMount(() => {
    const shadow = host.shadowRoot ?? host.attachShadow({ mode: "open" });
    shadow.innerHTML = \`<minerva-prose>
        <h4>In a shadow root</h4>
        <ul><li>Lists, <code>code</code> and <a href="https://example.com">links</a></li></ul>
      </minerva-prose>\`;
  });

  return (
    <div
      style="
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      "
    >
      <minerva-prose style="--prose-font-size: 0.875rem">
        <h4>Small print</h4>
        <p>
          CSS variables such as <code>--prose-font-size</code> tune the rules
          per instance.
        </p>
      </minerva-prose>
      <div id="host" ref={host}></div>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  "
>
  <minerva-prose style="--prose-font-size: 0.875rem">
    <h4>Small print</h4>
    <p>
      CSS variables such as <code>--prose-font-size</code> tune the rules per
      instance.
    </p>
  </minerva-prose>
  <div id="host"></div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Inside a shadow root, the element injects its rules into that root (once),
  // so it works in other components too.
  const host = document.querySelector("#host");
  const shadow = host.shadowRoot ?? host.attachShadow({ mode: "open" });
  shadow.innerHTML = \`<minerva-prose>
      <h4>In a shadow root</h4>
      <ul><li>Lists, <code>code</code> and <a href="https://example.com">links</a></li></ul>
    </minerva-prose>\`;
<\/script>
`}})))()}n();export{t as default};