import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TextLinkVariants.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Client-side routing: the click is composed out of the shadow root, so a
// router can intercept it on the host and read its \`href\`.

const root = ref<HTMLElement>();
const routeText = ref("Click a link: the navigation is intercepted.");

const onClick = (event: MouseEvent) => {
  const link = (event.target as Element).closest<
    HTMLElement & { href?: string }
  >("minerva-text-link");
  if (!link) return;
  event.preventDefault();
  routeText.value = \`Navigated to \${link.href}\`;
};
<\/script>

<template>
  <div ref="root" @click="onClick">
    <div style="display: grid; gap: 16px; width: 320px">
      <p style="margin: 0">
        Read the
        <minerva-text-link href="/guide">community guide</minerva-text-link>
        first.
      </p>
      <minerva-text-link href="/reviews" variant="subtle"
        >View all reviews</minerva-text-link
      >
      <div>
        <minerva-text-link href="/account" variant="action"
          >Account settings</minerva-text-link
        >
        <minerva-text-link href="/security" variant="action"
          >Security</minerva-text-link
        >
      </div>
      <output id="route">{{ routeText }}</output>
    </div>
  </div>
</template>
`,angular:`// text-link-variants.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Client-side routing: the click is composed out of the shadow root, so a
// router can intercept it on the host and read its \`href\`.

@Component({
  selector: "app-text-link-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div #root (click)="onClick($event)">
      <div style="display: grid; gap: 16px; width: 320px">
        <p style="margin: 0">
          Read the
          <minerva-text-link href="/guide">community guide</minerva-text-link>
          first.
        </p>
        <minerva-text-link href="/reviews" variant="subtle"
          >View all reviews</minerva-text-link
        >
        <div>
          <minerva-text-link href="/account" variant="action"
            >Account settings</minerva-text-link
          >
          <minerva-text-link href="/security" variant="action"
            >Security</minerva-text-link
          >
        </div>
        <output id="route">{{ routeText }}</output>
      </div>
    </div>
  \`,
})
export class TextLinkVariantsComponent {
  @ViewChild("root") root!: ElementRef<HTMLElement>;
  routeText = "Click a link: the navigation is intercepted.";

  onClick = (event: MouseEvent) => {
    const link = (event.target as Element).closest<
      HTMLElement & { href?: string }
    >("minerva-text-link");
    if (!link) return;
    event.preventDefault();
    this.routeText = \`Navigated to \${link.href}\`;
  };
}
`,svelte:`<!-- TextLinkVariants.svelte -->

<script lang="ts">
  // Client-side routing: the click is composed out of the shadow root, so a
  // router can intercept it on the host and read its \`href\`.

  let root: HTMLElement;
  let routeText = $state("Click a link: the navigation is intercepted.");

  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element).closest<
      HTMLElement & { href?: string }
    >("minerva-text-link");
    if (!link) return;
    event.preventDefault();
    routeText = \`Navigated to \${link.href}\`;
  };
<\/script>

<div
  bind:this={root}
  onclick={onClick}
>
  <div style="display: grid; gap: 16px; width: 320px">
    <p style="margin: 0">
      Read the
      <minerva-text-link href="/guide">community guide</minerva-text-link>
      first.
    </p>
    <minerva-text-link href="/reviews" variant="subtle"
      >View all reviews</minerva-text-link>
    <div>
      <minerva-text-link href="/account" variant="action"
        >Account settings</minerva-text-link>
      <minerva-text-link href="/security" variant="action"
        >Security</minerva-text-link>
    </div>
    <output id="route">{routeText}</output>
  </div>
</div>
`,solid:`// TextLinkVariants.tsx

import { createSignal } from "solid-js";

// Client-side routing: the click is composed out of the shadow root, so a
// router can intercept it on the host and read its \`href\`.

export default function TextLinkVariants() {
  let root!: HTMLElement;
  const [routeText, setRouteText] = createSignal(
    "Click a link: the navigation is intercepted.",
  );

  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element).closest<
      HTMLElement & { href?: string }
    >("minerva-text-link");
    if (!link) return;
    event.preventDefault();
    setRouteText(\`Navigated to \${link.href}\`);
  };

  return (
    <div ref={root} on:click={onClick}>
      <div style="display: grid; gap: 16px; width: 320px">
        <p style="margin: 0">
          Read the
          <minerva-text-link href="/guide">community guide</minerva-text-link>
          first.
        </p>
        <minerva-text-link href="/reviews" variant="subtle">
          View all reviews
        </minerva-text-link>
        <div>
          <minerva-text-link href="/account" variant="action">
            Account settings
          </minerva-text-link>
          <minerva-text-link href="/security" variant="action">
            Security
          </minerva-text-link>
        </div>
        <output id="route">{routeText()}</output>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px; width: 320px">
  <p style="margin: 0">
    Read the
    <minerva-text-link href="/guide">community guide</minerva-text-link>
    first.
  </p>
  <minerva-text-link href="/reviews" variant="subtle"
    >View all reviews</minerva-text-link
  >
  <div>
    <minerva-text-link href="/account" variant="action"
      >Account settings</minerva-text-link
    >
    <minerva-text-link href="/security" variant="action"
      >Security</minerva-text-link
    >
  </div>
  <output id="route">Click a link: the navigation is intercepted.</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Client-side routing: the click is composed out of the shadow root, so a
  // router can intercept it on the host and read its \`href\`.
  const route = document.querySelector("#route");
  const onClick = (event) => {
    const link = event.target.closest("minerva-text-link");
    if (!link) return;
    event.preventDefault();
    route.value = \`Navigated to \${link.href}\`;
  };
  document.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};