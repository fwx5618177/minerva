import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AppShellBasic.vue -->

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

type Item = { id: string; label: string; icon: string };
type NavTree = HTMLElement & {
  sections: { id: string; items: Item[] }[];
  activeId: string;
  collapsed: boolean;
};

const shell = ref<HTMLElement & { closeNavigation(): void }>();
const nav = ref<NavTree>();
const heading = ref<HTMLElement>();

const navSections = [
  {
    id: "workspace",
    items: [
      { id: "dashboard", label: "Dashboard", icon: "▦" },
      { id: "books", label: "Books", icon: "▤" },
      { id: "reviews", label: "Reviews", icon: "◇" },
      { id: "settings", label: "Settings", icon: "⚙" },
    ],
  },
];
const sync = () => {
  nav.value!.collapsed = shell.value!.hasAttribute("collapsed");
};
const observer = new MutationObserver(sync);
const onSelect = (event: Event) => {
  const { value, item } = (event as CustomEvent<{ value: string; item: Item }>)
    .detail;
  event.preventDefault();
  nav.value!.activeId = value;
  heading.value!.setAttribute("heading", item.label);
  shell.value!.closeNavigation();
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
  <!-- The transform contains the fixed sidebar inside this preview frame. -->
  <div style="height: 360px; overflow: auto; transform: translateZ(0)">
    <minerva-app-shell
      brand="Publishing Admin"
      navigation-label="Workspace navigation"
      ref="shell"
    >
      <span slot="brand-icon" aria-hidden="true">◇</span>
      <minerva-nav-tree
        slot="navigation"
        active-id="dashboard"
        aria-label="Workspace"
        ref="nav"
        :sections.prop="navSections"
        @minerva-select="onSelect"
      ></minerva-nav-tree>
      <minerva-badge slot="header-actions" color="neutral" variant="subtle"
        >Workspace</minerva-badge
      >
      <minerva-page>
        <minerva-page-header
          heading="Dashboard"
          description="Select a section from the sidebar. Collapse it to keep more room for your content."
          ref="heading"
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
  type AfterViewInit,
  type OnDestroy,
} from "@angular/core";

type Item = { id: string; label: string; icon: string };
type NavTree = HTMLElement & {
  sections: { id: string; items: Item[] }[];
  activeId: string;
  collapsed: boolean;
};

