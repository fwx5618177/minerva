import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TagClosable.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The close button fires \`minerva-close\`: remove (here: hide) the tag in the
// listener, and move focus to a neighbour so it is not lost.

const tags = ref<HTMLElement>();
const restore = ref<HTMLElement>();

const all = () => [...tags.value!.children] as HTMLElement[];
const onClose = (event: Event) => {
  const tag = event.target as HTMLElement;
  const visible = all().filter((t) => !t.hidden);
  const index = visible.indexOf(tag);
  const next = visible[index + 1] ?? visible[index - 1] ?? restore.value!;
  tag.hidden = true;
  next.focus();
};
const onRestore = () => all().forEach((tag) => (tag.hidden = false));
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <div
      id="tags"
      style="display: flex; flex-wrap: wrap; gap: 8px"
      ref="tags"
      @minerva-close="onClose"
    >
      <minerva-tag closable color="primary">React</minerva-tag>
      <minerva-tag closable color="success">Vue</minerva-tag>
      <minerva-tag closable color="warning">Svelte</minerva-tag>
      <minerva-tag closable color="info" close-label="Remove Angular"
        >Angular
        <span slot="close-icon" aria-hidden="true">✕</span>
      </minerva-tag>
    </div>
    <div>
      <minerva-button
        id="restore"
        size="small"
        variant="outline"
        ref="restore"
        @click="onRestore"
        >Restore</minerva-button
      >
    </div>
  </div>
</template>
`,angular:`// tag-closable.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The close button fires \`minerva-close\`: remove (here: hide) the tag in the
// listener, and move focus to a neighbour so it is not lost.

@Component({
  selector: "app-tag-closable",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <div
        id="tags"
        style="display: flex; flex-wrap: wrap; gap: 8px"
        #tags
        (minerva-close)="onClose($event)"
      >
        <minerva-tag closable color="primary">React</minerva-tag>
        <minerva-tag closable color="success">Vue</minerva-tag>
        <minerva-tag closable color="warning">Svelte</minerva-tag>
        <minerva-tag closable color="info" close-label="Remove Angular"
          >Angular
          <span slot="close-icon" aria-hidden="true">✕</span>
        </minerva-tag>
      </div>
      <div>
        <minerva-button
          id="restore"
          size="small"
          variant="outline"
          #restore
          (click)="onRestore($event)"
          >Restore</minerva-button
        >
      </div>
    </div>
  \`,
})
export class TagClosableComponent {
  @ViewChild("tags") tags!: ElementRef<HTMLElement>;
  @ViewChild("restore") restore!: ElementRef<HTMLElement>;

  all = () => [...this.tags.nativeElement.children] as HTMLElement[];
  onClose = (event: Event) => {
    const tag = event.target as HTMLElement;
    const visible = this.all().filter((t) => !t.hidden);
    const index = visible.indexOf(tag);
    const next =
      visible[index + 1] ?? visible[index - 1] ?? this.restore.nativeElement;
    tag.hidden = true;
    next.focus();
  };
  onRestore = () => this.all().forEach((tag) => (tag.hidden = false));
}
`,svelte:`<!-- TagClosable.svelte -->

<script lang="ts">
  // The close button fires \`minerva-close\`: remove (here: hide) the tag in the
  // listener, and move focus to a neighbour so it is not lost.

  let tags: HTMLElement;
  let restore: HTMLElement;

  const all = () => [...tags.children] as HTMLElement[];
  const onClose = (event: Event) => {
    const tag = event.target as HTMLElement;
    const visible = all().filter((t) => !t.hidden);
    const index = visible.indexOf(tag);
    const next = visible[index + 1] ?? visible[index - 1] ?? restore;
    tag.hidden = true;
    next.focus();
  };
  const onRestore = () => all().forEach((tag) => (tag.hidden = false));
<\/script>

<div style="display: grid; gap: 12px">
  <div
    id="tags"
    style="display: flex; flex-wrap: wrap; gap: 8px"
    bind:this={tags}
    onminerva-close={onClose}
  >
    <minerva-tag closable color="primary">React</minerva-tag>
    <minerva-tag closable color="success">Vue</minerva-tag>
    <minerva-tag closable color="warning">Svelte</minerva-tag>
    <minerva-tag closable color="info" close-label="Remove Angular"
      >Angular
      <span slot="close-icon" aria-hidden="true">✕</span>
    </minerva-tag>
  </div>
  <div>
    <minerva-button
      id="restore"
      size="small"
      variant="outline"
      bind:this={restore}
      onclick={onRestore}
    >Restore</minerva-button>
  </div>
</div>
`,solid:`// TagClosable.tsx

// The close button fires \`minerva-close\`: remove (here: hide) the tag in the
// listener, and move focus to a neighbour so it is not lost.

export default function TagClosable() {
  let tags!: HTMLElement;
  let restore!: HTMLElement;

  const all = () => [...tags.children] as HTMLElement[];
  const onClose = (event: Event) => {
    const tag = event.target as HTMLElement;
    const visible = all().filter((t) => !t.hidden);
    const index = visible.indexOf(tag);
    const next = visible[index + 1] ?? visible[index - 1] ?? restore;
    tag.hidden = true;
    next.focus();
  };
  const onRestore = () => all().forEach((tag) => (tag.hidden = false));

  return (
    <div style="display: grid; gap: 12px">
      <div
        id="tags"
        style="display: flex; flex-wrap: wrap; gap: 8px"
        ref={tags}
        on:minerva-close={onClose}
      >
        <minerva-tag closable color="primary">
          React
        </minerva-tag>
        <minerva-tag closable color="success">
          Vue
        </minerva-tag>
        <minerva-tag closable color="warning">
          Svelte
        </minerva-tag>
        <minerva-tag closable color="info" close-label="Remove Angular">
          Angular
          <span slot="close-icon" aria-hidden="true">
            ✕
          </span>
        </minerva-tag>
      </div>
      <div>
        <minerva-button
          id="restore"
          size="small"
          variant="outline"
          ref={restore}
          on:click={onRestore}
        >
          Restore
        </minerva-button>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <div id="tags" style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-tag closable color="primary">React</minerva-tag>
    <minerva-tag closable color="success">Vue</minerva-tag>
    <minerva-tag closable color="warning">Svelte</minerva-tag>
    <minerva-tag closable color="info" close-label="Remove Angular"
      >Angular
      <span slot="close-icon" aria-hidden="true">✕</span>
    </minerva-tag>
  </div>
  <div>
    <minerva-button id="restore" size="small" variant="outline"
      >Restore</minerva-button
    >
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The close button fires \`minerva-close\`: remove (here: hide) the tag in the
  // listener, and move focus to a neighbour so it is not lost.
  const tags = document.querySelector("#tags");
  const restore = document.querySelector("#restore");
  const all = () => [...tags.children];
  const onClose = (event) => {
    const tag = event.target;
    const visible = all().filter((t) => !t.hidden);
    const index = visible.indexOf(tag);
    const next = visible[index + 1] ?? visible[index - 1] ?? restore;
    tag.hidden = true;
    next.focus();
  };
  const onRestore = () => all().forEach((tag) => (tag.hidden = false));
  tags.addEventListener("minerva-close", onClose);
  restore.addEventListener("click", onRestore);
<\/script>
`}})))()}n();export{t as default};