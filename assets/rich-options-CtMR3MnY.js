import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AutoCompleteRichOptions.vue -->

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Basic mode renders each option's icon, label and description; highlight
// marks recommended options, disabled ones are skipped by the keyboard.
// groupBy puts options under headings; auto-highlight makes the first
// enabled option active, so Enter picks it right away.

type Option = {
  label: string;
  value: string;
  icon?: string;
  description?: string;
  highlight?: boolean;
  disabled?: boolean;
  group?: string;
};
type Autocomplete = HTMLElement & {
  options: Option[];
  groupBy?: (option: Option) => string;
};

const OPTIONS: Option[] = [
  {
    label: "React",
    value: "react",
    icon: "⚛️",
    group: "UI libraries",
    description: "Component-based UI library",
    highlight: true,
  },
  {
    label: "Vue",
    value: "vue",
    icon: "🟩",
    group: "UI libraries",
    description: "Progressive framework",
  },
  {
    label: "Lit",
    value: "lit",
    icon: "🔥",
    group: "UI libraries",
    description: "Web Components base class",
  },
  {
    label: "Next.js",
    value: "next",
    icon: "▲",
    group: "Meta-frameworks",
    description: "React framework",
  },
  {
    label: "Nuxt",
    value: "nuxt",
    icon: "⛰️",
    group: "Meta-frameworks",
    description: "Vue framework",
  },
  {
    label: "Gatsby",
    value: "gatsby",
    icon: "🟣",
    group: "Meta-frameworks",
    description: "Deprecated in this project",
    disabled: true,
  },
];

const root = ref<HTMLElement>();

onMounted(() => {
  root
    .value!.querySelectorAll<Autocomplete>("minerva-autocomplete")
    .forEach((el) => {
      el.options = OPTIONS;
      el.groupBy = (option) => option.group ?? "";
    });
});
<\/script>

<template>
  <div ref="root">
    <div style="display: grid; gap: 12px; max-width: 360px">
      <minerva-autocomplete
        id="framework"
        label="Framework"
        placeholder="Search a framework"
        auto-highlight
      ></minerva-autocomplete>
      <minerva-autocomplete
        id="framework-filled"
        aria-label="Framework (filled, small)"
        placeholder="Filled, small"
        variant="filled"
        size="small"
      ></minerva-autocomplete>
    </div>
  </div>
</template>
`,angular:`// auto-complete-rich-options.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
} from "@angular/core";

// Basic mode renders each option's icon, label and description; highlight
// marks recommended options, disabled ones are skipped by the keyboard.
// groupBy puts options under headings; auto-highlight makes the first
// enabled option active, so Enter picks it right away.
type Option = {
  label: string;
  value: string;
  icon?: string;
  description?: string;
  highlight?: boolean;
  disabled?: boolean;
  group?: string;
};
type Autocomplete = HTMLElement & {
  options: Option[];
  groupBy?: (option: Option) => string;
};

const OPTIONS: Option[] = [
  {
    label: "React",
    value: "react",
    icon: "⚛️",
    group: "UI libraries",
    description: "Component-based UI library",
    highlight: true,
  },
  {
    label: "Vue",
    value: "vue",
    icon: "🟩",
    group: "UI libraries",
    description: "Progressive framework",
  },
  {
    label: "Lit",
    value: "lit",
    icon: "🔥",
    group: "UI libraries",
    description: "Web Components base class",
  },
  {
    label: "Next.js",
    value: "next",
    icon: "▲",
    group: "Meta-frameworks",
    description: "React framework",
  },
  {
    label: "Nuxt",
    value: "nuxt",
    icon: "⛰️",
    group: "Meta-frameworks",
    description: "Vue framework",
  },
  {
    label: "Gatsby",
    value: "gatsby",
    icon: "🟣",
    group: "Meta-frameworks",
    description: "Deprecated in this project",
    disabled: true,
  },
];

