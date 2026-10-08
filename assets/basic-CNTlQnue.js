import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- NavTreeBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Sections come from a JS property. minerva-select is cancelable: prevent the
// link navigation and route on the client, then move active-id.

type Item = {
  id: string;
  label: string;
  description?: string;
  href?: string;
  icon?: string;
  endContent?: string;
  disabled?: boolean;
  children?: Item[];
};
type NavTree = HTMLElement & {
  sections: { id: string; title?: string; items: Item[] }[];
  activeId?: string;
};

const nav = ref<NavTree>();

const navSections = [
  {
    id: "main",
    items: [
      { id: "home", label: "Home", href: "/home", icon: "🏠" },
      {
        id: "inbox",
        label: "Inbox",
        href: "/inbox",
        icon: "✉️",
        endContent: "12",
      },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    items: [
      {
        id: "billing",
        label: "Billing",
        description: "Invoices and payments",
        icon: "💳",
        children: [
          { id: "invoices", label: "Invoices", href: "/billing/invoices" },
          { id: "payments", label: "Payments", href: "/billing/payments" },
          {
            id: "refunds",
            label: "Refunds",
            href: "/billing/refunds",
            disabled: true,
          },
        ],
      },
      { id: "reports", label: "Reports", href: "/reports", icon: "📊" },
    ],
  },
];
const onSelect = (e: Event) => {
  const { value, item } = (e as CustomEvent<{ value: string; item: Item }>)
    .detail;
  if (item.children) return; // a branch: it toggles
  e.preventDefault();
  nav.value!.activeId = value;
};
<\/script>

<template>
  <minerva-nav-tree
    id="nav"
    active-id="invoices"
    aria-label="Workspace"
    style="max-width: 280px"
    ref="nav"
    :sections.prop="navSections"
    @minerva-select="onSelect"
  ></minerva-nav-tree>
</template>
`,angular:`// nav-tree-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Sections come from a JS property. minerva-select is cancelable: prevent the
// link navigation and route on the client, then move active-id.
type Item = {
  id: string;
  label: string;
  description?: string;
  href?: string;
  icon?: string;
  endContent?: string;
  disabled?: boolean;
  children?: Item[];
};
type NavTree = HTMLElement & {
  sections: { id: string; title?: string; items: Item[] }[];
  activeId?: string;
};

@Component({
  selector: "app-nav-tree-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-nav-tree
      id="nav"
      active-id="invoices"
      aria-label="Workspace"
      style="max-width: 280px"
      #nav
      [sections]="navSections"
      (minerva-select)="onSelect($event)"
    ></minerva-nav-tree>
  \`,
})
export class NavTreeBasicComponent {
  @ViewChild("nav") nav!: ElementRef<NavTree>;

  navSections = [
    {
      id: "main",
      items: [
        { id: "home", label: "Home", href: "/home", icon: "🏠" },
        {
          id: "inbox",
          label: "Inbox",
          href: "/inbox",
          icon: "✉️",
          endContent: "12",
        },
      ],
    },
    {
      id: "finance",
      title: "Finance",
      items: [
        {
          id: "billing",
          label: "Billing",
          description: "Invoices and payments",
          icon: "💳",
          children: [
            { id: "invoices", label: "Invoices", href: "/billing/invoices" },
            { id: "payments", label: "Payments", href: "/billing/payments" },
            {
              id: "refunds",
              label: "Refunds",
              href: "/billing/refunds",
              disabled: true,
            },
          ],
        },
        { id: "reports", label: "Reports", href: "/reports", icon: "📊" },
      ],
    },
  ];
  onSelect = (e: Event) => {
    const { value, item } = (e as CustomEvent<{ value: string; item: Item }>)
      .detail;
    if (item.children) return; // a branch: it toggles
    e.preventDefault();
    this.nav.nativeElement.activeId = value;
  };
}
`,svelte:`<!-- NavTreeBasic.svelte -->

<script lang="ts">
  // Sections come from a JS property. minerva-select is cancelable: prevent the
  // link navigation and route on the client, then move active-id.

  type Item = {
    id: string;
    label: string;
    description?: string;
    href?: string;
    icon?: string;
    endContent?: string;
    disabled?: boolean;
    children?: Item[];
  };
  type NavTree = HTMLElement & {
    sections: { id: string; title?: string; items: Item[] }[];
    activeId?: string;
  };

  let nav: NavTree;

  const navSections = [
    {
      id: "main",
      items: [
        { id: "home", label: "Home", href: "/home", icon: "🏠" },
        {
          id: "inbox",
          label: "Inbox",
          href: "/inbox",
          icon: "✉️",
          endContent: "12",
        },
      ],
    },
    {
      id: "finance",
      title: "Finance",
      items: [
        {
          id: "billing",
          label: "Billing",
          description: "Invoices and payments",
          icon: "💳",
          children: [
            { id: "invoices", label: "Invoices", href: "/billing/invoices" },
            { id: "payments", label: "Payments", href: "/billing/payments" },
            {
              id: "refunds",
              label: "Refunds",
              href: "/billing/refunds",
              disabled: true,
            },
          ],
        },
        { id: "reports", label: "Reports", href: "/reports", icon: "📊" },
      ],
    },
  ];
  const onSelect = (e: Event) => {
    const { value, item } = (e as CustomEvent<{ value: string; item: Item }>)
      .detail;
    if (item.children) return; // a branch: it toggles
    e.preventDefault();
    nav.activeId = value;
  };
<\/script>

<minerva-nav-tree
  id="nav"
  active-id="invoices"
  aria-label="Workspace"
  style="max-width: 280px"
  bind:this={nav}
  sections={navSections}
  onminerva-select={onSelect}
></minerva-nav-tree>
`,solid:`// NavTreeBasic.tsx

// Sections come from a JS property. minerva-select is cancelable: prevent the
// link navigation and route on the client, then move active-id.
type Item = {
  id: string;
  label: string;
  description?: string;
  href?: string;
  icon?: string;
  endContent?: string;
  disabled?: boolean;
  children?: Item[];
};
type NavTree = HTMLElement & {
  sections: { id: string; title?: string; items: Item[] }[];
  activeId?: string;
};

export default function NavTreeBasic() {
  let nav!: NavTree;

  const navSections = [
    {
      id: "main",
      items: [
        { id: "home", label: "Home", href: "/home", icon: "🏠" },
        {
          id: "inbox",
          label: "Inbox",
          href: "/inbox",
          icon: "✉️",
          endContent: "12",
        },
      ],
    },
    {
      id: "finance",
      title: "Finance",
      items: [
        {
          id: "billing",
          label: "Billing",
          description: "Invoices and payments",
          icon: "💳",
          children: [
            { id: "invoices", label: "Invoices", href: "/billing/invoices" },
            { id: "payments", label: "Payments", href: "/billing/payments" },
            {
              id: "refunds",
              label: "Refunds",
              href: "/billing/refunds",
              disabled: true,
            },
          ],
        },
        { id: "reports", label: "Reports", href: "/reports", icon: "📊" },
      ],
    },
  ];
  const onSelect = (e: Event) => {
    const { value, item } = (e as CustomEvent<{ value: string; item: Item }>)
      .detail;
    if (item.children) return; // a branch: it toggles
    e.preventDefault();
    nav.activeId = value;
  };

  return (
    <minerva-nav-tree
      id="nav"
      active-id="invoices"
      aria-label="Workspace"
      style="max-width: 280px"
      ref={nav}
      prop:sections={navSections}
      on:minerva-select={onSelect}
    ></minerva-nav-tree>
  );
}
`,html:`<minerva-nav-tree
  id="nav"
  active-id="invoices"
  aria-label="Workspace"
  style="max-width: 280px"
></minerva-nav-tree>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Sections come from a JS property. minerva-select is cancelable: prevent the
  // link navigation and route on the client, then move active-id.
  const nav = document.querySelector("#nav");
  nav.sections = [
    {
      id: "main",
      items: [
        { id: "home", label: "Home", href: "/home", icon: "🏠" },
        {
          id: "inbox",
          label: "Inbox",
          href: "/inbox",
          icon: "✉️",
          endContent: "12",
        },
      ],
    },
    {
      id: "finance",
      title: "Finance",
      items: [
        {
          id: "billing",
          label: "Billing",
          description: "Invoices and payments",
          icon: "💳",
          children: [
            { id: "invoices", label: "Invoices", href: "/billing/invoices" },
            { id: "payments", label: "Payments", href: "/billing/payments" },
            {
              id: "refunds",
              label: "Refunds",
              href: "/billing/refunds",
              disabled: true,
            },
          ],
        },
        { id: "reports", label: "Reports", href: "/reports", icon: "📊" },
      ],
    },
  ];
  const onSelect = (e) => {
    const { value, item } = e.detail;
    if (item.children) return; // a branch: it toggles
    e.preventDefault();
    nav.activeId = value;
  };
  nav.addEventListener("minerva-select", onSelect);
<\/script>
`}})))()}n();export{t as default};