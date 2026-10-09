import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- VirtualListClickableRows.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`clickable\` makes rows focusable and fires \`minerva-item-click\` on click,
// Enter or Space; scrollToIndex() scrolls programmatically.

type Item = { id: number };
type VirtualList = HTMLElement & {
  items: Item[];
  renderItem: (item: Item, index: number) => string;
  scrollToIndex: (index: number) => void;
};

const list = ref<VirtualList>();
const pickedText = ref("Click a row or press Enter on it");

const listItems = Array.from({ length: 1000 }, (_, i) => ({ id: i + 1 }));
const listRenderItem = (item) => \`Task \${item.id}\`;
const onItemClick = (event: Event) => {
  const { item, index } = (event as CustomEvent<{ item: Item; index: number }>)
    .detail;
  pickedText.value = \`Picked task \${item.id} (index \${index})\`;
};
const onJump = () => list.value!.scrollToIndex(499);
<\/script>

<template>
  <div style="display: grid; gap: 8px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-button id="jump" size="small" variant="outline" @click="onJump"
        >Scroll to row 500</minerva-button
      >
      <output id="picked">{{ pickedText }}</output>
    </div>
    <minerva-virtual-list
      id="list"
      aria-label="Tasks"
      clickable
      item-height="44"
      max-height="264"
      ref="list"
      :items.prop="listItems"
      :renderItem.prop="listRenderItem"
      @minerva-item-click="onItemClick"
    ></minerva-virtual-list>
  </div>
</template>
`,angular:`// virtual-list-clickable-rows.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// \`clickable\` makes rows focusable and fires \`minerva-item-click\` on click,
// Enter or Space; scrollToIndex() scrolls programmatically.
type Item = { id: number };
type VirtualList = HTMLElement & {
  items: Item[];
  renderItem: (item: Item, index: number) => string;
  scrollToIndex: (index: number) => void;
};

@Component({
  selector: "app-virtual-list-clickable-rows",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px">
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center"
      >
        <minerva-button
          id="jump"
          size="small"
          variant="outline"
          (click)="onJump($event)"
          >Scroll to row 500</minerva-button
        >
        <output id="picked">{{ pickedText }}</output>
      </div>
      <minerva-virtual-list
        id="list"
        aria-label="Tasks"
        clickable
        item-height="44"
        max-height="264"
        #list
        [items]="listItems"
        [renderItem]="listRenderItem"
        (minerva-item-click)="onItemClick($event)"
      ></minerva-virtual-list>
    </div>
  \`,
})
export class VirtualListClickableRowsComponent {
  @ViewChild("list") list!: ElementRef<VirtualList>;
  pickedText = "Click a row or press Enter on it";

  listItems = Array.from({ length: 1000 }, (_, i) => ({ id: i + 1 }));
  listRenderItem = (item) => \`Task \${item.id}\`;
  onItemClick = (event: Event) => {
    const { item, index } = (
      event as CustomEvent<{ item: Item; index: number }>
    ).detail;
    this.pickedText = \`Picked task \${item.id} (index \${index})\`;
  };
  onJump = () => this.list.nativeElement.scrollToIndex(499);
}
`,svelte:`<!-- VirtualListClickableRows.svelte -->

<script lang="ts">
  // \`clickable\` makes rows focusable and fires \`minerva-item-click\` on click,
  // Enter or Space; scrollToIndex() scrolls programmatically.

  type Item = { id: number };
  type VirtualList = HTMLElement & {
    items: Item[];
    renderItem: (item: Item, index: number) => string;
    scrollToIndex: (index: number) => void;
  };

  let list: VirtualList;
  let pickedText = $state("Click a row or press Enter on it");

  const listItems = Array.from({ length: 1000 }, (_, i) => ({ id: i + 1 }));
  const listRenderItem = (item) => \`Task \${item.id}\`;
  const onItemClick = (event: Event) => {
    const { item, index } = (event as CustomEvent<{ item: Item; index: number }>)
      .detail;
    pickedText = \`Picked task \${item.id} (index \${index})\`;
  };
  const onJump = () => list.scrollToIndex(499);
<\/script>

<div style="display: grid; gap: 8px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-button
      id="jump"
      size="small"
      variant="outline"
      onclick={onJump}
    >Scroll to row 500</minerva-button>
    <output id="picked">{pickedText}</output>
  </div>
  <minerva-virtual-list
    id="list"
    aria-label="Tasks"
    clickable
    item-height="44"
    max-height="264"
    bind:this={list}
    items={listItems}
    renderItem={listRenderItem}
    onminerva-item-click={onItemClick}
  ></minerva-virtual-list>
</div>
`,solid:`// VirtualListClickableRows.tsx

import { createSignal } from "solid-js";

// \`clickable\` makes rows focusable and fires \`minerva-item-click\` on click,
// Enter or Space; scrollToIndex() scrolls programmatically.
type Item = { id: number };
type VirtualList = HTMLElement & {
  items: Item[];
  renderItem: (item: Item, index: number) => string;
  scrollToIndex: (index: number) => void;
};

export default function VirtualListClickableRows() {
  let list!: VirtualList;
  const [pickedText, setPickedText] = createSignal(
    "Click a row or press Enter on it",
  );

  const listItems = Array.from({ length: 1000 }, (_, i) => ({ id: i + 1 }));
  const listRenderItem = (item) => \`Task \${item.id}\`;
  const onItemClick = (event: Event) => {
    const { item, index } = (
      event as CustomEvent<{ item: Item; index: number }>
    ).detail;
    setPickedText(\`Picked task \${item.id} (index \${index})\`);
  };
  const onJump = () => list.scrollToIndex(499);

  return (
    <div style="display: grid; gap: 8px">
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
        <minerva-button
          id="jump"
          size="small"
          variant="outline"
          on:click={onJump}
        >
          Scroll to row 500
        </minerva-button>
        <output id="picked">{pickedText()}</output>
      </div>
      <minerva-virtual-list
        id="list"
        aria-label="Tasks"
        clickable
        item-height="44"
        max-height="264"
        ref={list}
        prop:items={listItems}
        prop:renderItem={listRenderItem}
        on:minerva-item-click={onItemClick}
      ></minerva-virtual-list>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px">
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-button id="jump" size="small" variant="outline"
      >Scroll to row 500</minerva-button
    >
    <output id="picked">Click a row or press Enter on it</output>
  </div>
  <minerva-virtual-list
    id="list"
    aria-label="Tasks"
    clickable
    item-height="44"
    max-height="264"
  ></minerva-virtual-list>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`clickable\` makes rows focusable and fires \`minerva-item-click\` on click,
  // Enter or Space; scrollToIndex() scrolls programmatically.
  const list = document.querySelector("#list");
  const jump = document.querySelector("#jump");
  const picked = document.querySelector("#picked");
  list.items = Array.from({ length: 1000 }, (_, i) => ({ id: i + 1 }));
  list.renderItem = (item) => \`Task \${item.id}\`;
  const onItemClick = (event) => {
    const { item, index } = event.detail;
    picked.value = \`Picked task \${item.id} (index \${index})\`;
  };
  const onJump = () => list.scrollToIndex(499);
  list.addEventListener("minerva-item-click", onItemClick);
  jump.addEventListener("click", onJump);
<\/script>
`}})))()}n();export{t as default};