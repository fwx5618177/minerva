import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AppShellSidebarModes.vue -->

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
  <div style="height: 380px; overflow: auto; transform: translateZ(0)">
    <minerva-app-shell
      id="modes-shell"
      sidebar-mode="compact"
      navigation-label="Workspace navigation"
      ref="shell"
      @click="onClick"
    >
      <span slot="brand-icon">◆</span>
      <span slot="brand">Publishing Admin</span>
      <nav slot="navigation">
        <a
          href="#books"
          title="Books"
          style="display: flex; gap: 8px; padding: 6px 8px"
          >📚 <span class="nav-label">Books</span></a
        >
        <a
          href="#reviews"
          title="Reviews"
          style="display: flex; gap: 8px; padding: 6px 8px"
          >✍ <span class="nav-label">Reviews</span></a
        >
        <a
          href="#settings"
          title="Settings"
          style="display: flex; gap: 8px; padding: 6px 8px"
          >⚙ <span class="nav-label">Settings</span></a
        >
      </nav>
      <minerva-button slot="header-actions" size="small"
        >Account</minerva-button
      >
      <div
        slot="page-navigation"
        style="padding: 8px 24px; border-bottom: 1px solid var(--border-color)"
      >
        Overview · Activity · Members
      </div>
      <minerva-page>
        <minerva-page-header
          heading="Books"
          description="Use the sidebar buttons to expand the rail or pin it as a floating rail."
        ></minerva-page-header>
      </minerva-page>
    </minerva-app-shell>
  </div>
</template>

<style>
#modes-shell[collapsed] .nav-label {
  display: none;
}
</style>
`,angular:`// app-shell-sidebar-modes.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The docs use hash routing: keep the demo navigation links from navigating.
// closeNavigation() dismisses the mobile drawer once a link is chosen.

