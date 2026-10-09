import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- IconButtonStates.vue -->

<script setup lang="ts">
import { ref } from "vue";

// While loading the button shows a spinner, stays focusable
// (aria-busy / aria-disabled) and ignores clicks.

const refresh = ref<HTMLElement & { loading: boolean }>();

const onClick = () => {
  refresh.value!.loading = true;
  setTimeout(() => (refresh.value!.loading = false), 1500);
};
<\/script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-icon-button
      id="refresh"
      label="Refresh"
      variant="outline"
      ref="refresh"
      @click="onClick"
      >⟳</minerva-icon-button
    >
    <minerva-icon-button label="Disabled" disabled>✎</minerva-icon-button>
    <minerva-icon-button label="Settings" tooltip-placement="bottom"
      >⚙</minerva-icon-button
    >
    <minerva-icon-button
      label="Help"
      tooltip="Open the help center (F1)"
      tooltip-placement="right"
      >?</minerva-icon-button
    >
    <minerva-icon-button label="Close" no-tooltip>✕</minerva-icon-button>
  </div>
</template>
`,angular:`// icon-button-states.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// While loading the button shows a spinner, stays focusable
// (aria-busy / aria-disabled) and ignores clicks.

@Component({
  selector: "app-icon-button-states",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-icon-button
        id="refresh"
        label="Refresh"
        variant="outline"
        #refresh
        (click)="onClick($event)"
        >⟳</minerva-icon-button
      >
      <minerva-icon-button label="Disabled" disabled>✎</minerva-icon-button>
      <minerva-icon-button label="Settings" tooltip-placement="bottom"
        >⚙</minerva-icon-button
      >
      <minerva-icon-button
        label="Help"
        tooltip="Open the help center (F1)"
        tooltip-placement="right"
        >?</minerva-icon-button
      >
      <minerva-icon-button label="Close" no-tooltip>✕</minerva-icon-button>
    </div>
  \`,
})
export class IconButtonStatesComponent {
  @ViewChild("refresh") refresh!: ElementRef<
    HTMLElement & { loading: boolean }
  >;

  onClick = () => {
    this.refresh.nativeElement.loading = true;
    setTimeout(() => (this.refresh.nativeElement.loading = false), 1500);
  };
}
`,svelte:`<!-- IconButtonStates.svelte -->

<script lang="ts">
  // While loading the button shows a spinner, stays focusable
  // (aria-busy / aria-disabled) and ignores clicks.

  let refresh: HTMLElement & { loading: boolean };

  const onClick = () => {
    refresh.loading = true;
    setTimeout(() => (refresh.loading = false), 1500);
  };
<\/script>

<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
  <minerva-icon-button
    id="refresh"
    label="Refresh"
    variant="outline"
    bind:this={refresh}
    onclick={onClick}
  >⟳</minerva-icon-button>
  <minerva-icon-button label="Disabled" disabled>✎</minerva-icon-button>
  <minerva-icon-button label="Settings" tooltip-placement="bottom"
    >⚙</minerva-icon-button>
  <minerva-icon-button
    label="Help"
    tooltip="Open the help center (F1)"
    tooltip-placement="right"
    >?</minerva-icon-button>
  <minerva-icon-button label="Close" no-tooltip>✕</minerva-icon-button>
</div>
`,solid:`// IconButtonStates.tsx

// While loading the button shows a spinner, stays focusable
// (aria-busy / aria-disabled) and ignores clicks.

export default function IconButtonStates() {
  let refresh!: HTMLElement & { loading: boolean };

  const onClick = () => {
    refresh.loading = true;
    setTimeout(() => (refresh.loading = false), 1500);
  };

  return (
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-icon-button
        id="refresh"
        label="Refresh"
        variant="outline"
        ref={refresh}
        on:click={onClick}
      >
        ⟳
      </minerva-icon-button>
      <minerva-icon-button label="Disabled" disabled>
        ✎
      </minerva-icon-button>
      <minerva-icon-button label="Settings" tooltip-placement="bottom">
        ⚙
      </minerva-icon-button>
      <minerva-icon-button
        label="Help"
        tooltip="Open the help center (F1)"
        tooltip-placement="right"
      >
        ?
      </minerva-icon-button>
      <minerva-icon-button label="Close" no-tooltip>
        ✕
      </minerva-icon-button>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
  <minerva-icon-button id="refresh" label="Refresh" variant="outline"
    >⟳</minerva-icon-button
  >
  <minerva-icon-button label="Disabled" disabled>✎</minerva-icon-button>
  <minerva-icon-button label="Settings" tooltip-placement="bottom"
    >⚙</minerva-icon-button
  >
  <minerva-icon-button
    label="Help"
    tooltip="Open the help center (F1)"
    tooltip-placement="right"
    >?</minerva-icon-button
  >
  <minerva-icon-button label="Close" no-tooltip>✕</minerva-icon-button>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // While loading the button shows a spinner, stays focusable
  // (aria-busy / aria-disabled) and ignores clicks.
  const refresh = document.querySelector("#refresh");
  const onClick = () => {
    refresh.loading = true;
    setTimeout(() => (refresh.loading = false), 1500);
  };
  refresh.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};