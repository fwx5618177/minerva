import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AppShellControlled.vue -->

<script setup lang="ts">
import { ref } from "vue";

// minerva-sidebar-mode-change / minerva-open-change are cancelable: calling
// preventDefault() keeps the current state. Methods drive the shell directly.

type Shell = HTMLElement & {
  sidebarMode: string;
  expandNavigation(): void;
  focusMain(): void;
  closeNavigation(): void;
};

const root = ref<HTMLElement>();
const shell = ref<Shell>();
const lock = ref<HTMLInputElement>();
const logText = ref("");

const onMode = (event: Event) => {
  const { mode } = (event as CustomEvent<{ mode: string }>).detail;
  if (lock.value!.checked) {
    event.preventDefault();
    logText.value = \`Blocked switch to "\${mode}"\`;
  } else {
    logText.value = \`Sidebar mode: \${mode}\`;
  }
};
const onOpen = (event: Event) => {
  const { open } = (event as CustomEvent<{ open: boolean }>).detail;
  logText.value = \`Drawer \${open ? "opened" : "closed"}\`;
};
// Close the mobile drawer once a link is chosen (and keep the docs'
// hash routing from navigating)
const onNavigate = (event: Event) => {
  if (!(event.target as Element).closest("nav a")) return;
  event.preventDefault();
  shell.value!.closeNavigation();
};
const onClick = (event: Event) => {
  const id = (event.target as Element).closest("minerva-button")?.id;
  if (id === "expand") shell.value!.expandNavigation();
  if (id === "focus-main") shell.value!.focusMain();
};
<\/script>

<template>
  <div ref="root" @click="onClick">
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-bottom: 12px;
      "
    >
      <label
        ><input id="lock" type="checkbox" ref="lock" /> Lock sidebar mode</label
      >
      <minerva-button id="expand" size="small" variant="outline" color="neutral"
        >expandNavigation()</minerva-button
      >
      <minerva-button
        id="focus-main"
        size="small"
        variant="outline"
        color="neutral"
        >focusMain()</minerva-button
      >
      <output id="log" aria-live="polite">{{ logText }}</output>
    </div>
    <div style="height: 360px; overflow: auto; transform: translateZ(0)">
      <minerva-app-shell
        id="shell"
        brand="Minerva"
        skip-link="Jump to the page"
        collapse-label="Shrink the sidebar"
        expand-label="Grow the sidebar"
        enable-floating-label="Float the rail"
        disable-floating-label="Stop floating"
        open-navigation-label="Show menu"
        close-navigation-label="Hide menu"
        ref="shell"
        @minerva-sidebar-mode-change="onMode"
        @minerva-open-change="onOpen"
        @click="onNavigate"
      >
        <nav slot="navigation">
          <a href="#inbox" style="display: block; padding: 6px 8px">Inbox</a>
          <a href="#archive" style="display: block; padding: 6px 8px"
            >Archive</a
          >
        </nav>
        <minerva-page>
          <minerva-page-header
            heading="Inbox"
            description="Sidebar changes are reported above."
          ></minerva-page-header>
        </minerva-page>
      </minerva-app-shell>
    </div>
  </div>
</template>
`,angular:`// app-shell-controlled.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// minerva-sidebar-mode-change / minerva-open-change are cancelable: calling
// preventDefault() keeps the current state. Methods drive the shell directly.
type Shell = HTMLElement & {
  sidebarMode: string;
  expandNavigation(): void;
  focusMain(): void;
  closeNavigation(): void;
};

@Component({
  selector: "app-app-shell-controlled",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div #root (click)="onClick($event)">
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          margin-bottom: 12px;
        "
      >
        <label
          ><input id="lock" type="checkbox" #lock /> Lock sidebar mode</label
        >
        <minerva-button
          id="expand"
          size="small"
          variant="outline"
          color="neutral"
          >expandNavigation()</minerva-button
        >
        <minerva-button
          id="focus-main"
          size="small"
          variant="outline"
          color="neutral"
          >focusMain()</minerva-button
        >
        <output id="log" aria-live="polite">{{ logText }}</output>
      </div>
      <div style="height: 360px; overflow: auto; transform: translateZ(0)">
        <minerva-app-shell
          id="shell"
          brand="Minerva"
          skip-link="Jump to the page"
          collapse-label="Shrink the sidebar"
          expand-label="Grow the sidebar"
          enable-floating-label="Float the rail"
          disable-floating-label="Stop floating"
          open-navigation-label="Show menu"
          close-navigation-label="Hide menu"
          #shell
          (minerva-sidebar-mode-change)="onMode($event)"
          (minerva-open-change)="onOpen($event)"
          (click)="onNavigate($event)"
        >
          <nav slot="navigation">
            <a href="#inbox" style="display: block; padding: 6px 8px">Inbox</a>
            <a href="#archive" style="display: block; padding: 6px 8px"
              >Archive</a
            >
          </nav>
          <minerva-page>
            <minerva-page-header
              heading="Inbox"
              description="Sidebar changes are reported above."
            ></minerva-page-header>
          </minerva-page>
        </minerva-app-shell>
      </div>
    </div>
  \`,
})
export class AppShellControlledComponent {
  @ViewChild("root") root!: ElementRef<HTMLElement>;
  @ViewChild("shell") shell!: ElementRef<Shell>;
  @ViewChild("lock") lock!: ElementRef<HTMLInputElement>;
  logText = "";

  onMode = (event: Event) => {
    const { mode } = (event as CustomEvent<{ mode: string }>).detail;
    if (this.lock.nativeElement.checked) {
      event.preventDefault();
      this.logText = \`Blocked switch to "\${mode}"\`;
    } else {
      this.logText = \`Sidebar mode: \${mode}\`;
    }
  };
  onOpen = (event: Event) => {
    const { open } = (event as CustomEvent<{ open: boolean }>).detail;
    this.logText = \`Drawer \${open ? "opened" : "closed"}\`;
  };
  // Close the mobile drawer once a link is chosen (and keep the docs'
  // hash routing from navigating)
  onNavigate = (event: Event) => {
    if (!(event.target as Element).closest("nav a")) return;
    event.preventDefault();
    this.shell.nativeElement.closeNavigation();
  };
  onClick = (event: Event) => {
    const id = (event.target as Element).closest("minerva-button")?.id;
    if (id === "expand") this.shell.nativeElement.expandNavigation();
    if (id === "focus-main") this.shell.nativeElement.focusMain();
  };
}
`,svelte:`<!-- AppShellControlled.svelte -->

<script lang="ts">
  // minerva-sidebar-mode-change / minerva-open-change are cancelable: calling
  // preventDefault() keeps the current state. Methods drive the shell directly.

  type Shell = HTMLElement & {
    sidebarMode: string;
    expandNavigation(): void;
    focusMain(): void;
    closeNavigation(): void;
  };

  let root: HTMLElement;
  let shell: Shell;
  let lock: HTMLInputElement;
  let logText = $state("");

  const onMode = (event: Event) => {
    const { mode } = (event as CustomEvent<{ mode: string }>).detail;
    if (lock.checked) {
      event.preventDefault();
      logText = \`Blocked switch to "\${mode}"\`;
    } else {
      logText = \`Sidebar mode: \${mode}\`;
    }
  };
  const onOpen = (event: Event) => {
    const { open } = (event as CustomEvent<{ open: boolean }>).detail;
    logText = \`Drawer \${open ? "opened" : "closed"}\`;
  };
  // Close the mobile drawer once a link is chosen (and keep the docs'
  // hash routing from navigating)
  const onNavigate = (event: Event) => {
    if (!(event.target as Element).closest("nav a")) return;
    event.preventDefault();
    shell.closeNavigation();
  };
  const onClick = (event: Event) => {
    const id = (event.target as Element).closest("minerva-button")?.id;
    if (id === "expand") shell.expandNavigation();
    if (id === "focus-main") shell.focusMain();
  };
<\/script>

<div
  bind:this={root}
  onclick={onClick}
>
  <div
    style="
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      margin-bottom: 12px;
    "
  >
    <label><input id="lock" type="checkbox" bind:this={lock} /> Lock sidebar mode</label>
    <minerva-button id="expand" size="small" variant="outline" color="neutral"
      >expandNavigation()</minerva-button>
    <minerva-button id="focus-main" size="small" variant="outline" color="neutral"
      >focusMain()</minerva-button>
    <output id="log" aria-live="polite">{logText}</output>
  </div>
  <div style="height: 360px; overflow: auto; transform: translateZ(0)">
    <minerva-app-shell
      id="shell"
      brand="Minerva"
      skip-link="Jump to the page"
      collapse-label="Shrink the sidebar"
      expand-label="Grow the sidebar"
      enable-floating-label="Float the rail"
      disable-floating-label="Stop floating"
      open-navigation-label="Show menu"
      close-navigation-label="Hide menu"
      bind:this={shell}
      onminerva-sidebar-mode-change={onMode}
      onminerva-open-change={onOpen}
      onclick={onNavigate}
    >
      <nav slot="navigation">
        <a href="#inbox" style="display: block; padding: 6px 8px">Inbox</a>
        <a href="#archive" style="display: block; padding: 6px 8px">Archive</a>
      </nav>
      <minerva-page>
        <minerva-page-header
          heading="Inbox"
          description="Sidebar changes are reported above."
        ></minerva-page-header>
      </minerva-page>
    </minerva-app-shell>
  </div>
</div>
`,solid:`// AppShellControlled.tsx

import { createSignal } from "solid-js";

// minerva-sidebar-mode-change / minerva-open-change are cancelable: calling
// preventDefault() keeps the current state. Methods drive the shell directly.
type Shell = HTMLElement & {
  sidebarMode: string;
  expandNavigation(): void;
  focusMain(): void;
  closeNavigation(): void;
};

export default function AppShellControlled() {
  let root!: HTMLElement;
  let shell!: Shell;
  let lock!: HTMLInputElement;
  const [logText, setLogText] = createSignal("");

  const onMode = (event: Event) => {
    const { mode } = (event as CustomEvent<{ mode: string }>).detail;
    if (lock.checked) {
      event.preventDefault();
      setLogText(\`Blocked switch to "\${mode}"\`);
    } else {
      setLogText(\`Sidebar mode: \${mode}\`);
    }
  };
  const onOpen = (event: Event) => {
    const { open } = (event as CustomEvent<{ open: boolean }>).detail;
    setLogText(\`Drawer \${open ? "opened" : "closed"}\`);
  };
  // Close the mobile drawer once a link is chosen (and keep the docs'
  // hash routing from navigating)
  const onNavigate = (event: Event) => {
    if (!(event.target as Element).closest("nav a")) return;
    event.preventDefault();
    shell.closeNavigation();
  };
  const onClick = (event: Event) => {
    const id = (event.target as Element).closest("minerva-button")?.id;
    if (id === "expand") shell.expandNavigation();
    if (id === "focus-main") shell.focusMain();
  };

  return (
    <div ref={root} on:click={onClick}>
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          margin-bottom: 12px;
        "
      >
        <label>
          <input id="lock" type="checkbox" ref={lock} /> Lock sidebar mode
        </label>
        <minerva-button
          id="expand"
          size="small"
          variant="outline"
          color="neutral"
        >
          expandNavigation()
        </minerva-button>
        <minerva-button
          id="focus-main"
          size="small"
          variant="outline"
          color="neutral"
        >
          focusMain()
        </minerva-button>
        <output id="log" aria-live="polite">
          {logText()}
        </output>
      </div>
      <div style="height: 360px; overflow: auto; transform: translateZ(0)">
        <minerva-app-shell
          id="shell"
          brand="Minerva"
          skip-link="Jump to the page"
          collapse-label="Shrink the sidebar"
          expand-label="Grow the sidebar"
          enable-floating-label="Float the rail"
          disable-floating-label="Stop floating"
          open-navigation-label="Show menu"
          close-navigation-label="Hide menu"
          ref={shell}
          on:minerva-sidebar-mode-change={onMode}
          on:minerva-open-change={onOpen}
          on:click={onNavigate}
        >
          <nav slot="navigation">
            <a href="#inbox" style="display: block; padding: 6px 8px">
              Inbox
            </a>
            <a href="#archive" style="display: block; padding: 6px 8px">
              Archive
            </a>
          </nav>
          <minerva-page>
            <minerva-page-header
              heading="Inbox"
              description="Sidebar changes are reported above."
            ></minerva-page-header>
          </minerva-page>
        </minerva-app-shell>
      </div>
    </div>
  );
}
`,html:`<div
  style="
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-bottom: 12px;
  "
>
  <label><input id="lock" type="checkbox" /> Lock sidebar mode</label>
  <minerva-button id="expand" size="small" variant="outline" color="neutral"
    >expandNavigation()</minerva-button
  >
  <minerva-button id="focus-main" size="small" variant="outline" color="neutral"
    >focusMain()</minerva-button
  >
  <output id="log" aria-live="polite"></output>
</div>
<div style="height: 360px; overflow: auto; transform: translateZ(0)">
  <minerva-app-shell
    id="shell"
    brand="Minerva"
    skip-link="Jump to the page"
    collapse-label="Shrink the sidebar"
    expand-label="Grow the sidebar"
    enable-floating-label="Float the rail"
    disable-floating-label="Stop floating"
    open-navigation-label="Show menu"
    close-navigation-label="Hide menu"
  >
    <nav slot="navigation">
      <a href="#inbox" style="display: block; padding: 6px 8px">Inbox</a>
      <a href="#archive" style="display: block; padding: 6px 8px">Archive</a>
    </nav>
    <minerva-page>
      <minerva-page-header
        heading="Inbox"
        description="Sidebar changes are reported above."
      ></minerva-page-header>
    </minerva-page>
  </minerva-app-shell>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // minerva-sidebar-mode-change / minerva-open-change are cancelable: calling
  // preventDefault() keeps the current state. Methods drive the shell directly.
  const shell = document.querySelector("#shell");
  const lock = document.querySelector("#lock");
  const log = document.querySelector("#log");
  const onMode = (event) => {
    const { mode } = event.detail;
    if (lock.checked) {
      event.preventDefault();
      log.value = \`Blocked switch to "\${mode}"\`;
    } else {
      log.value = \`Sidebar mode: \${mode}\`;
    }
  };
  const onOpen = (event) => {
    const { open } = event.detail;
    log.value = \`Drawer \${open ? "opened" : "closed"}\`;
  };
  // Close the mobile drawer once a link is chosen (and keep the docs'
  // hash routing from navigating)
  const onNavigate = (event) => {
    if (!event.target.closest("nav a")) return;
    event.preventDefault();
    shell.closeNavigation();
  };
  const onClick = (event) => {
    const id = event.target.closest("minerva-button")?.id;
    if (id === "expand") shell.expandNavigation();
    if (id === "focus-main") shell.focusMain();
  };
  shell.addEventListener("minerva-sidebar-mode-change", onMode);
  shell.addEventListener("minerva-open-change", onOpen);
  shell.addEventListener("click", onNavigate);
  document.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};