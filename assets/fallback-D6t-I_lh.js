import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AvatarFallback.vue -->

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
    <minerva-avatar
      src="data:image/png;base64,broken"
      name="Grace Hopper"
    ></minerva-avatar>
    <minerva-avatar src="data:image/png;base64,broken" name="Support team">
      <span slot="fallback" aria-hidden="true">🎧</span>
    </minerva-avatar>
    <minerva-avatar shape="rounded" aria-label="Robot">
      <span aria-hidden="true">🤖</span>
    </minerva-avatar>
  </div>
</template>
`,angular:`// avatar-fallback.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-avatar-fallback",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
      <minerva-avatar
        src="data:image/png;base64,broken"
        name="Grace Hopper"
      ></minerva-avatar>
      <minerva-avatar src="data:image/png;base64,broken" name="Support team">
        <span slot="fallback" aria-hidden="true">🎧</span>
      </minerva-avatar>
      <minerva-avatar shape="rounded" aria-label="Robot">
        <span aria-hidden="true">🤖</span>
      </minerva-avatar>
    </div>
  \`,
})
export class AvatarFallbackComponent {}
`,svelte:`<!-- AvatarFallback.svelte -->

<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
  <minerva-avatar
    src="data:image/png;base64,broken"
    name="Grace Hopper"
  ></minerva-avatar>
  <minerva-avatar src="data:image/png;base64,broken" name="Support team">
    <span slot="fallback" aria-hidden="true">🎧</span>
  </minerva-avatar>
  <minerva-avatar shape="rounded" aria-label="Robot">
    <span aria-hidden="true">🤖</span>
  </minerva-avatar>
</div>
`,solid:`// AvatarFallback.tsx

export default function AvatarFallback() {
  return (
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
      <minerva-avatar
        src="data:image/png;base64,broken"
        name="Grace Hopper"
      ></minerva-avatar>
      <minerva-avatar src="data:image/png;base64,broken" name="Support team">
        <span slot="fallback" aria-hidden="true">
          🎧
        </span>
      </minerva-avatar>
      <minerva-avatar shape="rounded" aria-label="Robot">
        <span aria-hidden="true">🤖</span>
      </minerva-avatar>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
  <minerva-avatar
    src="data:image/png;base64,broken"
    name="Grace Hopper"
  ></minerva-avatar>
  <minerva-avatar src="data:image/png;base64,broken" name="Support team">
    <span slot="fallback" aria-hidden="true">🎧</span>
  </minerva-avatar>
  <minerva-avatar shape="rounded" aria-label="Robot">
    <span aria-hidden="true">🤖</span>
  </minerva-avatar>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};