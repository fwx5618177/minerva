import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- RadioBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The group fires \`minerva-change\` (detail.value) when the user selects
// another radio, by click or with the arrow keys.

const outputText = ref("Selected: pro");

const onChange = (event: Event) => {
  const { value } = (event as CustomEvent<{ value: string }>).detail;
  outputText.value = \`Selected: \${value}\`;
};
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <minerva-radio-group
      id="rd-plan"
      label="Plan"
      value="pro"
      helper-text="Arrow keys move the selection; Tab leaves the group."
      @minerva-change="onChange"
    >
      <minerva-radio value="free" label="Free"></minerva-radio>
      <minerva-radio value="pro" label="Pro"></minerva-radio>
      <minerva-radio value="team" label="Team"></minerva-radio>
      <minerva-radio
        value="enterprise"
        disabled
        label="Enterprise"
      ></minerva-radio>
    </minerva-radio-group>
    <output id="rd-plan-value">{{ outputText }}</output>
  </div>
</template>
`,angular:`// radio-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// The group fires \`minerva-change\` (detail.value) when the user selects
// another radio, by click or with the arrow keys.

@Component({
  selector: "app-radio-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <minerva-radio-group
        id="rd-plan"
        label="Plan"
        value="pro"
        helper-text="Arrow keys move the selection; Tab leaves the group."
        (minerva-change)="onChange($event)"
      >
        <minerva-radio value="free" label="Free"></minerva-radio>
        <minerva-radio value="pro" label="Pro"></minerva-radio>
        <minerva-radio value="team" label="Team"></minerva-radio>
        <minerva-radio
          value="enterprise"
          disabled
          label="Enterprise"
        ></minerva-radio>
      </minerva-radio-group>
      <output id="rd-plan-value">{{ outputText }}</output>
    </div>
  \`,
})
export class RadioBasicComponent {
  outputText = "Selected: pro";

  onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    this.outputText = \`Selected: \${value}\`;
  };
}
`,svelte:`<!-- RadioBasic.svelte -->

<script lang="ts">
  // The group fires \`minerva-change\` (detail.value) when the user selects
  // another radio, by click or with the arrow keys.

  let outputText = $state("Selected: pro");

  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    outputText = \`Selected: \${value}\`;
  };
<\/script>

<div style="display: grid; gap: 12px">
  <minerva-radio-group
    id="rd-plan"
    label="Plan"
    value="pro"
    helper-text="Arrow keys move the selection; Tab leaves the group."
    onminerva-change={onChange}
  >
    <minerva-radio value="free" label="Free"></minerva-radio>
    <minerva-radio value="pro" label="Pro"></minerva-radio>
    <minerva-radio value="team" label="Team"></minerva-radio>
    <minerva-radio
      value="enterprise"
      disabled
      label="Enterprise"
    ></minerva-radio>
  </minerva-radio-group>
  <output id="rd-plan-value">{outputText}</output>
</div>
`,solid:`// RadioBasic.tsx

import { createSignal } from "solid-js";

// The group fires \`minerva-change\` (detail.value) when the user selects
// another radio, by click or with the arrow keys.

export default function RadioBasic() {
  const [outputText, setOutputText] = createSignal("Selected: pro");

  const onChange = (event: Event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail;
    setOutputText(\`Selected: \${value}\`);
  };

  return (
    <div style="display: grid; gap: 12px">
      <minerva-radio-group
        id="rd-plan"
        label="Plan"
        value="pro"
        helper-text="Arrow keys move the selection; Tab leaves the group."
        on:minerva-change={onChange}
      >
        <minerva-radio value="free" label="Free"></minerva-radio>
        <minerva-radio value="pro" label="Pro"></minerva-radio>
        <minerva-radio value="team" label="Team"></minerva-radio>
        <minerva-radio
          value="enterprise"
          disabled
          label="Enterprise"
        ></minerva-radio>
      </minerva-radio-group>
      <output id="rd-plan-value">{outputText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <minerva-radio-group
    id="rd-plan"
    label="Plan"
    value="pro"
    helper-text="Arrow keys move the selection; Tab leaves the group."
  >
    <minerva-radio value="free" label="Free"></minerva-radio>
    <minerva-radio value="pro" label="Pro"></minerva-radio>
    <minerva-radio value="team" label="Team"></minerva-radio>
    <minerva-radio
      value="enterprise"
      disabled
      label="Enterprise"
    ></minerva-radio>
  </minerva-radio-group>
  <output id="rd-plan-value">Selected: pro</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The group fires \`minerva-change\` (detail.value) when the user selects
  // another radio, by click or with the arrow keys.
  const group = document.querySelector("#rd-plan");
  const output = document.querySelector("#rd-plan-value");
  const onChange = (event) => {
    const { value } = event.detail;
    output.value = \`Selected: \${value}\`;
  };
  group.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};