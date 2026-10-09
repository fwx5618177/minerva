import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CardInteractive.vue -->

<script setup lang="ts">
import { ref } from "vue";

// A link card renders a native <a>, a button card a native <button>
// (aria-pressed on the host is forwarded to it).

const card = ref<HTMLElement>();

// The docs use hash routing: keep the demo link from navigating
const onLink = (event: Event) => event.preventDefault();
const onClick = () => {
  const pressed = card.value!.getAttribute("aria-pressed") === "true";
  card.value!.setAttribute("aria-pressed", String(!pressed));
  card.value!.setAttribute("variant", pressed ? "default" : "filled");
};
<\/script>

<template>
  <div
    style="
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    "
  >
    <minerva-card
      as="a"
      href="#card-link"
      interactive
      padding="medium"
      @click="onLink"
    >
      <minerva-card-title>Link card</minerva-card-title>
      <minerva-card-description
        >as="a" with href: the whole card is a link.</minerva-card-description
      >
    </minerva-card>
    <minerva-card
      id="select"
      as="button"
      interactive
      padding="medium"
      aria-pressed="false"
      ref="card"
      @click="onClick"
    >
      <minerva-card-title>Button card</minerva-card-title>
      <minerva-card-description
        >Click or press Enter to select.</minerva-card-description
      >
    </minerva-card>
    <minerva-card as="button" interactive disabled padding="medium">
      <minerva-card-title>Disabled</minerva-card-title>
      <minerva-card-description>Clicks are ignored.</minerva-card-description>
    </minerva-card>
  </div>
</template>
`,angular:`// card-interactive.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// A link card renders a native <a>, a button card a native <button>
// (aria-pressed on the host is forwarded to it).

@Component({
  selector: "app-card-interactive",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      "
    >
      <minerva-card
        as="a"
        href="#card-link"
        interactive
        padding="medium"
        (click)="onLink($event)"
      >
        <minerva-card-title>Link card</minerva-card-title>
        <minerva-card-description
          >as="a" with href: the whole card is a link.</minerva-card-description
        >
      </minerva-card>
      <minerva-card
        id="select"
        as="button"
        interactive
        padding="medium"
        aria-pressed="false"
        #card
        (click)="onClick($event)"
      >
        <minerva-card-title>Button card</minerva-card-title>
        <minerva-card-description
          >Click or press Enter to select.</minerva-card-description
        >
      </minerva-card>
      <minerva-card as="button" interactive disabled padding="medium">
        <minerva-card-title>Disabled</minerva-card-title>
        <minerva-card-description>Clicks are ignored.</minerva-card-description>
      </minerva-card>
    </div>
  \`,
})
export class CardInteractiveComponent {
  @ViewChild("card") card!: ElementRef<HTMLElement>;

  // The docs use hash routing: keep the demo link from navigating
  onLink = (event: Event) => event.preventDefault();
  onClick = () => {
    const pressed =
      this.card.nativeElement.getAttribute("aria-pressed") === "true";
    this.card.nativeElement.setAttribute("aria-pressed", String(!pressed));
    this.card.nativeElement.setAttribute(
      "variant",
      pressed ? "default" : "filled",
    );
  };
}
`,svelte:`<!-- CardInteractive.svelte -->

<script lang="ts">
  // A link card renders a native <a>, a button card a native <button>
  // (aria-pressed on the host is forwarded to it).

  let card: HTMLElement;

  // The docs use hash routing: keep the demo link from navigating
  const onLink = (event: Event) => event.preventDefault();
  const onClick = () => {
    const pressed = card.getAttribute("aria-pressed") === "true";
    card.setAttribute("aria-pressed", String(!pressed));
    card.setAttribute("variant", pressed ? "default" : "filled");
  };
<\/script>

<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  "
>
  <minerva-card
    as="a"
    href="#card-link"
    interactive
    padding="medium"
    onclick={onLink}
  >
    <minerva-card-title>Link card</minerva-card-title>
    <minerva-card-description
      >as="a" with href: the whole card is a link.</minerva-card-description>
  </minerva-card>
  <minerva-card
    id="select"
    as="button"
    interactive
    padding="medium"
    aria-pressed="false"
    bind:this={card}
    onclick={onClick}
  >
    <minerva-card-title>Button card</minerva-card-title>
    <minerva-card-description
      >Click or press Enter to select.</minerva-card-description>
  </minerva-card>
  <minerva-card as="button" interactive disabled padding="medium">
    <minerva-card-title>Disabled</minerva-card-title>
    <minerva-card-description>Clicks are ignored.</minerva-card-description>
  </minerva-card>
</div>
`,solid:`// CardInteractive.tsx

// A link card renders a native <a>, a button card a native <button>
// (aria-pressed on the host is forwarded to it).

export default function CardInteractive() {
  let card!: HTMLElement;

  // The docs use hash routing: keep the demo link from navigating
  const onLink = (event: Event) => event.preventDefault();
  const onClick = () => {
    const pressed = card.getAttribute("aria-pressed") === "true";
    card.setAttribute("aria-pressed", String(!pressed));
    card.setAttribute("variant", pressed ? "default" : "filled");
  };

  return (
    <div
      style="
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      "
    >
      <minerva-card
        as="a"
        href="#card-link"
        interactive
        padding="medium"
        on:click={onLink}
      >
        <minerva-card-title>Link card</minerva-card-title>
        <minerva-card-description>
          as="a" with href: the whole card is a link.
        </minerva-card-description>
      </minerva-card>
      <minerva-card
        id="select"
        as="button"
        interactive
        padding="medium"
        aria-pressed="false"
        ref={card}
        on:click={onClick}
      >
        <minerva-card-title>Button card</minerva-card-title>
        <minerva-card-description>
          Click or press Enter to select.
        </minerva-card-description>
      </minerva-card>
      <minerva-card as="button" interactive disabled padding="medium">
        <minerva-card-title>Disabled</minerva-card-title>
        <minerva-card-description>Clicks are ignored.</minerva-card-description>
      </minerva-card>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  "
>
  <minerva-card as="a" href="#card-link" interactive padding="medium">
    <minerva-card-title>Link card</minerva-card-title>
    <minerva-card-description
      >as="a" with href: the whole card is a link.</minerva-card-description
    >
  </minerva-card>
  <minerva-card
    id="select"
    as="button"
    interactive
    padding="medium"
    aria-pressed="false"
  >
    <minerva-card-title>Button card</minerva-card-title>
    <minerva-card-description
      >Click or press Enter to select.</minerva-card-description
    >
  </minerva-card>
  <minerva-card as="button" interactive disabled padding="medium">
    <minerva-card-title>Disabled</minerva-card-title>
    <minerva-card-description>Clicks are ignored.</minerva-card-description>
  </minerva-card>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // A link card renders a native <a>, a button card a native <button>
  // (aria-pressed on the host is forwarded to it).
  const link = document.querySelector("minerva-card[as='a']");
  const card = document.querySelector("#select");
  // The docs use hash routing: keep the demo link from navigating
  const onLink = (event) => event.preventDefault();
  const onClick = () => {
    const pressed = card.getAttribute("aria-pressed") === "true";
    card.setAttribute("aria-pressed", String(!pressed));
    card.setAttribute("variant", pressed ? "default" : "filled");
  };
  link.addEventListener("click", onLink);
  card.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};