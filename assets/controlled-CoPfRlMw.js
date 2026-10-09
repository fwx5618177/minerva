import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AppShellControlled.vue -->

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

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
const lock = ref<HTMLElement & { checked: boolean }>();
const nav = ref<
  HTMLElement & { sections: unknown[]; activeId: string; collapsed: boolean }
>();
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
const navSections = [
  {
    id: "workspace",
    items: [
      { id: "inbox", label: "Inbox", icon: "✉" },
      { id: "archive", label: "Archive", icon: "▤" },
    ],
  },
];
const sync = () => {
  nav.value!.collapsed = shell.value!.hasAttribute("collapsed");
};
const observer = new MutationObserver(sync);
const onNavigate = (event: Event) => {
  const { value, item } = (
    event as CustomEvent<{ value: string; item: { label: string } }>
  ).detail;
  event.preventDefault();
  nav.value!.activeId = value;
  root
    .value!.querySelector("minerva-page-header")!
    .setAttribute("heading", item.label);
  shell.value!.closeNavigation();
};
const onClick = (event: Event) => {
  const id = (event.target as Element).closest("minerva-button")?.id;
  if (id === "expand") shell.value!.expandNavigation();
  if (id === "focus-main") shell.value!.focusMain();
};

onMounted(() => {
  observer.observe(shell.value!, {
    attributes: true,
    attributeFilter: ["collapsed"],
  });
  sync();
});

onBeforeUnmount(() => {
  observer.disconnect();
});
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
      <minerva-checkbox
        id="lock"
        label="Lock sidebar mode"
        ref="lock"
      ></minerva-checkbox>
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
      >
        <minerva-nav-tree
          slot="navigation"
          active-id="inbox"
          aria-label="Workspace"
          ref="nav"
          :sections.prop="navSections"
          @minerva-select="onNavigate"
        ></minerva-nav-tree>
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
  type AfterViewInit,
  type OnDestroy,
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
        <minerva-checkbox
          id="lock"
          label="Lock sidebar mode"
          #lock
        ></minerva-checkbox>
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
        >
          <minerva-nav-tree
            slot="navigation"
            active-id="inbox"
            aria-label="Workspace"
            #nav
            [sections]="navSections"
            (minerva-select)="onNavigate($event)"
          ></minerva-nav-tree>
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
export class AppShellControlledComponent implements AfterViewInit, OnDestroy {
  @ViewChild("root") root!: ElementRef<HTMLElement>;
  @ViewChild("shell") shell!: ElementRef<Shell>;
  @ViewChild("lock") lock!: ElementRef<HTMLElement & { checked: boolean }>;
  @ViewChild("nav") nav!: ElementRef<
    HTMLElement & { sections: unknown[]; activeId: string; collapsed: boolean }
  >;
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
  navSections = [
    {
      id: "workspace",
      items: [
        { id: "inbox", label: "Inbox", icon: "✉" },
        { id: "archive", label: "Archive", icon: "▤" },
      ],
    },
  ];
  sync = () => {
    this.nav.nativeElement.collapsed =
      this.shell.nativeElement.hasAttribute("collapsed");
  };
  observer = new MutationObserver(this.sync);
  onNavigate = (event: Event) => {
    const { value, item } = (
      event as CustomEvent<{ value: string; item: { label: string } }>
    ).detail;
    event.preventDefault();
    this.nav.nativeElement.activeId = value;
    this.root.nativeElement
      .querySelector("minerva-page-header")!
      .setAttribute("heading", item.label);
    this.shell.nativeElement.closeNavigation();
  };
  onClick = (event: Event) => {
    const id = (event.target as Element).closest("minerva-button")?.id;
    if (id === "expand") this.shell.nativeElement.expandNavigation();
    if (id === "focus-main") this.shell.nativeElement.focusMain();
  };

