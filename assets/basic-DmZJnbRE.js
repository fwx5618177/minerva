import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- FormControlBasic.vue -->

<template>
  <div style="display: grid; gap: 16px; max-width: 360px">
    <minerva-form-control
      label="Display name"
      helper-text="Shown on your public profile."
    >
      <minerva-input placeholder="Ada"></minerva-input>
    </minerva-form-control>
    <minerva-form-control label="Country" required>
      <select>
        <option>France</option>
        <option>Japan</option>
        <option>United States</option>
      </select>
    </minerva-form-control>
    <minerva-form-control
      label="Weekly digest"
      helper-text="Clicking the label toggles the switch."
    >
      <minerva-switch></minerva-switch>
    </minerva-form-control>
  </div>
</template>
`,angular:`// form-control-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-form-control-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px; max-width: 360px">
      <minerva-form-control
        label="Display name"
        helper-text="Shown on your public profile."
      >
        <minerva-input placeholder="Ada"></minerva-input>
      </minerva-form-control>
      <minerva-form-control label="Country" required>
        <select>
          <option>France</option>
          <option>Japan</option>
          <option>United States</option>
        </select>
      </minerva-form-control>
      <minerva-form-control
        label="Weekly digest"
        helper-text="Clicking the label toggles the switch."
      >
        <minerva-switch></minerva-switch>
      </minerva-form-control>
    </div>
  \`,
})
export class FormControlBasicComponent {}
`,svelte:`<!-- FormControlBasic.svelte -->

<div style="display: grid; gap: 16px; max-width: 360px">
  <minerva-form-control
    label="Display name"
    helper-text="Shown on your public profile."
  >
    <minerva-input placeholder="Ada"></minerva-input>
  </minerva-form-control>
  <minerva-form-control label="Country" required>
    <select>
      <option>France</option>
      <option>Japan</option>
      <option>United States</option>
    </select>
  </minerva-form-control>
  <minerva-form-control
    label="Weekly digest"
    helper-text="Clicking the label toggles the switch."
  >
    <minerva-switch></minerva-switch>
  </minerva-form-control>
</div>
`,solid:`// FormControlBasic.tsx

export default function FormControlBasic() {
  return (
    <div style="display: grid; gap: 16px; max-width: 360px">
      <minerva-form-control
        label="Display name"
        helper-text="Shown on your public profile."
      >
        <minerva-input placeholder="Ada"></minerva-input>
      </minerva-form-control>
      <minerva-form-control label="Country" required>
        <select>
          <option>France</option>
          <option>Japan</option>
          <option>United States</option>
        </select>
      </minerva-form-control>
      <minerva-form-control
        label="Weekly digest"
        helper-text="Clicking the label toggles the switch."
      >
        <minerva-switch></minerva-switch>
      </minerva-form-control>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px; max-width: 360px">
  <minerva-form-control
    label="Display name"
    helper-text="Shown on your public profile."
  >
    <minerva-input placeholder="Ada"></minerva-input>
  </minerva-form-control>
  <minerva-form-control label="Country" required>
    <select>
      <option>France</option>
      <option>Japan</option>
      <option>United States</option>
    </select>
  </minerva-form-control>
  <minerva-form-control
    label="Weekly digest"
    helper-text="Clicking the label toggles the switch."
  >
    <minerva-switch></minerva-switch>
  </minerva-form-control>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";
<\/script>
`}})))()}n();export{t as default};