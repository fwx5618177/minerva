import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CascaderSearchHover.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// show-search filters every path, expand-trigger="hover" opens sub-menus on
// hover, displayRender formats the text of the field. Disabled options
// cannot be picked.

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
  children?: Option[];
};
type Cascader = HTMLElement & {
  options: Option[];
  displayRender?: (labels: string[]) => string;
};

const options: Option[] = [
  {
    value: "electronics",
    label: "Electronics",
    children: [
      { value: "phones", label: "Phones" },
      { value: "laptops", label: "Laptops" },
      { value: "cameras", label: "Cameras", disabled: true },
    ],
  },
  {
    value: "home",
    label: "Home",
    children: [
      { value: "kitchen", label: "Kitchen" },
      { value: "garden", label: "Garden" },
    ],
  },
];

const root = ref<HTMLElement>();

const formattedDisplayRender = (labels) => labels[labels.length - 1] ?? "";

onMounted(() => {
  root
    .value!.querySelectorAll<Cascader>("minerva-cascader")
    .forEach((cascader) => {
      cascader.options = options;
    });
});
<\/script>

<template>
  <div ref="root">
    <div style="display: flex; flex-wrap: wrap; gap: 12px">
      <minerva-cascader
        id="search"
        label="Category"
        placeholder="Type to search"
        show-search
      ></minerva-cascader>
      <minerva-cascader
        id="hover"
        label="Category"
        expand-trigger="hover"
        width="200"
      ></minerva-cascader>
      <minerva-cascader
        id="formatted"
        label="Category"
        value="electronics,phones"
        hide-clear-button
        :displayRender.prop="formattedDisplayRender"
      ></minerva-cascader>
    </div>
  </div>
</template>
`,angular:`// cascader-search-hover.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// show-search filters every path, expand-trigger="hover" opens sub-menus on
// hover, displayRender formats the text of the field. Disabled options
// cannot be picked.
type Option = {
  value: string;
  label: string;
  disabled?: boolean;
  children?: Option[];
};
type Cascader = HTMLElement & {
  options: Option[];
  displayRender?: (labels: string[]) => string;
};

const options: Option[] = [
  {
    value: "electronics",
    label: "Electronics",
    children: [
      { value: "phones", label: "Phones" },
      { value: "laptops", label: "Laptops" },
      { value: "cameras", label: "Cameras", disabled: true },
    ],
  },
  {
    value: "home",
    label: "Home",
    children: [
      { value: "kitchen", label: "Kitchen" },
      { value: "garden", label: "Garden" },
    ],
  },
];

