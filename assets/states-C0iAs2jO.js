import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ButtonStates.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`loading\` keeps the button focusable (aria-busy / aria-disabled) and
// blocks clicks; the \`loading\` slot replaces the label meanwhile.

const save = ref<HTMLElement & { loading: boolean }>();

const onClick = () => {
  save.value!.loading = true;
  setTimeout(() => (save.value!.loading = false), 1500);
};
<\/script>

<template>
  <minerva-button id="save" color="success" ref="save" @click="onClick">
    <span slot="start" aria-hidden="true">✓</span>
    Save changes
    <span slot="loading">Saving…</span>
  </minerva-button>
  <minerva-button disabled>Disabled</minerva-button>
  <minerva-button active variant="outline">Active</minerva-button>
  <minerva-button full-width variant="outline">Full width</minerva-button>
</template>
`,angular:`// button-states.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// \`loading\` keeps the button focusable (aria-busy / aria-disabled) and
// blocks clicks; the \`loading\` slot replaces the label meanwhile.

@Component({
  selector: "app-button-states",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-button id="save" color="success" #save (click)="onClick($event)">
      <span slot="start" aria-hidden="true">✓</span>
      Save changes
      <span slot="loading">Saving…</span>
    </minerva-button>
    <minerva-button disabled>Disabled</minerva-button>
    <minerva-button active variant="outline">Active</minerva-button>
    <minerva-button full-width variant="outline">Full width</minerva-button>
  \`,
})
export class ButtonStatesComponent {
  @ViewChild("save") save!: ElementRef<HTMLElement & { loading: boolean }>;

  onClick = () => {
    this.save.nativeElement.loading = true;
    setTimeout(() => (this.save.nativeElement.loading = false), 1500);
  };
}
`,svelte:`<!-- ButtonStates.svelte -->

<script lang="ts">
  // \`loading\` keeps the button focusable (aria-busy / aria-disabled) and
  // blocks clicks; the \`loading\` slot replaces the label meanwhile.

  let save: HTMLElement & { loading: boolean };

  const onClick = () => {
    save.loading = true;
    setTimeout(() => (save.loading = false), 1500);
  };
<\/script>

<minerva-button id="save" color="success" bind:this={save} onclick={onClick}>
  <span slot="start" aria-hidden="true">✓</span>
  Save changes
  <span slot="loading">Saving…</span>
</minerva-button>
<minerva-button disabled>Disabled</minerva-button>
<minerva-button active variant="outline">Active</minerva-button>
<minerva-button full-width variant="outline">Full width</minerva-button>
`,solid:`// ButtonStates.tsx

// \`loading\` keeps the button focusable (aria-busy / aria-disabled) and
// blocks clicks; the \`loading\` slot replaces the label meanwhile.

export default function ButtonStates() {
  let save!: HTMLElement & { loading: boolean };

  const onClick = () => {
    save.loading = true;
    setTimeout(() => (save.loading = false), 1500);
  };

  return (
    <>
      <minerva-button id="save" color="success" ref={save} on:click={onClick}>
        <span slot="start" aria-hidden="true">
          ✓
        </span>
        Save changes
        <span slot="loading">Saving…</span>
      </minerva-button>
      <minerva-button disabled>Disabled</minerva-button>
      <minerva-button active variant="outline">
        Active
      </minerva-button>
      <minerva-button full-width variant="outline">
        Full width
      </minerva-button>
    </>
  );
}
`,html:`<minerva-button id="save" color="success">
  <span slot="start" aria-hidden="true">✓</span>
  Save changes
  <span slot="loading">Saving…</span>
</minerva-button>
<minerva-button disabled>Disabled</minerva-button>
<minerva-button active variant="outline">Active</minerva-button>
<minerva-button full-width variant="outline">Full width</minerva-button>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`loading\` keeps the button focusable (aria-busy / aria-disabled) and
  // blocks clicks; the \`loading\` slot replaces the label meanwhile.
  const save = document.querySelector("#save");
  const onClick = () => {
    save.loading = true;
    setTimeout(() => (save.loading = false), 1500);
  };
  save.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};