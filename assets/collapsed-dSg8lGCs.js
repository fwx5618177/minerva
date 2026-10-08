import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- NavTreeCollapsed.vue -->

<script setup lang="ts">
import { ref } from "vue";

// collapsed keeps the icons only (labels stay the accessible names).

type Item = { id: string; label: string; href?: string; icon?: string };
type NavTree = HTMLElement & {
  sections: { id: string; items: Item[] }[];
  collapsed: boolean;
  activeId?: string;
};

const nav = ref<NavTree>();
const toggleText = ref("Expand sidebar");

const navSections = [
  {
    id: "main",
    items: [
      { id: "dashboard", label: "Dashboard", href: "/", icon: "📈" },
      { id: "projects", label: "Projects", href: "/projects", icon: "📁" },
      { id: "settings", label: "Settings", href: "/settings", icon: "⚙️" },
    ],
  },
];
const onToggle = () => {
  nav.value!.collapsed = !nav.value!.collapsed;
  toggleText.value = nav.value!.collapsed
    ? "Expand sidebar"
    : "Collapse sidebar";
};
const onSelect = (e: Event) => {
  e.preventDefault();
  nav.value!.activeId = (e as CustomEvent<{ value: string }>).detail.value;
};
<\/script>

<template>
  <div style="display: grid; gap: 12px; justify-items: start">
    <minerva-button
      id="toggle"
      size="small"
      variant="outline"
      color="neutral"
      @click="onToggle"
      >{{ toggleText }}</minerva-button
    >
    <minerva-nav-tree
      id="nav"
      collapsed
      active-id="dashboard"
      aria-label="Compact navigation"
      ref="nav"
      :sections.prop="navSections"
      @minerva-select="onSelect"
    ></minerva-nav-tree>
  </div>
</template>
`,angular:`// nav-tree-collapsed.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// collapsed keeps the icons only (labels stay the accessible names).
type Item = { id: string; label: string; href?: string; icon?: string };
type NavTree = HTMLElement & {
  sections: { id: string; items: Item[] }[];
  collapsed: boolean;
  activeId?: string;
};

