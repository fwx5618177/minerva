import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SkeletonVariants.vue -->

<template>
  <div style="display: grid; gap: 16px">
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
      <minerva-skeleton
        variant="circular"
        width="48"
        height="48"
      ></minerva-skeleton>
      <minerva-skeleton
        variant="rectangular"
        width="120"
        height="48"
      ></minerva-skeleton>
      <minerva-skeleton
        variant="rounded"
        width="120"
        height="48"
      ></minerva-skeleton>
      <minerva-skeleton variant="button" width="96"></minerva-skeleton>
      <minerva-skeleton
        variant="image"
        width="120"
        height="80"
      ></minerva-skeleton>
    </div>
    <div style="display: grid; gap: 8px">
      <minerva-skeleton animation="pulse" width="80%"></minerva-skeleton>
      <minerva-skeleton animation="wave" width="80%"></minerva-skeleton>
      <minerva-skeleton
        animation="false"
        width="80%"
        border-radius="0"
      ></minerva-skeleton>
    </div>
    <minerva-skeleton
      variant="card"
      avatar
      heading
      paragraph
      active
    ></minerva-skeleton>
  </div>
</template>
`,angular:`// skeleton-variants.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-skeleton-variants",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px">
      <div
        style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center"
      >
        <minerva-skeleton
          variant="circular"
          width="48"
          height="48"
        ></minerva-skeleton>
        <minerva-skeleton
          variant="rectangular"
          width="120"
          height="48"
        ></minerva-skeleton>
        <minerva-skeleton
          variant="rounded"
          width="120"
          height="48"
        ></minerva-skeleton>
        <minerva-skeleton variant="button" width="96"></minerva-skeleton>
        <minerva-skeleton
          variant="image"
          width="120"
          height="80"
        ></minerva-skeleton>
      </div>
      <div style="display: grid; gap: 8px">
        <minerva-skeleton animation="pulse" width="80%"></minerva-skeleton>
        <minerva-skeleton animation="wave" width="80%"></minerva-skeleton>
        <minerva-skeleton
          animation="false"
          width="80%"
          border-radius="0"
        ></minerva-skeleton>
      </div>
      <minerva-skeleton
        variant="card"
        avatar
        heading
        paragraph
        active
      ></minerva-skeleton>
    </div>
  \`,
})
export class SkeletonVariantsComponent {}
`,svelte:`<!-- SkeletonVariants.svelte -->

<div style="display: grid; gap: 16px">
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-skeleton
      variant="circular"
      width="48"
      height="48"
    ></minerva-skeleton>
    <minerva-skeleton
      variant="rectangular"
      width="120"
      height="48"
    ></minerva-skeleton>
    <minerva-skeleton
      variant="rounded"
      width="120"
      height="48"
    ></minerva-skeleton>
    <minerva-skeleton variant="button" width="96"></minerva-skeleton>
    <minerva-skeleton
      variant="image"
      width="120"
      height="80"
    ></minerva-skeleton>
  </div>
  <div style="display: grid; gap: 8px">
    <minerva-skeleton animation="pulse" width="80%"></minerva-skeleton>
    <minerva-skeleton animation="wave" width="80%"></minerva-skeleton>
    <minerva-skeleton
      animation="false"
      width="80%"
      border-radius="0"
    ></minerva-skeleton>
  </div>
  <minerva-skeleton
    variant="card"
    avatar
    heading
    paragraph
    active
  ></minerva-skeleton>
</div>
`,solid:`// SkeletonVariants.tsx

export default function SkeletonVariants() {
  return (
    <div style="display: grid; gap: 16px">
      <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
        <minerva-skeleton
          variant="circular"
          width="48"
          height="48"
        ></minerva-skeleton>
        <minerva-skeleton
          variant="rectangular"
          width="120"
          height="48"
        ></minerva-skeleton>
        <minerva-skeleton
          variant="rounded"
          width="120"
          height="48"
        ></minerva-skeleton>
        <minerva-skeleton variant="button" width="96"></minerva-skeleton>
        <minerva-skeleton
          variant="image"
          width="120"
          height="80"
        ></minerva-skeleton>
      </div>
      <div style="display: grid; gap: 8px">
        <minerva-skeleton animation="pulse" width="80%"></minerva-skeleton>
        <minerva-skeleton animation="wave" width="80%"></minerva-skeleton>
        <minerva-skeleton
          animation="false"
          width="80%"
          border-radius="0"
        ></minerva-skeleton>
      </div>
      <minerva-skeleton
        variant="card"
        avatar
        heading
        paragraph
        active
      ></minerva-skeleton>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px">
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-skeleton
      variant="circular"
      width="48"
      height="48"
    ></minerva-skeleton>
    <minerva-skeleton
      variant="rectangular"
      width="120"
      height="48"
    ></minerva-skeleton>
    <minerva-skeleton
      variant="rounded"
      width="120"
      height="48"
    ></minerva-skeleton>
    <minerva-skeleton variant="button" width="96"></minerva-skeleton>
    <minerva-skeleton
      variant="image"
      width="120"
      height="80"
    ></minerva-skeleton>
  </div>
  <div style="display: grid; gap: 8px">
    <minerva-skeleton animation="pulse" width="80%"></minerva-skeleton>
    <minerva-skeleton animation="wave" width="80%"></minerva-skeleton>
    <minerva-skeleton
      animation="false"
      width="80%"
      border-radius="0"
    ></minerva-skeleton>
  </div>
  <minerva-skeleton
    variant="card"
    avatar
    heading
    paragraph
    active
  ></minerva-skeleton>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};