@Component({
  selector: "app-app-shell-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <!-- The transform contains the fixed sidebar inside this preview frame. -->
    <div style="height: 360px; overflow: auto; transform: translateZ(0)">
      <minerva-app-shell
        brand="Publishing Admin"
        navigation-label="Workspace navigation"
        #shell
      >
        <span slot="brand-icon" aria-hidden="true">◇</span>
        <minerva-nav-tree
          slot="navigation"
          active-id="dashboard"
          aria-label="Workspace"
          #nav
          [sections]="navSections"
          (minerva-select)="onSelect($event)"
        ></minerva-nav-tree>
        <minerva-badge slot="header-actions" color="neutral" variant="subtle"
          >Workspace</minerva-badge
        >
        <minerva-page>
          <minerva-page-header
            heading="Dashboard"
            description="Select a section from the sidebar. Collapse it to keep more room for your content."
            #heading
          ></minerva-page-header>
        </minerva-page>
      </minerva-app-shell>
    </div>
  \`,
})
export class AppShellBasicComponent implements AfterViewInit, OnDestroy {
  @ViewChild("shell") shell!: ElementRef<
    HTMLElement & { closeNavigation(): void }
  >;
  @ViewChild("nav") nav!: ElementRef<NavTree>;
  @ViewChild("heading") heading!: ElementRef<HTMLElement>;

  navSections = [
    {
      id: "workspace",
      items: [
        { id: "dashboard", label: "Dashboard", icon: "▦" },
        { id: "books", label: "Books", icon: "▤" },
        { id: "reviews", label: "Reviews", icon: "◇" },
        { id: "settings", label: "Settings", icon: "⚙" },
      ],
    },
  ];
  sync = () => {
    this.nav.nativeElement.collapsed =
      this.shell.nativeElement.hasAttribute("collapsed");
  };
  observer = new MutationObserver(this.sync);
  onSelect = (event: Event) => {
    const { value, item } = (
      event as CustomEvent<{ value: string; item: Item }>
    ).detail;
    event.preventDefault();
    this.nav.nativeElement.activeId = value;
    this.heading.nativeElement.setAttribute("heading", item.label);
    this.shell.nativeElement.closeNavigation();
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
`,svelte:`<!-- AppShellBasic.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  type Item = { id: string; label: string; icon: string };
  type NavTree = HTMLElement & {
    sections: { id: string; items: Item[] }[];
    activeId: string;
    collapsed: boolean;
  };

  let shell: HTMLElement & { closeNavigation(): void };
  let nav: NavTree;
  let heading: HTMLElement;

  const navSections = [
    {
      id: "workspace",
      items: [
        { id: "dashboard", label: "Dashboard", icon: "▦" },
        { id: "books", label: "Books", icon: "▤" },
        { id: "reviews", label: "Reviews", icon: "◇" },
        { id: "settings", label: "Settings", icon: "⚙" },
      ],
    },
  ];
  const sync = () => {
    nav.collapsed = shell.hasAttribute("collapsed");
  };
  const observer = new MutationObserver(sync);
  const onSelect = (event: Event) => {
    const { value, item } = (event as CustomEvent<{ value: string; item: Item }>)
      .detail;
    event.preventDefault();
    nav.activeId = value;
    heading.setAttribute("heading", item.label);
    shell.closeNavigation();
  };

  onMount(() => {
    observer.observe(shell, { attributes: true, attributeFilter: ["collapsed"] });
    sync();
    return () => {
      observer.disconnect();
    };
  });
<\/script>

<!-- The transform contains the fixed sidebar inside this preview frame. -->
<div style="height: 360px; overflow: auto; transform: translateZ(0)">
  <minerva-app-shell
    brand="Publishing Admin"
    navigation-label="Workspace navigation"
    bind:this={shell}
  >
    <span slot="brand-icon" aria-hidden="true">◇</span>
    <minerva-nav-tree
      slot="navigation"
      active-id="dashboard"
      aria-label="Workspace"
      bind:this={nav}
      sections={navSections}
      onminerva-select={onSelect}
    ></minerva-nav-tree>
    <minerva-badge slot="header-actions" color="neutral" variant="subtle"
      >Workspace</minerva-badge>
    <minerva-page>
      <minerva-page-header
        heading="Dashboard"
        description="Select a section from the sidebar. Collapse it to keep more room for your content."
        bind:this={heading}
      ></minerva-page-header>
    </minerva-page>
  </minerva-app-shell>
</div>
`,solid:`// AppShellBasic.tsx

import { onCleanup, onMount } from "solid-js";

type Item = { id: string; label: string; icon: string };
type NavTree = HTMLElement & {
  sections: { id: string; items: Item[] }[];
  activeId: string;
  collapsed: boolean;
};

export default function AppShellBasic() {
  let shell!: HTMLElement & { closeNavigation(): void };
  let nav!: NavTree;
  let heading!: HTMLElement;

  const navSections = [
    {
      id: "workspace",
      items: [
        { id: "dashboard", label: "Dashboard", icon: "▦" },
        { id: "books", label: "Books", icon: "▤" },
        { id: "reviews", label: "Reviews", icon: "◇" },
        { id: "settings", label: "Settings", icon: "⚙" },
      ],
    },
  ];
  const sync = () => {
    nav.collapsed = shell.hasAttribute("collapsed");
  };
  const observer = new MutationObserver(sync);
  const onSelect = (event: Event) => {
    const { value, item } = (
      event as CustomEvent<{ value: string; item: Item }>
    ).detail;
    event.preventDefault();
    nav.activeId = value;
    heading.setAttribute("heading", item.label);
    shell.closeNavigation();
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
    <>
      {/* The transform contains the fixed sidebar inside this preview frame. */}
      <div style="height: 360px; overflow: auto; transform: translateZ(0)">
        <minerva-app-shell
          brand="Publishing Admin"
          navigation-label="Workspace navigation"
          ref={shell}
        >
          <span slot="brand-icon" aria-hidden="true">
            ◇
          </span>
          <minerva-nav-tree
            slot="navigation"
            active-id="dashboard"
            aria-label="Workspace"
            ref={nav}
            prop:sections={navSections}
            on:minerva-select={onSelect}
          ></minerva-nav-tree>
          <minerva-badge slot="header-actions" color="neutral" variant="subtle">
            Workspace
          </minerva-badge>
          <minerva-page>
            <minerva-page-header
              heading="Dashboard"
              description="Select a section from the sidebar. Collapse it to keep more room for your content."
              ref={heading}
            ></minerva-page-header>
          </minerva-page>
        </minerva-app-shell>
      </div>
    </>
  );
}
`,html:`<!-- The transform contains the fixed sidebar inside this preview frame. -->
<div style="height: 360px; overflow: auto; transform: translateZ(0)">
  <minerva-app-shell
    brand="Publishing Admin"
    navigation-label="Workspace navigation"
  >
    <span slot="brand-icon" aria-hidden="true">◇</span>
    <minerva-nav-tree
      slot="navigation"
      active-id="dashboard"
      aria-label="Workspace"
    ></minerva-nav-tree>
    <minerva-badge slot="header-actions" color="neutral" variant="subtle"
      >Workspace</minerva-badge
    >
    <minerva-page>
      <minerva-page-header
        heading="Dashboard"
        description="Select a section from the sidebar. Collapse it to keep more room for your content."
      ></minerva-page-header>
    </minerva-page>
  </minerva-app-shell>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  const shell = document.querySelector("minerva-app-shell");
  const nav = document.querySelector("minerva-nav-tree");
  const heading = document.querySelector("minerva-page-header");
  nav.sections = [
    {
      id: "workspace",
      items: [
        { id: "dashboard", label: "Dashboard", icon: "▦" },
        { id: "books", label: "Books", icon: "▤" },
        { id: "reviews", label: "Reviews", icon: "◇" },
        { id: "settings", label: "Settings", icon: "⚙" },
      ],
    },
  ];
  const sync = () => {
    nav.collapsed = shell.hasAttribute("collapsed");
  };
  const observer = new MutationObserver(sync);
  observer.observe(shell, { attributes: true, attributeFilter: ["collapsed"] });
  sync();
  const onSelect = (event) => {
    const { value, item } = event.detail;
    event.preventDefault();
    nav.activeId = value;
    heading.setAttribute("heading", item.label);
    shell.closeNavigation();
  };
  nav.addEventListener("minerva-select", onSelect);
<\/script>
`}})))()}n();export{t as default};