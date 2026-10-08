import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PageToolbar.vue -->

<template>
  <minerva-toolbar aria-label="Filter orders">
    <minerva-input
      aria-label="Search orders"
      placeholder="Search orders"
      clearable
    ></minerva-input>
    <minerva-button variant="outline" color="neutral">Status</minerva-button>
    <minerva-button variant="outline" color="neutral">Date</minerva-button>
    <minerva-button>Export</minerva-button>
  </minerva-toolbar>
  <minerva-toolbar
    density="compact"
    nowrap
    aria-label="Formatting"
    style="margin-top: 16px"
  >
    <minerva-icon-button label="Bold" toggle>B</minerva-icon-button>
    <minerva-icon-button label="Italic" toggle>I</minerva-icon-button>
    <minerva-divider orientation="vertical" spacing="4"></minerva-divider>
    <minerva-icon-button label="Undo">↶</minerva-icon-button>
    <minerva-icon-button label="Redo">↷</minerva-icon-button>
  </minerva-toolbar>
</template>
`,angular:`// page-toolbar.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-page-toolbar",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-toolbar aria-label="Filter orders">
      <minerva-input
        aria-label="Search orders"
        placeholder="Search orders"
        clearable
      ></minerva-input>
      <minerva-button variant="outline" color="neutral">Status</minerva-button>
      <minerva-button variant="outline" color="neutral">Date</minerva-button>
      <minerva-button>Export</minerva-button>
    </minerva-toolbar>
    <minerva-toolbar
      density="compact"
      nowrap
      aria-label="Formatting"
      style="margin-top: 16px"
    >
      <minerva-icon-button label="Bold" toggle>B</minerva-icon-button>
      <minerva-icon-button label="Italic" toggle>I</minerva-icon-button>
      <minerva-divider orientation="vertical" spacing="4"></minerva-divider>
      <minerva-icon-button label="Undo">↶</minerva-icon-button>
      <minerva-icon-button label="Redo">↷</minerva-icon-button>
    </minerva-toolbar>
  \`,
})
export class PageToolbarComponent {}
`,svelte:`<!-- PageToolbar.svelte -->

<minerva-toolbar aria-label="Filter orders">
  <minerva-input
    aria-label="Search orders"
    placeholder="Search orders"
    clearable
  ></minerva-input>
  <minerva-button variant="outline" color="neutral">Status</minerva-button>
  <minerva-button variant="outline" color="neutral">Date</minerva-button>
  <minerva-button>Export</minerva-button>
</minerva-toolbar>
<minerva-toolbar
  density="compact"
  nowrap
  aria-label="Formatting"
  style="margin-top: 16px"
>
  <minerva-icon-button label="Bold" toggle>B</minerva-icon-button>
  <minerva-icon-button label="Italic" toggle>I</minerva-icon-button>
  <minerva-divider orientation="vertical" spacing="4"></minerva-divider>
  <minerva-icon-button label="Undo">↶</minerva-icon-button>
  <minerva-icon-button label="Redo">↷</minerva-icon-button>
</minerva-toolbar>
`,solid:`// PageToolbar.tsx

export default function PageToolbar() {
  return (
    <>
      <minerva-toolbar aria-label="Filter orders">
        <minerva-input
          aria-label="Search orders"
          placeholder="Search orders"
          clearable
        ></minerva-input>
        <minerva-button variant="outline" color="neutral">
          Status
        </minerva-button>
        <minerva-button variant="outline" color="neutral">
          Date
        </minerva-button>
        <minerva-button>Export</minerva-button>
      </minerva-toolbar>
      <minerva-toolbar
        density="compact"
        nowrap
        aria-label="Formatting"
        style="margin-top: 16px"
      >
        <minerva-icon-button label="Bold" toggle>
          B
        </minerva-icon-button>
        <minerva-icon-button label="Italic" toggle>
          I
        </minerva-icon-button>
        <minerva-divider orientation="vertical" spacing="4"></minerva-divider>
        <minerva-icon-button label="Undo">↶</minerva-icon-button>
        <minerva-icon-button label="Redo">↷</minerva-icon-button>
      </minerva-toolbar>
    </>
  );
}
`,html:`<minerva-toolbar aria-label="Filter orders">
  <minerva-input
    aria-label="Search orders"
    placeholder="Search orders"
    clearable
  ></minerva-input>
  <minerva-button variant="outline" color="neutral">Status</minerva-button>
  <minerva-button variant="outline" color="neutral">Date</minerva-button>
  <minerva-button>Export</minerva-button>
</minerva-toolbar>
<minerva-toolbar
  density="compact"
  nowrap
  aria-label="Formatting"
  style="margin-top: 16px"
>
  <minerva-icon-button label="Bold" toggle>B</minerva-icon-button>
  <minerva-icon-button label="Italic" toggle>I</minerva-icon-button>
  <minerva-divider orientation="vertical" spacing="4"></minerva-divider>
  <minerva-icon-button label="Undo">↶</minerva-icon-button>
  <minerva-icon-button label="Redo">↷</minerva-icon-button>
</minerva-toolbar>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};