@Component({
  selector: "app-app-shell-sidebar-modes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="height: 380px; overflow: auto; transform: translateZ(0)">
      <minerva-app-shell
        id="modes-shell"
        sidebar-mode="compact"
        navigation-label="Workspace navigation"
        #shell
        (click)="onClick($event)"
      >
        <span slot="brand-icon">◆</span>
        <span slot="brand">Publishing Admin</span>
        <nav slot="navigation">
          <a
            href="#books"
            title="Books"
            style="display: flex; gap: 8px; padding: 6px 8px"
            >📚 <span class="nav-label">Books</span></a
          >
          <a
            href="#reviews"
            title="Reviews"
            style="display: flex; gap: 8px; padding: 6px 8px"
            >✍ <span class="nav-label">Reviews</span></a
          >
          <a
            href="#settings"
            title="Settings"
            style="display: flex; gap: 8px; padding: 6px 8px"
            >⚙ <span class="nav-label">Settings</span></a
          >
        </nav>
        <minerva-button slot="header-actions" size="small"
          >Account</minerva-button
        >
        <div
          slot="page-navigation"
          style="padding: 8px 24px; border-bottom: 1px solid var(--border-color)"
        >
          Overview · Activity · Members
        </div>
        <minerva-page>
          <minerva-page-header
            heading="Books"
            description="Use the sidebar buttons to expand the rail or pin it as a floating rail."
          ></minerva-page-header>
        </minerva-page>
      </minerva-app-shell>
    </div>
  \`,
  styles: \`
    #modes-shell[collapsed] .nav-label {
      display: none;
    }
  \`,
})
export class AppShellSidebarModesComponent {
  @ViewChild("shell") shell!: ElementRef<
    HTMLElement & { closeNavigation(): void }
  >;

  onClick = (event: Event) => {
    if (!(event.target as Element).closest("nav a")) return;
    event.preventDefault();
    this.shell.nativeElement.closeNavigation();
  };
}
`,svelte:`<!-- AppShellSidebarModes.svelte -->

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

<div style="height: 380px; overflow: auto; transform: translateZ(0)">
  <minerva-app-shell
    id="modes-shell"
    sidebar-mode="compact"
    navigation-label="Workspace navigation"
    bind:this={shell}
    onclick={onClick}
  >
    <span slot="brand-icon">◆</span>
    <span slot="brand">Publishing Admin</span>
    <nav slot="navigation">
      <a
        href="#books"
        title="Books"
        style="display: flex; gap: 8px; padding: 6px 8px"
        >📚 <span class="nav-label">Books</span></a>
      <a
        href="#reviews"
        title="Reviews"
        style="display: flex; gap: 8px; padding: 6px 8px"
        >✍ <span class="nav-label">Reviews</span></a>
      <a
        href="#settings"
        title="Settings"
        style="display: flex; gap: 8px; padding: 6px 8px"
        >⚙ <span class="nav-label">Settings</span></a>
    </nav>
    <minerva-button slot="header-actions" size="small">Account</minerva-button>
    <div
      slot="page-navigation"
      style="padding: 8px 24px; border-bottom: 1px solid var(--border-color)"
    >
      Overview · Activity · Members
    </div>
    <minerva-page>
      <minerva-page-header
        heading="Books"
        description="Use the sidebar buttons to expand the rail or pin it as a floating rail."
      ></minerva-page-header>
    </minerva-page>
  </minerva-app-shell>
</div>

<style>
    #modes-shell[collapsed] .nav-label {
      display: none;
    }
</style>
`,solid:`// AppShellSidebarModes.tsx

// The docs use hash routing: keep the demo navigation links from navigating.
// closeNavigation() dismisses the mobile drawer once a link is chosen.

export default function AppShellSidebarModes() {
  let shell!: HTMLElement & { closeNavigation(): void };

  const onClick = (event: Event) => {
    if (!(event.target as Element).closest("nav a")) return;
    event.preventDefault();
    shell.closeNavigation();
  };

  return (
    <>
      <style>{\`
        #modes-shell[collapsed] .nav-label {
          display: none;
        }
      \`}</style>
      <div style="height: 380px; overflow: auto; transform: translateZ(0)">
        <minerva-app-shell
          id="modes-shell"
          sidebar-mode="compact"
          navigation-label="Workspace navigation"
          ref={shell}
          on:click={onClick}
        >
          <span slot="brand-icon">◆</span>
          <span slot="brand">Publishing Admin</span>
          <nav slot="navigation">
            <a
              href="#books"
              title="Books"
              style="display: flex; gap: 8px; padding: 6px 8px"
            >
              📚 <span class="nav-label">Books</span>
            </a>
            <a
              href="#reviews"
              title="Reviews"
              style="display: flex; gap: 8px; padding: 6px 8px"
            >
              ✍ <span class="nav-label">Reviews</span>
            </a>
            <a
              href="#settings"
              title="Settings"
              style="display: flex; gap: 8px; padding: 6px 8px"
            >
              ⚙ <span class="nav-label">Settings</span>
            </a>
          </nav>
          <minerva-button slot="header-actions" size="small">
            Account
          </minerva-button>
          <div
            slot="page-navigation"
            style="padding: 8px 24px; border-bottom: 1px solid var(--border-color)"
          >
            Overview · Activity · Members
          </div>
          <minerva-page>
            <minerva-page-header
              heading="Books"
              description="Use the sidebar buttons to expand the rail or pin it as a floating rail."
            ></minerva-page-header>
          </minerva-page>
        </minerva-app-shell>
      </div>
    </>
  );
}
`,html:`<style>
  #modes-shell[collapsed] .nav-label {
    display: none;
  }
</style>
<div style="height: 380px; overflow: auto; transform: translateZ(0)">
  <minerva-app-shell
    id="modes-shell"
    sidebar-mode="compact"
    navigation-label="Workspace navigation"
  >
    <span slot="brand-icon">◆</span>
    <span slot="brand">Publishing Admin</span>
    <nav slot="navigation">
      <a
        href="#books"
        title="Books"
        style="display: flex; gap: 8px; padding: 6px 8px"
        >📚 <span class="nav-label">Books</span></a
      >
      <a
        href="#reviews"
        title="Reviews"
        style="display: flex; gap: 8px; padding: 6px 8px"
        >✍ <span class="nav-label">Reviews</span></a
      >
      <a
        href="#settings"
        title="Settings"
        style="display: flex; gap: 8px; padding: 6px 8px"
        >⚙ <span class="nav-label">Settings</span></a
      >
    </nav>
    <minerva-button slot="header-actions" size="small">Account</minerva-button>
    <div
      slot="page-navigation"
      style="padding: 8px 24px; border-bottom: 1px solid var(--border-color)"
    >
      Overview · Activity · Members
    </div>
    <minerva-page>
      <minerva-page-header
        heading="Books"
        description="Use the sidebar buttons to expand the rail or pin it as a floating rail."
      ></minerva-page-header>
    </minerva-page>
  </minerva-app-shell>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

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