@Component({
  selector: "app-cascader-search-hover",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div #root>
      <div style="display: flex; flex-wrap: wrap; gap: 12px">
        <minerva-cascader
          id="search"
          label="Category"
          placeholder="Type to search"
          show-search
        ></minerva-cascader>
        <minerva-cascader
          id="hover"
          label="Category"
          expand-trigger="hover"
          width="200"
        ></minerva-cascader>
        <minerva-cascader
          id="formatted"
          label="Category"
          value="electronics,phones"
          hide-clear-button
          [displayRender]="formattedDisplayRender"
        ></minerva-cascader>
      </div>
    </div>
  \`,
})
export class CascaderSearchHoverComponent implements AfterViewInit {
  @ViewChild("root") root!: ElementRef<HTMLElement>;

  formattedDisplayRender = (labels) => labels[labels.length - 1] ?? "";

  ngAfterViewInit(): void {
    this.root.nativeElement
      .querySelectorAll<Cascader>("minerva-cascader")
      .forEach((cascader) => {
        cascader.options = options;
      });
  }
}
`,svelte:`<!-- CascaderSearchHover.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // show-search filters every path, expand-trigger="hover" opens sub-menus on
  // hover, displayRender formats the text of the field. Disabled options
  // cannot be picked.

  type Option = {
    value: string;
    label: string;
    disabled?: boolean;
    children?: Option[];
  };
  type Cascader = HTMLElement & {
    options: Option[];
    displayRender?: (labels: string[]) => string;
  };

  const options: Option[] = [
    {
      value: "electronics",
      label: "Electronics",
      children: [
        { value: "phones", label: "Phones" },
        { value: "laptops", label: "Laptops" },
        { value: "cameras", label: "Cameras", disabled: true },
      ],
    },
    {
      value: "home",
      label: "Home",
      children: [
        { value: "kitchen", label: "Kitchen" },
        { value: "garden", label: "Garden" },
      ],
    },
  ];

  let root: HTMLElement;

  const formattedDisplayRender = (labels) => labels[labels.length - 1] ?? "";

  onMount(() => {
    root.querySelectorAll<Cascader>("minerva-cascader").forEach((cascader) => {
      cascader.options = options;
    });
  });
<\/script>

<div
  bind:this={root}
>
  <div style="display: flex; flex-wrap: wrap; gap: 12px">
    <minerva-cascader
      id="search"
      label="Category"
      placeholder="Type to search"
      show-search
    ></minerva-cascader>
    <minerva-cascader
      id="hover"
      label="Category"
      expand-trigger="hover"
      width="200"
    ></minerva-cascader>
    <minerva-cascader
      id="formatted"
      label="Category"
      value="electronics,phones"
      hide-clear-button
      displayRender={formattedDisplayRender}
    ></minerva-cascader>
  </div>
</div>
`,solid:`// CascaderSearchHover.tsx

import { onMount } from "solid-js";

// show-search filters every path, expand-trigger="hover" opens sub-menus on
// hover, displayRender formats the text of the field. Disabled options
// cannot be picked.
type Option = {
  value: string;
  label: string;
  disabled?: boolean;
  children?: Option[];
};
type Cascader = HTMLElement & {
  options: Option[];
  displayRender?: (labels: string[]) => string;
};

const options: Option[] = [
  {
    value: "electronics",
    label: "Electronics",
    children: [
      { value: "phones", label: "Phones" },
      { value: "laptops", label: "Laptops" },
      { value: "cameras", label: "Cameras", disabled: true },
    ],
  },
  {
    value: "home",
    label: "Home",
    children: [
      { value: "kitchen", label: "Kitchen" },
      { value: "garden", label: "Garden" },
    ],
  },
];

export default function CascaderSearchHover() {
  let root!: HTMLElement;

  const formattedDisplayRender = (labels) => labels[labels.length - 1] ?? "";

  onMount(() => {
    root.querySelectorAll<Cascader>("minerva-cascader").forEach((cascader) => {
      cascader.options = options;
    });
  });

  return (
    <div ref={root}>
      <div style="display: flex; flex-wrap: wrap; gap: 12px">
        <minerva-cascader
          id="search"
          label="Category"
          placeholder="Type to search"
          show-search
        ></minerva-cascader>
        <minerva-cascader
          id="hover"
          label="Category"
          expand-trigger="hover"
          width="200"
        ></minerva-cascader>
        <minerva-cascader
          id="formatted"
          label="Category"
          value="electronics,phones"
          hide-clear-button
          prop:displayRender={formattedDisplayRender}
        ></minerva-cascader>
      </div>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 12px">
  <minerva-cascader
    id="search"
    label="Category"
    placeholder="Type to search"
    show-search
  ></minerva-cascader>
  <minerva-cascader
    id="hover"
    label="Category"
    expand-trigger="hover"
    width="200"
  ></minerva-cascader>
  <minerva-cascader
    id="formatted"
    label="Category"
    value="electronics,phones"
    hide-clear-button
  ></minerva-cascader>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // show-search filters every path, expand-trigger="hover" opens sub-menus on
  // hover, displayRender formats the text of the field. Disabled options
  // cannot be picked.
  const options = [
    {
      value: "electronics",
      label: "Electronics",
      children: [
        { value: "phones", label: "Phones" },
        { value: "laptops", label: "Laptops" },
        { value: "cameras", label: "Cameras", disabled: true },
      ],
    },
    {
      value: "home",
      label: "Home",
      children: [
        { value: "kitchen", label: "Kitchen" },
        { value: "garden", label: "Garden" },
      ],
    },
  ];

  document.querySelectorAll("minerva-cascader").forEach((cascader) => {
    cascader.options = options;
  });
  const formatted = document.querySelector("#formatted");
  formatted.displayRender = (labels) => labels[labels.length - 1] ?? "";
<\/script>
`}})))()}n();export{t as default};