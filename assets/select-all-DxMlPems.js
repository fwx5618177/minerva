import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CheckboxSelectAll.vue -->

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

// The parent box mirrors its children: checked when all are, indeterminate
// (aria-checked="mixed") when only some are. \`minerva-change\` only fires
// for user toggles, so setting \`checked\` here does not loop.

type Checkbox = HTMLElement & {
  checked: boolean;
  indeterminate: boolean;
  value: string;
  updateComplete: Promise<boolean>;
};

const root = ref<HTMLElement>();
const all = ref<Checkbox>();
const outputText = ref("");

let items: Checkbox[] = [];
const sync = () => {
  const checked = items.filter((item) => item.checked);
  all.value!.checked = checked.length === items.length;
  all.value!.indeterminate =
    checked.length > 0 && checked.length < items.length;
  outputText.value = \`Selected: \${checked.map((item) => item.value).join(", ") || "none"}\`;
};
const onAll = () => {
  items.forEach((item) => (item.checked = all.value!.checked));
  sync();
};

onMounted(() => {
  items = Array.from(root.value!.querySelectorAll<Checkbox>(".cb-item"));
  items.forEach((item) => item.addEventListener("minerva-change", sync));
  // the \`checked\` attributes are applied on the first render
  void Promise.all(items.map((item) => item.updateComplete)).then(sync);
});

onBeforeUnmount(() => {
  items.forEach((item) => item.removeEventListener("minerva-change", sync));
});
<\/script>

<template>
  <div ref="root">
    <div style="display: grid; gap: 8px">
      <minerva-checkbox
        id="cb-all"
        label="All toppings"
        ref="all"
        @minerva-change="onAll"
      ></minerva-checkbox>
      <div style="display: grid; gap: 8px; padding-inline-start: 24px">
        <minerva-checkbox
          class="cb-item"
          value="cheese"
          checked
          label="Cheese"
        ></minerva-checkbox>
        <minerva-checkbox
          class="cb-item"
          value="olives"
          label="Olives"
        ></minerva-checkbox>
        <minerva-checkbox
          class="cb-item"
          value="basil"
          label="Basil"
        ></minerva-checkbox>
      </div>
      <output id="cb-selection">{{ outputText }}</output>
    </div>
  </div>
</template>
`,angular:`// checkbox-select-all.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
  type OnDestroy,
} from "@angular/core";

// The parent box mirrors its children: checked when all are, indeterminate
// (aria-checked="mixed") when only some are. \`minerva-change\` only fires
// for user toggles, so setting \`checked\` here does not loop.
type Checkbox = HTMLElement & {
  checked: boolean;
  indeterminate: boolean;
  value: string;
  updateComplete: Promise<boolean>;
};

@Component({
  selector: "app-checkbox-select-all",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div #root>
      <div style="display: grid; gap: 8px">
        <minerva-checkbox
          id="cb-all"
          label="All toppings"
          #all
          (minerva-change)="onAll($event)"
        ></minerva-checkbox>
        <div style="display: grid; gap: 8px; padding-inline-start: 24px">
          <minerva-checkbox
            class="cb-item"
            value="cheese"
            checked
            label="Cheese"
          ></minerva-checkbox>
          <minerva-checkbox
            class="cb-item"
            value="olives"
            label="Olives"
          ></minerva-checkbox>
          <minerva-checkbox
            class="cb-item"
            value="basil"
            label="Basil"
          ></minerva-checkbox>
        </div>
        <output id="cb-selection">{{ outputText }}</output>
      </div>
    </div>
  \`,
})
export class CheckboxSelectAllComponent implements AfterViewInit, OnDestroy {
  @ViewChild("root") root!: ElementRef<HTMLElement>;
  @ViewChild("all") all!: ElementRef<Checkbox>;
  outputText = "";

  items: Checkbox[] = [];
  sync = () => {
    const checked = this.items.filter((item) => item.checked);
    this.all.nativeElement.checked = checked.length === this.items.length;
    this.all.nativeElement.indeterminate =
      checked.length > 0 && checked.length < this.items.length;
    this.outputText = \`Selected: \${checked.map((item) => item.value).join(", ") || "none"}\`;
  };
  onAll = () => {
    this.items.forEach(
      (item) => (item.checked = this.all.nativeElement.checked),
    );
    this.sync();
  };

  ngAfterViewInit(): void {
    this.items = Array.from(
      this.root.nativeElement.querySelectorAll<Checkbox>(".cb-item"),
    );
    this.items.forEach((item) =>
      item.addEventListener("minerva-change", this.sync),
    );
    // the \`checked\` attributes are applied on the first render
    void Promise.all(this.items.map((item) => item.updateComplete)).then(
      this.sync,
    );
  }

  ngOnDestroy(): void {
    this.items.forEach((item) =>
      item.removeEventListener("minerva-change", this.sync),
    );
  }
}
`,svelte:`<!-- CheckboxSelectAll.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // The parent box mirrors its children: checked when all are, indeterminate
  // (aria-checked="mixed") when only some are. \`minerva-change\` only fires
  // for user toggles, so setting \`checked\` here does not loop.

  type Checkbox = HTMLElement & {
    checked: boolean;
    indeterminate: boolean;
    value: string;
    updateComplete: Promise<boolean>;
  };

  let root: HTMLElement;
  let all: Checkbox;
  let outputText = $state("");

  let items: Checkbox[] = [];
  const sync = () => {
    const checked = items.filter((item) => item.checked);
    all.checked = checked.length === items.length;
    all.indeterminate = checked.length > 0 && checked.length < items.length;
    outputText = \`Selected: \${checked.map((item) => item.value).join(", ") || "none"}\`;
  };
  const onAll = () => {
    items.forEach((item) => (item.checked = all.checked));
    sync();
  };

  onMount(() => {
    items = Array.from(root.querySelectorAll<Checkbox>(".cb-item"));
    items.forEach((item) => item.addEventListener("minerva-change", sync));
    // the \`checked\` attributes are applied on the first render
    void Promise.all(items.map((item) => item.updateComplete)).then(sync);
    return () => {
      items.forEach((item) => item.removeEventListener("minerva-change", sync));
    };
  });
<\/script>

<div
  bind:this={root}
>
  <div style="display: grid; gap: 8px">
    <minerva-checkbox
      id="cb-all"
      label="All toppings"
      bind:this={all}
      onminerva-change={onAll}
    ></minerva-checkbox>
    <div style="display: grid; gap: 8px; padding-inline-start: 24px">
      <minerva-checkbox
        class="cb-item"
        value="cheese"
        checked
        label="Cheese"
      ></minerva-checkbox>
      <minerva-checkbox
        class="cb-item"
        value="olives"
        label="Olives"
      ></minerva-checkbox>
      <minerva-checkbox
        class="cb-item"
        value="basil"
        label="Basil"
      ></minerva-checkbox>
    </div>
    <output id="cb-selection">{outputText}</output>
  </div>
</div>
`,solid:`// CheckboxSelectAll.tsx

import { createSignal, onCleanup, onMount } from "solid-js";

// The parent box mirrors its children: checked when all are, indeterminate
// (aria-checked="mixed") when only some are. \`minerva-change\` only fires
// for user toggles, so setting \`checked\` here does not loop.
type Checkbox = HTMLElement & {
  checked: boolean;
  indeterminate: boolean;
  value: string;
  updateComplete: Promise<boolean>;
};

export default function CheckboxSelectAll() {
  let root!: HTMLElement;
  let all!: Checkbox;
  const [outputText, setOutputText] = createSignal("");

  let items: Checkbox[] = [];
  const sync = () => {
    const checked = items.filter((item) => item.checked);
    all.checked = checked.length === items.length;
    all.indeterminate = checked.length > 0 && checked.length < items.length;
    setOutputText(
      \`Selected: \${checked.map((item) => item.value).join(", ") || "none"}\`,
    );
  };
  const onAll = () => {
    items.forEach((item) => (item.checked = all.checked));
    sync();
  };

  onMount(() => {
    items = Array.from(root.querySelectorAll<Checkbox>(".cb-item"));
    items.forEach((item) => item.addEventListener("minerva-change", sync));
    // the \`checked\` attributes are applied on the first render
    void Promise.all(items.map((item) => item.updateComplete)).then(sync);
  });

  onCleanup(() => {
    items.forEach((item) => item.removeEventListener("minerva-change", sync));
  });

  return (
    <div ref={root}>
      <div style="display: grid; gap: 8px">
        <minerva-checkbox
          id="cb-all"
          label="All toppings"
          ref={all}
          on:minerva-change={onAll}
        ></minerva-checkbox>
        <div style="display: grid; gap: 8px; padding-inline-start: 24px">
          <minerva-checkbox
            class="cb-item"
            value="cheese"
            checked
            label="Cheese"
          ></minerva-checkbox>
          <minerva-checkbox
            class="cb-item"
            value="olives"
            label="Olives"
          ></minerva-checkbox>
          <minerva-checkbox
            class="cb-item"
            value="basil"
            label="Basil"
          ></minerva-checkbox>
        </div>
        <output id="cb-selection">{outputText()}</output>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px">
  <minerva-checkbox id="cb-all" label="All toppings"></minerva-checkbox>
  <div style="display: grid; gap: 8px; padding-inline-start: 24px">
    <minerva-checkbox
      class="cb-item"
      value="cheese"
      checked
      label="Cheese"
    ></minerva-checkbox>
    <minerva-checkbox
      class="cb-item"
      value="olives"
      label="Olives"
    ></minerva-checkbox>
    <minerva-checkbox
      class="cb-item"
      value="basil"
      label="Basil"
    ></minerva-checkbox>
  </div>
  <output id="cb-selection"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The parent box mirrors its children: checked when all are, indeterminate
  // (aria-checked="mixed") when only some are. \`minerva-change\` only fires
  // for user toggles, so setting \`checked\` here does not loop.
  const all = document.querySelector("#cb-all");
  const items = Array.from(document.querySelectorAll(".cb-item"));
  const output = document.querySelector("#cb-selection");
  const sync = () => {
    const checked = items.filter((item) => item.checked);
    all.checked = checked.length === items.length;
    all.indeterminate = checked.length > 0 && checked.length < items.length;
    output.value = \`Selected: \${checked.map((item) => item.value).join(", ") || "none"}\`;
  };
  const onAll = () => {
    items.forEach((item) => (item.checked = all.checked));
    sync();
  };
  all.addEventListener("minerva-change", onAll);
  items.forEach((item) => item.addEventListener("minerva-change", sync));
  // the \`checked\` attributes are applied on the first render
  void Promise.all(items.map((item) => item.updateComplete)).then(sync);
<\/script>
`}})))()}n();export{t as default};