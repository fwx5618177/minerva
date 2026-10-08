import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ProgressSizesColors.vue -->

<template>
  <div style="display: grid; gap: 16px">
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
      <minerva-progress size="xsmall"></minerva-progress>
      <minerva-progress size="small"></minerva-progress>
      <minerva-progress size="medium"></minerva-progress>
      <minerva-progress size="large"></minerva-progress>
      <minerva-progress size="xlarge"></minerva-progress>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
      <minerva-progress color="primary" variant="circle"></minerva-progress>
      <minerva-progress color="neutral" variant="circle"></minerva-progress>
      <span style="color: var(--danger-color)">
        <minerva-progress color="current" variant="circle"></minerva-progress>
        current
      </span>
    </div>
  </div>
</template>
`,angular:`// progress-sizes-colors.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-progress-sizes-colors",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px">
      <div
        style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center"
      >
        <minerva-progress size="xsmall"></minerva-progress>
        <minerva-progress size="small"></minerva-progress>
        <minerva-progress size="medium"></minerva-progress>
        <minerva-progress size="large"></minerva-progress>
        <minerva-progress size="xlarge"></minerva-progress>
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center"
      >
        <minerva-progress color="primary" variant="circle"></minerva-progress>
        <minerva-progress color="neutral" variant="circle"></minerva-progress>
        <span style="color: var(--danger-color)">
          <minerva-progress color="current" variant="circle"></minerva-progress>
          current
        </span>
      </div>
    </div>
  \`,
})
export class ProgressSizesColorsComponent {}
`,svelte:`<!-- ProgressSizesColors.svelte -->

<div style="display: grid; gap: 16px">
  <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
    <minerva-progress size="xsmall"></minerva-progress>
    <minerva-progress size="small"></minerva-progress>
    <minerva-progress size="medium"></minerva-progress>
    <minerva-progress size="large"></minerva-progress>
    <minerva-progress size="xlarge"></minerva-progress>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
    <minerva-progress color="primary" variant="circle"></minerva-progress>
    <minerva-progress color="neutral" variant="circle"></minerva-progress>
    <span style="color: var(--danger-color)">
      <minerva-progress color="current" variant="circle"></minerva-progress>
      current
    </span>
  </div>
</div>
`,solid:`// ProgressSizesColors.tsx

export default function ProgressSizesColors() {
  return (
    <div style="display: grid; gap: 16px">
      <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
        <minerva-progress size="xsmall"></minerva-progress>
        <minerva-progress size="small"></minerva-progress>
        <minerva-progress size="medium"></minerva-progress>
        <minerva-progress size="large"></minerva-progress>
        <minerva-progress size="xlarge"></minerva-progress>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
        <minerva-progress color="primary" variant="circle"></minerva-progress>
        <minerva-progress color="neutral" variant="circle"></minerva-progress>
        <span style="color: var(--danger-color)">
          <minerva-progress color="current" variant="circle"></minerva-progress>
          current
        </span>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px">
  <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
    <minerva-progress size="xsmall"></minerva-progress>
    <minerva-progress size="small"></minerva-progress>
    <minerva-progress size="medium"></minerva-progress>
    <minerva-progress size="large"></minerva-progress>
    <minerva-progress size="xlarge"></minerva-progress>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center">
    <minerva-progress color="primary" variant="circle"></minerva-progress>
    <minerva-progress color="neutral" variant="circle"></minerva-progress>
    <span style="color: var(--danger-color)">
      <minerva-progress color="current" variant="circle"></minerva-progress>
      current
    </span>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};