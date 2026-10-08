import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ConfirmImperative.vue -->

<script setup lang="ts">
import { ref } from "vue";

// confirm() appends a <minerva-confirm-dialog>, resolves true / false and
// removes it once closed. In an app: import { confirm } from
// "@minerva/lib-web-components/confirm".

const resultText = ref("");

const onClick = async () => {
  const { confirm } = await import("@minerva/lib-web-components");
  const ok = await confirm({
    title: "Discard your changes?",
    description: "The edits made since the last save are lost.",
    confirmLabel: "Discard",
    color: "warning",
  });
  resultText.value = ok ? "Changes discarded" : "Kept editing";
};
<\/script>

<template>
  <minerva-button id="leave" color="warning" variant="outline" @click="onClick"
    >Leave without saving</minerva-button
  >
  <p id="leave-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// confirm-imperative.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// confirm() appends a <minerva-confirm-dialog>, resolves true / false and
// removes it once closed. In an app: import { confirm } from
// "@minerva/lib-web-components/confirm".

@Component({
  selector: "app-confirm-imperative",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-button
      id="leave"
      color="warning"
      variant="outline"
      (click)="onClick($event)"
      >Leave without saving</minerva-button
    >
    <p id="leave-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class ConfirmImperativeComponent {
  resultText = "";

  onClick = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    const ok = await confirm({
      title: "Discard your changes?",
      description: "The edits made since the last save are lost.",
      confirmLabel: "Discard",
      color: "warning",
    });
    this.resultText = ok ? "Changes discarded" : "Kept editing";
  };
}
`,svelte:`<!-- ConfirmImperative.svelte -->

<script lang="ts">
  // confirm() appends a <minerva-confirm-dialog>, resolves true / false and
  // removes it once closed. In an app: import { confirm } from
  // "@minerva/lib-web-components/confirm".

  let resultText = $state("");

  const onClick = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    const ok = await confirm({
      title: "Discard your changes?",
      description: "The edits made since the last save are lost.",
      confirmLabel: "Discard",
      color: "warning",
    });
    resultText = ok ? "Changes discarded" : "Kept editing";
  };
<\/script>

<minerva-button
  id="leave"
  color="warning"
  variant="outline"
  onclick={onClick}
>Leave without saving</minerva-button>
<p id="leave-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// ConfirmImperative.tsx

import { createSignal } from "solid-js";

// confirm() appends a <minerva-confirm-dialog>, resolves true / false and
// removes it once closed. In an app: import { confirm } from
// "@minerva/lib-web-components/confirm".

export default function ConfirmImperative() {
  const [resultText, setResultText] = createSignal("");

  const onClick = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    const ok = await confirm({
      title: "Discard your changes?",
      description: "The edits made since the last save are lost.",
      confirmLabel: "Discard",
      color: "warning",
    });
    setResultText(ok ? "Changes discarded" : "Kept editing");
  };

  return (
    <>
      <minerva-button
        id="leave"
        color="warning"
        variant="outline"
        on:click={onClick}
      >
        Leave without saving
      </minerva-button>
      <p id="leave-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-button id="leave" color="warning" variant="outline"
  >Leave without saving</minerva-button
>
<p id="leave-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // confirm() appends a <minerva-confirm-dialog>, resolves true / false and
  // removes it once closed. In an app: import { confirm } from
  // "@minerva/lib-web-components/confirm".
  const button = document.querySelector("#leave");
  const result = document.querySelector("#leave-result");
  const onClick = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    const ok = await confirm({
      title: "Discard your changes?",
      description: "The edits made since the last save are lost.",
      confirmLabel: "Discard",
      color: "warning",
    });
    result.textContent = ok ? "Changes discarded" : "Kept editing";
  };
  button.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};