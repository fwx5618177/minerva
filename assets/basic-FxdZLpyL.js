import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SkeletonBasic.vue -->

<template>
  <div style="display: grid; gap: 24px">
    <minerva-skeleton lines="3"></minerva-skeleton>
    <minerva-skeleton avatar heading paragraph></minerva-skeleton>
    <minerva-skeleton
      avatar
      avatar-shape="square"
      avatar-size="56"
      lines="2"
      animation="wave"
      aria-label="Loading profile"
    ></minerva-skeleton>
  </div>
</template>
`,angular:`// skeleton-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-skeleton-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 24px">
      <minerva-skeleton lines="3"></minerva-skeleton>
      <minerva-skeleton avatar heading paragraph></minerva-skeleton>
      <minerva-skeleton
        avatar
        avatar-shape="square"
        avatar-size="56"
        lines="2"
        animation="wave"
        aria-label="Loading profile"
      ></minerva-skeleton>
    </div>
  \`,
})
export class SkeletonBasicComponent {}
`,svelte:`<!-- SkeletonBasic.svelte -->

<div style="display: grid; gap: 24px">
  <minerva-skeleton lines="3"></minerva-skeleton>
  <minerva-skeleton avatar heading paragraph></minerva-skeleton>
  <minerva-skeleton
    avatar
    avatar-shape="square"
    avatar-size="56"
    lines="2"
    animation="wave"
    aria-label="Loading profile"
  ></minerva-skeleton>
</div>
`,solid:`// SkeletonBasic.tsx

export default function SkeletonBasic() {
  return (
    <div style="display: grid; gap: 24px">
      <minerva-skeleton lines="3"></minerva-skeleton>
      <minerva-skeleton avatar heading paragraph></minerva-skeleton>
      <minerva-skeleton
        avatar
        avatar-shape="square"
        avatar-size="56"
        lines="2"
        animation="wave"
        aria-label="Loading profile"
      ></minerva-skeleton>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 24px">
  <minerva-skeleton lines="3"></minerva-skeleton>
  <minerva-skeleton avatar heading paragraph></minerva-skeleton>
  <minerva-skeleton
    avatar
    avatar-shape="square"
    avatar-size="56"
    lines="2"
    animation="wave"
    aria-label="Loading profile"
  ></minerva-skeleton>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};