  ngAfterViewInit(): void {
    this.observer.observe(this.shell.nativeElement, {
      attributes: true,
      attributeFilter: ["collapsed"],
    });
    this.sync();
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
`,svelte:`<!-- AppShellControlled.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

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
  let lock: HTMLElement & { checked: boolean };
  let nav: HTMLElement & {
    sections: unknown[];
    activeId: string;
    collapsed: boolean;
  };
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
  const navSections = [
    {
      id: "workspace",
      items: [
        { id: "inbox", label: "Inbox", icon: "✉" },
        { id: "archive", label: "Archive", icon: "▤" },
      ],
    },
  ];
  const sync = () => {
    nav.collapsed = shell.hasAttribute("collapsed");
  };
  const observer = new MutationObserver(sync);
  const onNavigate = (event: Event) => {
    const { value, item } = (
      event as CustomEvent<{ value: string; item: { label: string } }>
    ).detail;
    event.preventDefault();
    nav.activeId = value;
    root
      .querySelector("minerva-page-header")!
      .setAttribute("heading", item.label);
    shell.closeNavigation();
  };
  const onClick = (event: Event) => {
    const id = (event.target as Element).closest("minerva-button")?.id;
    if (id === "expand") shell.expandNavigation();
    if (id === "focus-main") shell.focusMain();
  };

  onMount(() => {
    observer.observe(shell, { attributes: true, attributeFilter: ["collapsed"] });
    sync();
    return () => {
      observer.disconnect();
    };
  });
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
    <minerva-checkbox id="lock" label="Lock sidebar mode" bind:this={lock}></minerva-checkbox>
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
    >
      <minerva-nav-tree
        slot="navigation"
        active-id="inbox"
        aria-label="Workspace"
        bind:this={nav}
        sections={navSections}
        onminerva-select={onNavigate}
      ></minerva-nav-tree>
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

import { createSignal, onCleanup, onMount } from "solid-js";

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
  let lock!: HTMLElement & { checked: boolean };
  let nav!: HTMLElement & {
    sections: unknown[];
    activeId: string;
    collapsed: boolean;
  };
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
  const navSections = [
    {
      id: "workspace",
      items: [
        { id: "inbox", label: "Inbox", icon: "✉" },
        { id: "archive", label: "Archive", icon: "▤" },
      ],
    },
  ];
  const sync = () => {
    nav.collapsed = shell.hasAttribute("collapsed");
  };
  const observer = new MutationObserver(sync);
  const onNavigate = (event: Event) => {
    const { value, item } = (
      event as CustomEvent<{ value: string; item: { label: string } }>
    ).detail;
    event.preventDefault();
    nav.activeId = value;
    root
      .querySelector("minerva-page-header")!
      .setAttribute("heading", item.label);
    shell.closeNavigation();
  };
  const onClick = (event: Event) => {
    const id = (event.target as Element).closest("minerva-button")?.id;
    if (id === "expand") shell.expandNavigation();
    if (id === "focus-main") shell.focusMain();
  };

  onMount(() => {
    observer.observe(shell, {
      attributes: true,
      attributeFilter: ["collapsed"],
    });
    sync();
  });

  onCleanup(() => {
    observer.disconnect();
  });

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
        <minerva-checkbox
          id="lock"
          label="Lock sidebar mode"
          ref={lock}
        ></minerva-checkbox>
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
        >
          <minerva-nav-tree
            slot="navigation"
            active-id="inbox"
            aria-label="Workspace"
            ref={nav}
            prop:sections={navSections}
            on:minerva-select={onNavigate}
          ></minerva-nav-tree>
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
  <minerva-checkbox id="lock" label="Lock sidebar mode"></minerva-checkbox>
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
    <minerva-nav-tree
      slot="navigation"
      active-id="inbox"
      aria-label="Workspace"
    ></minerva-nav-tree>
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
  import "minerva-design/web-components";

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
  const nav = document.querySelector("minerva-nav-tree");
  nav.sections = [
    {
      id: "workspace",
      items: [
        { id: "inbox", label: "Inbox", icon: "✉" },
        { id: "archive", label: "Archive", icon: "▤" },
      ],
    },
  ];
  const sync = () => {
    nav.collapsed = shell.hasAttribute("collapsed");
  };
  const observer = new MutationObserver(sync);
  observer.observe(shell, { attributes: true, attributeFilter: ["collapsed"] });
  sync();
  const onNavigate = (event) => {
    const { value, item } = event.detail;
    event.preventDefault();
    nav.activeId = value;
    document
      .querySelector("minerva-page-header")
      .setAttribute("heading", item.label);
    shell.closeNavigation();
  };
  const onClick = (event) => {
    const id = event.target.closest("minerva-button")?.id;
    if (id === "expand") shell.expandNavigation();
    if (id === "focus-main") shell.focusMain();
  };
  shell.addEventListener("minerva-sidebar-mode-change", onMode);
  shell.addEventListener("minerva-open-change", onOpen);
  nav.addEventListener("minerva-select", onNavigate);
  document.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};