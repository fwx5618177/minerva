import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AlertCollapsible.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The toggle in the heading fires \`minerva-expanded-change\` (cancelable)
// before flipping the \`collapsed\` property.

const stateText = ref("Collapsed");

const onChange = (event: Event) => {
  const { expanded } = (event as CustomEvent<{ expanded: boolean }>).detail;
  stateText.value = expanded ? "Expanded" : "Collapsed";
};
<\/script>

<template>
  <div style="display: grid; gap: 8px">
    <minerva-alert
      id="details"
      collapsible
      collapsed
      color="danger"
      heading="3 fields need your attention"
      expand-label="Show errors"
      collapse-label="Hide errors"
      @minerva-expanded-change="onChange"
    >
      <ul style="margin: 0; padding-inline-start: 20px">
        <li>Email is required.</li>
        <li>Password must be at least 8 characters.</li>
        <li>Accept the terms to continue.</li>
      </ul>
    </minerva-alert>
    <output id="state">{{ stateText }}</output>
  </div>
</template>
`,angular:`// alert-collapsible.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// The toggle in the heading fires \`minerva-expanded-change\` (cancelable)
// before flipping the \`collapsed\` property.

@Component({
  selector: "app-alert-collapsible",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px">
      <minerva-alert
        id="details"
        collapsible
        collapsed
        color="danger"
        heading="3 fields need your attention"
        expand-label="Show errors"
        collapse-label="Hide errors"
        (minerva-expanded-change)="onChange($event)"
      >
        <ul style="margin: 0; padding-inline-start: 20px">
          <li>Email is required.</li>
          <li>Password must be at least 8 characters.</li>
          <li>Accept the terms to continue.</li>
        </ul>
      </minerva-alert>
      <output id="state">{{ stateText }}</output>
    </div>
  \`,
})
export class AlertCollapsibleComponent {
  stateText = "Collapsed";

  onChange = (event: Event) => {
    const { expanded } = (event as CustomEvent<{ expanded: boolean }>).detail;
    this.stateText = expanded ? "Expanded" : "Collapsed";
  };
}
`,svelte:`<!-- AlertCollapsible.svelte -->

<script lang="ts">
  // The toggle in the heading fires \`minerva-expanded-change\` (cancelable)
  // before flipping the \`collapsed\` property.

  let stateText = $state("Collapsed");

  const onChange = (event: Event) => {
    const { expanded } = (event as CustomEvent<{ expanded: boolean }>).detail;
    stateText = expanded ? "Expanded" : "Collapsed";
  };
<\/script>

<div style="display: grid; gap: 8px">
  <minerva-alert
    id="details"
    collapsible
    collapsed
    color="danger"
    heading="3 fields need your attention"
    expand-label="Show errors"
    collapse-label="Hide errors"
    onminerva-expanded-change={onChange}
  >
    <ul style="margin: 0; padding-inline-start: 20px">
      <li>Email is required.</li>
      <li>Password must be at least 8 characters.</li>
      <li>Accept the terms to continue.</li>
    </ul>
  </minerva-alert>
  <output id="state">{stateText}</output>
</div>
`,solid:`// AlertCollapsible.tsx

import { createSignal } from "solid-js";

// The toggle in the heading fires \`minerva-expanded-change\` (cancelable)
// before flipping the \`collapsed\` property.

export default function AlertCollapsible() {
  const [stateText, setStateText] = createSignal("Collapsed");

  const onChange = (event: Event) => {
    const { expanded } = (event as CustomEvent<{ expanded: boolean }>).detail;
    setStateText(expanded ? "Expanded" : "Collapsed");
  };

  return (
    <div style="display: grid; gap: 8px">
      <minerva-alert
        id="details"
        collapsible
        collapsed
        color="danger"
        heading="3 fields need your attention"
        expand-label="Show errors"
        collapse-label="Hide errors"
        on:minerva-expanded-change={onChange}
      >
        <ul style="margin: 0; padding-inline-start: 20px">
          <li>Email is required.</li>
          <li>Password must be at least 8 characters.</li>
          <li>Accept the terms to continue.</li>
        </ul>
      </minerva-alert>
      <output id="state">{stateText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px">
  <minerva-alert
    id="details"
    collapsible
    collapsed
    color="danger"
    heading="3 fields need your attention"
    expand-label="Show errors"
    collapse-label="Hide errors"
  >
    <ul style="margin: 0; padding-inline-start: 20px">
      <li>Email is required.</li>
      <li>Password must be at least 8 characters.</li>
      <li>Accept the terms to continue.</li>
    </ul>
  </minerva-alert>
  <output id="state">Collapsed</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The toggle in the heading fires \`minerva-expanded-change\` (cancelable)
  // before flipping the \`collapsed\` property.
  const details = document.querySelector("#details");
  const state = document.querySelector("#state");
  const onChange = (event) => {
    const { expanded } = event.detail;
    state.value = expanded ? "Expanded" : "Collapsed";
  };
  details.addEventListener("minerva-expanded-change", onChange);
<\/script>
`}})))()}n();export{t as default};