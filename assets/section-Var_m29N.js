import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- LoadingStateSection.vue -->

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

// The loading state does not set aria-busy: mark the content container busy
// yourself while it loads, then swap the placeholder for the content.

const orders = ref<HTMLElement>();
const spinner = ref<HTMLElement>();
const content = ref<HTMLElement>();

let timer: ReturnType<typeof setTimeout> | undefined;
const setBusy = (busy: boolean) => {
  orders.value!.setAttribute("aria-busy", String(busy));
  spinner.value!.hidden = !busy;
  content.value!.hidden = busy;
};
const load = () => {
  setBusy(true);
  clearTimeout(timer);
  timer = setTimeout(() => setBusy(false), 1500);
};

onMounted(() => {
  load();
});

onBeforeUnmount(() => {
  clearTimeout(timer);
});
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <div>
      <minerva-button id="refresh" size="small" variant="outline" @click="load"
        >Refresh</minerva-button
      >
    </div>
    <section
      id="orders"
      aria-label="Recent orders"
      aria-busy="true"
      ref="orders"
    >
      <minerva-loading-state
        id="spinner"
        size="small"
        label="Loading orders…"
        ref="spinner"
      ></minerva-loading-state>
      <ul id="content" hidden style="margin: 0" ref="content">
        <li>#1042 · Keyboard · shipped</li>
        <li>#1041 · Monitor · delivered</li>
        <li>#1040 · Headset · delivered</li>
      </ul>
    </section>
  </div>
</template>
`,angular:`// loading-state-section.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
  type OnDestroy,
} from "@angular/core";

// The loading state does not set aria-busy: mark the content container busy
// yourself while it loads, then swap the placeholder for the content.

@Component({
  selector: "app-loading-state-section",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <div>
        <minerva-button
          id="refresh"
          size="small"
          variant="outline"
          (click)="load($event)"
          >Refresh</minerva-button
        >
      </div>
      <section id="orders" aria-label="Recent orders" aria-busy="true" #orders>
        <minerva-loading-state
          id="spinner"
          size="small"
          label="Loading orders…"
          #spinner
        ></minerva-loading-state>
        <ul id="content" hidden style="margin: 0" #content>
          <li>#1042 · Keyboard · shipped</li>
          <li>#1041 · Monitor · delivered</li>
          <li>#1040 · Headset · delivered</li>
        </ul>
      </section>
    </div>
  \`,
})
export class LoadingStateSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild("orders") orders!: ElementRef<HTMLElement>;
  @ViewChild("spinner") spinner!: ElementRef<HTMLElement>;
  @ViewChild("content") content!: ElementRef<HTMLElement>;

  timer: ReturnType<typeof setTimeout> | undefined;
  setBusy = (busy: boolean) => {
    this.orders.nativeElement.setAttribute("aria-busy", String(busy));
    this.spinner.nativeElement.hidden = !busy;
    this.content.nativeElement.hidden = busy;
  };
  load = () => {
    this.setBusy(true);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.setBusy(false), 1500);
  };

  ngAfterViewInit(): void {
    this.load();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
`,svelte:`<!-- LoadingStateSection.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // The loading state does not set aria-busy: mark the content container busy
  // yourself while it loads, then swap the placeholder for the content.

  let orders: HTMLElement;
  let spinner: HTMLElement;
  let content: HTMLElement;

  let timer: ReturnType<typeof setTimeout> | undefined;
  const setBusy = (busy: boolean) => {
    orders.setAttribute("aria-busy", String(busy));
    spinner.hidden = !busy;
    content.hidden = busy;
  };
  const load = () => {
    setBusy(true);
    clearTimeout(timer);
    timer = setTimeout(() => setBusy(false), 1500);
  };

  onMount(() => {
    load();
    return () => {
      clearTimeout(timer);
    };
  });
<\/script>

<div style="display: grid; gap: 12px">
  <div>
    <minerva-button
      id="refresh"
      size="small"
      variant="outline"
      onclick={load}
    >Refresh</minerva-button>
  </div>
  <section
    id="orders"
    aria-label="Recent orders"
    aria-busy="true"
    bind:this={orders}
  >
    <minerva-loading-state
      id="spinner"
      size="small"
      label="Loading orders…"
      bind:this={spinner}
    ></minerva-loading-state>
    <ul id="content" hidden style="margin: 0" bind:this={content}>
      <li>#1042 · Keyboard · shipped</li>
      <li>#1041 · Monitor · delivered</li>
      <li>#1040 · Headset · delivered</li>
    </ul>
  </section>
</div>
`,solid:`// LoadingStateSection.tsx

import { onCleanup, onMount } from "solid-js";

// The loading state does not set aria-busy: mark the content container busy
// yourself while it loads, then swap the placeholder for the content.

export default function LoadingStateSection() {
  let orders!: HTMLElement;
  let spinner!: HTMLElement;
  let content!: HTMLElement;

  let timer: ReturnType<typeof setTimeout> | undefined;
  const setBusy = (busy: boolean) => {
    orders.setAttribute("aria-busy", String(busy));
    spinner.hidden = !busy;
    content.hidden = busy;
  };
  const load = () => {
    setBusy(true);
    clearTimeout(timer);
    timer = setTimeout(() => setBusy(false), 1500);
  };

  onMount(() => {
    load();
  });

  onCleanup(() => {
    clearTimeout(timer);
  });

  return (
    <div style="display: grid; gap: 12px">
      <div>
        <minerva-button
          id="refresh"
          size="small"
          variant="outline"
          on:click={load}
        >
          Refresh
        </minerva-button>
      </div>
      <section
        id="orders"
        aria-label="Recent orders"
        aria-busy="true"
        ref={orders}
      >
        <minerva-loading-state
          id="spinner"
          size="small"
          label="Loading orders…"
          ref={spinner}
        ></minerva-loading-state>
        <ul id="content" hidden style="margin: 0" ref={content}>
          <li>#1042 · Keyboard · shipped</li>
          <li>#1041 · Monitor · delivered</li>
          <li>#1040 · Headset · delivered</li>
        </ul>
      </section>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <div>
    <minerva-button id="refresh" size="small" variant="outline"
      >Refresh</minerva-button
    >
  </div>
  <section id="orders" aria-label="Recent orders" aria-busy="true">
    <minerva-loading-state
      id="spinner"
      size="small"
      label="Loading orders…"
    ></minerva-loading-state>
    <ul id="content" hidden style="margin: 0">
      <li>#1042 · Keyboard · shipped</li>
      <li>#1041 · Monitor · delivered</li>
      <li>#1040 · Headset · delivered</li>
    </ul>
  </section>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The loading state does not set aria-busy: mark the content container busy
  // yourself while it loads, then swap the placeholder for the content.
  const orders = document.querySelector("#orders");
  const spinner = document.querySelector("#spinner");
  const content = document.querySelector("#content");
  const refresh = document.querySelector("#refresh");
  let timer;
  const setBusy = (busy) => {
    orders.setAttribute("aria-busy", String(busy));
    spinner.hidden = !busy;
    content.hidden = busy;
  };
  const load = () => {
    setBusy(true);
    clearTimeout(timer);
    timer = setTimeout(() => setBusy(false), 1500);
  };
  load();
  refresh.addEventListener("click", load);
<\/script>
`}})))()}n();export{t as default};