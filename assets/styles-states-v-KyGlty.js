import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SwitchStylesStates.vue -->

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

// \`loading\` blocks interaction (aria-busy) while a change is being saved.

const sync = ref<HTMLElement & { loading: boolean }>();

let timer: ReturnType<typeof setTimeout> | undefined;
const onChange = () => {
  sync.value!.loading = true;
  timer = setTimeout(() => (sync.value!.loading = false), 1200);
};

onBeforeUnmount(() => {
  clearTimeout(timer);
});
<\/script>

<template>
  <div style="display: grid; gap: 16px">
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
      <minerva-switch size="small" checked label="Small"></minerva-switch>
      <minerva-switch size="medium" checked label="Medium"></minerva-switch>
      <minerva-switch size="large" checked label="Large"></minerva-switch>
      <minerva-switch shape="square" checked label="Square"></minerva-switch>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
      <minerva-switch color="success" checked label="Success"></minerva-switch>
      <minerva-switch color="warning" checked label="Warning"></minerva-switch>
      <minerva-switch color="danger" checked label="Danger"></minerva-switch>
      <minerva-switch
        color="info"
        checked
        label-placement="start"
        label="Label at start"
      ></minerva-switch>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
      <minerva-switch
        id="sw-sync"
        checked
        label="Sync (click me)"
        ref="sync"
        @minerva-change="onChange"
        ><span slot="icon" aria-hidden="true">⟳</span></minerva-switch
      >
      <minerva-switch readonly checked label="Read-only"></minerva-switch>
      <minerva-switch invalid label="Invalid"></minerva-switch>
      <minerva-switch no-ripple label="No ripple"></minerva-switch>
    </div>
  </div>
</template>
`,angular:`// switch-styles-states.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type OnDestroy,
} from "@angular/core";

// \`loading\` blocks interaction (aria-busy) while a change is being saved.

