import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ToastOptions.vue -->

<script setup lang="ts">
import { ref } from "vue";

// Options: title, description, duration, action, closable...; \`max\` keeps
// the 3 newest toasts. minerva-close tells why a toast closed.

type ToastOptions = {
  title?: string;
  description?: string;
  duration?: number;
  action?: { label: string; onClick: () => void };
};
type Region = HTMLElement & { toast: (options: ToastOptions) => unknown };
type Close = CustomEvent<{ id: string | number; reason: string }>;

const region = ref<Region>();
const logText = ref("");

let count = 0;
const onClick = () => {
  count += 1;
  const name = \`Conversation #\${count}\`;
  region.value!.toast({
    title: "Conversation archived",
    description: \`\${name} moved to the archive.\`,
    duration: 8000,
    action: {
      label: "Undo",
      onClick: () => (logText.value = \`\${name} restored\`),
    },
  });
};
const onClose = (event: Event) => {
  const { id, reason } = (event as Close).detail;
  logText.value = \`Toast \${id} closed (reason: \${reason})\`;
};
<\/script>

<template>
  <minerva-toast-region
    id="options-region"
    position="top-center"
    max="3"
    ref="region"
    @minerva-close="onClose"
  ></minerva-toast-region>
  <minerva-button id="archive" @click="onClick"
    >Archive conversation</minerva-button
  >
  <p id="options-log" style="margin: 8px 0 0">{{ logText }}</p>
</template>
`,angular:`// toast-options.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// Options: title, description, duration, action, closable...; \`max\` keeps
// the 3 newest toasts. minerva-close tells why a toast closed.
type ToastOptions = {
  title?: string;
  description?: string;
  duration?: number;
  action?: { label: string; onClick: () => void };
};
type Region = HTMLElement & { toast: (options: ToastOptions) => unknown };
type Close = CustomEvent<{ id: string | number; reason: string }>;

@Component({
  selector: "app-toast-options",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-toast-region
      id="options-region"
      position="top-center"
      max="3"
      #region
      (minerva-close)="onClose($event)"
    ></minerva-toast-region>
    <minerva-button id="archive" (click)="onClick($event)"
      >Archive conversation</minerva-button
    >
    <p id="options-log" style="margin: 8px 0 0">{{ logText }}</p>
  \`,
})
export class ToastOptionsComponent {
  @ViewChild("region") region!: ElementRef<Region>;
  logText = "";

  count = 0;
  onClick = () => {
    this.count += 1;
    const name = \`Conversation #\${this.count}\`;
    this.region.nativeElement.toast({
      title: "Conversation archived",
      description: \`\${name} moved to the archive.\`,
      duration: 8000,
      action: {
        label: "Undo",
        onClick: () => (this.logText = \`\${name} restored\`),
      },
    });
  };
  onClose = (event: Event) => {
    const { id, reason } = (event as Close).detail;
    this.logText = \`Toast \${id} closed (reason: \${reason})\`;
  };
}
`,svelte:`<!-- ToastOptions.svelte -->

<script lang="ts">
  // Options: title, description, duration, action, closable...; \`max\` keeps
  // the 3 newest toasts. minerva-close tells why a toast closed.

  type ToastOptions = {
    title?: string;
    description?: string;
    duration?: number;
    action?: { label: string; onClick: () => void };
  };
  type Region = HTMLElement & { toast: (options: ToastOptions) => unknown };
  type Close = CustomEvent<{ id: string | number; reason: string }>;

  let region: Region;
  let logText = $state("");

  let count = 0;
  const onClick = () => {
    count += 1;
    const name = \`Conversation #\${count}\`;
    region.toast({
      title: "Conversation archived",
      description: \`\${name} moved to the archive.\`,
      duration: 8000,
      action: {
        label: "Undo",
        onClick: () => (logText = \`\${name} restored\`),
      },
    });
  };
  const onClose = (event: Event) => {
    const { id, reason } = (event as Close).detail;
    logText = \`Toast \${id} closed (reason: \${reason})\`;
  };
<\/script>

<minerva-toast-region
  id="options-region"
  position="top-center"
  max="3"
  bind:this={region}
  onminerva-close={onClose}
></minerva-toast-region>
<minerva-button id="archive" onclick={onClick}>Archive conversation</minerva-button>
<p id="options-log" style="margin: 8px 0 0">{logText}</p>
`,solid:`// ToastOptions.tsx

import { createSignal } from "solid-js";

// Options: title, description, duration, action, closable...; \`max\` keeps
// the 3 newest toasts. minerva-close tells why a toast closed.
type ToastOptions = {
  title?: string;
  description?: string;
  duration?: number;
  action?: { label: string; onClick: () => void };
};
type Region = HTMLElement & { toast: (options: ToastOptions) => unknown };
type Close = CustomEvent<{ id: string | number; reason: string }>;

export default function ToastOptions() {
  let region!: Region;
  const [logText, setLogText] = createSignal("");

  let count = 0;
  const onClick = () => {
    count += 1;
    const name = \`Conversation #\${count}\`;
    region.toast({
      title: "Conversation archived",
      description: \`\${name} moved to the archive.\`,
      duration: 8000,
      action: {
        label: "Undo",
        onClick: () => setLogText(\`\${name} restored\`),
      },
    });
  };
  const onClose = (event: Event) => {
    const { id, reason } = (event as Close).detail;
    setLogText(\`Toast \${id} closed (reason: \${reason})\`);
  };

  return (
    <>
      <minerva-toast-region
        id="options-region"
        position="top-center"
        max="3"
        ref={region}
        on:minerva-close={onClose}
      ></minerva-toast-region>
      <minerva-button id="archive" on:click={onClick}>
        Archive conversation
      </minerva-button>
      <p id="options-log" style="margin: 8px 0 0">
        {logText()}
      </p>
    </>
  );
}
`,html:`<minerva-toast-region
  id="options-region"
  position="top-center"
  max="3"
></minerva-toast-region>
<minerva-button id="archive">Archive conversation</minerva-button>
<p id="options-log" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // Options: title, description, duration, action, closable...; \`max\` keeps
  // the 3 newest toasts. minerva-close tells why a toast closed.
  const region = document.querySelector("#options-region");
  const button = document.querySelector("#archive");
  const log = document.querySelector("#options-log");
  let count = 0;
  const onClick = () => {
    count += 1;
    const name = \`Conversation #\${count}\`;
    region.toast({
      title: "Conversation archived",
      description: \`\${name} moved to the archive.\`,
      duration: 8000,
      action: {
        label: "Undo",
        onClick: () => (log.textContent = \`\${name} restored\`),
      },
    });
  };
  const onClose = (event) => {
    const { id, reason } = event.detail;
    log.textContent = \`Toast \${id} closed (reason: \${reason})\`;
  };
  button.addEventListener("click", onClick);
  region.addEventListener("minerva-close", onClose);
<\/script>
`}})))()}n();export{t as default};