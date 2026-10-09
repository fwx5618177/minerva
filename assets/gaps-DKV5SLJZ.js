import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- FormLayoutGaps.vue -->

<template>
  <form style="display: grid; gap: 24px">
    <minerva-form-layout columns="1 2 3" row-gap="6" column-gap="2">
      <label style="display: grid; gap: 4px">
        City
        <input name="city" />
      </label>
      <label style="display: grid; gap: 4px">
        State
        <input name="state" />
      </label>
      <label style="display: grid; gap: 4px">
        ZIP
        <input name="zip" inputmode="numeric" />
      </label>
    </minerva-form-layout>
    <minerva-form-layout columns="2" gap="24px">
      <label style="display: grid; gap: 4px">
        Start date
        <input name="start" type="date" />
      </label>
      <label style="display: grid; gap: 4px">
        End date
        <input name="end" type="date" />
      </label>
    </minerva-form-layout>
  </form>
</template>
`,angular:`// form-layout-gaps.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-form-layout-gaps",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form style="display: grid; gap: 24px">
      <minerva-form-layout columns="1 2 3" row-gap="6" column-gap="2">
        <label style="display: grid; gap: 4px">
          City
          <input name="city" />
        </label>
        <label style="display: grid; gap: 4px">
          State
          <input name="state" />
        </label>
        <label style="display: grid; gap: 4px">
          ZIP
          <input name="zip" inputmode="numeric" />
        </label>
      </minerva-form-layout>
      <minerva-form-layout columns="2" gap="24px">
        <label style="display: grid; gap: 4px">
          Start date
          <input name="start" type="date" />
        </label>
        <label style="display: grid; gap: 4px">
          End date
          <input name="end" type="date" />
        </label>
      </minerva-form-layout>
    </form>
  \`,
})
export class FormLayoutGapsComponent {}
`,svelte:`<!-- FormLayoutGaps.svelte -->

<form style="display: grid; gap: 24px">
  <minerva-form-layout columns="1 2 3" row-gap="6" column-gap="2">
    <label style="display: grid; gap: 4px">
      City
      <input name="city" />
    </label>
    <label style="display: grid; gap: 4px">
      State
      <input name="state" />
    </label>
    <label style="display: grid; gap: 4px">
      ZIP
      <input name="zip" inputmode="numeric" />
    </label>
  </minerva-form-layout>
  <minerva-form-layout columns="2" gap="24px">
    <label style="display: grid; gap: 4px">
      Start date
      <input name="start" type="date" />
    </label>
    <label style="display: grid; gap: 4px">
      End date
      <input name="end" type="date" />
    </label>
  </minerva-form-layout>
</form>
`,solid:`// FormLayoutGaps.tsx

export default function FormLayoutGaps() {
  return (
    <form style="display: grid; gap: 24px">
      <minerva-form-layout columns="1 2 3" row-gap="6" column-gap="2">
        <label style="display: grid; gap: 4px">
          City
          <input name="city" />
        </label>
        <label style="display: grid; gap: 4px">
          State
          <input name="state" />
        </label>
        <label style="display: grid; gap: 4px">
          ZIP
          <input name="zip" inputmode="numeric" />
        </label>
      </minerva-form-layout>
      <minerva-form-layout columns="2" gap="24px">
        <label style="display: grid; gap: 4px">
          Start date
          <input name="start" type="date" />
        </label>
        <label style="display: grid; gap: 4px">
          End date
          <input name="end" type="date" />
        </label>
      </minerva-form-layout>
    </form>
  );
}
`,html:`<form style="display: grid; gap: 24px">
  <minerva-form-layout columns="1 2 3" row-gap="6" column-gap="2">
    <label style="display: grid; gap: 4px">
      City
      <input name="city" />
    </label>
    <label style="display: grid; gap: 4px">
      State
      <input name="state" />
    </label>
    <label style="display: grid; gap: 4px">
      ZIP
      <input name="zip" inputmode="numeric" />
    </label>
  </minerva-form-layout>
  <minerva-form-layout columns="2" gap="24px">
    <label style="display: grid; gap: 4px">
      Start date
      <input name="start" type="date" />
    </label>
    <label style="display: grid; gap: 4px">
      End date
      <input name="end" type="date" />
    </label>
  </minerva-form-layout>
</form>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};