@Component({
  selector: "app-switch-styles-states",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px">
      <div
        style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center"
      >
        <minerva-switch size="small" checked label="Small"></minerva-switch>
        <minerva-switch size="medium" checked label="Medium"></minerva-switch>
        <minerva-switch size="large" checked label="Large"></minerva-switch>
        <minerva-switch shape="square" checked label="Square"></minerva-switch>
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center"
      >
        <minerva-switch
          color="success"
          checked
          label="Success"
        ></minerva-switch>
        <minerva-switch
          color="warning"
          checked
          label="Warning"
        ></minerva-switch>
        <minerva-switch color="danger" checked label="Danger"></minerva-switch>
        <minerva-switch
          color="info"
          checked
          label-placement="start"
          label="Label at start"
        ></minerva-switch>
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center"
      >
        <minerva-switch
          id="sw-sync"
          checked
          label="Sync (click me)"
          #sync
          (minerva-change)="onChange($event)"
          ><span slot="icon" aria-hidden="true">⟳</span></minerva-switch
        >
        <minerva-switch readonly checked label="Read-only"></minerva-switch>
        <minerva-switch invalid label="Invalid"></minerva-switch>
        <minerva-switch no-ripple label="No ripple"></minerva-switch>
      </div>
    </div>
  \`,
})
export class SwitchStylesStatesComponent implements OnDestroy {
  @ViewChild("sync") sync!: ElementRef<HTMLElement & { loading: boolean }>;

  timer: ReturnType<typeof setTimeout> | undefined;
  onChange = () => {
    this.sync.nativeElement.loading = true;
    this.timer = setTimeout(
      () => (this.sync.nativeElement.loading = false),
      1200,
    );
  };

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
`,svelte:`<!-- SwitchStylesStates.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // \`loading\` blocks interaction (aria-busy) while a change is being saved.

  let sync: HTMLElement & { loading: boolean };

  let timer: ReturnType<typeof setTimeout> | undefined;
  const onChange = () => {
    sync.loading = true;
    timer = setTimeout(() => (sync.loading = false), 1200);
  };

  onMount(() => {
    return () => {
      clearTimeout(timer);
    };
  });
<\/script>

<div style="display: grid; gap: 16px">
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-switch size="small" checked label="Small"></minerva-switch>
    <minerva-switch size="medium" checked label="Medium"></minerva-switch>
    <minerva-switch size="large" checked label="Large"></minerva-switch>
    <minerva-switch shape="square" checked label="Square"></minerva-switch>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-switch color="success" checked label="Success"></minerva-switch>
    <minerva-switch color="warning" checked label="Warning"></minerva-switch>
    <minerva-switch color="danger" checked label="Danger"></minerva-switch>
    <minerva-switch
      color="info"
      checked
      label-placement="start"
      label="Label at start"
    ></minerva-switch>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-switch
      id="sw-sync"
      checked
      label="Sync (click me)"
      bind:this={sync}
      onminerva-change={onChange}
    ><span slot="icon" aria-hidden="true">⟳</span></minerva-switch>
    <minerva-switch readonly checked label="Read-only"></minerva-switch>
    <minerva-switch invalid label="Invalid"></minerva-switch>
    <minerva-switch no-ripple label="No ripple"></minerva-switch>
  </div>
</div>
`,solid:`// SwitchStylesStates.tsx

import { onCleanup } from "solid-js";

// \`loading\` blocks interaction (aria-busy) while a change is being saved.

export default function SwitchStylesStates() {
  let sync!: HTMLElement & { loading: boolean };

  let timer: ReturnType<typeof setTimeout> | undefined;
  const onChange = () => {
    sync.loading = true;
    timer = setTimeout(() => (sync.loading = false), 1200);
  };

  onCleanup(() => {
    clearTimeout(timer);
  });

  return (
    <div style="display: grid; gap: 16px">
      <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
        <minerva-switch size="small" checked label="Small"></minerva-switch>
        <minerva-switch size="medium" checked label="Medium"></minerva-switch>
        <minerva-switch size="large" checked label="Large"></minerva-switch>
        <minerva-switch shape="square" checked label="Square"></minerva-switch>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
        <minerva-switch
          color="success"
          checked
          label="Success"
        ></minerva-switch>
        <minerva-switch
          color="warning"
          checked
          label="Warning"
        ></minerva-switch>
        <minerva-switch color="danger" checked label="Danger"></minerva-switch>
        <minerva-switch
          color="info"
          checked
          label-placement="start"
          label="Label at start"
        ></minerva-switch>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
        <minerva-switch
          id="sw-sync"
          checked
          label="Sync (click me)"
          ref={sync}
          on:minerva-change={onChange}
        >
          <span slot="icon" aria-hidden="true">
            ⟳
          </span>
        </minerva-switch>
        <minerva-switch readonly checked label="Read-only"></minerva-switch>
        <minerva-switch invalid label="Invalid"></minerva-switch>
        <minerva-switch no-ripple label="No ripple"></minerva-switch>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px">
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-switch size="small" checked label="Small"></minerva-switch>
    <minerva-switch size="medium" checked label="Medium"></minerva-switch>
    <minerva-switch size="large" checked label="Large"></minerva-switch>
    <minerva-switch shape="square" checked label="Square"></minerva-switch>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-switch color="success" checked label="Success"></minerva-switch>
    <minerva-switch color="warning" checked label="Warning"></minerva-switch>
    <minerva-switch color="danger" checked label="Danger"></minerva-switch>
    <minerva-switch
      color="info"
      checked
      label-placement="start"
      label="Label at start"
    ></minerva-switch>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-switch id="sw-sync" checked label="Sync (click me)"
      ><span slot="icon" aria-hidden="true">⟳</span></minerva-switch
    >
    <minerva-switch readonly checked label="Read-only"></minerva-switch>
    <minerva-switch invalid label="Invalid"></minerva-switch>
    <minerva-switch no-ripple label="No ripple"></minerva-switch>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`loading\` blocks interaction (aria-busy) while a change is being saved.
  const sync = document.querySelector("#sw-sync");
  let timer;
  const onChange = () => {
    sync.loading = true;
    timer = setTimeout(() => (sync.loading = false), 1200);
  };
  sync.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};