import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- DrawerNonModal.vue -->

<script setup lang="ts">
import { ref } from "vue";

// minerva-open-change reports why the drawer opens / closes.

type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

const stateText = ref("Closed");

const onChange = (event: Event) => {
  const { open, reason } = (event as OpenChange).detail;
  stateText.value = \`\${open ? "Opened" : "Closed"} (reason: \${reason})\`;
};
<\/script>

<template>
  <minerva-drawer
    id="help"
    non-modal
    side="left"
    size="small"
    label="Help"
    @minerva-open-change="onChange"
  >
    <minerva-button slot="trigger" variant="outline"
      >Toggle help panel</minerva-button
    >
    <p style="margin: 0">
      A non-modal drawer has no overlay: the page stays interactive, focus is
      not trapped and an outside click closes it.
    </p>
  </minerva-drawer>
  <p id="help-state" style="margin: 8px 0 0">{{ stateText }}</p>
</template>
`,angular:`// drawer-non-modal.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// minerva-open-change reports why the drawer opens / closes.
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

@Component({
  selector: "app-drawer-non-modal",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-drawer
      id="help"
      non-modal
      side="left"
      size="small"
      label="Help"
      (minerva-open-change)="onChange($event)"
    >
      <minerva-button slot="trigger" variant="outline"
        >Toggle help panel</minerva-button
      >
      <p style="margin: 0">
        A non-modal drawer has no overlay: the page stays interactive, focus is
        not trapped and an outside click closes it.
      </p>
    </minerva-drawer>
    <p id="help-state" style="margin: 8px 0 0">{{ stateText }}</p>
  \`,
})
export class DrawerNonModalComponent {
  stateText = "Closed";

  onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    this.stateText = \`\${open ? "Opened" : "Closed"} (reason: \${reason})\`;
  };
}
`,svelte:`<!-- DrawerNonModal.svelte -->

<script lang="ts">
  // minerva-open-change reports why the drawer opens / closes.

  type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

  let stateText = $state("Closed");

  const onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    stateText = \`\${open ? "Opened" : "Closed"} (reason: \${reason})\`;
  };
<\/script>

<minerva-drawer
  id="help"
  non-modal
  side="left"
  size="small"
  label="Help"
  onminerva-open-change={onChange}
>
  <minerva-button slot="trigger" variant="outline"
    >Toggle help panel</minerva-button>
  <p style="margin: 0">
    A non-modal drawer has no overlay: the page stays interactive, focus is not
    trapped and an outside click closes it.
  </p>
</minerva-drawer>
<p id="help-state" style="margin: 8px 0 0">{stateText}</p>
`,solid:`// DrawerNonModal.tsx

import { createSignal } from "solid-js";

// minerva-open-change reports why the drawer opens / closes.
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

export default function DrawerNonModal() {
  const [stateText, setStateText] = createSignal("Closed");

  const onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    setStateText(\`\${open ? "Opened" : "Closed"} (reason: \${reason})\`);
  };

  return (
    <>
      <minerva-drawer
        id="help"
        non-modal
        side="left"
        size="small"
        label="Help"
        on:minerva-open-change={onChange}
      >
        <minerva-button slot="trigger" variant="outline">
          Toggle help panel
        </minerva-button>
        <p style="margin: 0">
          A non-modal drawer has no overlay: the page stays interactive, focus
          is not trapped and an outside click closes it.
        </p>
      </minerva-drawer>
      <p id="help-state" style="margin: 8px 0 0">
        {stateText()}
      </p>
    </>
  );
}
`,html:`<minerva-drawer id="help" non-modal side="left" size="small" label="Help">
  <minerva-button slot="trigger" variant="outline"
    >Toggle help panel</minerva-button
  >
  <p style="margin: 0">
    A non-modal drawer has no overlay: the page stays interactive, focus is not
    trapped and an outside click closes it.
  </p>
</minerva-drawer>
<p id="help-state" style="margin: 8px 0 0">Closed</p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // minerva-open-change reports why the drawer opens / closes.
  const drawer = document.querySelector("#help");
  const state = document.querySelector("#help-state");
  const onChange = (event) => {
    const { open, reason } = event.detail;
    state.textContent = \`\${open ? "Opened" : "Closed"} (reason: \${reason})\`;
  };
  drawer.addEventListener("minerva-open-change", onChange);
<\/script>
`}})))()}n();export{t as default};