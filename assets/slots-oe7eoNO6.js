import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- FormControlSlots.vue -->

<template>
  <div style="display: grid; gap: 16px; max-width: 360px">
    <minerva-form-control>
      <span slot="label">Website <small>(optional)</small></span>
      <minerva-input type="url" placeholder="https://"></minerva-input>
      <span slot="helper-text">Starts with <code>https://</code>.</span>
    </minerva-form-control>
    <minerva-form-control invalid>
      <span slot="label">Coupon</span>
      <minerva-input value="SPRING"></minerva-input>
      <span slot="error-message"
        >This coupon expired on <strong>May 31</strong>.</span
      >
    </minerva-form-control>
  </div>
</template>
`,angular:`// form-control-slots.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-form-control-slots",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px; max-width: 360px">
      <minerva-form-control>
        <span slot="label">Website <small>(optional)</small></span>
        <minerva-input type="url" placeholder="https://"></minerva-input>
        <span slot="helper-text">Starts with <code>https://</code>.</span>
      </minerva-form-control>
      <minerva-form-control invalid>
        <span slot="label">Coupon</span>
        <minerva-input value="SPRING"></minerva-input>
        <span slot="error-message"
          >This coupon expired on <strong>May 31</strong>.</span
        >
      </minerva-form-control>
    </div>
  \`,
})
export class FormControlSlotsComponent {}
`,svelte:`<!-- FormControlSlots.svelte -->

<div style="display: grid; gap: 16px; max-width: 360px">
  <minerva-form-control>
    <span slot="label">Website <small>(optional)</small></span>
    <minerva-input type="url" placeholder="https://"></minerva-input>
    <span slot="helper-text">Starts with <code>https://</code>.</span>
  </minerva-form-control>
  <minerva-form-control invalid>
    <span slot="label">Coupon</span>
    <minerva-input value="SPRING"></minerva-input>
    <span slot="error-message"
      >This coupon expired on <strong>May 31</strong>.</span>
  </minerva-form-control>
</div>
`,solid:`// FormControlSlots.tsx

export default function FormControlSlots() {
  return (
    <div style="display: grid; gap: 16px; max-width: 360px">
      <minerva-form-control>
        <span slot="label">
          Website <small>(optional)</small>
        </span>
        <minerva-input type="url" placeholder="https://"></minerva-input>
        <span slot="helper-text">
          Starts with <code>https://</code>.
        </span>
      </minerva-form-control>
      <minerva-form-control invalid>
        <span slot="label">Coupon</span>
        <minerva-input value="SPRING"></minerva-input>
        <span slot="error-message">
          This coupon expired on <strong>May 31</strong>.
        </span>
      </minerva-form-control>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px; max-width: 360px">
  <minerva-form-control>
    <span slot="label">Website <small>(optional)</small></span>
    <minerva-input type="url" placeholder="https://"></minerva-input>
    <span slot="helper-text">Starts with <code>https://</code>.</span>
  </minerva-form-control>
  <minerva-form-control invalid>
    <span slot="label">Coupon</span>
    <minerva-input value="SPRING"></minerva-input>
    <span slot="error-message"
      >This coupon expired on <strong>May 31</strong>.</span
    >
  </minerva-form-control>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};