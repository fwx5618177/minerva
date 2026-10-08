import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ToastBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// region.toast is the toast() API bound to this region (in an app:
// import { toast } from "minerva-design/web-components/toast").

type Color = "info" | "success" | "warning" | "danger";
type ToastApi = Record<Color, (title: string) => void>;
type Region = HTMLElement & { toast: ToastApi };

const titles: Record<Color, string> = {
  info: "A new version is available",
  success: "Changes saved",
  warning: "Storage almost full",
  danger: "Upload failed",
};

const region = ref<Region>();

const onClick = (event: Event) => {
  const color = (event.target as Element)
    .closest("[data-color]")
    ?.getAttribute("data-color") as Color | undefined;
  if (color) region.value!.toast[color](titles[color]);
};
<\/script>

<template>
  <minerva-toast-region
    id="toasts"
    position="bottom-right"
    ref="region"
  ></minerva-toast-region>
  <div
    id="toast-buttons"
    style="display: flex; flex-wrap: wrap; gap: 8px"
    @click="onClick"
  >
    <minerva-button data-color="info" color="info">Info</minerva-button>
    <minerva-button data-color="success" color="success"
      >Success</minerva-button
    >
    <minerva-button data-color="warning" color="warning"
      >Warning</minerva-button
    >
    <minerva-button data-color="danger" color="danger">Danger</minerva-button>
  </div>
</template>
`,angular:`// toast-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// region.toast is the toast() API bound to this region (in an app:
// import { toast } from "minerva-design/web-components/toast").
type Color = "info" | "success" | "warning" | "danger";
type ToastApi = Record<Color, (title: string) => void>;
type Region = HTMLElement & { toast: ToastApi };

const titles: Record<Color, string> = {
  info: "A new version is available",
  success: "Changes saved",
  warning: "Storage almost full",
  danger: "Upload failed",
};

@Component({
  selector: "app-toast-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-toast-region
      id="toasts"
      position="bottom-right"
      #region
    ></minerva-toast-region>
    <div
      id="toast-buttons"
      style="display: flex; flex-wrap: wrap; gap: 8px"
      (click)="onClick($event)"
    >
      <minerva-button data-color="info" color="info">Info</minerva-button>
      <minerva-button data-color="success" color="success"
        >Success</minerva-button
      >
      <minerva-button data-color="warning" color="warning"
        >Warning</minerva-button
      >
      <minerva-button data-color="danger" color="danger">Danger</minerva-button>
    </div>
  \`,
})
export class ToastBasicComponent {
  @ViewChild("region") region!: ElementRef<Region>;

  onClick = (event: Event) => {
    const color = (event.target as Element)
      .closest("[data-color]")
      ?.getAttribute("data-color") as Color | undefined;
    if (color) this.region.nativeElement.toast[color](titles[color]);
  };
}
`,svelte:`<!-- ToastBasic.svelte -->

<script lang="ts">
  // region.toast is the toast() API bound to this region (in an app:
  // import { toast } from "minerva-design/web-components/toast").

  type Color = "info" | "success" | "warning" | "danger";
  type ToastApi = Record<Color, (title: string) => void>;
  type Region = HTMLElement & { toast: ToastApi };

  const titles: Record<Color, string> = {
    info: "A new version is available",
    success: "Changes saved",
    warning: "Storage almost full",
    danger: "Upload failed",
  };

  let region: Region;

  const onClick = (event: Event) => {
    const color = (event.target as Element)
      .closest("[data-color]")
      ?.getAttribute("data-color") as Color | undefined;
    if (color) region.toast[color](titles[color]);
  };
<\/script>

<minerva-toast-region
  id="toasts"
  position="bottom-right"
  bind:this={region}
></minerva-toast-region>
<div
  id="toast-buttons"
  style="display: flex; flex-wrap: wrap; gap: 8px"
  onclick={onClick}
>
  <minerva-button data-color="info" color="info">Info</minerva-button>
  <minerva-button data-color="success" color="success">Success</minerva-button>
  <minerva-button data-color="warning" color="warning">Warning</minerva-button>
  <minerva-button data-color="danger" color="danger">Danger</minerva-button>
</div>
`,solid:`// ToastBasic.tsx

// region.toast is the toast() API bound to this region (in an app:
// import { toast } from "minerva-design/web-components/toast").
type Color = "info" | "success" | "warning" | "danger";
type ToastApi = Record<Color, (title: string) => void>;
type Region = HTMLElement & { toast: ToastApi };

const titles: Record<Color, string> = {
  info: "A new version is available",
  success: "Changes saved",
  warning: "Storage almost full",
  danger: "Upload failed",
};

export default function ToastBasic() {
  let region!: Region;

  const onClick = (event: Event) => {
    const color = (event.target as Element)
      .closest("[data-color]")
      ?.getAttribute("data-color") as Color | undefined;
    if (color) region.toast[color](titles[color]);
  };

  return (
    <>
      <minerva-toast-region
        id="toasts"
        position="bottom-right"
        ref={region}
      ></minerva-toast-region>
      <div
        id="toast-buttons"
        style="display: flex; flex-wrap: wrap; gap: 8px"
        on:click={onClick}
      >
        <minerva-button data-color="info" color="info">
          Info
        </minerva-button>
        <minerva-button data-color="success" color="success">
          Success
        </minerva-button>
        <minerva-button data-color="warning" color="warning">
          Warning
        </minerva-button>
        <minerva-button data-color="danger" color="danger">
          Danger
        </minerva-button>
      </div>
    </>
  );
}
`,html:`<minerva-toast-region
  id="toasts"
  position="bottom-right"
></minerva-toast-region>
<div id="toast-buttons" style="display: flex; flex-wrap: wrap; gap: 8px">
  <minerva-button data-color="info" color="info">Info</minerva-button>
  <minerva-button data-color="success" color="success">Success</minerva-button>
  <minerva-button data-color="warning" color="warning">Warning</minerva-button>
  <minerva-button data-color="danger" color="danger">Danger</minerva-button>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // region.toast is the toast() API bound to this region (in an app:
  // import { toast } from "minerva-design/web-components/toast").
  const titles = {
    info: "A new version is available",
    success: "Changes saved",
    warning: "Storage almost full",
    danger: "Upload failed",
  };

  const region = document.querySelector("#toasts");
  const buttons = document.querySelector("#toast-buttons");
  const onClick = (event) => {
    const color = event.target
      .closest("[data-color]")
      ?.getAttribute("data-color");
    if (color) region.toast[color](titles[color]);
  };
  buttons.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};