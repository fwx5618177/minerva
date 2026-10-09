import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SwitchBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Space and Enter toggle the focused switch; \`minerva-change\` reports the
// new state in detail.checked.

const outputText = ref("Wi-Fi is on");

const onChange = (event: Event) => {
  const { checked } = (event as CustomEvent<{ checked: boolean }>).detail;
  outputText.value = \`Wi-Fi is \${checked ? "on" : "off"}\`;
};
<\/script>

<template>
  <div style="display: grid; gap: 12px; justify-items: start">
    <minerva-switch
      id="sw-wifi"
      checked
      label="Wi-Fi"
      @minerva-change="onChange"
    ></minerva-switch>
    <minerva-switch label="Bluetooth"></minerva-switch>
    <minerva-switch disabled label="Airplane mode"></minerva-switch>
    <output id="sw-wifi-state">{{ outputText }}</output>
  </div>
</template>
`,angular:`// switch-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Space and Enter toggle the focused switch; \`minerva-change\` reports the
// new state in detail.checked.

@Component({
  selector: "app-switch-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; justify-items: start">
      <minerva-switch
        id="sw-wifi"
        checked
        label="Wi-Fi"
        (minerva-change)="onChange($event)"
      ></minerva-switch>
      <minerva-switch label="Bluetooth"></minerva-switch>
      <minerva-switch disabled label="Airplane mode"></minerva-switch>
      <output id="sw-wifi-state">{{ outputText }}</output>
    </div>
  \`,
})
export class SwitchBasicComponent {
  outputText = "Wi-Fi is on";

  onChange = (event: Event) => {
    const { checked } = (event as CustomEvent<{ checked: boolean }>).detail;
    this.outputText = \`Wi-Fi is \${checked ? "on" : "off"}\`;
  };
}
`,svelte:`<!-- SwitchBasic.svelte -->

<script lang="ts">
  // Space and Enter toggle the focused switch; \`minerva-change\` reports the
  // new state in detail.checked.

  let outputText = $state("Wi-Fi is on");

  const onChange = (event: Event) => {
    const { checked } = (event as CustomEvent<{ checked: boolean }>).detail;
    outputText = \`Wi-Fi is \${checked ? "on" : "off"}\`;
  };
<\/script>

<div style="display: grid; gap: 12px; justify-items: start">
  <minerva-switch
    id="sw-wifi"
    checked
    label="Wi-Fi"
    onminerva-change={onChange}
  ></minerva-switch>
  <minerva-switch label="Bluetooth"></minerva-switch>
  <minerva-switch disabled label="Airplane mode"></minerva-switch>
  <output id="sw-wifi-state">{outputText}</output>
</div>
`,solid:`// SwitchBasic.tsx

import { createSignal } from "solid-js";

// Space and Enter toggle the focused switch; \`minerva-change\` reports the
// new state in detail.checked.

export default function SwitchBasic() {
  const [outputText, setOutputText] = createSignal("Wi-Fi is on");

  const onChange = (event: Event) => {
    const { checked } = (event as CustomEvent<{ checked: boolean }>).detail;
    setOutputText(\`Wi-Fi is \${checked ? "on" : "off"}\`);
  };

  return (
    <div style="display: grid; gap: 12px; justify-items: start">
      <minerva-switch
        id="sw-wifi"
        checked
        label="Wi-Fi"
        on:minerva-change={onChange}
      ></minerva-switch>
      <minerva-switch label="Bluetooth"></minerva-switch>
      <minerva-switch disabled label="Airplane mode"></minerva-switch>
      <output id="sw-wifi-state">{outputText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; justify-items: start">
  <minerva-switch id="sw-wifi" checked label="Wi-Fi"></minerva-switch>
  <minerva-switch label="Bluetooth"></minerva-switch>
  <minerva-switch disabled label="Airplane mode"></minerva-switch>
  <output id="sw-wifi-state">Wi-Fi is on</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Space and Enter toggle the focused switch; \`minerva-change\` reports the
  // new state in detail.checked.
  const wifi = document.querySelector("#sw-wifi");
  const output = document.querySelector("#sw-wifi-state");
  const onChange = (event) => {
    const { checked } = event.detail;
    output.value = \`Wi-Fi is \${checked ? "on" : "off"}\`;
  };
  wifi.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};