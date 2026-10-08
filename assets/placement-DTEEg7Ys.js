import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PopoverPlacement.vue -->

<script setup lang="ts">
import { ref } from "vue";

// side / align are reflected properties: changing them moves the open panel.

type Popover = HTMLElement & { side: string; align: string };

const popover = ref<Popover>();

const onChange = (event: Event) => {
  const select = event.target as HTMLSelectElement;
  if (select.name === "side") popover.value!.side = select.value;
  if (select.name === "align") popover.value!.align = select.value;
};
<\/script>

<template>
  <div style="display: grid; gap: 12px; justify-items: start">
    <div
      id="placement-controls"
      style="display: flex; flex-wrap: wrap; gap: 12px"
      @change="onChange"
    >
      <label
        >side
        <select name="side">
          <option>top</option>
          <option>right</option>
          <option selected>bottom</option>
          <option>left</option>
        </select>
      </label>
      <label
        >align
        <select name="align">
          <option>start</option>
          <option selected>center</option>
          <option>end</option>
        </select>
      </label>
    </div>
    <minerva-popover
      id="placed"
      side="bottom"
      align="center"
      side-offset="8"
      arrow
      label="Placement"
      ref="popover"
    >
      <minerva-button slot="trigger">Toggle popover</minerva-button>
      <p style="margin: 0; max-width: 220px">
        Flips and shifts to stay within the viewport (collision-padding).
      </p>
    </minerva-popover>
  </div>
</template>
`,angular:`// popover-placement.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// side / align are reflected properties: changing them moves the open panel.
type Popover = HTMLElement & { side: string; align: string };

@Component({
  selector: "app-popover-placement",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; justify-items: start">
      <div
        id="placement-controls"
        style="display: flex; flex-wrap: wrap; gap: 12px"
        (change)="onChange($event)"
      >
        <label
          >side
          <select name="side">
            <option>top</option>
            <option>right</option>
            <option selected>bottom</option>
            <option>left</option>
          </select>
        </label>
        <label
          >align
          <select name="align">
            <option>start</option>
            <option selected>center</option>
            <option>end</option>
          </select>
        </label>
      </div>
      <minerva-popover
        id="placed"
        side="bottom"
        align="center"
        side-offset="8"
        arrow
        label="Placement"
        #popover
      >
        <minerva-button slot="trigger">Toggle popover</minerva-button>
        <p style="margin: 0; max-width: 220px">
          Flips and shifts to stay within the viewport (collision-padding).
        </p>
      </minerva-popover>
    </div>
  \`,
})
export class PopoverPlacementComponent {
  @ViewChild("popover") popover!: ElementRef<Popover>;

  onChange = (event: Event) => {
    const select = event.target as HTMLSelectElement;
    if (select.name === "side") this.popover.nativeElement.side = select.value;
    if (select.name === "align")
      this.popover.nativeElement.align = select.value;
  };
}
`,svelte:`<!-- PopoverPlacement.svelte -->

<script lang="ts">
  // side / align are reflected properties: changing them moves the open panel.

  type Popover = HTMLElement & { side: string; align: string };

  let popover: Popover;

  const onChange = (event: Event) => {
    const select = event.target as HTMLSelectElement;
    if (select.name === "side") popover.side = select.value;
    if (select.name === "align") popover.align = select.value;
  };
<\/script>

<div style="display: grid; gap: 12px; justify-items: start">
  <div
    id="placement-controls"
    style="display: flex; flex-wrap: wrap; gap: 12px"
    onchange={onChange}
  >
    <label
      >side
      <select name="side">
        <option>top</option>
        <option>right</option>
        <option selected>bottom</option>
        <option>left</option>
      </select>
    </label>
    <label
      >align
      <select name="align">
        <option>start</option>
        <option selected>center</option>
        <option>end</option>
      </select>
    </label>
  </div>
  <minerva-popover
    id="placed"
    side="bottom"
    align="center"
    side-offset="8"
    arrow
    label="Placement"
    bind:this={popover}
  >
    <minerva-button slot="trigger">Toggle popover</minerva-button>
    <p style="margin: 0; max-width: 220px">
      Flips and shifts to stay within the viewport (collision-padding).
    </p>
  </minerva-popover>
</div>
`,solid:`// PopoverPlacement.tsx

// side / align are reflected properties: changing them moves the open panel.
type Popover = HTMLElement & { side: string; align: string };

export default function PopoverPlacement() {
  let popover!: Popover;

  const onChange = (event: Event) => {
    const select = event.target as HTMLSelectElement;
    if (select.name === "side") popover.side = select.value;
    if (select.name === "align") popover.align = select.value;
  };

  return (
    <div style="display: grid; gap: 12px; justify-items: start">
      <div
        id="placement-controls"
        style="display: flex; flex-wrap: wrap; gap: 12px"
        on:change={onChange}
      >
        <label>
          side
          <select name="side">
            <option>top</option>
            <option>right</option>
            <option selected>bottom</option>
            <option>left</option>
          </select>
        </label>
        <label>
          align
          <select name="align">
            <option>start</option>
            <option selected>center</option>
            <option>end</option>
          </select>
        </label>
      </div>
      <minerva-popover
        id="placed"
        side="bottom"
        align="center"
        side-offset="8"
        arrow
        label="Placement"
        ref={popover}
      >
        <minerva-button slot="trigger">Toggle popover</minerva-button>
        <p style="margin: 0; max-width: 220px">
          Flips and shifts to stay within the viewport (collision-padding).
        </p>
      </minerva-popover>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; justify-items: start">
  <div
    id="placement-controls"
    style="display: flex; flex-wrap: wrap; gap: 12px"
  >
    <label
      >side
      <select name="side">
        <option>top</option>
        <option>right</option>
        <option selected>bottom</option>
        <option>left</option>
      </select>
    </label>
    <label
      >align
      <select name="align">
        <option>start</option>
        <option selected>center</option>
        <option>end</option>
      </select>
    </label>
  </div>
  <minerva-popover
    id="placed"
    side="bottom"
    align="center"
    side-offset="8"
    arrow
    label="Placement"
  >
    <minerva-button slot="trigger">Toggle popover</minerva-button>
    <p style="margin: 0; max-width: 220px">
      Flips and shifts to stay within the viewport (collision-padding).
    </p>
  </minerva-popover>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // side / align are reflected properties: changing them moves the open panel.
  const controls = document.querySelector("#placement-controls");
  const popover = document.querySelector("#placed");
  const onChange = (event) => {
    const select = event.target;
    if (select.name === "side") popover.side = select.value;
    if (select.name === "align") popover.align = select.value;
  };
  controls.addEventListener("change", onChange);
<\/script>
`}})))()}n();export{t as default};