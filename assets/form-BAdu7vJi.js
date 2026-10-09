import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ModalForm.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The form lives in the light DOM: the browser validates it, then the
// submit handler saves and closes the modal.

type Modal = HTMLElement & { hide(): void };

const modal = ref<Modal>();
const form = ref<HTMLFormElement>();
const resultText = ref("");

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  resultText.value = \`Renamed to "\${new FormData(form.value!).get("name")}"\`;
  modal.value!.hide();
};
<\/script>

<template>
  <minerva-modal id="rename" label="Rename project" size="small" ref="modal">
    <minerva-button slot="trigger" variant="outline">Rename…</minerva-button>
    <form
      id="rename-form"
      style="display: grid; gap: 4px"
      ref="form"
      @submit="onSubmit"
    >
      <label for="project-name">Name</label>
      <input id="project-name" name="name" required value="Minerva" />
    </form>
    <minerva-button slot="footer" type="submit" form="rename-form"
      >Save</minerva-button
    >
  </minerva-modal>
  <p id="rename-result" style="margin: 8px 0 0">{{ resultText }}</p>
</template>
`,angular:`// modal-form.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The form lives in the light DOM: the browser validates it, then the
// submit handler saves and closes the modal.
type Modal = HTMLElement & { hide(): void };

@Component({
  selector: "app-modal-form",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-modal id="rename" label="Rename project" size="small" #modal>
      <minerva-button slot="trigger" variant="outline">Rename…</minerva-button>
      <form
        id="rename-form"
        style="display: grid; gap: 4px"
        #form
        (submit)="onSubmit($event)"
      >
        <label for="project-name">Name</label>
        <input id="project-name" name="name" required value="Minerva" />
      </form>
      <minerva-button slot="footer" type="submit" form="rename-form"
        >Save</minerva-button
      >
    </minerva-modal>
    <p id="rename-result" style="margin: 8px 0 0">{{ resultText }}</p>
  \`,
})
export class ModalFormComponent {
  @ViewChild("modal") modal!: ElementRef<Modal>;
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  resultText = "";

  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    this.resultText = \`Renamed to "\${new FormData(this.form.nativeElement).get("name")}"\`;
    this.modal.nativeElement.hide();
  };
}
`,svelte:`<!-- ModalForm.svelte -->

<script lang="ts">
  // The form lives in the light DOM: the browser validates it, then the
  // submit handler saves and closes the modal.

  type Modal = HTMLElement & { hide(): void };

  let modal: Modal;
  let form: HTMLFormElement;
  let resultText = $state("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    resultText = \`Renamed to "\${new FormData(form).get("name")}"\`;
    modal.hide();
  };
<\/script>

<minerva-modal
  id="rename"
  label="Rename project"
  size="small"
  bind:this={modal}
>
  <minerva-button slot="trigger" variant="outline">Rename…</minerva-button>
  <form
    id="rename-form"
    style="display: grid; gap: 4px"
    bind:this={form}
    onsubmit={onSubmit}
  >
    <label for="project-name">Name</label>
    <input id="project-name" name="name" required value="Minerva" />
  </form>
  <minerva-button slot="footer" type="submit" form="rename-form"
    >Save</minerva-button>
</minerva-modal>
<p id="rename-result" style="margin: 8px 0 0">{resultText}</p>
`,solid:`// ModalForm.tsx

import { createSignal } from "solid-js";

// The form lives in the light DOM: the browser validates it, then the
// submit handler saves and closes the modal.
type Modal = HTMLElement & { hide(): void };

export default function ModalForm() {
  let modal!: Modal;
  let form!: HTMLFormElement;
  const [resultText, setResultText] = createSignal("");

  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    setResultText(\`Renamed to "\${new FormData(form).get("name")}"\`);
    modal.hide();
  };

  return (
    <>
      <minerva-modal
        id="rename"
        label="Rename project"
        size="small"
        ref={modal}
      >
        <minerva-button slot="trigger" variant="outline">
          Rename…
        </minerva-button>
        <form
          id="rename-form"
          style="display: grid; gap: 4px"
          ref={form}
          on:submit={onSubmit}
        >
          <label for="project-name">Name</label>
          <input id="project-name" name="name" required value="Minerva" />
        </form>
        <minerva-button slot="footer" type="submit" form="rename-form">
          Save
        </minerva-button>
      </minerva-modal>
      <p id="rename-result" style="margin: 8px 0 0">
        {resultText()}
      </p>
    </>
  );
}
`,html:`<minerva-modal id="rename" label="Rename project" size="small">
  <minerva-button slot="trigger" variant="outline">Rename…</minerva-button>
  <form id="rename-form" style="display: grid; gap: 4px">
    <label for="project-name">Name</label>
    <input id="project-name" name="name" required value="Minerva" />
  </form>
  <minerva-button slot="footer" type="submit" form="rename-form"
    >Save</minerva-button
  >
</minerva-modal>
<p id="rename-result" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The form lives in the light DOM: the browser validates it, then the
  // submit handler saves and closes the modal.
  const modal = document.querySelector("#rename");
  const form = document.querySelector("#rename-form");
  const result = document.querySelector("#rename-result");
  const onSubmit = (event) => {
    event.preventDefault();
    result.textContent = \`Renamed to "\${new FormData(form).get("name")}"\`;
    modal.hide();
  };
  form.addEventListener("submit", onSubmit);
<\/script>
`}})))()}n();export{t as default};