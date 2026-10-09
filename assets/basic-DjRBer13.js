import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SelectBasic.vue -->

<template>
  <div style="display: grid; gap: 12px; max-width: 280px">
    <label style="display: grid; gap: 4px">
      Fruit
      <minerva-select placeholder="Pick a fruit">
        <minerva-option value="apple">Apple</minerva-option>
        <minerva-option value="banana">Banana</minerva-option>
        <minerva-option value="cherry">Cherry</minerva-option>
        <minerva-option value="durian" disabled
          >Durian (out of stock)</minerva-option
        >
        <minerva-option value="grape">Grape</minerva-option>
      </minerva-select>
    </label>
    <minerva-select aria-label="Small" size="small" value="s">
      <minerva-option value="s">Small</minerva-option>
      <minerva-option value="m">Medium</minerva-option>
    </minerva-select>
    <minerva-select aria-label="Large" size="large" value="l">
      <minerva-option value="m">Medium</minerva-option>
      <minerva-option value="l">Large</minerva-option>
    </minerva-select>
    <minerva-select aria-label="Disabled" placeholder="Disabled" disabled>
      <minerva-option value="a">A</minerva-option>
    </minerva-select>
  </div>
</template>
`,angular:`// select-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-select-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 280px">
      <label style="display: grid; gap: 4px">
        Fruit
        <minerva-select placeholder="Pick a fruit">
          <minerva-option value="apple">Apple</minerva-option>
          <minerva-option value="banana">Banana</minerva-option>
          <minerva-option value="cherry">Cherry</minerva-option>
          <minerva-option value="durian" disabled
            >Durian (out of stock)</minerva-option
          >
          <minerva-option value="grape">Grape</minerva-option>
        </minerva-select>
      </label>
      <minerva-select aria-label="Small" size="small" value="s">
        <minerva-option value="s">Small</minerva-option>
        <minerva-option value="m">Medium</minerva-option>
      </minerva-select>
      <minerva-select aria-label="Large" size="large" value="l">
        <minerva-option value="m">Medium</minerva-option>
        <minerva-option value="l">Large</minerva-option>
      </minerva-select>
      <minerva-select aria-label="Disabled" placeholder="Disabled" disabled>
        <minerva-option value="a">A</minerva-option>
      </minerva-select>
    </div>
  \`,
})
export class SelectBasicComponent {}
`,svelte:`<!-- SelectBasic.svelte -->

<div style="display: grid; gap: 12px; max-width: 280px">
  <label style="display: grid; gap: 4px">
    Fruit
    <minerva-select placeholder="Pick a fruit">
      <minerva-option value="apple">Apple</minerva-option>
      <minerva-option value="banana">Banana</minerva-option>
      <minerva-option value="cherry">Cherry</minerva-option>
      <minerva-option value="durian" disabled
        >Durian (out of stock)</minerva-option>
      <minerva-option value="grape">Grape</minerva-option>
    </minerva-select>
  </label>
  <minerva-select aria-label="Small" size="small" value="s">
    <minerva-option value="s">Small</minerva-option>
    <minerva-option value="m">Medium</minerva-option>
  </minerva-select>
  <minerva-select aria-label="Large" size="large" value="l">
    <minerva-option value="m">Medium</minerva-option>
    <minerva-option value="l">Large</minerva-option>
  </minerva-select>
  <minerva-select aria-label="Disabled" placeholder="Disabled" disabled>
    <minerva-option value="a">A</minerva-option>
  </minerva-select>
</div>
`,solid:`// SelectBasic.tsx

export default function SelectBasic() {
  return (
    <div style="display: grid; gap: 12px; max-width: 280px">
      <label style="display: grid; gap: 4px">
        Fruit
        <minerva-select placeholder="Pick a fruit">
          <minerva-option value="apple">Apple</minerva-option>
          <minerva-option value="banana">Banana</minerva-option>
          <minerva-option value="cherry">Cherry</minerva-option>
          <minerva-option value="durian" disabled>
            Durian (out of stock)
          </minerva-option>
          <minerva-option value="grape">Grape</minerva-option>
        </minerva-select>
      </label>
      <minerva-select aria-label="Small" size="small" value="s">
        <minerva-option value="s">Small</minerva-option>
        <minerva-option value="m">Medium</minerva-option>
      </minerva-select>
      <minerva-select aria-label="Large" size="large" value="l">
        <minerva-option value="m">Medium</minerva-option>
        <minerva-option value="l">Large</minerva-option>
      </minerva-select>
      <minerva-select aria-label="Disabled" placeholder="Disabled" disabled>
        <minerva-option value="a">A</minerva-option>
      </minerva-select>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 280px">
  <label style="display: grid; gap: 4px">
    Fruit
    <minerva-select placeholder="Pick a fruit">
      <minerva-option value="apple">Apple</minerva-option>
      <minerva-option value="banana">Banana</minerva-option>
      <minerva-option value="cherry">Cherry</minerva-option>
      <minerva-option value="durian" disabled
        >Durian (out of stock)</minerva-option
      >
      <minerva-option value="grape">Grape</minerva-option>
    </minerva-select>
  </label>
  <minerva-select aria-label="Small" size="small" value="s">
    <minerva-option value="s">Small</minerva-option>
    <minerva-option value="m">Medium</minerva-option>
  </minerva-select>
  <minerva-select aria-label="Large" size="large" value="l">
    <minerva-option value="m">Medium</minerva-option>
    <minerva-option value="l">Large</minerva-option>
  </minerva-select>
  <minerva-select aria-label="Disabled" placeholder="Disabled" disabled>
    <minerva-option value="a">A</minerva-option>
  </minerva-select>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};