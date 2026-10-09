import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ConfirmBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Open with show(); minerva-confirm / minerva-cancel report the answer.

type ConfirmDialog = HTMLElement & { show(): void };
type Cancel = CustomEvent<{ reason: string }>;

const dialog = ref<ConfirmDialog>();
const resultText = ref("");

const onOpen = () => dialog.value!.show();
const onConfirm = () => (resultText.value = "Project deleted");
const onCancel = (event: Event) =>
  (resultText.value = \`Cancelled (\${(event as Cancel).detail.reason})\`);
<\/script>

<template>
  <minerva-button id="delete" color="danger" variant="outline" @click="onOpen"
    >Delete project</minerva-button
  >
  <minerva-confirm-dialog
    id="confirm-delete"
    color="danger"
    label="Delete this project?"
    description="Its files and history are removed for everyone. This cannot be undone."
    confirm-label="Delete project"
    ref="dialog"
    @minerva-confirm="onConfirm"
    @minerva-cancel="onCancel"
  ></minerva-confirm-dialog>
  <p id="delete-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// confirm-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Open with show(); minerva-confirm / minerva-cancel report the answer.
type ConfirmDialog = HTMLElement & { show(): void };
type Cancel = CustomEvent<{ reason: string }>;

@Component({
  selector: "app-confirm-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-button
      id="delete"
      color="danger"
      variant="outline"
      (click)="onOpen($event)"
      >Delete project</minerva-button
    >
    <minerva-confirm-dialog
      id="confirm-delete"
      color="danger"
      label="Delete this project?"
      description="Its files and history are removed for everyone. This cannot be undone."
      confirm-label="Delete project"
      #dialog
      (minerva-confirm)="onConfirm($event)"
      (minerva-cancel)="onCancel($event)"
    ></minerva-confirm-dialog>
    <p id="delete-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class ConfirmBasicComponent {
  @ViewChild("dialog") dialog!: ElementRef<ConfirmDialog>;
  resultText = "";

  onOpen = () => this.dialog.nativeElement.show();
  onConfirm = () => (this.resultText = "Project deleted");
  onCancel = (event: Event) =>
    (this.resultText = \`Cancelled (\${(event as Cancel).detail.reason})\`);
}
`,svelte:`<!-- ConfirmBasic.svelte -->

<script lang="ts">
  // Open with show(); minerva-confirm / minerva-cancel report the answer.

  type ConfirmDialog = HTMLElement & { show(): void };
  type Cancel = CustomEvent<{ reason: string }>;

  let dialog: ConfirmDialog;
  let resultText = $state("");

  const onOpen = () => dialog.show();
  const onConfirm = () => (resultText = "Project deleted");
  const onCancel = (event: Event) =>
    (resultText = \`Cancelled (\${(event as Cancel).detail.reason})\`);
<\/script>

<minerva-button
  id="delete"
  color="danger"
  variant="outline"
  onclick={onOpen}
>Delete project</minerva-button>
<minerva-confirm-dialog
  id="confirm-delete"
  color="danger"
  label="Delete this project?"
  description="Its files and history are removed for everyone. This cannot be undone."
  confirm-label="Delete project"
  bind:this={dialog}
  onminerva-confirm={onConfirm}
  onminerva-cancel={onCancel}
></minerva-confirm-dialog>
<p id="delete-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// ConfirmBasic.tsx

import { createSignal } from "solid-js";

// Open with show(); minerva-confirm / minerva-cancel report the answer.
type ConfirmDialog = HTMLElement & { show(): void };
type Cancel = CustomEvent<{ reason: string }>;

export default function ConfirmBasic() {
  let dialog!: ConfirmDialog;
  const [resultText, setResultText] = createSignal("");

  const onOpen = () => dialog.show();
  const onConfirm = () => setResultText("Project deleted");
  const onCancel = (event: Event) =>
    setResultText(\`Cancelled (\${(event as Cancel).detail.reason})\`);

  return (
    <>
      <minerva-button
        id="delete"
        color="danger"
        variant="outline"
        on:click={onOpen}
      >
        Delete project
      </minerva-button>
      <minerva-confirm-dialog
        id="confirm-delete"
        color="danger"
        label="Delete this project?"
        description="Its files and history are removed for everyone. This cannot be undone."
        confirm-label="Delete project"
        ref={dialog}
        on:minerva-confirm={onConfirm}
        on:minerva-cancel={onCancel}
      ></minerva-confirm-dialog>
      <p id="delete-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-button id="delete" color="danger" variant="outline"
  >Delete project</minerva-button
>
<minerva-confirm-dialog
  id="confirm-delete"
  color="danger"
  label="Delete this project?"
  description="Its files and history are removed for everyone. This cannot be undone."
  confirm-label="Delete project"
></minerva-confirm-dialog>
<p id="delete-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Open with show(); minerva-confirm / minerva-cancel report the answer.
  const button = document.querySelector("#delete");
  const dialog = document.querySelector("#confirm-delete");
  const result = document.querySelector("#delete-result");
  const onOpen = () => dialog.show();
  const onConfirm = () => (result.textContent = "Project deleted");
  const onCancel = (event) =>
    (result.textContent = \`Cancelled (\${event.detail.reason})\`);
  button.addEventListener("click", onOpen);
  dialog.addEventListener("minerva-confirm", onConfirm);
  dialog.addEventListener("minerva-cancel", onCancel);
<\/script>
`}})))()}n();export{t as default};