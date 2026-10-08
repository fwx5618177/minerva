import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MenuItems.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The \`items\` property takes the React library's MenuEntry shape instead of child
// elements (handy for data-driven menus).

type Change = CustomEvent<{ value: string; checked?: boolean }>;
type Select = CustomEvent<{ value: string }>;
type Menu = HTMLElement & { items: unknown[] };

const resultText = ref("");

const menuItems = [
  {
    type: "radio-group",
    key: "sort",
    label: "Sort by",
    defaultValue: "date",
    items: [
      { value: "name", label: "Name" },
      { value: "date", label: "Date modified" },
      { value: "size", label: "Size" },
    ],
  },
  { type: "separator", key: "sep" },
  { type: "checkbox", key: "desc", label: "Descending" },
  { key: "reset", label: "Reset", shortcut: "Esc" },
];
const onChange = (event: Event) => {
  const { value, checked } = (event as Change).detail;
  resultText.value =
    checked === undefined ? \`Sort: \${value}\` : \`Descending: \${checked}\`;
};
const onSelect = (event: Event) =>
  (resultText.value = \`Action: \${(event as Select).detail.value}\`);
<\/script>

<template>
  <minerva-menu
    id="data-menu"
    side="right"
    align="start"
    no-loop
    :items.prop="menuItems"
    @minerva-change="onChange"
    @minerva-select="onSelect"
  >
    <minerva-button slot="trigger" variant="outline">Sort by</minerva-button>
  </minerva-menu>
  <p id="data-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// menu-items.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// The \`items\` property takes the React library's MenuEntry shape instead of child
// elements (handy for data-driven menus).
type Change = CustomEvent<{ value: string; checked?: boolean }>;
type Select = CustomEvent<{ value: string }>;
type Menu = HTMLElement & { items: unknown[] };

@Component({
  selector: "app-menu-items",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-menu
      id="data-menu"
      side="right"
      align="start"
      no-loop
      [items]="menuItems"
      (minerva-change)="onChange($event)"
      (minerva-select)="onSelect($event)"
    >
      <minerva-button slot="trigger" variant="outline">Sort by</minerva-button>
    </minerva-menu>
    <p id="data-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class MenuItemsComponent {
  resultText = "";

  menuItems = [
    {
      type: "radio-group",
      key: "sort",
      label: "Sort by",
      defaultValue: "date",
      items: [
        { value: "name", label: "Name" },
        { value: "date", label: "Date modified" },
        { value: "size", label: "Size" },
      ],
    },
    { type: "separator", key: "sep" },
    { type: "checkbox", key: "desc", label: "Descending" },
    { key: "reset", label: "Reset", shortcut: "Esc" },
  ];
  onChange = (event: Event) => {
    const { value, checked } = (event as Change).detail;
    this.resultText =
      checked === undefined ? \`Sort: \${value}\` : \`Descending: \${checked}\`;
  };
  onSelect = (event: Event) =>
    (this.resultText = \`Action: \${(event as Select).detail.value}\`);
}
`,svelte:`<!-- MenuItems.svelte -->

<script lang="ts">
  // The \`items\` property takes the React library's MenuEntry shape instead of child
  // elements (handy for data-driven menus).

  type Change = CustomEvent<{ value: string; checked?: boolean }>;
  type Select = CustomEvent<{ value: string }>;
  type Menu = HTMLElement & { items: unknown[] };

  let resultText = $state("");

  const menuItems = [
    {
      type: "radio-group",
      key: "sort",
      label: "Sort by",
      defaultValue: "date",
      items: [
        { value: "name", label: "Name" },
        { value: "date", label: "Date modified" },
        { value: "size", label: "Size" },
      ],
    },
    { type: "separator", key: "sep" },
    { type: "checkbox", key: "desc", label: "Descending" },
    { key: "reset", label: "Reset", shortcut: "Esc" },
  ];
  const onChange = (event: Event) => {
    const { value, checked } = (event as Change).detail;
    resultText =
      checked === undefined ? \`Sort: \${value}\` : \`Descending: \${checked}\`;
  };
  const onSelect = (event: Event) =>
    (resultText = \`Action: \${(event as Select).detail.value}\`);
<\/script>

<minerva-menu
  id="data-menu"
  side="right"
  align="start"
  no-loop
  items={menuItems}
  onminerva-change={onChange}
  onminerva-select={onSelect}
>
  <minerva-button slot="trigger" variant="outline">Sort by</minerva-button>
</minerva-menu>
<p id="data-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// MenuItems.tsx

import { createSignal } from "solid-js";

// The \`items\` property takes the React library's MenuEntry shape instead of child
// elements (handy for data-driven menus).
type Change = CustomEvent<{ value: string; checked?: boolean }>;
type Select = CustomEvent<{ value: string }>;
type Menu = HTMLElement & { items: unknown[] };

export default function MenuItems() {
  const [resultText, setResultText] = createSignal("");

  const menuItems = [
    {
      type: "radio-group",
      key: "sort",
      label: "Sort by",
      defaultValue: "date",
      items: [
        { value: "name", label: "Name" },
        { value: "date", label: "Date modified" },
        { value: "size", label: "Size" },
      ],
    },
    { type: "separator", key: "sep" },
    { type: "checkbox", key: "desc", label: "Descending" },
    { key: "reset", label: "Reset", shortcut: "Esc" },
  ];
  const onChange = (event: Event) => {
    const { value, checked } = (event as Change).detail;
    setResultText(
      checked === undefined ? \`Sort: \${value}\` : \`Descending: \${checked}\`,
    );
  };
  const onSelect = (event: Event) =>
    setResultText(\`Action: \${(event as Select).detail.value}\`);

  return (
    <>
      <minerva-menu
        id="data-menu"
        side="right"
        align="start"
        no-loop
        prop:items={menuItems}
        on:minerva-change={onChange}
        on:minerva-select={onSelect}
      >
        <minerva-button slot="trigger" variant="outline">
          Sort by
        </minerva-button>
      </minerva-menu>
      <p id="data-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-menu id="data-menu" side="right" align="start" no-loop>
  <minerva-button slot="trigger" variant="outline">Sort by</minerva-button>
</minerva-menu>
<p id="data-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The \`items\` property takes the React library's MenuEntry shape instead of child
  // elements (handy for data-driven menus).
  const menu = document.querySelector("#data-menu");
  const result = document.querySelector("#data-result");
  menu.items = [
    {
      type: "radio-group",
      key: "sort",
      label: "Sort by",
      defaultValue: "date",
      items: [
        { value: "name", label: "Name" },
        { value: "date", label: "Date modified" },
        { value: "size", label: "Size" },
      ],
    },
    { type: "separator", key: "sep" },
    { type: "checkbox", key: "desc", label: "Descending" },
    { key: "reset", label: "Reset", shortcut: "Esc" },
  ];
  const onChange = (event) => {
    const { value, checked } = event.detail;
    result.textContent =
      checked === undefined ? \`Sort: \${value}\` : \`Descending: \${checked}\`;
  };
  const onSelect = (event) =>
    (result.textContent = \`Action: \${event.detail.value}\`);
  menu.addEventListener("minerva-change", onChange);
  menu.addEventListener("minerva-select", onSelect);
<\/script>
`}})))()}n();export{t as default};