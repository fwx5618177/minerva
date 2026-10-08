import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- StackWrapSeparator.vue -->

<script setup lang="ts">
import { ref } from "vue";

// \`separator\` set as a property can be a function: it returns fresh content
// for every gap (here a vertical divider).

const root = ref<HTMLElement>();

const linksSeparator = () => {
  const divider = document.createElement("minerva-divider");
  divider.setAttribute("orientation", "vertical");
  divider.setAttribute("spacing", "0");
  return divider;
};
// The docs use hash routing: keep the demo links from navigating
const onClick = (event: Event) => {
  if ((event.target as Element).closest("a")) event.preventDefault();
};
<\/script>

<template>
  <div ref="root" @click="onClick">
    <minerva-hstack id="breadcrumb" gap="2" separator="/">
      <a href="#home">Home</a>
      <a href="#library">Library</a>
      <span aria-current="page">Data</span>
    </minerva-hstack>
    <minerva-hstack
      id="links"
      gap="3"
      style="margin-top: 12px"
      :separator.prop="linksSeparator"
    >
      <span>Profile</span>
      <span>Billing</span>
      <span>Team</span>
    </minerva-hstack>
    <minerva-stack
      direction="row"
      wrap
      gap="2"
      style="margin-top: 12px; max-width: 320px"
    >
      <minerva-tag>design</minerva-tag>
      <minerva-tag>accessibility</minerva-tag>
      <minerva-tag>web components</minerva-tag>
      <minerva-tag>tokens</minerva-tag>
      <minerva-tag>layout</minerva-tag>
      <minerva-tag>shadow DOM</minerva-tag>
    </minerva-stack>
  </div>
</template>
`,angular:`// stack-wrap-separator.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// \`separator\` set as a property can be a function: it returns fresh content
// for every gap (here a vertical divider).

