import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ConfirmAsync.vue -->

<script setup lang="ts">
import { ref } from "vue";

// onConfirm returning a promise shows the loading state until it settles;
// a rejection keeps the dialog open so the user can retry or cancel.

type ConfirmDialog = HTMLElement & {
  show(): void;
  onConfirm?: () => unknown;
};

const dialog = ref<ConfirmDialog>();
const fail = ref<HTMLInputElement>();
const resultText = ref("");

const dialogOnConfirm = () =>
  new Promise<void>((resolve, reject) =>
    setTimeout(() => {
      if (fail.value!.checked) {
        resultText.value = "Request failed: the dialog stays open";
        reject(new Error("failed"));
      } else {
        resultText.value = "Published";
        resolve();
      }
    }, 1200),
  );
const onOpen = () => {
  resultText.value = "";
  dialog.value!.show();
};
<\/script>

<template>
  <minerva-button id="publish" @click="onOpen">Publish article</minerva-button>
  <minerva-confirm-dialog
    id="confirm-publish"
    label="Publish now?"
    description="Subscribers are notified by email."
    confirm-label="Publish"
    ref="dialog"
    :onConfirm.prop="dialogOnConfirm"
  >
    <label style="display: flex; gap: 8px; align-items: center">
      <input id="fail" type="checkbox" ref="fail" />
      Make the request fail
    </label>
  </minerva-confirm-dialog>
  <p id="publish-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// confirm-async.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// onConfirm returning a promise shows the loading state until it settles;
// a rejection keeps the dialog open so the user can retry or cancel.
type ConfirmDialog = HTMLElement & {
  show(): void;
  onConfirm?: () => unknown;
};

@Component({
  selector: "app-confirm-async",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-button id="publish" (click)="onOpen($event)"
      >Publish article</minerva-button
    >
    <minerva-confirm-dialog
      id="confirm-publish"
      label="Publish now?"
      description="Subscribers are notified by email."
      confirm-label="Publish"
      #dialog
      [onConfirm]="dialogOnConfirm"
    >
      <label style="display: flex; gap: 8px; align-items: center">
        <input id="fail" type="checkbox" #fail />
        Make the request fail
      </label>
    </minerva-confirm-dialog>
    <p id="publish-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class ConfirmAsyncComponent {
  @ViewChild("dialog") dialog!: ElementRef<ConfirmDialog>;
  @ViewChild("fail") fail!: ElementRef<HTMLInputElement>;
  resultText = "";

  dialogOnConfirm = () =>
    new Promise<void>((resolve, reject) =>
      setTimeout(() => {
        if (this.fail.nativeElement.checked) {
          this.resultText = "Request failed: the dialog stays open";
          reject(new Error("failed"));
        } else {
          this.resultText = "Published";
          resolve();
        }
      }, 1200),
    );
  onOpen = () => {
    this.resultText = "";
    this.dialog.nativeElement.show();
  };
}
`,svelte:`<!-- ConfirmAsync.svelte -->

<script lang="ts">
  // onConfirm returning a promise shows the loading state until it settles;
  // a rejection keeps the dialog open so the user can retry or cancel.

  type ConfirmDialog = HTMLElement & {
    show(): void;
    onConfirm?: () => unknown;
  };

  let dialog: ConfirmDialog;
  let fail: HTMLInputElement;
  let resultText = $state("");

  const dialogOnConfirm = () =>
    new Promise<void>((resolve, reject) =>
      setTimeout(() => {
        if (fail.checked) {
          resultText = "Request failed: the dialog stays open";
          reject(new Error("failed"));
        } else {
          resultText = "Published";
          resolve();
        }
      }, 1200),
    );
  const onOpen = () => {
    resultText = "";
    dialog.show();
  };
<\/script>

<minerva-button id="publish" onclick={onOpen}>Publish article</minerva-button>
<minerva-confirm-dialog
  id="confirm-publish"
  label="Publish now?"
  description="Subscribers are notified by email."
  confirm-label="Publish"
  bind:this={dialog}
  onConfirm={dialogOnConfirm}
>
  <label style="display: flex; gap: 8px; align-items: center">
    <input id="fail" type="checkbox" bind:this={fail} />
    Make the request fail
  </label>
</minerva-confirm-dialog>
<p id="publish-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// ConfirmAsync.tsx

import { createSignal } from "solid-js";

// onConfirm returning a promise shows the loading state until it settles;
// a rejection keeps the dialog open so the user can retry or cancel.
type ConfirmDialog = HTMLElement & {
  show(): void;
  onConfirm?: () => unknown;
};

export default function ConfirmAsync() {
  let dialog!: ConfirmDialog;
  let fail!: HTMLInputElement;
  const [resultText, setResultText] = createSignal("");

  const dialogOnConfirm = () =>
    new Promise<void>((resolve, reject) =>
      setTimeout(() => {
        if (fail.checked) {
          setResultText("Request failed: the dialog stays open");
          reject(new Error("failed"));
        } else {
          setResultText("Published");
          resolve();
        }
      }, 1200),
    );
  const onOpen = () => {
    setResultText("");
    dialog.show();
  };

  return (
    <>
      <minerva-button id="publish" on:click={onOpen}>
        Publish article
      </minerva-button>
      <minerva-confirm-dialog
        id="confirm-publish"
        label="Publish now?"
        description="Subscribers are notified by email."
        confirm-label="Publish"
        ref={dialog}
        prop:onConfirm={dialogOnConfirm}
      >
        <label style="display: flex; gap: 8px; align-items: center">
          <input id="fail" type="checkbox" ref={fail} />
          Make the request fail
        </label>
      </minerva-confirm-dialog>
      <p id="publish-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-button id="publish">Publish article</minerva-button>
<minerva-confirm-dialog
  id="confirm-publish"
  label="Publish now?"
  description="Subscribers are notified by email."
  confirm-label="Publish"
>
  <label style="display: flex; gap: 8px; align-items: center">
    <input id="fail" type="checkbox" />
    Make the request fail
  </label>
</minerva-confirm-dialog>
<p id="publish-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // onConfirm returning a promise shows the loading state until it settles;
  // a rejection keeps the dialog open so the user can retry or cancel.
  const button = document.querySelector("#publish");
  const dialog = document.querySelector("#confirm-publish");
  const fail = document.querySelector("#fail");
  const result = document.querySelector("#publish-result");
  dialog.onConfirm = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (fail.checked) {
          result.textContent = "Request failed: the dialog stays open";
          reject(new Error("failed"));
        } else {
          result.textContent = "Published";
          resolve();
        }
      }, 1200),
    );
  const onOpen = () => {
    result.textContent = "";
    dialog.show();
  };
  button.addEventListener("click", onOpen);
<\/script>
`}})))()}n();export{t as default};