@Component({
  selector: "app-auto-complete-rich-options",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div #root>
      <div style="display: grid; gap: 12px; max-width: 360px">
        <minerva-autocomplete
          id="framework"
          label="Framework"
          placeholder="Search a framework"
          auto-highlight
        ></minerva-autocomplete>
        <minerva-autocomplete
          id="framework-filled"
          aria-label="Framework (filled, small)"
          placeholder="Filled, small"
          variant="filled"
          size="small"
        ></minerva-autocomplete>
      </div>
    </div>
  \`,
})
export class AutoCompleteRichOptionsComponent implements AfterViewInit {
  @ViewChild("root") root!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.root.nativeElement
      .querySelectorAll<Autocomplete>("minerva-autocomplete")
      .forEach((el) => {
        el.options = OPTIONS;
        el.groupBy = (option) => option.group ?? "";
      });
  }
}
`,svelte:`<!-- AutoCompleteRichOptions.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // Basic mode renders each option's icon, label and description; highlight
  // marks recommended options, disabled ones are skipped by the keyboard.
  // groupBy puts options under headings; auto-highlight makes the first
  // enabled option active, so Enter picks it right away.

  type Option = {
    label: string;
    value: string;
    icon?: string;
    description?: string;
    highlight?: boolean;
    disabled?: boolean;
    group?: string;
  };
  type Autocomplete = HTMLElement & {
    options: Option[];
    groupBy?: (option: Option) => string;
  };

  const OPTIONS: Option[] = [
    {
      label: "React",
      value: "react",
      icon: "⚛️",
      group: "UI libraries",
      description: "Component-based UI library",
      highlight: true,
    },
    {
      label: "Vue",
      value: "vue",
      icon: "🟩",
      group: "UI libraries",
      description: "Progressive framework",
    },
    {
      label: "Lit",
      value: "lit",
      icon: "🔥",
      group: "UI libraries",
      description: "Web Components base class",
    },
    {
      label: "Next.js",
      value: "next",
      icon: "▲",
      group: "Meta-frameworks",
      description: "React framework",
    },
    {
      label: "Nuxt",
      value: "nuxt",
      icon: "⛰️",
      group: "Meta-frameworks",
      description: "Vue framework",
    },
    {
      label: "Gatsby",
      value: "gatsby",
      icon: "🟣",
      group: "Meta-frameworks",
      description: "Deprecated in this project",
      disabled: true,
    },
  ];

  let root: HTMLElement;

  onMount(() => {
    root.querySelectorAll<Autocomplete>("minerva-autocomplete").forEach((el) => {
      el.options = OPTIONS;
      el.groupBy = (option) => option.group ?? "";
    });
  });
<\/script>

<div
  bind:this={root}
>
  <div style="display: grid; gap: 12px; max-width: 360px">
    <minerva-autocomplete
      id="framework"
      label="Framework"
      placeholder="Search a framework"
      auto-highlight
    ></minerva-autocomplete>
    <minerva-autocomplete
      id="framework-filled"
      aria-label="Framework (filled, small)"
      placeholder="Filled, small"
      variant="filled"
      size="small"
    ></minerva-autocomplete>
  </div>
</div>
`,solid:`// AutoCompleteRichOptions.tsx

import { onMount } from "solid-js";

// Basic mode renders each option's icon, label and description; highlight
// marks recommended options, disabled ones are skipped by the keyboard.
// groupBy puts options under headings; auto-highlight makes the first
// enabled option active, so Enter picks it right away.
type Option = {
  label: string;
  value: string;
  icon?: string;
  description?: string;
  highlight?: boolean;
  disabled?: boolean;
  group?: string;
};
type Autocomplete = HTMLElement & {
  options: Option[];
  groupBy?: (option: Option) => string;
};

const OPTIONS: Option[] = [
  {
    label: "React",
    value: "react",
    icon: "⚛️",
    group: "UI libraries",
    description: "Component-based UI library",
    highlight: true,
  },
  {
    label: "Vue",
    value: "vue",
    icon: "🟩",
    group: "UI libraries",
    description: "Progressive framework",
  },
  {
    label: "Lit",
    value: "lit",
    icon: "🔥",
    group: "UI libraries",
    description: "Web Components base class",
  },
  {
    label: "Next.js",
    value: "next",
    icon: "▲",
    group: "Meta-frameworks",
    description: "React framework",
  },
  {
    label: "Nuxt",
    value: "nuxt",
    icon: "⛰️",
    group: "Meta-frameworks",
    description: "Vue framework",
  },
  {
    label: "Gatsby",
    value: "gatsby",
    icon: "🟣",
    group: "Meta-frameworks",
    description: "Deprecated in this project",
    disabled: true,
  },
];

export default function AutoCompleteRichOptions() {
  let root!: HTMLElement;

  onMount(() => {
    root
      .querySelectorAll<Autocomplete>("minerva-autocomplete")
      .forEach((el) => {
        el.options = OPTIONS;
        el.groupBy = (option) => option.group ?? "";
      });
  });

  return (
    <div ref={root}>
      <div style="display: grid; gap: 12px; max-width: 360px">
        <minerva-autocomplete
          id="framework"
          label="Framework"
          placeholder="Search a framework"
          auto-highlight
        ></minerva-autocomplete>
        <minerva-autocomplete
          id="framework-filled"
          aria-label="Framework (filled, small)"
          placeholder="Filled, small"
          variant="filled"
          size="small"
        ></minerva-autocomplete>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 360px">
  <minerva-autocomplete
    id="framework"
    label="Framework"
    placeholder="Search a framework"
    auto-highlight
  ></minerva-autocomplete>
  <minerva-autocomplete
    id="framework-filled"
    aria-label="Framework (filled, small)"
    placeholder="Filled, small"
    variant="filled"
    size="small"
  ></minerva-autocomplete>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Basic mode renders each option's icon, label and description; highlight
  // marks recommended options, disabled ones are skipped by the keyboard.
  // groupBy puts options under headings; auto-highlight makes the first
  // enabled option active, so Enter picks it right away.
  const OPTIONS = [
    {
      label: "React",
      value: "react",
      icon: "⚛️",
      group: "UI libraries",
      description: "Component-based UI library",
      highlight: true,
    },
    {
      label: "Vue",
      value: "vue",
      icon: "🟩",
      group: "UI libraries",
      description: "Progressive framework",
    },
    {
      label: "Lit",
      value: "lit",
      icon: "🔥",
      group: "UI libraries",
      description: "Web Components base class",
    },
    {
      label: "Next.js",
      value: "next",
      icon: "▲",
      group: "Meta-frameworks",
      description: "React framework",
    },
    {
      label: "Nuxt",
      value: "nuxt",
      icon: "⛰️",
      group: "Meta-frameworks",
      description: "Vue framework",
    },
    {
      label: "Gatsby",
      value: "gatsby",
      icon: "🟣",
      group: "Meta-frameworks",
      description: "Deprecated in this project",
      disabled: true,
    },
  ];

  document.querySelectorAll("minerva-autocomplete").forEach((el) => {
    el.options = OPTIONS;
    el.groupBy = (option) => option.group ?? "";
  });
<\/script>
`}})))()}n();export{t as default};