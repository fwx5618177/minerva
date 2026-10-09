import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- HtmlPreviewViewport.vue -->

<script setup lang="ts">
import { ref } from "vue";

// viewport="mobile" renders a fixed-width frame (mobile-width pixels).

type Preview = HTMLElement & { html: string; viewport: "desktop" | "mobile" };
type Toggle = HTMLElement & { active: boolean };

const newsletter = \`<table width="100%" style="font-family: sans-serif">
  <tr><td style="background: #0f172a; color: white; padding: 16px">
    <strong>Minerva Weekly</strong></td></tr>
  <tr><td style="padding: 16px">
    <h2>Three layouts for dense dashboards</h2>
    <p>Split panes, responsive grids and sticky headers, compared.</p>
  </td></tr>
</table>\`;

const preview = ref<Preview>();
const desktop = ref<Toggle>();
const mobile = ref<Toggle>();

const previewHtml = newsletter;
const show = (viewport: Preview["viewport"]) => () => {
  preview.value!.viewport = viewport;
  desktop.value!.active = viewport === "desktop";
  mobile.value!.active = viewport === "mobile";
};
const onDesktop = show("desktop");
const onMobile = show("mobile");
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <div role="group" aria-label="Viewport" style="display: flex; gap: 8px">
      <minerva-button
        id="desktop"
        size="small"
        variant="outline"
        active
        ref="desktop"
        @click="onDesktop"
        >Desktop</minerva-button
      >
      <minerva-button
        id="mobile"
        size="small"
        variant="outline"
        ref="mobile"
        @click="onMobile"
        >Mobile (360px)</minerva-button
      >
    </div>
    <minerva-html-preview
      id="preview"
      label="Newsletter preview"
      height="260"
      mobile-width="360"
      ref="preview"
      :html.prop="previewHtml"
    ></minerva-html-preview>
  </div>
</template>
`,angular:`// html-preview-viewport.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// viewport="mobile" renders a fixed-width frame (mobile-width pixels).
type Preview = HTMLElement & { html: string; viewport: "desktop" | "mobile" };
type Toggle = HTMLElement & { active: boolean };

const newsletter = \`<table width="100%" style="font-family: sans-serif">
  <tr><td style="background: #0f172a; color: white; padding: 16px">
    <strong>Minerva Weekly</strong></td></tr>
  <tr><td style="padding: 16px">
    <h2>Three layouts for dense dashboards</h2>
    <p>Split panes, responsive grids and sticky headers, compared.</p>
  </td></tr>
</table>\`;

@Component({
  selector: "app-html-preview-viewport",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <div role="group" aria-label="Viewport" style="display: flex; gap: 8px">
        <minerva-button
          id="desktop"
          size="small"
          variant="outline"
          active
          #desktop
          (click)="onDesktop($event)"
          >Desktop</minerva-button
        >
        <minerva-button
          id="mobile"
          size="small"
          variant="outline"
          #mobile
          (click)="onMobile($event)"
          >Mobile (360px)</minerva-button
        >
      </div>
      <minerva-html-preview
        id="preview"
        label="Newsletter preview"
        height="260"
        mobile-width="360"
        #preview
        [html]="previewHtml"
      ></minerva-html-preview>
    </div>
  \`,
})
export class HtmlPreviewViewportComponent {
  @ViewChild("preview") preview!: ElementRef<Preview>;
  @ViewChild("desktop") desktop!: ElementRef<Toggle>;
  @ViewChild("mobile") mobile!: ElementRef<Toggle>;

  previewHtml = newsletter;
  show = (viewport: Preview["viewport"]) => () => {
    this.preview.nativeElement.viewport = viewport;
    this.desktop.nativeElement.active = viewport === "desktop";
    this.mobile.nativeElement.active = viewport === "mobile";
  };
  onDesktop = this.show("desktop");
  onMobile = this.show("mobile");
}
`,svelte:`<!-- HtmlPreviewViewport.svelte -->

<script lang="ts">
  // viewport="mobile" renders a fixed-width frame (mobile-width pixels).

  type Preview = HTMLElement & { html: string; viewport: "desktop" | "mobile" };
  type Toggle = HTMLElement & { active: boolean };

  const newsletter = \`<table width="100%" style="font-family: sans-serif">
    <tr><td style="background: #0f172a; color: white; padding: 16px">
      <strong>Minerva Weekly</strong></td></tr>
    <tr><td style="padding: 16px">
      <h2>Three layouts for dense dashboards</h2>
      <p>Split panes, responsive grids and sticky headers, compared.</p>
    </td></tr>
  </table>\`;

  let preview: Preview;
  let desktop: Toggle;
  let mobile: Toggle;

  const previewHtml = newsletter;
  const show = (viewport: Preview["viewport"]) => () => {
    preview.viewport = viewport;
    desktop.active = viewport === "desktop";
    mobile.active = viewport === "mobile";
  };
  const onDesktop = show("desktop");
  const onMobile = show("mobile");
<\/script>

<div style="display: grid; gap: 12px">
  <div role="group" aria-label="Viewport" style="display: flex; gap: 8px">
    <minerva-button
      id="desktop"
      size="small"
      variant="outline"
      active
      bind:this={desktop}
      onclick={onDesktop}
    >Desktop</minerva-button>
    <minerva-button
      id="mobile"
      size="small"
      variant="outline"
      bind:this={mobile}
      onclick={onMobile}
    >Mobile (360px)</minerva-button>
  </div>
  <minerva-html-preview
    id="preview"
    label="Newsletter preview"
    height="260"
    mobile-width="360"
    bind:this={preview}
    html={previewHtml}
  ></minerva-html-preview>
</div>
`,solid:`// HtmlPreviewViewport.tsx

// viewport="mobile" renders a fixed-width frame (mobile-width pixels).
type Preview = HTMLElement & { html: string; viewport: "desktop" | "mobile" };
type Toggle = HTMLElement & { active: boolean };

const newsletter = \`<table width="100%" style="font-family: sans-serif">
  <tr><td style="background: #0f172a; color: white; padding: 16px">
    <strong>Minerva Weekly</strong></td></tr>
  <tr><td style="padding: 16px">
    <h2>Three layouts for dense dashboards</h2>
    <p>Split panes, responsive grids and sticky headers, compared.</p>
  </td></tr>
</table>\`;

export default function HtmlPreviewViewport() {
  let preview!: Preview;
  let desktop!: Toggle;
  let mobile!: Toggle;

  const previewHtml = newsletter;
  const show = (viewport: Preview["viewport"]) => () => {
    preview.viewport = viewport;
    desktop.active = viewport === "desktop";
    mobile.active = viewport === "mobile";
  };
  const onDesktop = show("desktop");
  const onMobile = show("mobile");

  return (
    <div style="display: grid; gap: 12px">
      <div role="group" aria-label="Viewport" style="display: flex; gap: 8px">
        <minerva-button
          id="desktop"
          size="small"
          variant="outline"
          active
          ref={desktop}
          on:click={onDesktop}
        >
          Desktop
        </minerva-button>
        <minerva-button
          id="mobile"
          size="small"
          variant="outline"
          ref={mobile}
          on:click={onMobile}
        >
          Mobile (360px)
        </minerva-button>
      </div>
      <minerva-html-preview
        id="preview"
        label="Newsletter preview"
        height="260"
        mobile-width="360"
        ref={preview}
        prop:html={previewHtml}
      ></minerva-html-preview>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <div role="group" aria-label="Viewport" style="display: flex; gap: 8px">
    <minerva-button id="desktop" size="small" variant="outline" active
      >Desktop</minerva-button
    >
    <minerva-button id="mobile" size="small" variant="outline"
      >Mobile (360px)</minerva-button
    >
  </div>
  <minerva-html-preview
    id="preview"
    label="Newsletter preview"
    height="260"
    mobile-width="360"
  ></minerva-html-preview>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // viewport="mobile" renders a fixed-width frame (mobile-width pixels).
  const newsletter = \`<table width="100%" style="font-family: sans-serif">
    <tr><td style="background: #0f172a; color: white; padding: 16px">
      <strong>Minerva Weekly</strong></td></tr>
    <tr><td style="padding: 16px">
      <h2>Three layouts for dense dashboards</h2>
      <p>Split panes, responsive grids and sticky headers, compared.</p>
    </td></tr>
  </table>\`;

  const preview = document.querySelector("#preview");
  const desktop = document.querySelector("#desktop");
  const mobile = document.querySelector("#mobile");
  preview.html = newsletter;
  const show = (viewport) => () => {
    preview.viewport = viewport;
    desktop.active = viewport === "desktop";
    mobile.active = viewport === "mobile";
  };
  const onDesktop = show("desktop");
  const onMobile = show("mobile");
  desktop.addEventListener("click", onDesktop);
  mobile.addEventListener("click", onMobile);
<\/script>
`}})))()}n();export{t as default};