import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- CheckboxStylesStates.vue -->

<template>
  <div style="display: grid; gap: 16px">
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
      <minerva-checkbox size="small" checked label="Small"></minerva-checkbox>
      <minerva-checkbox size="medium" checked label="Medium"></minerva-checkbox>
      <minerva-checkbox size="large" checked label="Large"></minerva-checkbox>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
      <minerva-checkbox
        shape="rounded"
        color="success"
        checked
        label="Rounded"
      ></minerva-checkbox>
      <minerva-checkbox
        shape="circle"
        color="danger"
        checked
        label="Circle"
      ></minerva-checkbox>
      <minerva-checkbox
        color="warning"
        checked
        label-placement="start"
        label="Label at start"
      ></minerva-checkbox>
      <minerva-checkbox
        color="info"
        checked
        label-placement="top"
        label="Label on top"
      ></minerva-checkbox>
      <minerva-checkbox checked label="Custom icon"
        ><span slot="icon" aria-hidden="true">★</span></minerva-checkbox
      >
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: start">
      <minerva-checkbox
        readonly
        checked
        label="Read-only"
        helper-text="Managed by your administrator."
      ></minerva-checkbox>
      <minerva-checkbox
        error
        label="I accept the terms"
        helper-text="You must accept the terms to continue."
      ></minerva-checkbox>
    </div>
  </div>
</template>
`,angular:`// checkbox-styles-states.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-checkbox-styles-states",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px">
      <div
        style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center"
      >
        <minerva-checkbox size="small" checked label="Small"></minerva-checkbox>
        <minerva-checkbox
          size="medium"
          checked
          label="Medium"
        ></minerva-checkbox>
        <minerva-checkbox size="large" checked label="Large"></minerva-checkbox>
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center"
      >
        <minerva-checkbox
          shape="rounded"
          color="success"
          checked
          label="Rounded"
        ></minerva-checkbox>
        <minerva-checkbox
          shape="circle"
          color="danger"
          checked
          label="Circle"
        ></minerva-checkbox>
        <minerva-checkbox
          color="warning"
          checked
          label-placement="start"
          label="Label at start"
        ></minerva-checkbox>
        <minerva-checkbox
          color="info"
          checked
          label-placement="top"
          label="Label on top"
        ></minerva-checkbox>
        <minerva-checkbox checked label="Custom icon"
          ><span slot="icon" aria-hidden="true">★</span></minerva-checkbox
        >
      </div>
      <div
        style="display: flex; flex-wrap: wrap; gap: 24px; align-items: start"
      >
        <minerva-checkbox
          readonly
          checked
          label="Read-only"
          helper-text="Managed by your administrator."
        ></minerva-checkbox>
        <minerva-checkbox
          error
          label="I accept the terms"
          helper-text="You must accept the terms to continue."
        ></minerva-checkbox>
      </div>
    </div>
  \`,
})
export class CheckboxStylesStatesComponent {}
`,svelte:`<!-- CheckboxStylesStates.svelte -->

<div style="display: grid; gap: 16px">
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-checkbox size="small" checked label="Small"></minerva-checkbox>
    <minerva-checkbox size="medium" checked label="Medium"></minerva-checkbox>
    <minerva-checkbox size="large" checked label="Large"></minerva-checkbox>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-checkbox
      shape="rounded"
      color="success"
      checked
      label="Rounded"
    ></minerva-checkbox>
    <minerva-checkbox
      shape="circle"
      color="danger"
      checked
      label="Circle"
    ></minerva-checkbox>
    <minerva-checkbox
      color="warning"
      checked
      label-placement="start"
      label="Label at start"
    ></minerva-checkbox>
    <minerva-checkbox
      color="info"
      checked
      label-placement="top"
      label="Label on top"
    ></minerva-checkbox>
    <minerva-checkbox checked label="Custom icon"
      ><span slot="icon" aria-hidden="true">★</span></minerva-checkbox>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: start">
    <minerva-checkbox
      readonly
      checked
      label="Read-only"
      helper-text="Managed by your administrator."
    ></minerva-checkbox>
    <minerva-checkbox
      error
      label="I accept the terms"
      helper-text="You must accept the terms to continue."
    ></minerva-checkbox>
  </div>
</div>
`,solid:`// CheckboxStylesStates.tsx

export default function CheckboxStylesStates() {
  return (
    <div style="display: grid; gap: 16px">
      <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
        <minerva-checkbox size="small" checked label="Small"></minerva-checkbox>
        <minerva-checkbox
          size="medium"
          checked
          label="Medium"
        ></minerva-checkbox>
        <minerva-checkbox size="large" checked label="Large"></minerva-checkbox>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
        <minerva-checkbox
          shape="rounded"
          color="success"
          checked
          label="Rounded"
        ></minerva-checkbox>
        <minerva-checkbox
          shape="circle"
          color="danger"
          checked
          label="Circle"
        ></minerva-checkbox>
        <minerva-checkbox
          color="warning"
          checked
          label-placement="start"
          label="Label at start"
        ></minerva-checkbox>
        <minerva-checkbox
          color="info"
          checked
          label-placement="top"
          label="Label on top"
        ></minerva-checkbox>
        <minerva-checkbox checked label="Custom icon">
          <span slot="icon" aria-hidden="true">
            ★
          </span>
        </minerva-checkbox>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: start">
        <minerva-checkbox
          readonly
          checked
          label="Read-only"
          helper-text="Managed by your administrator."
        ></minerva-checkbox>
        <minerva-checkbox
          error
          label="I accept the terms"
          helper-text="You must accept the terms to continue."
        ></minerva-checkbox>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px">
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-checkbox size="small" checked label="Small"></minerva-checkbox>
    <minerva-checkbox size="medium" checked label="Medium"></minerva-checkbox>
    <minerva-checkbox size="large" checked label="Large"></minerva-checkbox>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center">
    <minerva-checkbox
      shape="rounded"
      color="success"
      checked
      label="Rounded"
    ></minerva-checkbox>
    <minerva-checkbox
      shape="circle"
      color="danger"
      checked
      label="Circle"
    ></minerva-checkbox>
    <minerva-checkbox
      color="warning"
      checked
      label-placement="start"
      label="Label at start"
    ></minerva-checkbox>
    <minerva-checkbox
      color="info"
      checked
      label-placement="top"
      label="Label on top"
    ></minerva-checkbox>
    <minerva-checkbox checked label="Custom icon"
      ><span slot="icon" aria-hidden="true">★</span></minerva-checkbox
    >
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: start">
    <minerva-checkbox
      readonly
      checked
      label="Read-only"
      helper-text="Managed by your administrator."
    ></minerva-checkbox>
    <minerva-checkbox
      error
      label="I accept the terms"
      helper-text="You must accept the terms to continue."
    ></minerva-checkbox>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";
<\/script>
`}})))()}n();export{t as default};