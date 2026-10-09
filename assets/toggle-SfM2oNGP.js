import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TagToggle.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// \`clickable toggle\` tags are toggle buttons (aria-pressed): a click flips
// \`pressed\` and fires \`minerva-change\`. A plain clickable tag fires \`click\`.

type Tag = HTMLElement & { pressed?: boolean };

const filters = ref<HTMLElement>();
const activeText = ref("Showing: open");

let toggles: Tag[] = [];
const render = () => {
  const on = toggles.filter((t) => t.pressed).map((t) => t.dataset.status);
  activeText.value = \`Showing: \${on.length ? on.join(", ") : "everything"}\`;
};
const onClear = () => {
  toggles.forEach((t) => (t.pressed = false));
  render();
};

onMounted(() => {
  toggles = [...filters.value!.querySelectorAll<Tag>("[toggle]")];
});
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <div
      id="filters"
      role="group"
      aria-label="Filter by status"
      style="display: flex; flex-wrap: wrap; gap: 8px"
      ref="filters"
      @minerva-change="render"
    >
      <minerva-tag clickable toggle pressed color="primary" data-status="open"
        >Open</minerva-tag
      >
      <minerva-tag clickable toggle color="primary" data-status="review"
        >In review</minerva-tag
      >
      <minerva-tag clickable toggle color="primary" data-status="done"
        >Done</minerva-tag
      >
      <minerva-tag
        clickable
        no-ripple
        color="neutral"
        id="clear"
        @click="onClear"
        >Clear</minerva-tag
      >
    </div>
    <output id="active">{{ activeText }}</output>
  </div>
</template>
`,angular:`// tag-toggle.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// \`clickable toggle\` tags are toggle buttons (aria-pressed): a click flips
// \`pressed\` and fires \`minerva-change\`. A plain clickable tag fires \`click\`.
type Tag = HTMLElement & { pressed?: boolean };

@Component({
  selector: "app-tag-toggle",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <div
        id="filters"
        role="group"
        aria-label="Filter by status"
        style="display: flex; flex-wrap: wrap; gap: 8px"
        #filters
        (minerva-change)="render($event)"
      >
        <minerva-tag clickable toggle pressed color="primary" data-status="open"
          >Open</minerva-tag
        >
        <minerva-tag clickable toggle color="primary" data-status="review"
          >In review</minerva-tag
        >
        <minerva-tag clickable toggle color="primary" data-status="done"
          >Done</minerva-tag
        >
        <minerva-tag
          clickable
          no-ripple
          color="neutral"
          id="clear"
          (click)="onClear($event)"
          >Clear</minerva-tag
        >
      </div>
      <output id="active">{{ activeText }}</output>
    </div>
  \`,
})
export class TagToggleComponent implements AfterViewInit {
  @ViewChild("filters") filters!: ElementRef<HTMLElement>;
  activeText = "Showing: open";

  toggles: Tag[] = [];
  render = () => {
    const on = this.toggles
      .filter((t) => t.pressed)
      .map((t) => t.dataset.status);
    this.activeText = \`Showing: \${on.length ? on.join(", ") : "everything"}\`;
  };
  onClear = () => {
    this.toggles.forEach((t) => (t.pressed = false));
    this.render();
  };

  ngAfterViewInit(): void {
    this.toggles = [
      ...this.filters.nativeElement.querySelectorAll<Tag>("[toggle]"),
    ];
  }
}
`,svelte:`<!-- TagToggle.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // \`clickable toggle\` tags are toggle buttons (aria-pressed): a click flips
  // \`pressed\` and fires \`minerva-change\`. A plain clickable tag fires \`click\`.

  type Tag = HTMLElement & { pressed?: boolean };

  let filters: HTMLElement;
  let activeText = $state("Showing: open");

  let toggles: Tag[] = [];
  const render = () => {
    const on = toggles.filter((t) => t.pressed).map((t) => t.dataset.status);
    activeText = \`Showing: \${on.length ? on.join(", ") : "everything"}\`;
  };
  const onClear = () => {
    toggles.forEach((t) => (t.pressed = false));
    render();
  };

  onMount(() => {
    toggles = [...filters.querySelectorAll<Tag>("[toggle]")];
  });
<\/script>

<div style="display: grid; gap: 12px">
  <div
    id="filters"
    role="group"
    aria-label="Filter by status"
    style="display: flex; flex-wrap: wrap; gap: 8px"
    bind:this={filters}
    onminerva-change={render}
  >
    <minerva-tag clickable toggle pressed color="primary" data-status="open"
      >Open</minerva-tag>
    <minerva-tag clickable toggle color="primary" data-status="review"
      >In review</minerva-tag>
    <minerva-tag clickable toggle color="primary" data-status="done"
      >Done</minerva-tag>
    <minerva-tag
      clickable
      no-ripple
      color="neutral"
      id="clear"
      onclick={onClear}
    >Clear</minerva-tag>
  </div>
  <output id="active">{activeText}</output>
</div>
`,solid:`// TagToggle.tsx

import { createSignal, onMount } from "solid-js";

// \`clickable toggle\` tags are toggle buttons (aria-pressed): a click flips
// \`pressed\` and fires \`minerva-change\`. A plain clickable tag fires \`click\`.
type Tag = HTMLElement & { pressed?: boolean };

export default function TagToggle() {
  let filters!: HTMLElement;
  const [activeText, setActiveText] = createSignal("Showing: open");

  let toggles: Tag[] = [];
  const render = () => {
    const on = toggles.filter((t) => t.pressed).map((t) => t.dataset.status);
    setActiveText(\`Showing: \${on.length ? on.join(", ") : "everything"}\`);
  };
  const onClear = () => {
    toggles.forEach((t) => (t.pressed = false));
    render();
  };

  onMount(() => {
    toggles = [...filters.querySelectorAll<Tag>("[toggle]")];
  });

  return (
    <div style="display: grid; gap: 12px">
      <div
        id="filters"
        role="group"
        aria-label="Filter by status"
        style="display: flex; flex-wrap: wrap; gap: 8px"
        ref={filters}
        on:minerva-change={render}
      >
        <minerva-tag
          clickable
          toggle
          pressed
          color="primary"
          data-status="open"
        >
          Open
        </minerva-tag>
        <minerva-tag clickable toggle color="primary" data-status="review">
          In review
        </minerva-tag>
        <minerva-tag clickable toggle color="primary" data-status="done">
          Done
        </minerva-tag>
        <minerva-tag
          clickable
          no-ripple
          color="neutral"
          id="clear"
          on:click={onClear}
        >
          Clear
        </minerva-tag>
      </div>
      <output id="active">{activeText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <div
    id="filters"
    role="group"
    aria-label="Filter by status"
    style="display: flex; flex-wrap: wrap; gap: 8px"
  >
    <minerva-tag clickable toggle pressed color="primary" data-status="open"
      >Open</minerva-tag
    >
    <minerva-tag clickable toggle color="primary" data-status="review"
      >In review</minerva-tag
    >
    <minerva-tag clickable toggle color="primary" data-status="done"
      >Done</minerva-tag
    >
    <minerva-tag clickable no-ripple color="neutral" id="clear"
      >Clear</minerva-tag
    >
  </div>
  <output id="active">Showing: open</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`clickable toggle\` tags are toggle buttons (aria-pressed): a click flips
  // \`pressed\` and fires \`minerva-change\`. A plain clickable tag fires \`click\`.
  const filters = document.querySelector("#filters");
  const clear = document.querySelector("#clear");
  const active = document.querySelector("#active");
  const toggles = [...filters.querySelectorAll("[toggle]")];
  const render = () => {
    const on = toggles.filter((t) => t.pressed).map((t) => t.dataset.status);
    active.value = \`Showing: \${on.length ? on.join(", ") : "everything"}\`;
  };
  const onClear = () => {
    toggles.forEach((t) => (t.pressed = false));
    render();
  };
  filters.addEventListener("minerva-change", render);
  clear.addEventListener("click", onClear);
<\/script>
`}})))()}n();export{t as default};