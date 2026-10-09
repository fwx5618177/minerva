import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CommandBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`items\` is a JS property (CommandItem[]); minerva-select gives the id.

type CommandItem = {
  id: string;
  title: string;
  description?: string;
  group?: string;
  keywords?: string;
  disabled?: boolean;
};
type CommandDialog = HTMLElement & { items: CommandItem[]; show(): void };
type Select = CustomEvent<{ value: string; item: CommandItem }>;

const palette = ref<CommandDialog>();
const resultText = ref("");

const paletteItems = [
  { id: "new-file", title: "New file", group: "File", keywords: "create" },
  { id: "open-recent", title: "Open recent", group: "File" },
  {
    id: "theme",
    title: "Toggle theme",
    description: "Switch between light and dark",
    group: "View",
    keywords: "dark light",
  },
  { id: "zoom", title: "Reset zoom", group: "View" },
  { id: "invite", title: "Invite member", group: "Team" },
  { id: "billing", title: "Billing", group: "Team", disabled: true },
];
const onOpen = () => palette.value!.show();
const onSelect = (event: Event) => {
  const { value, item } = (event as Select).detail;
  resultText.value = \`Ran "\${item.title}" (\${value})\`;
};
<\/script>

<template>
  <minerva-button id="open-palette" variant="outline" @click="onOpen"
    >Search commands…</minerva-button
  >
  <minerva-command-dialog
    id="palette"
    placeholder="Type a command or search…"
    empty-text="No matching command"
    ref="palette"
    :items.prop="paletteItems"
    @minerva-select="onSelect"
  ></minerva-command-dialog>
  <p id="palette-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// command-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// \`items\` is a JS property (CommandItem[]); minerva-select gives the id.
type CommandItem = {
  id: string;
  title: string;
  description?: string;
  group?: string;
  keywords?: string;
  disabled?: boolean;
};
type CommandDialog = HTMLElement & { items: CommandItem[]; show(): void };
type Select = CustomEvent<{ value: string; item: CommandItem }>;

@Component({
  selector: "app-command-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-button id="open-palette" variant="outline" (click)="onOpen($event)"
      >Search commands…</minerva-button
    >
    <minerva-command-dialog
      id="palette"
      placeholder="Type a command or search…"
      empty-text="No matching command"
      #palette
      [items]="paletteItems"
      (minerva-select)="onSelect($event)"
    ></minerva-command-dialog>
    <p id="palette-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class CommandBasicComponent {
  @ViewChild("palette") palette!: ElementRef<CommandDialog>;
  resultText = "";

  paletteItems = [
    { id: "new-file", title: "New file", group: "File", keywords: "create" },
    { id: "open-recent", title: "Open recent", group: "File" },
    {
      id: "theme",
      title: "Toggle theme",
      description: "Switch between light and dark",
      group: "View",
      keywords: "dark light",
    },
    { id: "zoom", title: "Reset zoom", group: "View" },
    { id: "invite", title: "Invite member", group: "Team" },
    { id: "billing", title: "Billing", group: "Team", disabled: true },
  ];
  onOpen = () => this.palette.nativeElement.show();
  onSelect = (event: Event) => {
    const { value, item } = (event as Select).detail;
    this.resultText = \`Ran "\${item.title}" (\${value})\`;
  };
}
`,svelte:`<!-- CommandBasic.svelte -->

<script lang="ts">
  // \`items\` is a JS property (CommandItem[]); minerva-select gives the id.

  type CommandItem = {
    id: string;
    title: string;
    description?: string;
    group?: string;
    keywords?: string;
    disabled?: boolean;
  };
  type CommandDialog = HTMLElement & { items: CommandItem[]; show(): void };
  type Select = CustomEvent<{ value: string; item: CommandItem }>;

  let palette: CommandDialog;
  let resultText = $state("");

  const paletteItems = [
    { id: "new-file", title: "New file", group: "File", keywords: "create" },
    { id: "open-recent", title: "Open recent", group: "File" },
    {
      id: "theme",
      title: "Toggle theme",
      description: "Switch between light and dark",
      group: "View",
      keywords: "dark light",
    },
    { id: "zoom", title: "Reset zoom", group: "View" },
    { id: "invite", title: "Invite member", group: "Team" },
    { id: "billing", title: "Billing", group: "Team", disabled: true },
  ];
  const onOpen = () => palette.show();
  const onSelect = (event: Event) => {
    const { value, item } = (event as Select).detail;
    resultText = \`Ran "\${item.title}" (\${value})\`;
  };
<\/script>

<minerva-button
  id="open-palette"
  variant="outline"
  onclick={onOpen}
>Search commands…</minerva-button>
<minerva-command-dialog
  id="palette"
  placeholder="Type a command or search…"
  empty-text="No matching command"
  bind:this={palette}
  items={paletteItems}
  onminerva-select={onSelect}
></minerva-command-dialog>
<p id="palette-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// CommandBasic.tsx

import { createSignal } from "solid-js";

// \`items\` is a JS property (CommandItem[]); minerva-select gives the id.
type CommandItem = {
  id: string;
  title: string;
  description?: string;
  group?: string;
  keywords?: string;
  disabled?: boolean;
};
type CommandDialog = HTMLElement & { items: CommandItem[]; show(): void };
type Select = CustomEvent<{ value: string; item: CommandItem }>;

export default function CommandBasic() {
  let palette!: CommandDialog;
  const [resultText, setResultText] = createSignal("");

  const paletteItems = [
    { id: "new-file", title: "New file", group: "File", keywords: "create" },
    { id: "open-recent", title: "Open recent", group: "File" },
    {
      id: "theme",
      title: "Toggle theme",
      description: "Switch between light and dark",
      group: "View",
      keywords: "dark light",
    },
    { id: "zoom", title: "Reset zoom", group: "View" },
    { id: "invite", title: "Invite member", group: "Team" },
    { id: "billing", title: "Billing", group: "Team", disabled: true },
  ];
  const onOpen = () => palette.show();
  const onSelect = (event: Event) => {
    const { value, item } = (event as Select).detail;
    setResultText(\`Ran "\${item.title}" (\${value})\`);
  };

  return (
    <>
      <minerva-button id="open-palette" variant="outline" on:click={onOpen}>
        Search commands…
      </minerva-button>
      <minerva-command-dialog
        id="palette"
        placeholder="Type a command or search…"
        empty-text="No matching command"
        ref={palette}
        prop:items={paletteItems}
        on:minerva-select={onSelect}
      ></minerva-command-dialog>
      <p id="palette-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-button id="open-palette" variant="outline"
  >Search commands…</minerva-button
>
<minerva-command-dialog
  id="palette"
  placeholder="Type a command or search…"
  empty-text="No matching command"
></minerva-command-dialog>
<p id="palette-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`items\` is a JS property (CommandItem[]); minerva-select gives the id.
  const button = document.querySelector("#open-palette");
  const palette = document.querySelector("#palette");
  const result = document.querySelector("#palette-result");
  palette.items = [
    { id: "new-file", title: "New file", group: "File", keywords: "create" },
    { id: "open-recent", title: "Open recent", group: "File" },
    {
      id: "theme",
      title: "Toggle theme",
      description: "Switch between light and dark",
      group: "View",
      keywords: "dark light",
    },
    { id: "zoom", title: "Reset zoom", group: "View" },
    { id: "invite", title: "Invite member", group: "Team" },
    { id: "billing", title: "Billing", group: "Team", disabled: true },
  ];
  const onOpen = () => palette.show();
  const onSelect = (event) => {
    const { value, item } = event.detail;
    result.textContent = \`Ran "\${item.title}" (\${value})\`;
  };
  button.addEventListener("click", onOpen);
  palette.addEventListener("minerva-select", onSelect);
<\/script>
`}})))()}n();export{t as default};