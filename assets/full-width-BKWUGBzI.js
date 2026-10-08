import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ResponsiveGridFullWidth.vue -->

<template>
  <minerva-responsive-grid columns="2 3" gap="3">
    <minerva-grid-item full-width>
      <minerva-box
        p="3"
        bg="bg.subtle"
        rounded="md"
        border="1px solid var(--border-color)"
      >
        Full-width header row
      </minerva-box>
    </minerva-grid-item>
    <minerva-grid-item
      ><minerva-box p="4" bg="bg.muted" rounded="md"
        >1</minerva-box
      ></minerva-grid-item
    >
    <minerva-grid-item
      ><minerva-box p="4" bg="bg.muted" rounded="md"
        >2</minerva-box
      ></minerva-grid-item
    >
    <minerva-grid-item
      ><minerva-box p="4" bg="bg.muted" rounded="md"
        >3</minerva-box
      ></minerva-grid-item
    >
    <minerva-grid-item full-width>
      <minerva-box
        p="3"
        bg="bg.subtle"
        rounded="md"
        border="1px solid var(--border-color)"
      >
        Full-width footer row
      </minerva-box>
    </minerva-grid-item>
  </minerva-responsive-grid>
</template>
`,angular:`// responsive-grid-full-width.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-responsive-grid-full-width",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-responsive-grid columns="2 3" gap="3">
      <minerva-grid-item full-width>
        <minerva-box
          p="3"
          bg="bg.subtle"
          rounded="md"
          border="1px solid var(--border-color)"
        >
          Full-width header row
        </minerva-box>
      </minerva-grid-item>
      <minerva-grid-item
        ><minerva-box p="4" bg="bg.muted" rounded="md"
          >1</minerva-box
        ></minerva-grid-item
      >
      <minerva-grid-item
        ><minerva-box p="4" bg="bg.muted" rounded="md"
          >2</minerva-box
        ></minerva-grid-item
      >
      <minerva-grid-item
        ><minerva-box p="4" bg="bg.muted" rounded="md"
          >3</minerva-box
        ></minerva-grid-item
      >
      <minerva-grid-item full-width>
        <minerva-box
          p="3"
          bg="bg.subtle"
          rounded="md"
          border="1px solid var(--border-color)"
        >
          Full-width footer row
        </minerva-box>
      </minerva-grid-item>
    </minerva-responsive-grid>
  \`,
})
export class ResponsiveGridFullWidthComponent {}
`,svelte:`<!-- ResponsiveGridFullWidth.svelte -->

<minerva-responsive-grid columns="2 3" gap="3">
  <minerva-grid-item full-width>
    <minerva-box
      p="3"
      bg="bg.subtle"
      rounded="md"
      border="1px solid var(--border-color)"
    >
      Full-width header row
    </minerva-box>
  </minerva-grid-item>
  <minerva-grid-item
    ><minerva-box p="4" bg="bg.muted" rounded="md"
      >1</minerva-box></minerva-grid-item>
  <minerva-grid-item
    ><minerva-box p="4" bg="bg.muted" rounded="md"
      >2</minerva-box></minerva-grid-item>
  <minerva-grid-item
    ><minerva-box p="4" bg="bg.muted" rounded="md"
      >3</minerva-box></minerva-grid-item>
  <minerva-grid-item full-width>
    <minerva-box
      p="3"
      bg="bg.subtle"
      rounded="md"
      border="1px solid var(--border-color)"
    >
      Full-width footer row
    </minerva-box>
  </minerva-grid-item>
</minerva-responsive-grid>
`,solid:`// ResponsiveGridFullWidth.tsx

export default function ResponsiveGridFullWidth() {
  return (
    <minerva-responsive-grid columns="2 3" gap="3">
      <minerva-grid-item full-width>
        <minerva-box
          p="3"
          bg="bg.subtle"
          rounded="md"
          border="1px solid var(--border-color)"
        >
          Full-width header row
        </minerva-box>
      </minerva-grid-item>
      <minerva-grid-item>
        <minerva-box p="4" bg="bg.muted" rounded="md">
          1
        </minerva-box>
      </minerva-grid-item>
      <minerva-grid-item>
        <minerva-box p="4" bg="bg.muted" rounded="md">
          2
        </minerva-box>
      </minerva-grid-item>
      <minerva-grid-item>
        <minerva-box p="4" bg="bg.muted" rounded="md">
          3
        </minerva-box>
      </minerva-grid-item>
      <minerva-grid-item full-width>
        <minerva-box
          p="3"
          bg="bg.subtle"
          rounded="md"
          border="1px solid var(--border-color)"
        >
          Full-width footer row
        </minerva-box>
      </minerva-grid-item>
    </minerva-responsive-grid>
  );
}
`,html:`<minerva-responsive-grid columns="2 3" gap="3">
  <minerva-grid-item full-width>
    <minerva-box
      p="3"
      bg="bg.subtle"
      rounded="md"
      border="1px solid var(--border-color)"
    >
      Full-width header row
    </minerva-box>
  </minerva-grid-item>
  <minerva-grid-item
    ><minerva-box p="4" bg="bg.muted" rounded="md"
      >1</minerva-box
    ></minerva-grid-item
  >
  <minerva-grid-item
    ><minerva-box p="4" bg="bg.muted" rounded="md"
      >2</minerva-box
    ></minerva-grid-item
  >
  <minerva-grid-item
    ><minerva-box p="4" bg="bg.muted" rounded="md"
      >3</minerva-box
    ></minerva-grid-item
  >
  <minerva-grid-item full-width>
    <minerva-box
      p="3"
      bg="bg.subtle"
      rounded="md"
      border="1px solid var(--border-color)"
    >
      Full-width footer row
    </minerva-box>
  </minerva-grid-item>
</minerva-responsive-grid>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};