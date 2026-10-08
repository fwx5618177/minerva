import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PageTabsBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The strip follows minerva-select (active-value); minerva-close only
// reports the click: remove the element to close the page.

const strip = ref<HTMLElement & { activeValue?: string }>();
const logText = ref("");

const onSelect = (event: Event) => {
  logText.value = \`Opened \${(event as CustomEvent<{ value: string }>).detail.value}\`;
};
const onClose = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  (event.target as HTMLElement).remove();
  if (strip.value!.activeValue === value) strip.value!.activeValue = "home";
  logText.value = \`Closed \${value}\`;
};
<\/script>

<template>
  <minerva-page-tabs
    id="pages"
    aria-label="Open pages"
    active-value="books"
    ref="strip"
    @minerva-select="onSelect"
    @minerva-close="onClose"
  >
    <minerva-page-tab value="home" label="Dashboard">
      <span slot="icon">⌂</span>
    </minerva-page-tab>
    <minerva-page-tab value="books" label="Books" closable></minerva-page-tab>
    <minerva-page-tab
      value="article"
      label="A very long article title that gets truncated"
      closable
    ></minerva-page-tab>
  </minerva-page-tabs>
  <output id="log" aria-live="polite">{{ logText }}</output>
</template>
`,angular:`// page-tabs-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The strip follows minerva-select (active-value); minerva-close only
// reports the click: remove the element to close the page.

@Component({
  selector: "app-page-tabs-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-page-tabs
      id="pages"
      aria-label="Open pages"
      active-value="books"
      #strip
      (minerva-select)="onSelect($event)"
      (minerva-close)="onClose($event)"
    >
      <minerva-page-tab value="home" label="Dashboard">
        <span slot="icon">⌂</span>
      </minerva-page-tab>
      <minerva-page-tab value="books" label="Books" closable></minerva-page-tab>
      <minerva-page-tab
        value="article"
        label="A very long article title that gets truncated"
        closable
      ></minerva-page-tab>
    </minerva-page-tabs>
    <output id="log" aria-live="polite">{{ logText }}</output>
  \`,
})
export class PageTabsBasicComponent {
  @ViewChild("strip") strip!: ElementRef<
    HTMLElement & { activeValue?: string }
  >;
  logText = "";

  onSelect = (event: Event) => {
    this.logText = \`Opened \${(event as CustomEvent<{ value: string }>).detail.value}\`;
  };
  onClose = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    (event.target as HTMLElement).remove();
    if (this.strip.nativeElement.activeValue === value)
      this.strip.nativeElement.activeValue = "home";
    this.logText = \`Closed \${value}\`;
  };
}
`,svelte:`<!-- PageTabsBasic.svelte -->

<script lang="ts">
  // The strip follows minerva-select (active-value); minerva-close only
  // reports the click: remove the element to close the page.

  let strip: HTMLElement & { activeValue?: string };
  let logText = $state("");

  const onSelect = (event: Event) => {
    logText = \`Opened \${(event as CustomEvent<{ value: string }>).detail.value}\`;
  };
  const onClose = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    (event.target as HTMLElement).remove();
    if (strip.activeValue === value) strip.activeValue = "home";
    logText = \`Closed \${value}\`;
  };
<\/script>

<minerva-page-tabs
  id="pages"
  aria-label="Open pages"
  active-value="books"
  bind:this={strip}
  onminerva-select={onSelect}
  onminerva-close={onClose}
>
  <minerva-page-tab value="home" label="Dashboard">
    <span slot="icon">⌂</span>
  </minerva-page-tab>
  <minerva-page-tab value="books" label="Books" closable></minerva-page-tab>
  <minerva-page-tab
    value="article"
    label="A very long article title that gets truncated"
    closable
  ></minerva-page-tab>
</minerva-page-tabs>
<output id="log" aria-live="polite">{logText}</output>
`,solid:`// PageTabsBasic.tsx

import { createSignal } from "solid-js";

// The strip follows minerva-select (active-value); minerva-close only
// reports the click: remove the element to close the page.

export default function PageTabsBasic() {
  let strip!: HTMLElement & { activeValue?: string };
  const [logText, setLogText] = createSignal("");

  const onSelect = (event: Event) => {
    setLogText(
      \`Opened \${(event as CustomEvent<{ value: string }>).detail.value}\`,
    );
  };
  const onClose = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    (event.target as HTMLElement).remove();
    if (strip.activeValue === value) strip.activeValue = "home";
    setLogText(\`Closed \${value}\`);
  };

  return (
    <>
      <minerva-page-tabs
        id="pages"
        aria-label="Open pages"
        active-value="books"
        ref={strip}
        on:minerva-select={onSelect}
        on:minerva-close={onClose}
      >
        <minerva-page-tab value="home" label="Dashboard">
          <span slot="icon">⌂</span>
        </minerva-page-tab>
        <minerva-page-tab
          value="books"
          label="Books"
          closable
        ></minerva-page-tab>
        <minerva-page-tab
          value="article"
          label="A very long article title that gets truncated"
          closable
        ></minerva-page-tab>
      </minerva-page-tabs>
      <output id="log" aria-live="polite">
        {logText()}
      </output>
    </>
  );
}
`,html:`<minerva-page-tabs id="pages" aria-label="Open pages" active-value="books">
  <minerva-page-tab value="home" label="Dashboard">
    <span slot="icon">⌂</span>
  </minerva-page-tab>
  <minerva-page-tab value="books" label="Books" closable></minerva-page-tab>
  <minerva-page-tab
    value="article"
    label="A very long article title that gets truncated"
    closable
  ></minerva-page-tab>
</minerva-page-tabs>
<output id="log" aria-live="polite"></output>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // The strip follows minerva-select (active-value); minerva-close only
  // reports the click: remove the element to close the page.
  const strip = document.querySelector("#pages");
  const log = document.querySelector("#log");
  const onSelect = (event) => {
    log.value = \`Opened \${event.detail.value}\`;
  };
  const onClose = (event) => {
    const { value } = event.detail;
    event.target.remove();
    if (strip.activeValue === value) strip.activeValue = "home";
    log.value = \`Closed \${value}\`;
  };
  strip.addEventListener("minerva-select", onSelect);
  strip.addEventListener("minerva-close", onClose);
<\/script>
`}})))()}n();export{t as default};