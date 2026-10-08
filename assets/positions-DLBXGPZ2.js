import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- BadgePositions.vue -->

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
    <minerva-badge position="top-right" content="3" badge-role="presentation">
      <minerva-avatar shape="rounded" name="Top Right"></minerva-avatar>
    </minerva-badge>
    <minerva-badge position="top-left" content="3" badge-role="presentation">
      <minerva-avatar shape="rounded" name="Top Left"></minerva-avatar>
    </minerva-badge>
    <minerva-badge
      position="bottom-right"
      dot
      color="success"
      aria-label="Online"
    >
      <minerva-avatar name="Bottom Right"></minerva-avatar>
    </minerva-badge>
    <minerva-badge position="bottom-left" dot color="warning" aria-label="Away">
      <minerva-avatar name="Bottom Left"></minerva-avatar>
    </minerva-badge>
  </div>
</template>
`,angular:`// badge-positions.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-badge-positions",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
      <minerva-badge position="top-right" content="3" badge-role="presentation">
        <minerva-avatar shape="rounded" name="Top Right"></minerva-avatar>
      </minerva-badge>
      <minerva-badge position="top-left" content="3" badge-role="presentation">
        <minerva-avatar shape="rounded" name="Top Left"></minerva-avatar>
      </minerva-badge>
      <minerva-badge
        position="bottom-right"
        dot
        color="success"
        aria-label="Online"
      >
        <minerva-avatar name="Bottom Right"></minerva-avatar>
      </minerva-badge>
      <minerva-badge
        position="bottom-left"
        dot
        color="warning"
        aria-label="Away"
      >
        <minerva-avatar name="Bottom Left"></minerva-avatar>
      </minerva-badge>
    </div>
  \`,
})
export class BadgePositionsComponent {}
`,svelte:`<!-- BadgePositions.svelte -->

<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <minerva-badge position="top-right" content="3" badge-role="presentation">
    <minerva-avatar shape="rounded" name="Top Right"></minerva-avatar>
  </minerva-badge>
  <minerva-badge position="top-left" content="3" badge-role="presentation">
    <minerva-avatar shape="rounded" name="Top Left"></minerva-avatar>
  </minerva-badge>
  <minerva-badge
    position="bottom-right"
    dot
    color="success"
    aria-label="Online"
  >
    <minerva-avatar name="Bottom Right"></minerva-avatar>
  </minerva-badge>
  <minerva-badge position="bottom-left" dot color="warning" aria-label="Away">
    <minerva-avatar name="Bottom Left"></minerva-avatar>
  </minerva-badge>
</div>
`,solid:`// BadgePositions.tsx

export default function BadgePositions() {
  return (
    <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
      <minerva-badge position="top-right" content="3" badge-role="presentation">
        <minerva-avatar shape="rounded" name="Top Right"></minerva-avatar>
      </minerva-badge>
      <minerva-badge position="top-left" content="3" badge-role="presentation">
        <minerva-avatar shape="rounded" name="Top Left"></minerva-avatar>
      </minerva-badge>
      <minerva-badge
        position="bottom-right"
        dot
        color="success"
        aria-label="Online"
      >
        <minerva-avatar name="Bottom Right"></minerva-avatar>
      </minerva-badge>
      <minerva-badge
        position="bottom-left"
        dot
        color="warning"
        aria-label="Away"
      >
        <minerva-avatar name="Bottom Left"></minerva-avatar>
      </minerva-badge>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: center">
  <minerva-badge position="top-right" content="3" badge-role="presentation">
    <minerva-avatar shape="rounded" name="Top Right"></minerva-avatar>
  </minerva-badge>
  <minerva-badge position="top-left" content="3" badge-role="presentation">
    <minerva-avatar shape="rounded" name="Top Left"></minerva-avatar>
  </minerva-badge>
  <minerva-badge
    position="bottom-right"
    dot
    color="success"
    aria-label="Online"
  >
    <minerva-avatar name="Bottom Right"></minerva-avatar>
  </minerva-badge>
  <minerva-badge position="bottom-left" dot color="warning" aria-label="Away">
    <minerva-avatar name="Bottom Left"></minerva-avatar>
  </minerva-badge>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};