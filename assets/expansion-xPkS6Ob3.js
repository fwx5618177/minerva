import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- NavTreeExpansion.vue -->

<script setup lang="ts">
import { ref } from "vue";

// expandedIds is controlled through minerva-expanded-change (cancelable:
// here "Getting started" stays open). wrap-labels wraps long labels.

type Item = { id: string; label: string; href?: string; children?: Item[] };
type NavTree = HTMLElement & {
  sections: { id: string; title?: string; items: Item[] }[];
  expandedIds: string[];
};
type Detail = { expandedIds: string[]; item: Item; expanded: boolean };

const logText = ref("ArrowRight / ArrowLeft expand and collapse branches.");

const navSections = [
  {
    id: "docs",
    title: "Guides",
    items: [
      {
        id: "start",
        label: "Getting started",
        children: [
          { id: "install", label: "Installation", href: "/install" },
          {
            id: "first",
            label: "Your first page with Web Components",
            href: "/first",
          },
        ],
      },
      {
        id: "theming",
        label: "Theming",
        children: [
          { id: "tokens", label: "Design tokens", href: "/tokens" },
          {
            id: "palettes",
            label: "Palettes and dark mode",
            href: "/palettes",
          },
        ],
      },
    ],
  },
];
const navExpandedIds = ["start"];
const onExpanded = (e: Event) => {
  const { item, expanded } = (e as CustomEvent<Detail>).detail;
  if (item.id === "start" && !expanded) {
    e.preventDefault();
    logText.value = "Getting started stays open (event canceled).";
    return;
  }
  logText.value = \`\${item.label} \${expanded ? "expanded" : "collapsed"}\`;
};
const onSelect = (e: Event) => {
  const { item } = (e as CustomEvent<{ item: Item }>).detail;
  if (!item.children) e.preventDefault();
};
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 300px">
    <minerva-nav-tree
      id="nav"
      wrap-labels
      aria-label="Documentation"
      :sections.prop="navSections"
      :expandedIds.prop="navExpandedIds"
      @minerva-expanded-change="onExpanded"
      @minerva-select="onSelect"
    ></minerva-nav-tree>
    <output id="log">{{ logText }}</output>
  </div>
</template>
`,angular:`// nav-tree-expansion.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// expandedIds is controlled through minerva-expanded-change (cancelable:
// here "Getting started" stays open). wrap-labels wraps long labels.
type Item = { id: string; label: string; href?: string; children?: Item[] };
type NavTree = HTMLElement & {
  sections: { id: string; title?: string; items: Item[] }[];
  expandedIds: string[];
};
type Detail = { expandedIds: string[]; item: Item; expanded: boolean };

@Component({
  selector: "app-nav-tree-expansion",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 300px">
      <minerva-nav-tree
        id="nav"
        wrap-labels
        aria-label="Documentation"
        [sections]="navSections"
        [expandedIds]="navExpandedIds"
        (minerva-expanded-change)="onExpanded($event)"
        (minerva-select)="onSelect($event)"
      ></minerva-nav-tree>
      <output id="log">{{ logText }}</output>
    </div>
  \`,
})
export class NavTreeExpansionComponent {
  logText = "ArrowRight / ArrowLeft expand and collapse branches.";

  navSections = [
    {
      id: "docs",
      title: "Guides",
      items: [
        {
          id: "start",
          label: "Getting started",
          children: [
            { id: "install", label: "Installation", href: "/install" },
            {
              id: "first",
              label: "Your first page with Web Components",
              href: "/first",
            },
          ],
        },
        {
          id: "theming",
          label: "Theming",
          children: [
            { id: "tokens", label: "Design tokens", href: "/tokens" },
            {
              id: "palettes",
              label: "Palettes and dark mode",
              href: "/palettes",
            },
          ],
        },
      ],
    },
  ];
  navExpandedIds = ["start"];
  onExpanded = (e: Event) => {
    const { item, expanded } = (e as CustomEvent<Detail>).detail;
    if (item.id === "start" && !expanded) {
      e.preventDefault();
      this.logText = "Getting started stays open (event canceled).";
      return;
    }
    this.logText = \`\${item.label} \${expanded ? "expanded" : "collapsed"}\`;
  };
  onSelect = (e: Event) => {
    const { item } = (e as CustomEvent<{ item: Item }>).detail;
    if (!item.children) e.preventDefault();
  };
}
`,svelte:`<!-- NavTreeExpansion.svelte -->

<script lang="ts">
  // expandedIds is controlled through minerva-expanded-change (cancelable:
  // here "Getting started" stays open). wrap-labels wraps long labels.

  type Item = { id: string; label: string; href?: string; children?: Item[] };
  type NavTree = HTMLElement & {
    sections: { id: string; title?: string; items: Item[] }[];
    expandedIds: string[];
  };
  type Detail = { expandedIds: string[]; item: Item; expanded: boolean };

  let logText = $state("ArrowRight / ArrowLeft expand and collapse branches.");

  const navSections = [
    {
      id: "docs",
      title: "Guides",
      items: [
        {
          id: "start",
          label: "Getting started",
          children: [
            { id: "install", label: "Installation", href: "/install" },
            {
              id: "first",
              label: "Your first page with Web Components",
              href: "/first",
            },
          ],
        },
        {
          id: "theming",
          label: "Theming",
          children: [
            { id: "tokens", label: "Design tokens", href: "/tokens" },
            {
              id: "palettes",
              label: "Palettes and dark mode",
              href: "/palettes",
            },
          ],
        },
      ],
    },
  ];
  const navExpandedIds = ["start"];
  const onExpanded = (e: Event) => {
    const { item, expanded } = (e as CustomEvent<Detail>).detail;
    if (item.id === "start" && !expanded) {
      e.preventDefault();
      logText = "Getting started stays open (event canceled).";
      return;
    }
    logText = \`\${item.label} \${expanded ? "expanded" : "collapsed"}\`;
  };
  const onSelect = (e: Event) => {
    const { item } = (e as CustomEvent<{ item: Item }>).detail;
    if (!item.children) e.preventDefault();
  };
<\/script>

<div style="display: grid; gap: 12px; max-width: 300px">
  <minerva-nav-tree
    id="nav"
    wrap-labels
    aria-label="Documentation"
    sections={navSections}
    expandedIds={navExpandedIds}
    onminerva-expanded-change={onExpanded}
    onminerva-select={onSelect}
  ></minerva-nav-tree>
  <output id="log">{logText}</output>
</div>
`,solid:`// NavTreeExpansion.tsx

import { createSignal } from "solid-js";

// expandedIds is controlled through minerva-expanded-change (cancelable:
// here "Getting started" stays open). wrap-labels wraps long labels.
type Item = { id: string; label: string; href?: string; children?: Item[] };
type NavTree = HTMLElement & {
  sections: { id: string; title?: string; items: Item[] }[];
  expandedIds: string[];
};
type Detail = { expandedIds: string[]; item: Item; expanded: boolean };

export default function NavTreeExpansion() {
  const [logText, setLogText] = createSignal(
    "ArrowRight / ArrowLeft expand and collapse branches.",
  );

  const navSections = [
    {
      id: "docs",
      title: "Guides",
      items: [
        {
          id: "start",
          label: "Getting started",
          children: [
            { id: "install", label: "Installation", href: "/install" },
            {
              id: "first",
              label: "Your first page with Web Components",
              href: "/first",
            },
          ],
        },
        {
          id: "theming",
          label: "Theming",
          children: [
            { id: "tokens", label: "Design tokens", href: "/tokens" },
            {
              id: "palettes",
              label: "Palettes and dark mode",
              href: "/palettes",
            },
          ],
        },
      ],
    },
  ];
  const navExpandedIds = ["start"];
  const onExpanded = (e: Event) => {
    const { item, expanded } = (e as CustomEvent<Detail>).detail;
    if (item.id === "start" && !expanded) {
      e.preventDefault();
      setLogText("Getting started stays open (event canceled).");
      return;
    }
    setLogText(\`\${item.label} \${expanded ? "expanded" : "collapsed"}\`);
  };
  const onSelect = (e: Event) => {
    const { item } = (e as CustomEvent<{ item: Item }>).detail;
    if (!item.children) e.preventDefault();
  };

  return (
    <div style="display: grid; gap: 12px; max-width: 300px">
      <minerva-nav-tree
        id="nav"
        wrap-labels
        aria-label="Documentation"
        prop:sections={navSections}
        prop:expandedIds={navExpandedIds}
        on:minerva-expanded-change={onExpanded}
        on:minerva-select={onSelect}
      ></minerva-nav-tree>
      <output id="log">{logText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 300px">
  <minerva-nav-tree
    id="nav"
    wrap-labels
    aria-label="Documentation"
  ></minerva-nav-tree>
  <output id="log">ArrowRight / ArrowLeft expand and collapse branches.</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // expandedIds is controlled through minerva-expanded-change (cancelable:
  // here "Getting started" stays open). wrap-labels wraps long labels.
  const nav = document.querySelector("#nav");
  const log = document.querySelector("#log");
  nav.sections = [
    {
      id: "docs",
      title: "Guides",
      items: [
        {
          id: "start",
          label: "Getting started",
          children: [
            { id: "install", label: "Installation", href: "/install" },
            {
              id: "first",
              label: "Your first page with Web Components",
              href: "/first",
            },
          ],
        },
        {
          id: "theming",
          label: "Theming",
          children: [
            { id: "tokens", label: "Design tokens", href: "/tokens" },
            {
              id: "palettes",
              label: "Palettes and dark mode",
              href: "/palettes",
            },
          ],
        },
      ],
    },
  ];
  nav.expandedIds = ["start"];
  const onExpanded = (e) => {
    const { item, expanded } = e.detail;
    if (item.id === "start" && !expanded) {
      e.preventDefault();
      log.value = "Getting started stays open (event canceled).";
      return;
    }
    log.value = \`\${item.label} \${expanded ? "expanded" : "collapsed"}\`;
  };
  const onSelect = (e) => {
    const { item } = e.detail;
    if (!item.children) e.preventDefault();
  };
  nav.addEventListener("minerva-expanded-change", onExpanded);
  nav.addEventListener("minerva-select", onSelect);
<\/script>
`}})))()}n();export{t as default};