@Component({
  selector: "app-nav-tree-collapsed",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; justify-items: start">
      <minerva-button
        id="toggle"
        size="small"
        variant="outline"
        color="neutral"
        (click)="onToggle($event)"
        >{{ toggleText }}</minerva-button
      >
      <minerva-nav-tree
        id="nav"
        collapsed
        active-id="dashboard"
        aria-label="Compact navigation"
        #nav
        [sections]="navSections"
        (minerva-select)="onSelect($event)"
      ></minerva-nav-tree>
    </div>
  \`,
})
export class NavTreeCollapsedComponent {
  @ViewChild("nav") nav!: ElementRef<NavTree>;
  toggleText = "Expand sidebar";

  navSections = [
    {
      id: "main",
      items: [
        { id: "dashboard", label: "Dashboard", href: "/", icon: "📈" },
        { id: "projects", label: "Projects", href: "/projects", icon: "📁" },
        { id: "settings", label: "Settings", href: "/settings", icon: "⚙️" },
      ],
    },
  ];
  onToggle = () => {
    this.nav.nativeElement.collapsed = !this.nav.nativeElement.collapsed;
    this.toggleText = this.nav.nativeElement.collapsed
      ? "Expand sidebar"
      : "Collapse sidebar";
  };
  onSelect = (e: Event) => {
    e.preventDefault();
    this.nav.nativeElement.activeId = (
      e as CustomEvent<{ value: string }>
    ).detail.value;
  };
}
`,svelte:`<!-- NavTreeCollapsed.svelte -->

<script lang="ts">
  // collapsed keeps the icons only (labels stay the accessible names).

  type Item = { id: string; label: string; href?: string; icon?: string };
  type NavTree = HTMLElement & {
    sections: { id: string; items: Item[] }[];
    collapsed: boolean;
    activeId?: string;
  };

  let nav: NavTree;
  let toggleText = $state("Expand sidebar");

  const navSections = [
    {
      id: "main",
      items: [
        { id: "dashboard", label: "Dashboard", href: "/", icon: "📈" },
        { id: "projects", label: "Projects", href: "/projects", icon: "📁" },
        { id: "settings", label: "Settings", href: "/settings", icon: "⚙️" },
      ],
    },
  ];
  const onToggle = () => {
    nav.collapsed = !nav.collapsed;
    toggleText = nav.collapsed ? "Expand sidebar" : "Collapse sidebar";
  };
  const onSelect = (e: Event) => {
    e.preventDefault();
    nav.activeId = (e as CustomEvent<{ value: string }>).detail.value;
  };
<\/script>

<div style="display: grid; gap: 12px; justify-items: start">
  <minerva-button
    id="toggle"
    size="small"
    variant="outline"
    color="neutral"
    onclick={onToggle}
  >{toggleText}</minerva-button>
  <minerva-nav-tree
    id="nav"
    collapsed
    active-id="dashboard"
    aria-label="Compact navigation"
    bind:this={nav}
    sections={navSections}
    onminerva-select={onSelect}
  ></minerva-nav-tree>
</div>
`,solid:`// NavTreeCollapsed.tsx

import { createSignal } from "solid-js";

// collapsed keeps the icons only (labels stay the accessible names).
type Item = { id: string; label: string; href?: string; icon?: string };
type NavTree = HTMLElement & {
  sections: { id: string; items: Item[] }[];
  collapsed: boolean;
  activeId?: string;
};

export default function NavTreeCollapsed() {
  let nav!: NavTree;
  const [toggleText, setToggleText] = createSignal("Expand sidebar");

  const navSections = [
    {
      id: "main",
      items: [
        { id: "dashboard", label: "Dashboard", href: "/", icon: "📈" },
        { id: "projects", label: "Projects", href: "/projects", icon: "📁" },
        { id: "settings", label: "Settings", href: "/settings", icon: "⚙️" },
      ],
    },
  ];
  const onToggle = () => {
    nav.collapsed = !nav.collapsed;
    setToggleText(nav.collapsed ? "Expand sidebar" : "Collapse sidebar");
  };
  const onSelect = (e: Event) => {
    e.preventDefault();
    nav.activeId = (e as CustomEvent<{ value: string }>).detail.value;
  };

  return (
    <div style="display: grid; gap: 12px; justify-items: start">
      <minerva-button
        id="toggle"
        size="small"
        variant="outline"
        color="neutral"
        on:click={onToggle}
      >
        {toggleText()}
      </minerva-button>
      <minerva-nav-tree
        id="nav"
        collapsed
        active-id="dashboard"
        aria-label="Compact navigation"
        ref={nav}
        prop:sections={navSections}
        on:minerva-select={onSelect}
      ></minerva-nav-tree>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; justify-items: start">
  <minerva-button id="toggle" size="small" variant="outline" color="neutral"
    >Expand sidebar</minerva-button
  >
  <minerva-nav-tree
    id="nav"
    collapsed
    active-id="dashboard"
    aria-label="Compact navigation"
  ></minerva-nav-tree>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // collapsed keeps the icons only (labels stay the accessible names).
  const nav = document.querySelector("#nav");
  const toggle = document.querySelector("#toggle");
  nav.sections = [
    {
      id: "main",
      items: [
        { id: "dashboard", label: "Dashboard", href: "/", icon: "📈" },
        { id: "projects", label: "Projects", href: "/projects", icon: "📁" },
        { id: "settings", label: "Settings", href: "/settings", icon: "⚙️" },
      ],
    },
  ];
  const onToggle = () => {
    nav.collapsed = !nav.collapsed;
    toggle.textContent = nav.collapsed ? "Expand sidebar" : "Collapse sidebar";
  };
  const onSelect = (e) => {
    e.preventDefault();
    nav.activeId = e.detail.value;
  };
  toggle.addEventListener("click", onToggle);
  nav.addEventListener("minerva-select", onSelect);
<\/script>
`}})))()}n();export{t as default};