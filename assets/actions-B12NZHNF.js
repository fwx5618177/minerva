import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PageTabsActions.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The actions slot sits outside the scrolling list: here it adds a page.
// The action slot holds any separate control next to a label (a pin toggle).

const tabs = ref<HTMLElement & { activeValue?: string }>();
const add = ref<HTMLElement>();

let count = 2;
const onAdd = () => {
  count += 1;
  const tab = document.createElement("minerva-page-tab") as HTMLElement & {
    value: string;
    label: string;
    closable: boolean;
  };
  tab.value = \`q\${count}\`;
  tab.label = \`Query \${count}\`;
  tab.closable = true;
  tabs.value!.insertBefore(tab, add.value!);
  tabs.value!.activeValue = tab.value;
};
const onClose = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  (event.target as HTMLElement).remove();
  if (tabs.value!.activeValue === value) tabs.value!.activeValue = "q1";
};
<\/script>

<template>
  <minerva-page-tabs
    id="tabs"
    aria-label="Open queries"
    active-value="q1"
    ref="tabs"
    @minerva-close="onClose"
  >
    <minerva-page-tab value="q1" label="Query 1">
      <minerva-icon-button
        slot="action"
        size="small"
        toggle
        label="Pin Query 1"
        no-tooltip
        >★</minerva-icon-button
      >
    </minerva-page-tab>
    <minerva-page-tab value="q2" label="Query 2" closable></minerva-page-tab>
    <minerva-icon-button
      id="add"
      slot="actions"
      label="New query"
      ref="add"
      @click="onAdd"
      >+</minerva-icon-button
    >
  </minerva-page-tabs>
</template>
`,angular:`// page-tabs-actions.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The actions slot sits outside the scrolling list: here it adds a page.
// The action slot holds any separate control next to a label (a pin toggle).

@Component({
  selector: "app-page-tabs-actions",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-page-tabs
      id="tabs"
      aria-label="Open queries"
      active-value="q1"
      #tabs
      (minerva-close)="onClose($event)"
    >
      <minerva-page-tab value="q1" label="Query 1">
        <minerva-icon-button
          slot="action"
          size="small"
          toggle
          label="Pin Query 1"
          no-tooltip
          >★</minerva-icon-button
        >
      </minerva-page-tab>
      <minerva-page-tab value="q2" label="Query 2" closable></minerva-page-tab>
      <minerva-icon-button
        id="add"
        slot="actions"
        label="New query"
        #add
        (click)="onAdd($event)"
        >+</minerva-icon-button
      >
    </minerva-page-tabs>
  \`,
})
export class PageTabsActionsComponent {
  @ViewChild("tabs") tabs!: ElementRef<HTMLElement & { activeValue?: string }>;
  @ViewChild("add") add!: ElementRef<HTMLElement>;

  count = 2;
  onAdd = () => {
    this.count += 1;
    const tab = document.createElement("minerva-page-tab") as HTMLElement & {
      value: string;
      label: string;
      closable: boolean;
    };
    tab.value = \`q\${this.count}\`;
    tab.label = \`Query \${this.count}\`;
    tab.closable = true;
    this.tabs.nativeElement.insertBefore(tab, this.add.nativeElement);
    this.tabs.nativeElement.activeValue = tab.value;
  };
  onClose = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    (event.target as HTMLElement).remove();
    if (this.tabs.nativeElement.activeValue === value)
      this.tabs.nativeElement.activeValue = "q1";
  };
}
`,svelte:`<!-- PageTabsActions.svelte -->

<script lang="ts">
  // The actions slot sits outside the scrolling list: here it adds a page.
  // The action slot holds any separate control next to a label (a pin toggle).

  let tabs: HTMLElement & { activeValue?: string };
  let add: HTMLElement;

  let count = 2;
  const onAdd = () => {
    count += 1;
    const tab = document.createElement("minerva-page-tab") as HTMLElement & {
      value: string;
      label: string;
      closable: boolean;
    };
    tab.value = \`q\${count}\`;
    tab.label = \`Query \${count}\`;
    tab.closable = true;
    tabs.insertBefore(tab, add);
    tabs.activeValue = tab.value;
  };
  const onClose = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    (event.target as HTMLElement).remove();
    if (tabs.activeValue === value) tabs.activeValue = "q1";
  };
<\/script>

<minerva-page-tabs
  id="tabs"
  aria-label="Open queries"
  active-value="q1"
  bind:this={tabs}
  onminerva-close={onClose}
>
  <minerva-page-tab value="q1" label="Query 1">
    <minerva-icon-button
      slot="action"
      size="small"
      toggle
      label="Pin Query 1"
      no-tooltip
      >★</minerva-icon-button>
  </minerva-page-tab>
  <minerva-page-tab value="q2" label="Query 2" closable></minerva-page-tab>
  <minerva-icon-button
    id="add"
    slot="actions"
    label="New query"
    bind:this={add}
    onclick={onAdd}
  >+</minerva-icon-button>
</minerva-page-tabs>
`,solid:`// PageTabsActions.tsx

// The actions slot sits outside the scrolling list: here it adds a page.
// The action slot holds any separate control next to a label (a pin toggle).

export default function PageTabsActions() {
  let tabs!: HTMLElement & { activeValue?: string };
  let add!: HTMLElement;

  let count = 2;
  const onAdd = () => {
    count += 1;
    const tab = document.createElement("minerva-page-tab") as HTMLElement & {
      value: string;
      label: string;
      closable: boolean;
    };
    tab.value = \`q\${count}\`;
    tab.label = \`Query \${count}\`;
    tab.closable = true;
    tabs.insertBefore(tab, add);
    tabs.activeValue = tab.value;
  };
  const onClose = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    (event.target as HTMLElement).remove();
    if (tabs.activeValue === value) tabs.activeValue = "q1";
  };

  return (
    <minerva-page-tabs
      id="tabs"
      aria-label="Open queries"
      active-value="q1"
      ref={tabs}
      on:minerva-close={onClose}
    >
      <minerva-page-tab value="q1" label="Query 1">
        <minerva-icon-button
          slot="action"
          size="small"
          toggle
          label="Pin Query 1"
          no-tooltip
        >
          ★
        </minerva-icon-button>
      </minerva-page-tab>
      <minerva-page-tab value="q2" label="Query 2" closable></minerva-page-tab>
      <minerva-icon-button
        id="add"
        slot="actions"
        label="New query"
        ref={add}
        on:click={onAdd}
      >
        +
      </minerva-icon-button>
    </minerva-page-tabs>
  );
}
`,html:`<minerva-page-tabs id="tabs" aria-label="Open queries" active-value="q1">
  <minerva-page-tab value="q1" label="Query 1">
    <minerva-icon-button
      slot="action"
      size="small"
      toggle
      label="Pin Query 1"
      no-tooltip
      >★</minerva-icon-button
    >
  </minerva-page-tab>
  <minerva-page-tab value="q2" label="Query 2" closable></minerva-page-tab>
  <minerva-icon-button id="add" slot="actions" label="New query"
    >+</minerva-icon-button
  >
</minerva-page-tabs>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The actions slot sits outside the scrolling list: here it adds a page.
  // The action slot holds any separate control next to a label (a pin toggle).
  const tabs = document.querySelector("#tabs");
  const add = document.querySelector("#add");
  let count = 2;
  const onAdd = () => {
    count += 1;
    const tab = document.createElement("minerva-page-tab");
    tab.value = \`q\${count}\`;
    tab.label = \`Query \${count}\`;
    tab.closable = true;
    tabs.insertBefore(tab, add);
    tabs.activeValue = tab.value;
  };
  const onClose = (event) => {
    const { value } = event.detail;
    event.target.remove();
    if (tabs.activeValue === value) tabs.activeValue = "q1";
  };
  add.addEventListener("click", onAdd);
  tabs.addEventListener("minerva-close", onClose);
<\/script>
`}})))()}n();export{t as default};