import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ModalSizes.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Without a trigger slot, set \`size\` and call show() (or set \`open\`).

type Modal = HTMLElement & { size: string; show(): void };

const modal = ref<Modal>();
const titleText = ref("");

const onClick = (event: Event) => {
  const size = (event.target as Element)
    .closest("[data-size]")
    ?.getAttribute("data-size");
  if (!size) return;
  modal.value!.size = size;
  titleText.value = \`Size: \${size}\`;
  modal.value!.show();
};
<\/script>

<template>
  <div
    id="sizes"
    style="display: flex; flex-wrap: wrap; gap: 8px"
    @click="onClick"
  >
    <minerva-button data-size="small" variant="outline">Small</minerva-button>
    <minerva-button data-size="medium" variant="outline">Medium</minerva-button>
    <minerva-button data-size="large" variant="outline">Large</minerva-button>
    <minerva-button data-size="xlarge" variant="outline">XLarge</minerva-button>
    <minerva-button data-size="full" variant="outline">Full</minerva-button>
  </div>
  <minerva-modal
    id="sized"
    description="The width follows the size preset."
    ref="modal"
  >
    <span slot="header" id="sized-title">{{ titleText }}</span>
    <p style="margin: 0">
      On narrow screens every size becomes a bottom sheet.
    </p>
  </minerva-modal>
</template>
`,angular:`// modal-sizes.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Without a trigger slot, set \`size\` and call show() (or set \`open\`).
type Modal = HTMLElement & { size: string; show(): void };

@Component({
  selector: "app-modal-sizes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      id="sizes"
      style="display: flex; flex-wrap: wrap; gap: 8px"
      (click)="onClick($event)"
    >
      <minerva-button data-size="small" variant="outline">Small</minerva-button>
      <minerva-button data-size="medium" variant="outline"
        >Medium</minerva-button
      >
      <minerva-button data-size="large" variant="outline">Large</minerva-button>
      <minerva-button data-size="xlarge" variant="outline"
        >XLarge</minerva-button
      >
      <minerva-button data-size="full" variant="outline">Full</minerva-button>
    </div>
    <minerva-modal
      id="sized"
      description="The width follows the size preset."
      #modal
    >
      <span slot="header" id="sized-title">{{ titleText }}</span>
      <p style="margin: 0">
        On narrow screens every size becomes a bottom sheet.
      </p>
    </minerva-modal>
  \`,
})
export class ModalSizesComponent {
  @ViewChild("modal") modal!: ElementRef<Modal>;
  titleText = "";

  onClick = (event: Event) => {
    const size = (event.target as Element)
      .closest("[data-size]")
      ?.getAttribute("data-size");
    if (!size) return;
    this.modal.nativeElement.size = size;
    this.titleText = \`Size: \${size}\`;
    this.modal.nativeElement.show();
  };
}
`,svelte:`<!-- ModalSizes.svelte -->

<script lang="ts">
  // Without a trigger slot, set \`size\` and call show() (or set \`open\`).

  type Modal = HTMLElement & { size: string; show(): void };

  let modal: Modal;
  let titleText = $state("");

  const onClick = (event: Event) => {
    const size = (event.target as Element)
      .closest("[data-size]")
      ?.getAttribute("data-size");
    if (!size) return;
    modal.size = size;
    titleText = \`Size: \${size}\`;
    modal.show();
  };
<\/script>

<div
  id="sizes"
  style="display: flex; flex-wrap: wrap; gap: 8px"
  onclick={onClick}
>
  <minerva-button data-size="small" variant="outline">Small</minerva-button>
  <minerva-button data-size="medium" variant="outline">Medium</minerva-button>
  <minerva-button data-size="large" variant="outline">Large</minerva-button>
  <minerva-button data-size="xlarge" variant="outline">XLarge</minerva-button>
  <minerva-button data-size="full" variant="outline">Full</minerva-button>
</div>
<minerva-modal
  id="sized"
  description="The width follows the size preset."
  bind:this={modal}
>
  <span slot="header" id="sized-title">{titleText}</span>
  <p style="margin: 0">On narrow screens every size becomes a bottom sheet.</p>
</minerva-modal>
`,solid:`// ModalSizes.tsx

import { createSignal } from "solid-js";

// Without a trigger slot, set \`size\` and call show() (or set \`open\`).
type Modal = HTMLElement & { size: string; show(): void };

export default function ModalSizes() {
  let modal!: Modal;
  const [titleText, setTitleText] = createSignal("");

  const onClick = (event: Event) => {
    const size = (event.target as Element)
      .closest("[data-size]")
      ?.getAttribute("data-size");
    if (!size) return;
    modal.size = size;
    setTitleText(\`Size: \${size}\`);
    modal.show();
  };

  return (
    <>
      <div
        id="sizes"
        style="display: flex; flex-wrap: wrap; gap: 8px"
        on:click={onClick}
      >
        <minerva-button data-size="small" variant="outline">
          Small
        </minerva-button>
        <minerva-button data-size="medium" variant="outline">
          Medium
        </minerva-button>
        <minerva-button data-size="large" variant="outline">
          Large
        </minerva-button>
        <minerva-button data-size="xlarge" variant="outline">
          XLarge
        </minerva-button>
        <minerva-button data-size="full" variant="outline">
          Full
        </minerva-button>
      </div>
      <minerva-modal
        id="sized"
        description="The width follows the size preset."
        ref={modal}
      >
        <span slot="header" id="sized-title">
          {titleText()}
        </span>
        <p style="margin: 0">
          On narrow screens every size becomes a bottom sheet.
        </p>
      </minerva-modal>
    </>
  );
}
`,html:`<div id="sizes" style="display: flex; flex-wrap: wrap; gap: 8px">
  <minerva-button data-size="small" variant="outline">Small</minerva-button>
  <minerva-button data-size="medium" variant="outline">Medium</minerva-button>
  <minerva-button data-size="large" variant="outline">Large</minerva-button>
  <minerva-button data-size="xlarge" variant="outline">XLarge</minerva-button>
  <minerva-button data-size="full" variant="outline">Full</minerva-button>
</div>
<minerva-modal id="sized" description="The width follows the size preset.">
  <span slot="header" id="sized-title"></span>
  <p style="margin: 0">On narrow screens every size becomes a bottom sheet.</p>
</minerva-modal>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Without a trigger slot, set \`size\` and call show() (or set \`open\`).
  const buttons = document.querySelector("#sizes");
  const modal = document.querySelector("#sized");
  const title = document.querySelector("#sized-title");
  const onClick = (event) => {
    const size = event.target.closest("[data-size]")?.getAttribute("data-size");
    if (!size) return;
    modal.size = size;
    title.textContent = \`Size: \${size}\`;
    modal.show();
  };
  buttons.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};