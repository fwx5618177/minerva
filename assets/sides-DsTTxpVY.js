import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DrawerSides.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Set \`side\` (and optionally \`size\`), then open with show().

type Drawer = HTMLElement & { side: string; show(): void };

const drawer = ref<Drawer>();
const titleText = ref("");

const onClick = (event: Event) => {
  const side = (event.target as Element)
    .closest("[data-side]")
    ?.getAttribute("data-side");
  if (!side) return;
  drawer.value!.side = side;
  titleText.value = \`Drawer from the \${side}\`;
  drawer.value!.show();
};
<\/script>

<template>
  <div
    id="sides"
    style="display: flex; flex-wrap: wrap; gap: 8px"
    @click="onClick"
  >
    <minerva-button data-side="left" variant="outline">Left</minerva-button>
    <minerva-button data-side="right" variant="outline">Right</minerva-button>
    <minerva-button data-side="top" variant="outline">Top</minerva-button>
    <minerva-button data-side="bottom" variant="outline">Bottom</minerva-button>
  </div>
  <minerva-drawer id="sided" size="small" ref="drawer">
    <span slot="header" id="sided-title">{{ titleText }}</span>
    <p style="margin: 0">
      size sets the width of left / right drawers and the height of top / bottom
      ones.
    </p>
  </minerva-drawer>
</template>
`,angular:`// drawer-sides.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Set \`side\` (and optionally \`size\`), then open with show().
type Drawer = HTMLElement & { side: string; show(): void };

@Component({
  selector: "app-drawer-sides",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      id="sides"
      style="display: flex; flex-wrap: wrap; gap: 8px"
      (click)="onClick($event)"
    >
      <minerva-button data-side="left" variant="outline">Left</minerva-button>
      <minerva-button data-side="right" variant="outline">Right</minerva-button>
      <minerva-button data-side="top" variant="outline">Top</minerva-button>
      <minerva-button data-side="bottom" variant="outline"
        >Bottom</minerva-button
      >
    </div>
    <minerva-drawer id="sided" size="small" #drawer>
      <span slot="header" id="sided-title">{{ titleText }}</span>
      <p style="margin: 0">
        size sets the width of left / right drawers and the height of top /
        bottom ones.
      </p>
    </minerva-drawer>
  \`,
})
export class DrawerSidesComponent {
  @ViewChild("drawer") drawer!: ElementRef<Drawer>;
  titleText = "";

  onClick = (event: Event) => {
    const side = (event.target as Element)
      .closest("[data-side]")
      ?.getAttribute("data-side");
    if (!side) return;
    this.drawer.nativeElement.side = side;
    this.titleText = \`Drawer from the \${side}\`;
    this.drawer.nativeElement.show();
  };
}
`,svelte:`<!-- DrawerSides.svelte -->

<script lang="ts">
  // Set \`side\` (and optionally \`size\`), then open with show().

  type Drawer = HTMLElement & { side: string; show(): void };

  let drawer: Drawer;
  let titleText = $state("");

  const onClick = (event: Event) => {
    const side = (event.target as Element)
      .closest("[data-side]")
      ?.getAttribute("data-side");
    if (!side) return;
    drawer.side = side;
    titleText = \`Drawer from the \${side}\`;
    drawer.show();
  };
<\/script>

<div
  id="sides"
  style="display: flex; flex-wrap: wrap; gap: 8px"
  onclick={onClick}
>
  <minerva-button data-side="left" variant="outline">Left</minerva-button>
  <minerva-button data-side="right" variant="outline">Right</minerva-button>
  <minerva-button data-side="top" variant="outline">Top</minerva-button>
  <minerva-button data-side="bottom" variant="outline">Bottom</minerva-button>
</div>
<minerva-drawer id="sided" size="small" bind:this={drawer}>
  <span slot="header" id="sided-title">{titleText}</span>
  <p style="margin: 0">
    size sets the width of left / right drawers and the height of top / bottom
    ones.
  </p>
</minerva-drawer>
`,solid:`// DrawerSides.tsx

import { createSignal } from "solid-js";

// Set \`side\` (and optionally \`size\`), then open with show().
type Drawer = HTMLElement & { side: string; show(): void };

export default function DrawerSides() {
  let drawer!: Drawer;
  const [titleText, setTitleText] = createSignal("");

  const onClick = (event: Event) => {
    const side = (event.target as Element)
      .closest("[data-side]")
      ?.getAttribute("data-side");
    if (!side) return;
    drawer.side = side;
    setTitleText(\`Drawer from the \${side}\`);
    drawer.show();
  };

  return (
    <>
      <div
        id="sides"
        style="display: flex; flex-wrap: wrap; gap: 8px"
        on:click={onClick}
      >
        <minerva-button data-side="left" variant="outline">
          Left
        </minerva-button>
        <minerva-button data-side="right" variant="outline">
          Right
        </minerva-button>
        <minerva-button data-side="top" variant="outline">
          Top
        </minerva-button>
        <minerva-button data-side="bottom" variant="outline">
          Bottom
        </minerva-button>
      </div>
      <minerva-drawer id="sided" size="small" ref={drawer}>
        <span slot="header" id="sided-title">
          {titleText()}
        </span>
        <p style="margin: 0">
          size sets the width of left / right drawers and the height of top /
          bottom ones.
        </p>
      </minerva-drawer>
    </>
  );
}
`,html:`<div id="sides" style="display: flex; flex-wrap: wrap; gap: 8px">
  <minerva-button data-side="left" variant="outline">Left</minerva-button>
  <minerva-button data-side="right" variant="outline">Right</minerva-button>
  <minerva-button data-side="top" variant="outline">Top</minerva-button>
  <minerva-button data-side="bottom" variant="outline">Bottom</minerva-button>
</div>
<minerva-drawer id="sided" size="small">
  <span slot="header" id="sided-title"></span>
  <p style="margin: 0">
    size sets the width of left / right drawers and the height of top / bottom
    ones.
  </p>
</minerva-drawer>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Set \`side\` (and optionally \`size\`), then open with show().
  const buttons = document.querySelector("#sides");
  const drawer = document.querySelector("#sided");
  const title = document.querySelector("#sided-title");
  const onClick = (event) => {
    const side = event.target.closest("[data-side]")?.getAttribute("data-side");
    if (!side) return;
    drawer.side = side;
    title.textContent = \`Drawer from the \${side}\`;
    drawer.show();
  };
  buttons.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};