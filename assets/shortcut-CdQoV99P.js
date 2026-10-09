import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CommandShortcut.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`shortcut\` registers global keys ("mod" = Ctrl, or ⌘ on macOS) while the
// element is connected; max-results caps the visible results.

type CommandItem = { id: string; title: string; group?: string };
type CommandDialog = HTMLElement & { items: CommandItem[] };
type Select = CustomEvent<{ value: string; item: CommandItem }>;
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

const pages = ["Button", "Modal", "Drawer", "Menu", "Popover", "Toast"];

const resultText = ref("");

const paletteItems = [
  ...pages.map((title) => ({
    id: title.toLowerCase(),
    title,
    group: "Components",
  })),
  { id: "install", title: "Installation", group: "Guides" },
  { id: "theming", title: "Theming", group: "Guides" },
];
const onChange = (event: Event) => {
  const { open, reason } = (event as OpenChange).detail;
  if (open) resultText.value = \`Opened by \${reason}\`;
};
const onSelect = (event: Event) =>
  (resultText.value = \`Go to \${(event as Select).detail.item.title}\`);
<\/script>

<template>
  <p style="margin: 0">
    Press <kbd>Ctrl</kbd> + <kbd>K</kbd> (<kbd>⌘</kbd> + <kbd>K</kbd> on macOS)
    or <kbd>/</kbd> anywhere on the page.
  </p>
  <minerva-command-dialog
    id="go-to"
    shortcut="mod+k, /"
    label="Go to page"
    description="Jump to any page of the documentation."
    max-results="5"
    :items.prop="paletteItems"
    @minerva-open-change="onChange"
    @minerva-select="onSelect"
  ></minerva-command-dialog>
  <p id="go-to-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// command-shortcut.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// \`shortcut\` registers global keys ("mod" = Ctrl, or ⌘ on macOS) while the
// element is connected; max-results caps the visible results.
type CommandItem = { id: string; title: string; group?: string };
type CommandDialog = HTMLElement & { items: CommandItem[] };
type Select = CustomEvent<{ value: string; item: CommandItem }>;
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

const pages = ["Button", "Modal", "Drawer", "Menu", "Popover", "Toast"];

@Component({
  selector: "app-command-shortcut",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <p style="margin: 0">
      Press <kbd>Ctrl</kbd> + <kbd>K</kbd> (<kbd>⌘</kbd> + <kbd>K</kbd> on
      macOS) or <kbd>/</kbd> anywhere on the page.
    </p>
    <minerva-command-dialog
      id="go-to"
      shortcut="mod+k, /"
      label="Go to page"
      description="Jump to any page of the documentation."
      max-results="5"
      [items]="paletteItems"
      (minerva-open-change)="onChange($event)"
      (minerva-select)="onSelect($event)"
    ></minerva-command-dialog>
    <p id="go-to-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class CommandShortcutComponent {
  resultText = "";

  paletteItems = [
    ...pages.map((title) => ({
      id: title.toLowerCase(),
      title,
      group: "Components",
    })),
    { id: "install", title: "Installation", group: "Guides" },
    { id: "theming", title: "Theming", group: "Guides" },
  ];
  onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    if (open) this.resultText = \`Opened by \${reason}\`;
  };
  onSelect = (event: Event) =>
    (this.resultText = \`Go to \${(event as Select).detail.item.title}\`);
}
`,svelte:`<!-- CommandShortcut.svelte -->

<script lang="ts">
  // \`shortcut\` registers global keys ("mod" = Ctrl, or ⌘ on macOS) while the
  // element is connected; max-results caps the visible results.

  type CommandItem = { id: string; title: string; group?: string };
  type CommandDialog = HTMLElement & { items: CommandItem[] };
  type Select = CustomEvent<{ value: string; item: CommandItem }>;
  type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

  const pages = ["Button", "Modal", "Drawer", "Menu", "Popover", "Toast"];

  let resultText = $state("");

  const paletteItems = [
    ...pages.map((title) => ({
      id: title.toLowerCase(),
      title,
      group: "Components",
    })),
    { id: "install", title: "Installation", group: "Guides" },
    { id: "theming", title: "Theming", group: "Guides" },
  ];
  const onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    if (open) resultText = \`Opened by \${reason}\`;
  };
  const onSelect = (event: Event) =>
    (resultText = \`Go to \${(event as Select).detail.item.title}\`);
<\/script>

<p style="margin: 0">
  Press <kbd>Ctrl</kbd> + <kbd>K</kbd> (<kbd>⌘</kbd> + <kbd>K</kbd> on macOS) or
  <kbd>/</kbd> anywhere on the page.
</p>
<minerva-command-dialog
  id="go-to"
  shortcut="mod+k, /"
  label="Go to page"
  description="Jump to any page of the documentation."
  max-results="5"
  items={paletteItems}
  onminerva-open-change={onChange}
  onminerva-select={onSelect}
></minerva-command-dialog>
<p id="go-to-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// CommandShortcut.tsx

import { createSignal } from "solid-js";

// \`shortcut\` registers global keys ("mod" = Ctrl, or ⌘ on macOS) while the
// element is connected; max-results caps the visible results.
type CommandItem = { id: string; title: string; group?: string };
type CommandDialog = HTMLElement & { items: CommandItem[] };
type Select = CustomEvent<{ value: string; item: CommandItem }>;
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

const pages = ["Button", "Modal", "Drawer", "Menu", "Popover", "Toast"];

export default function CommandShortcut() {
  const [resultText, setResultText] = createSignal("");

  const paletteItems = [
    ...pages.map((title) => ({
      id: title.toLowerCase(),
      title,
      group: "Components",
    })),
    { id: "install", title: "Installation", group: "Guides" },
    { id: "theming", title: "Theming", group: "Guides" },
  ];
  const onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    if (open) setResultText(\`Opened by \${reason}\`);
  };
  const onSelect = (event: Event) =>
    setResultText(\`Go to \${(event as Select).detail.item.title}\`);

  return (
    <>
      <p style="margin: 0">
        Press <kbd>Ctrl</kbd> + <kbd>K</kbd> (<kbd>⌘</kbd> + <kbd>K</kbd> on
        macOS) or
        <kbd>/</kbd> anywhere on the page.
      </p>
      <minerva-command-dialog
        id="go-to"
        shortcut="mod+k, /"
        label="Go to page"
        description="Jump to any page of the documentation."
        max-results="5"
        prop:items={paletteItems}
        on:minerva-open-change={onChange}
        on:minerva-select={onSelect}
      ></minerva-command-dialog>
      <p id="go-to-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<p style="margin: 0">
  Press <kbd>Ctrl</kbd> + <kbd>K</kbd> (<kbd>⌘</kbd> + <kbd>K</kbd> on macOS) or
  <kbd>/</kbd> anywhere on the page.
</p>
<minerva-command-dialog
  id="go-to"
  shortcut="mod+k, /"
  label="Go to page"
  description="Jump to any page of the documentation."
  max-results="5"
></minerva-command-dialog>
<p id="go-to-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`shortcut\` registers global keys ("mod" = Ctrl, or ⌘ on macOS) while the
  // element is connected; max-results caps the visible results.
  const pages = ["Button", "Modal", "Drawer", "Menu", "Popover", "Toast"];

  const palette = document.querySelector("#go-to");
  const result = document.querySelector("#go-to-result");
  palette.items = [
    ...pages.map((title) => ({
      id: title.toLowerCase(),
      title,
      group: "Components",
    })),
    { id: "install", title: "Installation", group: "Guides" },
    { id: "theming", title: "Theming", group: "Guides" },
  ];
  const onChange = (event) => {
    const { open, reason } = event.detail;
    if (open) result.textContent = \`Opened by \${reason}\`;
  };
  const onSelect = (event) =>
    (result.textContent = \`Go to \${event.detail.item.title}\`);
  palette.addEventListener("minerva-open-change", onChange);
  palette.addEventListener("minerva-select", onSelect);
<\/script>
`}})))()}n();export{t as default};