import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AlertVariantsSizes.vue -->

<template>
  <div style="display: grid; gap: 12px">
    <minerva-alert variant="subtle" color="success"
      >Subtle (default)</minerva-alert
    >
    <minerva-alert variant="outline" color="success">Outline</minerva-alert>
    <minerva-alert variant="solid" color="success">Solid</minerva-alert>
    <minerva-alert size="small" hide-icon>Small, without icon</minerva-alert>
    <minerva-alert size="large" elevation square animation-name="fadeIn"
      >Large, elevated, square corners, fade-in</minerva-alert
    >
    <minerva-alert banner color="warning" no-animation>
      <span slot="icon" aria-hidden="true">🛠</span>
      Banner: scheduled maintenance on Sunday 02:00 UTC.
    </minerva-alert>
  </div>
</template>
`,angular:`// alert-variants-sizes.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-alert-variants-sizes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <minerva-alert variant="subtle" color="success"
        >Subtle (default)</minerva-alert
      >
      <minerva-alert variant="outline" color="success">Outline</minerva-alert>
      <minerva-alert variant="solid" color="success">Solid</minerva-alert>
      <minerva-alert size="small" hide-icon>Small, without icon</minerva-alert>
      <minerva-alert size="large" elevation square animation-name="fadeIn"
        >Large, elevated, square corners, fade-in</minerva-alert
      >
      <minerva-alert banner color="warning" no-animation>
        <span slot="icon" aria-hidden="true">🛠</span>
        Banner: scheduled maintenance on Sunday 02:00 UTC.
      </minerva-alert>
    </div>
  \`,
})
export class AlertVariantsSizesComponent {}
`,svelte:`<!-- AlertVariantsSizes.svelte -->

<div style="display: grid; gap: 12px">
  <minerva-alert variant="subtle" color="success"
    >Subtle (default)</minerva-alert>
  <minerva-alert variant="outline" color="success">Outline</minerva-alert>
  <minerva-alert variant="solid" color="success">Solid</minerva-alert>
  <minerva-alert size="small" hide-icon>Small, without icon</minerva-alert>
  <minerva-alert size="large" elevation square animation-name="fadeIn"
    >Large, elevated, square corners, fade-in</minerva-alert>
  <minerva-alert banner color="warning" no-animation>
    <span slot="icon" aria-hidden="true">🛠</span>
    Banner: scheduled maintenance on Sunday 02:00 UTC.
  </minerva-alert>
</div>
`,solid:`// AlertVariantsSizes.tsx

export default function AlertVariantsSizes() {
  return (
    <div style="display: grid; gap: 12px">
      <minerva-alert variant="subtle" color="success">
        Subtle (default)
      </minerva-alert>
      <minerva-alert variant="outline" color="success">
        Outline
      </minerva-alert>
      <minerva-alert variant="solid" color="success">
        Solid
      </minerva-alert>
      <minerva-alert size="small" hide-icon>
        Small, without icon
      </minerva-alert>
      <minerva-alert size="large" elevation square animation-name="fadeIn">
        Large, elevated, square corners, fade-in
      </minerva-alert>
      <minerva-alert banner color="warning" no-animation>
        <span slot="icon" aria-hidden="true">
          🛠
        </span>
        Banner: scheduled maintenance on Sunday 02:00 UTC.
      </minerva-alert>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <minerva-alert variant="subtle" color="success"
    >Subtle (default)</minerva-alert
  >
  <minerva-alert variant="outline" color="success">Outline</minerva-alert>
  <minerva-alert variant="solid" color="success">Solid</minerva-alert>
  <minerva-alert size="small" hide-icon>Small, without icon</minerva-alert>
  <minerva-alert size="large" elevation square animation-name="fadeIn"
    >Large, elevated, square corners, fade-in</minerva-alert
  >
  <minerva-alert banner color="warning" no-animation>
    <span slot="icon" aria-hidden="true">🛠</span>
    Banner: scheduled maintenance on Sunday 02:00 UTC.
  </minerva-alert>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};