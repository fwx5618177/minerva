import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- EmptyActions.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Actions are regular elements slotted into \`action\` / \`secondary-action\`;
// the default slot is the footer.

const statusText = ref("");

const onClick = () => (statusText.value = "Project created");
<\/script>

<template>
  <minerva-empty
    heading="No projects yet"
    description="Create your first project to start tracking work."
  >
    <span slot="icon" aria-hidden="true" style="font-size: 40px">📁</span>
    <minerva-button slot="action" id="create" @click="onClick"
      >Create project</minerva-button
    >
    <minerva-button slot="secondary-action" variant="ghost" color="neutral"
      >Import</minerva-button
    >
    <output id="status">{{ statusText }}</output>
  </minerva-empty>
</template>
`,angular:`// empty-actions.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Actions are regular elements slotted into \`action\` / \`secondary-action\`;
// the default slot is the footer.

@Component({
  selector: "app-empty-actions",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-empty
      heading="No projects yet"
      description="Create your first project to start tracking work."
    >
      <span slot="icon" aria-hidden="true" style="font-size: 40px">📁</span>
      <minerva-button slot="action" id="create" (click)="onClick($event)"
        >Create project</minerva-button
      >
      <minerva-button slot="secondary-action" variant="ghost" color="neutral"
        >Import</minerva-button
      >
      <output id="status">{{ statusText }}</output>
    </minerva-empty>
  \`,
})
export class EmptyActionsComponent {
  statusText = "";

  onClick = () => (this.statusText = "Project created");
}
`,svelte:`<!-- EmptyActions.svelte -->

<script lang="ts">
  // Actions are regular elements slotted into \`action\` / \`secondary-action\`;
  // the default slot is the footer.

  let statusText = $state("");

  const onClick = () => (statusText = "Project created");
<\/script>

<minerva-empty
  heading="No projects yet"
  description="Create your first project to start tracking work."
>
  <span slot="icon" aria-hidden="true" style="font-size: 40px">📁</span>
  <minerva-button slot="action" id="create" onclick={onClick}>Create project</minerva-button>
  <minerva-button slot="secondary-action" variant="ghost" color="neutral"
    >Import</minerva-button>
  <output id="status">{statusText}</output>
</minerva-empty>
`,solid:`// EmptyActions.tsx

import { createSignal } from "solid-js";

// Actions are regular elements slotted into \`action\` / \`secondary-action\`;
// the default slot is the footer.

export default function EmptyActions() {
  const [statusText, setStatusText] = createSignal("");

  const onClick = () => setStatusText("Project created");

  return (
    <minerva-empty
      heading="No projects yet"
      description="Create your first project to start tracking work."
    >
      <span slot="icon" aria-hidden="true" style="font-size: 40px">
        📁
      </span>
      <minerva-button slot="action" id="create" on:click={onClick}>
        Create project
      </minerva-button>
      <minerva-button slot="secondary-action" variant="ghost" color="neutral">
        Import
      </minerva-button>
      <output id="status">{statusText()}</output>
    </minerva-empty>
  );
}
`,html:`<minerva-empty
  heading="No projects yet"
  description="Create your first project to start tracking work."
>
  <span slot="icon" aria-hidden="true" style="font-size: 40px">📁</span>
  <minerva-button slot="action" id="create">Create project</minerva-button>
  <minerva-button slot="secondary-action" variant="ghost" color="neutral"
    >Import</minerva-button
  >
  <output id="status"></output>
</minerva-empty>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Actions are regular elements slotted into \`action\` / \`secondary-action\`;
  // the default slot is the footer.
  const create = document.querySelector("#create");
  const status = document.querySelector("#status");
  const onClick = () => (status.value = "Project created");
  create.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};