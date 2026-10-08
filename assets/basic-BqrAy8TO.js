import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AppShellBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The docs use hash routing: keep the demo navigation links from navigating.
// closeNavigation() dismisses the mobile drawer once a link is chosen.

const shell = ref<HTMLElement & { closeNavigation(): void }>();

const onClick = (event: Event) => {
  if (!(event.target as Element).closest("nav a")) return;
  event.preventDefault();
  shell.value!.closeNavigation();
};
<\/script>

<template>
  <!-- The transform makes the fixed sidebar relative to this preview frame. -->
  <div style="height: 360px; overflow: auto; transform: translateZ(0)">
    <minerva-app-shell brand="Minerva" ref="shell" @click="onClick">
      <nav slot="navigation" aria-label="Main">
        <a
          href="#dashboard"
          aria-current="page"
          style="display: block; padding: 6px 8px"
          >Dashboard</a
        >
        <a href="#projects" style="display: block; padding: 6px 8px"
          >Projects</a
        >
        <a href="#settings" style="display: block; padding: 6px 8px"
          >Settings</a
        >
      </nav>
      <minerva-button slot="header-actions" size="small" variant="ghost"
        >Ada Lovelace</minerva-button
      >
      <minerva-page>
        <minerva-page-header
          heading="Dashboard"
          description="Page content goes in the default slot, inside the main landmark. Tab once to reveal the skip link."
        ></minerva-page-header>
      </minerva-page>
    </minerva-app-shell>
  </div>
</template>
`,angular:`// app-shell-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The docs use hash routing: keep the demo navigation links from navigating.
// closeNavigation() dismisses the mobile drawer once a link is chosen.

@Component({
  selector: "app-app-shell-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <!-- The transform makes the fixed sidebar relative to this preview frame. -->
    <div style="height: 360px; overflow: auto; transform: translateZ(0)">
      <minerva-app-shell brand="Minerva" #shell (click)="onClick($event)">
        <nav slot="navigation" aria-label="Main">
          <a
            href="#dashboard"
            aria-current="page"
            style="display: block; padding: 6px 8px"
            >Dashboard</a
          >
          <a href="#projects" style="display: block; padding: 6px 8px"
            >Projects</a
          >
          <a href="#settings" style="display: block; padding: 6px 8px"
            >Settings</a
          >
        </nav>
        <minerva-button slot="header-actions" size="small" variant="ghost"
          >Ada Lovelace</minerva-button
        >
        <minerva-page>
          <minerva-page-header
            heading="Dashboard"
            description="Page content goes in the default slot, inside the main landmark. Tab once to reveal the skip link."
          ></minerva-page-header>
        </minerva-page>
      </minerva-app-shell>
    </div>
  \`,
})
export class AppShellBasicComponent {
  @ViewChild("shell") shell!: ElementRef<
    HTMLElement & { closeNavigation(): void }
  >;

  onClick = (event: Event) => {
    if (!(event.target as Element).closest("nav a")) return;
    event.preventDefault();
    this.shell.nativeElement.closeNavigation();
  };
}
`,svelte:`<!-- AppShellBasic.svelte -->

<script lang="ts">
  // The docs use hash routing: keep the demo navigation links from navigating.
  // closeNavigation() dismisses the mobile drawer once a link is chosen.

  let shell: HTMLElement & { closeNavigation(): void };

  const onClick = (event: Event) => {
    if (!(event.target as Element).closest("nav a")) return;
    event.preventDefault();
    shell.closeNavigation();
  };
<\/script>

<!-- The transform makes the fixed sidebar relative to this preview frame. -->
<div style="height: 360px; overflow: auto; transform: translateZ(0)">
  <minerva-app-shell brand="Minerva" bind:this={shell} onclick={onClick}>
    <nav slot="navigation" aria-label="Main">
      <a
        href="#dashboard"
        aria-current="page"
        style="display: block; padding: 6px 8px"
        >Dashboard</a>
      <a href="#projects" style="display: block; padding: 6px 8px">Projects</a>
      <a href="#settings" style="display: block; padding: 6px 8px">Settings</a>
    </nav>
    <minerva-button slot="header-actions" size="small" variant="ghost"
      >Ada Lovelace</minerva-button>
    <minerva-page>
      <minerva-page-header
        heading="Dashboard"
        description="Page content goes in the default slot, inside the main landmark. Tab once to reveal the skip link."
      ></minerva-page-header>
    </minerva-page>
  </minerva-app-shell>
</div>
`,solid:`// AppShellBasic.tsx

// The docs use hash routing: keep the demo navigation links from navigating.
// closeNavigation() dismisses the mobile drawer once a link is chosen.

export default function AppShellBasic() {
  let shell!: HTMLElement & { closeNavigation(): void };

  const onClick = (event: Event) => {
    if (!(event.target as Element).closest("nav a")) return;
    event.preventDefault();
    shell.closeNavigation();
  };

  return (
    <>
      {/* The transform makes the fixed sidebar relative to this preview frame. */}
      <div style="height: 360px; overflow: auto; transform: translateZ(0)">
        <minerva-app-shell brand="Minerva" ref={shell} on:click={onClick}>
          <nav slot="navigation" aria-label="Main">
            <a
              href="#dashboard"
              aria-current="page"
              style="display: block; padding: 6px 8px"
            >
              Dashboard
            </a>
            <a href="#projects" style="display: block; padding: 6px 8px">
              Projects
            </a>
            <a href="#settings" style="display: block; padding: 6px 8px">
              Settings
            </a>
          </nav>
          <minerva-button slot="header-actions" size="small" variant="ghost">
            Ada Lovelace
          </minerva-button>
          <minerva-page>
            <minerva-page-header
              heading="Dashboard"
              description="Page content goes in the default slot, inside the main landmark. Tab once to reveal the skip link."
            ></minerva-page-header>
          </minerva-page>
        </minerva-app-shell>
      </div>
    </>
  );
}
`,html:`<!-- The transform makes the fixed sidebar relative to this preview frame. -->
<div style="height: 360px; overflow: auto; transform: translateZ(0)">
  <minerva-app-shell brand="Minerva">
    <nav slot="navigation" aria-label="Main">
      <a
        href="#dashboard"
        aria-current="page"
        style="display: block; padding: 6px 8px"
        >Dashboard</a
      >
      <a href="#projects" style="display: block; padding: 6px 8px">Projects</a>
      <a href="#settings" style="display: block; padding: 6px 8px">Settings</a>
    </nav>
    <minerva-button slot="header-actions" size="small" variant="ghost"
      >Ada Lovelace</minerva-button
    >
    <minerva-page>
      <minerva-page-header
        heading="Dashboard"
        description="Page content goes in the default slot, inside the main landmark. Tab once to reveal the skip link."
      ></minerva-page-header>
    </minerva-page>
  </minerva-app-shell>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The docs use hash routing: keep the demo navigation links from navigating.
  // closeNavigation() dismisses the mobile drawer once a link is chosen.
  const shell = document.querySelector("minerva-app-shell");
  const onClick = (event) => {
    if (!event.target.closest("nav a")) return;
    event.preventDefault();
    shell.closeNavigation();
  };
  shell.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};