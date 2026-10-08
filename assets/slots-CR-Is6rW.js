import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- BadgeSlots.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`content\` is a regular property: update it and the polite status badge
// announces the new count.

const cart = ref<HTMLElement & { content: string }>();

let count = 0;
const onClick = () => (cart.value!.content = String(++count));
<\/script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
    <minerva-badge id="cart" content="0" color="danger" ref="cart">
      <minerva-button
        id="add"
        variant="outline"
        color="neutral"
        @click="onClick"
        >Add to cart</minerva-button
      >
    </minerva-badge>
    <minerva-badge color="success" variant="subtle">
      <span slot="icon" aria-hidden="true">✓</span>
      Verified
    </minerva-badge>
    <minerva-badge color="info">
      <minerva-button variant="ghost" color="neutral">Updates</minerva-button>
      <span slot="content"><strong>99</strong>+</span>
    </minerva-badge>
  </div>
</template>
`,angular:`// badge-slots.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// \`content\` is a regular property: update it and the polite status badge
// announces the new count.

@Component({
  selector: "app-badge-slots",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
      <minerva-badge id="cart" content="0" color="danger" #cart>
        <minerva-button
          id="add"
          variant="outline"
          color="neutral"
          (click)="onClick($event)"
          >Add to cart</minerva-button
        >
      </minerva-badge>
      <minerva-badge color="success" variant="subtle">
        <span slot="icon" aria-hidden="true">✓</span>
        Verified
      </minerva-badge>
      <minerva-badge color="info">
        <minerva-button variant="ghost" color="neutral">Updates</minerva-button>
        <span slot="content"><strong>99</strong>+</span>
      </minerva-badge>
    </div>
  \`,
})
export class BadgeSlotsComponent {
  @ViewChild("cart") cart!: ElementRef<HTMLElement & { content: string }>;

  count = 0;
  onClick = () => (this.cart.nativeElement.content = String(++this.count));
}
`,svelte:`<!-- BadgeSlots.svelte -->

<script lang="ts">
  // \`content\` is a regular property: update it and the polite status badge
  // announces the new count.

  let cart: HTMLElement & { content: string };

  let count = 0;
  const onClick = () => (cart.content = String(++count));
<\/script>

<div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
  <minerva-badge id="cart" content="0" color="danger" bind:this={cart}>
    <minerva-button
      id="add"
      variant="outline"
      color="neutral"
      onclick={onClick}
    >Add to cart</minerva-button>
  </minerva-badge>
  <minerva-badge color="success" variant="subtle">
    <span slot="icon" aria-hidden="true">✓</span>
    Verified
  </minerva-badge>
  <minerva-badge color="info">
    <minerva-button variant="ghost" color="neutral">Updates</minerva-button>
    <span slot="content"><strong>99</strong>+</span>
  </minerva-badge>
</div>
`,solid:`// BadgeSlots.tsx

// \`content\` is a regular property: update it and the polite status badge
// announces the new count.

export default function BadgeSlots() {
  let cart!: HTMLElement & { content: string };

  let count = 0;
  const onClick = () => (cart.content = String(++count));

  return (
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
      <minerva-badge id="cart" content="0" color="danger" ref={cart}>
        <minerva-button
          id="add"
          variant="outline"
          color="neutral"
          on:click={onClick}
        >
          Add to cart
        </minerva-button>
      </minerva-badge>
      <minerva-badge color="success" variant="subtle">
        <span slot="icon" aria-hidden="true">
          ✓
        </span>
        Verified
      </minerva-badge>
      <minerva-badge color="info">
        <minerva-button variant="ghost" color="neutral">
          Updates
        </minerva-button>
        <span slot="content">
          <strong>99</strong>+
        </span>
      </minerva-badge>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
  <minerva-badge id="cart" content="0" color="danger">
    <minerva-button id="add" variant="outline" color="neutral"
      >Add to cart</minerva-button
    >
  </minerva-badge>
  <minerva-badge color="success" variant="subtle">
    <span slot="icon" aria-hidden="true">✓</span>
    Verified
  </minerva-badge>
  <minerva-badge color="info">
    <minerva-button variant="ghost" color="neutral">Updates</minerva-button>
    <span slot="content"><strong>99</strong>+</span>
  </minerva-badge>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // \`content\` is a regular property: update it and the polite status badge
  // announces the new count.
  const cart = document.querySelector("#cart");
  const add = document.querySelector("#add");
  let count = 0;
  const onClick = () => (cart.content = String(++count));
  add.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};