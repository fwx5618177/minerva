import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CascaderLazy.vue -->

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

// loadData is called when an option without children (and not isLeaf) is
// activated: set \`loading\`, add the children, then reassign \`options\`.

type Option = {
  value: string;
  label: string;
  isLeaf?: boolean;
  loading?: boolean;
  children?: Option[];
};
type Cascader = HTMLElement & {
  options: Option[];
  loadData?: (selectedOptions: Option[]) => void;
};

const cascader = ref<Cascader>();

const timers: number[] = [];
const cascaderOptions = [
  { value: "europe", label: "Europe" },
  { value: "asia", label: "Asia" },
];
const cascaderLoadData = (selectedOptions) => {
  const target = selectedOptions[selectedOptions.length - 1];
  target.loading = true;
  cascader.value!.options = [...cascader.value!.options];
  timers.push(
    window.setTimeout(() => {
      target.loading = false;
      const last = selectedOptions.length >= 2;
      target.children = [1, 2, 3].map((n) => ({
        value: \`\${target.value}-\${n}\`,
        label: \`\${target.label} \${n}\`,
        isLeaf: last,
      }));
      cascader.value!.options = [...cascader.value!.options];
    }, 800),
  );
};

onBeforeUnmount(() => {
  timers.forEach((id) => clearTimeout(id));
});
<\/script>

<template>
  <minerva-cascader
    id="lazy"
    label="Location"
    ref="cascader"
    :options.prop="cascaderOptions"
    :loadData.prop="cascaderLoadData"
  ></minerva-cascader>
</template>
`,angular:`// cascader-lazy.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type OnDestroy,
} from "@angular/core";

// loadData is called when an option without children (and not isLeaf) is
// activated: set \`loading\`, add the children, then reassign \`options\`.
type Option = {
  value: string;
  label: string;
  isLeaf?: boolean;
  loading?: boolean;
  children?: Option[];
};
type Cascader = HTMLElement & {
  options: Option[];
  loadData?: (selectedOptions: Option[]) => void;
};

@Component({
  selector: "app-cascader-lazy",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-cascader
      id="lazy"
      label="Location"
      #cascader
      [options]="cascaderOptions"
      [loadData]="cascaderLoadData"
    ></minerva-cascader>
  \`,
})
export class CascaderLazyComponent implements OnDestroy {
  @ViewChild("cascader") cascader!: ElementRef<Cascader>;

  timers: number[] = [];
  cascaderOptions = [
    { value: "europe", label: "Europe" },
    { value: "asia", label: "Asia" },
  ];
  cascaderLoadData = (selectedOptions) => {
    const target = selectedOptions[selectedOptions.length - 1];
    target.loading = true;
    this.cascader.nativeElement.options = [
      ...this.cascader.nativeElement.options,
    ];
    this.timers.push(
      window.setTimeout(() => {
        target.loading = false;
        const last = selectedOptions.length >= 2;
        target.children = [1, 2, 3].map((n) => ({
          value: \`\${target.value}-\${n}\`,
          label: \`\${target.label} \${n}\`,
          isLeaf: last,
        }));
        this.cascader.nativeElement.options = [
          ...this.cascader.nativeElement.options,
        ];
      }, 800),
    );
  };

  ngOnDestroy(): void {
    this.timers.forEach((id) => clearTimeout(id));
  }
}
`,svelte:`<!-- CascaderLazy.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // loadData is called when an option without children (and not isLeaf) is
  // activated: set \`loading\`, add the children, then reassign \`options\`.

  type Option = {
    value: string;
    label: string;
    isLeaf?: boolean;
    loading?: boolean;
    children?: Option[];
  };
  type Cascader = HTMLElement & {
    options: Option[];
    loadData?: (selectedOptions: Option[]) => void;
  };

  let cascader: Cascader;

  const timers: number[] = [];
  const cascaderOptions = [
    { value: "europe", label: "Europe" },
    { value: "asia", label: "Asia" },
  ];
  const cascaderLoadData = (selectedOptions) => {
    const target = selectedOptions[selectedOptions.length - 1];
    target.loading = true;
    cascader.options = [...cascader.options];
    timers.push(
      window.setTimeout(() => {
        target.loading = false;
        const last = selectedOptions.length >= 2;
        target.children = [1, 2, 3].map((n) => ({
          value: \`\${target.value}-\${n}\`,
          label: \`\${target.label} \${n}\`,
          isLeaf: last,
        }));
        cascader.options = [...cascader.options];
      }, 800),
    );
  };

  onMount(() => {
    return () => {
      timers.forEach((id) => clearTimeout(id));
    };
  });
<\/script>

<minerva-cascader
  id="lazy"
  label="Location"
  bind:this={cascader}
  options={cascaderOptions}
  loadData={cascaderLoadData}
></minerva-cascader>
`,solid:`// CascaderLazy.tsx

import { onCleanup } from "solid-js";

// loadData is called when an option without children (and not isLeaf) is
// activated: set \`loading\`, add the children, then reassign \`options\`.
type Option = {
  value: string;
  label: string;
  isLeaf?: boolean;
  loading?: boolean;
  children?: Option[];
};
type Cascader = HTMLElement & {
  options: Option[];
  loadData?: (selectedOptions: Option[]) => void;
};

export default function CascaderLazy() {
  let cascader!: Cascader;

  const timers: number[] = [];
  const cascaderOptions = [
    { value: "europe", label: "Europe" },
    { value: "asia", label: "Asia" },
  ];
  const cascaderLoadData = (selectedOptions) => {
    const target = selectedOptions[selectedOptions.length - 1];
    target.loading = true;
    cascader.options = [...cascader.options];
    timers.push(
      window.setTimeout(() => {
        target.loading = false;
        const last = selectedOptions.length >= 2;
        target.children = [1, 2, 3].map((n) => ({
          value: \`\${target.value}-\${n}\`,
          label: \`\${target.label} \${n}\`,
          isLeaf: last,
        }));
        cascader.options = [...cascader.options];
      }, 800),
    );
  };

  onCleanup(() => {
    timers.forEach((id) => clearTimeout(id));
  });

  return (
    <minerva-cascader
      id="lazy"
      label="Location"
      ref={cascader}
      prop:options={cascaderOptions}
      prop:loadData={cascaderLoadData}
    ></minerva-cascader>
  );
}
`,html:`<minerva-cascader id="lazy" label="Location"></minerva-cascader>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // loadData is called when an option without children (and not isLeaf) is
  // activated: set \`loading\`, add the children, then reassign \`options\`.
  const cascader = document.querySelector("#lazy");
  const timers = [];
  cascader.options = [
    { value: "europe", label: "Europe" },
    { value: "asia", label: "Asia" },
  ];
  cascader.loadData = (selectedOptions) => {
    const target = selectedOptions[selectedOptions.length - 1];
    target.loading = true;
    cascader.options = [...cascader.options];
    timers.push(
      window.setTimeout(() => {
        target.loading = false;
        const last = selectedOptions.length >= 2;
        target.children = [1, 2, 3].map((n) => ({
          value: \`\${target.value}-\${n}\`,
          label: \`\${target.label} \${n}\`,
          isLeaf: last,
        }));
        cascader.options = [...cascader.options];
      }, 800),
    );
  };
<\/script>
`}})))()}n();export{t as default};