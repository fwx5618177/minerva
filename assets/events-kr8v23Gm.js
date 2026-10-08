import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ModalEvents.vue -->

<script setup lang="ts">
import { ref } from "vue";

// minerva-open-change is cancelable: preventDefault() keeps the modal open.

type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

const dirty = ref<HTMLInputElement>();
const logText = ref("");

const write = (line: string) =>
  (logText.value = \`\${line}\\n\${logText.value}\`.split("\\n", 4).join("\\n"));
const onChange = (event: Event) => {
  const { open, reason } = (event as OpenChange).detail;
  if (!open && dirty.value!.checked) {
    event.preventDefault();
    write(\`close (\${reason}) blocked: unsaved changes\`);
  } else write(\`open-change: open=\${open} (\${reason})\`);
};
const onAfterOpen = () => write("after-open");
const onAfterClose = () => write("after-close");
<\/script>

<template>
  <minerva-modal
    id="draft"
    label="Edit note"
    description="Closing is blocked while the note has unsaved changes."
    @minerva-open-change="onChange"
    @minerva-after-open="onAfterOpen"
    @minerva-after-close="onAfterClose"
  >
    <minerva-button slot="trigger" variant="outline">Edit note</minerva-button>
    <label style="display: flex; gap: 8px; align-items: center">
      <input id="dirty" type="checkbox" checked ref="dirty" />
      Unsaved changes
    </label>
  </minerva-modal>
  <pre id="draft-log" style="margin: 8px 0 0; min-height: 3em">{{
    logText
  }}</pre>
</template>
`,angular:`// modal-events.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// minerva-open-change is cancelable: preventDefault() keeps the modal open.
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

@Component({
  selector: "app-modal-events",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-modal
      id="draft"
      label="Edit note"
      description="Closing is blocked while the note has unsaved changes."
      (minerva-open-change)="onChange($event)"
      (minerva-after-open)="onAfterOpen($event)"
      (minerva-after-close)="onAfterClose($event)"
    >
      <minerva-button slot="trigger" variant="outline"
        >Edit note</minerva-button
      >
      <label style="display: flex; gap: 8px; align-items: center">
        <input id="dirty" type="checkbox" checked #dirty />
        Unsaved changes
      </label>
    </minerva-modal>
    <pre id="draft-log" style="margin: 8px 0 0; min-height: 3em">{{
      logText
    }}</pre>
  \`,
})
export class ModalEventsComponent {
  @ViewChild("dirty") dirty!: ElementRef<HTMLInputElement>;
  logText = "";

  write = (line: string) =>
    (this.logText = \`\${line}\\n\${this.logText}\`.split("\\n", 4).join("\\n"));
  onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    if (!open && this.dirty.nativeElement.checked) {
      event.preventDefault();
      this.write(\`close (\${reason}) blocked: unsaved changes\`);
    } else this.write(\`open-change: open=\${open} (\${reason})\`);
  };
  onAfterOpen = () => this.write("after-open");
  onAfterClose = () => this.write("after-close");
}
`,svelte:`<!-- ModalEvents.svelte -->

<script lang="ts">
  // minerva-open-change is cancelable: preventDefault() keeps the modal open.

  type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

  let dirty: HTMLInputElement;
  let logText = $state("");

  const write = (line: string) =>
    (logText = \`\${line}\\n\${logText}\`.split("\\n", 4).join("\\n"));
  const onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    if (!open && dirty.checked) {
      event.preventDefault();
      write(\`close (\${reason}) blocked: unsaved changes\`);
    } else write(\`open-change: open=\${open} (\${reason})\`);
  };
  const onAfterOpen = () => write("after-open");
  const onAfterClose = () => write("after-close");
<\/script>

<minerva-modal
  id="draft"
  label="Edit note"
  description="Closing is blocked while the note has unsaved changes."
  onminerva-open-change={onChange}
  onminerva-after-open={onAfterOpen}
  onminerva-after-close={onAfterClose}
>
  <minerva-button slot="trigger" variant="outline">Edit note</minerva-button>
  <label style="display: flex; gap: 8px; align-items: center">
    <input id="dirty" type="checkbox" checked bind:this={dirty} />
    Unsaved changes
  </label>
</minerva-modal>
<pre id="draft-log" style="margin: 8px 0 0; min-height: 3em">{logText}</pre>
`,solid:`// ModalEvents.tsx

import { createSignal } from "solid-js";

// minerva-open-change is cancelable: preventDefault() keeps the modal open.
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

export default function ModalEvents() {
  let dirty!: HTMLInputElement;
  const [logText, setLogText] = createSignal("");

  const write = (line: string) =>
    setLogText(\`\${line}\\n\${logText()}\`.split("\\n", 4).join("\\n"));
  const onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    if (!open && dirty.checked) {
      event.preventDefault();
      write(\`close (\${reason}) blocked: unsaved changes\`);
    } else write(\`open-change: open=\${open} (\${reason})\`);
  };
  const onAfterOpen = () => write("after-open");
  const onAfterClose = () => write("after-close");

  return (
    <>
      <minerva-modal
        id="draft"
        label="Edit note"
        description="Closing is blocked while the note has unsaved changes."
        on:minerva-open-change={onChange}
        on:minerva-after-open={onAfterOpen}
        on:minerva-after-close={onAfterClose}
      >
        <minerva-button slot="trigger" variant="outline">
          Edit note
        </minerva-button>
        <label style="display: flex; gap: 8px; align-items: center">
          <input id="dirty" type="checkbox" checked ref={dirty} />
          Unsaved changes
        </label>
      </minerva-modal>
      <pre id="draft-log" style="margin: 8px 0 0; min-height: 3em">
        {logText()}
      </pre>
    </>
  );
}
`,html:`<minerva-modal
  id="draft"
  label="Edit note"
  description="Closing is blocked while the note has unsaved changes."
>
  <minerva-button slot="trigger" variant="outline">Edit note</minerva-button>
  <label style="display: flex; gap: 8px; align-items: center">
    <input id="dirty" type="checkbox" checked />
    Unsaved changes
  </label>
</minerva-modal>
<pre id="draft-log" style="margin: 8px 0 0; min-height: 3em"></pre>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // minerva-open-change is cancelable: preventDefault() keeps the modal open.
  const modal = document.querySelector("#draft");
  const dirty = document.querySelector("#dirty");
  const log = document.querySelector("#draft-log");
  const write = (line) =>
    (log.textContent = \`\${line}\\n\${log.textContent}\`.split("\\n", 4).join("\\n"));
  const onChange = (event) => {
    const { open, reason } = event.detail;
    if (!open && dirty.checked) {
      event.preventDefault();
      write(\`close (\${reason}) blocked: unsaved changes\`);
    } else write(\`open-change: open=\${open} (\${reason})\`);
  };
  const onAfterOpen = () => write("after-open");
  const onAfterClose = () => write("after-close");
  modal.addEventListener("minerva-open-change", onChange);
  modal.addEventListener("minerva-after-open", onAfterOpen);
  modal.addEventListener("minerva-after-close", onAfterClose);
<\/script>
`}})))()}n();export{t as default};