@Component({
  selector: "app-stack-wrap-separator",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div #root (click)="onClick($event)">
      <minerva-hstack id="breadcrumb" gap="2" separator="/">
        <a href="#home">Home</a>
        <a href="#library">Library</a>
        <span aria-current="page">Data</span>
      </minerva-hstack>
      <minerva-hstack
        id="links"
        gap="3"
        style="margin-top: 12px"
        [separator]="linksSeparator"
      >
        <span>Profile</span>
        <span>Billing</span>
        <span>Team</span>
      </minerva-hstack>
      <minerva-stack
        direction="row"
        wrap
        gap="2"
        style="margin-top: 12px; max-width: 320px"
      >
        <minerva-tag>design</minerva-tag>
        <minerva-tag>accessibility</minerva-tag>
        <minerva-tag>web components</minerva-tag>
        <minerva-tag>tokens</minerva-tag>
        <minerva-tag>layout</minerva-tag>
        <minerva-tag>shadow DOM</minerva-tag>
      </minerva-stack>
    </div>
  \`,
})
export class StackWrapSeparatorComponent {
  @ViewChild("root") root!: ElementRef<HTMLElement>;

  linksSeparator = () => {
    const divider = document.createElement("minerva-divider");
    divider.setAttribute("orientation", "vertical");
    divider.setAttribute("spacing", "0");
    return divider;
  };
  // The docs use hash routing: keep the demo links from navigating
  onClick = (event: Event) => {
    if ((event.target as Element).closest("a")) event.preventDefault();
  };
}
`,svelte:`<!-- StackWrapSeparator.svelte -->

<script lang="ts">
  // \`separator\` set as a property can be a function: it returns fresh content
  // for every gap (here a vertical divider).

  let root: HTMLElement;

  const linksSeparator = () => {
    const divider = document.createElement("minerva-divider");
    divider.setAttribute("orientation", "vertical");
    divider.setAttribute("spacing", "0");
    return divider;
  };
  // The docs use hash routing: keep the demo links from navigating
  const onClick = (event: Event) => {
    if ((event.target as Element).closest("a")) event.preventDefault();
  };
<\/script>

<div
  bind:this={root}
  onclick={onClick}
>
  <minerva-hstack id="breadcrumb" gap="2" separator="/">
    <a href="#home">Home</a>
    <a href="#library">Library</a>
    <span aria-current="page">Data</span>
  </minerva-hstack>
  <minerva-hstack
    id="links"
    gap="3"
    style="margin-top: 12px"
    separator={linksSeparator}
  >
    <span>Profile</span>
    <span>Billing</span>
    <span>Team</span>
  </minerva-hstack>
  <minerva-stack
    direction="row"
    wrap
    gap="2"
    style="margin-top: 12px; max-width: 320px"
  >
    <minerva-tag>design</minerva-tag>
    <minerva-tag>accessibility</minerva-tag>
    <minerva-tag>web components</minerva-tag>
    <minerva-tag>tokens</minerva-tag>
    <minerva-tag>layout</minerva-tag>
    <minerva-tag>shadow DOM</minerva-tag>
  </minerva-stack>
</div>
`,solid:`// StackWrapSeparator.tsx

// \`separator\` set as a property can be a function: it returns fresh content
// for every gap (here a vertical divider).

export default function StackWrapSeparator() {
  let root!: HTMLElement;

  const linksSeparator = () => {
    const divider = document.createElement("minerva-divider");
    divider.setAttribute("orientation", "vertical");
    divider.setAttribute("spacing", "0");
    return divider;
  };
  // The docs use hash routing: keep the demo links from navigating
  const onClick = (event: Event) => {
    if ((event.target as Element).closest("a")) event.preventDefault();
  };

  return (
    <div ref={root} on:click={onClick}>
      <minerva-hstack id="breadcrumb" gap="2" separator="/">
        <a href="#home">Home</a>
        <a href="#library">Library</a>
        <span aria-current="page">Data</span>
      </minerva-hstack>
      <minerva-hstack
        id="links"
        gap="3"
        style="margin-top: 12px"
        prop:separator={linksSeparator}
      >
        <span>Profile</span>
        <span>Billing</span>
        <span>Team</span>
      </minerva-hstack>
      <minerva-stack
        direction="row"
        wrap
        gap="2"
        style="margin-top: 12px; max-width: 320px"
      >
        <minerva-tag>design</minerva-tag>
        <minerva-tag>accessibility</minerva-tag>
        <minerva-tag>web components</minerva-tag>
        <minerva-tag>tokens</minerva-tag>
        <minerva-tag>layout</minerva-tag>
        <minerva-tag>shadow DOM</minerva-tag>
      </minerva-stack>
    </div>
  );
}
`,html:`<minerva-hstack id="breadcrumb" gap="2" separator="/">
  <a href="#home">Home</a>
  <a href="#library">Library</a>
  <span aria-current="page">Data</span>
</minerva-hstack>
<minerva-hstack id="links" gap="3" style="margin-top: 12px">
  <span>Profile</span>
  <span>Billing</span>
  <span>Team</span>
</minerva-hstack>
<minerva-stack
  direction="row"
  wrap
  gap="2"
  style="margin-top: 12px; max-width: 320px"
>
  <minerva-tag>design</minerva-tag>
  <minerva-tag>accessibility</minerva-tag>
  <minerva-tag>web components</minerva-tag>
  <minerva-tag>tokens</minerva-tag>
  <minerva-tag>layout</minerva-tag>
  <minerva-tag>shadow DOM</minerva-tag>
</minerva-stack>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // \`separator\` set as a property can be a function: it returns fresh content
  // for every gap (here a vertical divider).
  const links = document.querySelector("#links");
  links.separator = () => {
    const divider = document.createElement("minerva-divider");
    divider.setAttribute("orientation", "vertical");
    divider.setAttribute("spacing", "0");
    return divider;
  };
  // The docs use hash routing: keep the demo links from navigating
  const onClick = (event) => {
    if (event.target.closest("a")) event.preventDefault();
  };
  document.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};