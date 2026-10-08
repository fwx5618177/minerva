import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CommandCustomFilter.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`filter\` (JS property) receives the enabled items and the trimmed query and
// returns the results in display order: here, ranked by match quality.

type CommandItem = {
  id: string;
  title: string;
  description?: string;
  group?: string;
  keywords?: string;
};
type CommandDialog = HTMLElement & {
  items: CommandItem[];
  filter: (items: CommandItem[], query: string) => CommandItem[];
  show(): void;
};
type Select = CustomEvent<{ value: string; item: CommandItem }>;

const rank = (item: CommandItem, query: string) => {
  const title = item.title.toLowerCase();
  if (title.startsWith(query)) return 0;
  if (title.split(" ").some((word) => word.startsWith(query))) return 1;
  return 2;
};

const palette = ref<CommandDialog>();
const resultText = ref("");

const paletteItems = [
  { id: "billing", title: "Billing history", keywords: "invoice" },
  { id: "invoices", title: "Invoices", group: "Billing" },
  { id: "new-invoice", title: "New invoice", keywords: "create" },
  { id: "tax", title: "Tax settings", description: "Invoice numbering" },
];
const paletteFilter = (items, raw) => {
  const query = raw.toLowerCase();
  return items
    .filter((item) =>
      [item.title, item.description, item.group, item.keywords]
        .join(" ")
        .toLowerCase()
        .includes(query),
    )
    .sort((a, b) => rank(a, query) - rank(b, query));
};
const onOpen = () => palette.value!.show();
const onSelect = (event: Event) => {
  resultText.value = \`Ran "\${(event as Select).detail.item.title}"\`;
};
<\/script>

<template>
  <minerva-button id="open-ranked" variant="outline" @click="onOpen"
    >Search “invoice”…</minerva-button
  >
  <minerva-command-dialog
    id="ranked"
    ref="palette"
    :items.prop="paletteItems"
    :filter.prop="paletteFilter"
    @minerva-select="onSelect"
  ></minerva-command-dialog>
  <p id="ranked-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// command-custom-filter.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// \`filter\` (JS property) receives the enabled items and the trimmed query and
// returns the results in display order: here, ranked by match quality.
type CommandItem = {
  id: string;
  title: string;
  description?: string;
  group?: string;
  keywords?: string;
};
type CommandDialog = HTMLElement & {
  items: CommandItem[];
  filter: (items: CommandItem[], query: string) => CommandItem[];
  show(): void;
};
type Select = CustomEvent<{ value: string; item: CommandItem }>;

const rank = (item: CommandItem, query: string) => {
  const title = item.title.toLowerCase();
  if (title.startsWith(query)) return 0;
  if (title.split(" ").some((word) => word.startsWith(query))) return 1;
  return 2;
};

@Component({
  selector: "app-command-custom-filter",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-button id="open-ranked" variant="outline" (click)="onOpen($event)"
      >Search “invoice”…</minerva-button
    >
    <minerva-command-dialog
      id="ranked"
      #palette
      [items]="paletteItems"
      [filter]="paletteFilter"
      (minerva-select)="onSelect($event)"
    ></minerva-command-dialog>
    <p id="ranked-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class CommandCustomFilterComponent {
  @ViewChild("palette") palette!: ElementRef<CommandDialog>;
  resultText = "";

  paletteItems = [
    { id: "billing", title: "Billing history", keywords: "invoice" },
    { id: "invoices", title: "Invoices", group: "Billing" },
    { id: "new-invoice", title: "New invoice", keywords: "create" },
    { id: "tax", title: "Tax settings", description: "Invoice numbering" },
  ];
  paletteFilter = (items, raw) => {
    const query = raw.toLowerCase();
    return items
      .filter((item) =>
        [item.title, item.description, item.group, item.keywords]
          .join(" ")
          .toLowerCase()
          .includes(query),
      )
      .sort((a, b) => rank(a, query) - rank(b, query));
  };
  onOpen = () => this.palette.nativeElement.show();
  onSelect = (event: Event) => {
    this.resultText = \`Ran "\${(event as Select).detail.item.title}"\`;
  };
}
`,svelte:`<!-- CommandCustomFilter.svelte -->

<script lang="ts">
  // \`filter\` (JS property) receives the enabled items and the trimmed query and
  // returns the results in display order: here, ranked by match quality.

  type CommandItem = {
    id: string;
    title: string;
    description?: string;
    group?: string;
    keywords?: string;
  };
  type CommandDialog = HTMLElement & {
    items: CommandItem[];
    filter: (items: CommandItem[], query: string) => CommandItem[];
    show(): void;
  };
  type Select = CustomEvent<{ value: string; item: CommandItem }>;

  const rank = (item: CommandItem, query: string) => {
    const title = item.title.toLowerCase();
    if (title.startsWith(query)) return 0;
    if (title.split(" ").some((word) => word.startsWith(query))) return 1;
    return 2;
  };

  let palette: CommandDialog;
  let resultText = $state("");

  const paletteItems = [
    { id: "billing", title: "Billing history", keywords: "invoice" },
    { id: "invoices", title: "Invoices", group: "Billing" },
    { id: "new-invoice", title: "New invoice", keywords: "create" },
    { id: "tax", title: "Tax settings", description: "Invoice numbering" },
  ];
  const paletteFilter = (items, raw) => {
    const query = raw.toLowerCase();
    return items
      .filter((item) =>
        [item.title, item.description, item.group, item.keywords]
          .join(" ")
          .toLowerCase()
          .includes(query),
      )
      .sort((a, b) => rank(a, query) - rank(b, query));
  };
  const onOpen = () => palette.show();
  const onSelect = (event: Event) => {
    resultText = \`Ran "\${(event as Select).detail.item.title}"\`;
  };
<\/script>

<minerva-button
  id="open-ranked"
  variant="outline"
  onclick={onOpen}
>Search “invoice”…</minerva-button>
<minerva-command-dialog
  id="ranked"
  bind:this={palette}
  items={paletteItems}
  filter={paletteFilter}
  onminerva-select={onSelect}
></minerva-command-dialog>
<p id="ranked-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// CommandCustomFilter.tsx

import { createSignal } from "solid-js";

// \`filter\` (JS property) receives the enabled items and the trimmed query and
// returns the results in display order: here, ranked by match quality.
type CommandItem = {
  id: string;
  title: string;
  description?: string;
  group?: string;
  keywords?: string;
};
type CommandDialog = HTMLElement & {
  items: CommandItem[];
  filter: (items: CommandItem[], query: string) => CommandItem[];
  show(): void;
};
type Select = CustomEvent<{ value: string; item: CommandItem }>;

const rank = (item: CommandItem, query: string) => {
  const title = item.title.toLowerCase();
  if (title.startsWith(query)) return 0;
  if (title.split(" ").some((word) => word.startsWith(query))) return 1;
  return 2;
};

export default function CommandCustomFilter() {
  let palette!: CommandDialog;
  const [resultText, setResultText] = createSignal("");

  const paletteItems = [
    { id: "billing", title: "Billing history", keywords: "invoice" },
    { id: "invoices", title: "Invoices", group: "Billing" },
    { id: "new-invoice", title: "New invoice", keywords: "create" },
    { id: "tax", title: "Tax settings", description: "Invoice numbering" },
  ];
  const paletteFilter = (items, raw) => {
    const query = raw.toLowerCase();
    return items
      .filter((item) =>
        [item.title, item.description, item.group, item.keywords]
          .join(" ")
          .toLowerCase()
          .includes(query),
      )
      .sort((a, b) => rank(a, query) - rank(b, query));
  };
  const onOpen = () => palette.show();
  const onSelect = (event: Event) => {
    setResultText(\`Ran "\${(event as Select).detail.item.title}"\`);
  };

  return (
    <>
      <minerva-button id="open-ranked" variant="outline" on:click={onOpen}>
        Search “invoice”…
      </minerva-button>
      <minerva-command-dialog
        id="ranked"
        ref={palette}
        prop:items={paletteItems}
        prop:filter={paletteFilter}
        on:minerva-select={onSelect}
      ></minerva-command-dialog>
      <p id="ranked-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-button id="open-ranked" variant="outline"
  >Search “invoice”…</minerva-button
>
<minerva-command-dialog id="ranked"></minerva-command-dialog>
<p id="ranked-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`filter\` (JS property) receives the enabled items and the trimmed query and
  // returns the results in display order: here, ranked by match quality.
  const rank = (item, query) => {
    const title = item.title.toLowerCase();
    if (title.startsWith(query)) return 0;
    if (title.split(" ").some((word) => word.startsWith(query))) return 1;
    return 2;
  };

  const button = document.querySelector("#open-ranked");
  const palette = document.querySelector("#ranked");
  const result = document.querySelector("#ranked-result");
  palette.items = [
    { id: "billing", title: "Billing history", keywords: "invoice" },
    { id: "invoices", title: "Invoices", group: "Billing" },
    { id: "new-invoice", title: "New invoice", keywords: "create" },
    { id: "tax", title: "Tax settings", description: "Invoice numbering" },
  ];
  palette.filter = (items, raw) => {
    const query = raw.toLowerCase();
    return items
      .filter((item) =>
        [item.title, item.description, item.group, item.keywords]
          .join(" ")
          .toLowerCase()
          .includes(query),
      )
      .sort((a, b) => rank(a, query) - rank(b, query));
  };
  const onOpen = () => palette.show();
  const onSelect = (event) => {
    result.textContent = \`Ran "\${event.detail.item.title}"\`;
  };
  button.addEventListener("click", onOpen);
  palette.addEventListener("minerva-select", onSelect);
<\/script>
`}})))()}n();export{t as default};