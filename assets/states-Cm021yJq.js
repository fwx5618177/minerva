import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- FormControlStates.vue -->

<script setup lang="ts">
import { ref } from "vue";

// While \`invalid\`, the error message replaces the helper text and the
// control gets \`invalid\` + aria-invalid; turning it off restores both.

const field = ref<HTMLElement & { invalid: boolean }>();

const onClick = () => (field.value!.invalid = !field.value!.invalid);
<\/script>

<template>
  <div style="display: grid; gap: 16px; max-width: 360px">
    <minerva-form-control
      id="fc-username"
      label="Username"
      helper-text="Letters and digits only."
      error-message="This username is already taken."
      ref="field"
    >
      <minerva-input value="ada"></minerva-input>
    </minerva-form-control>
    <minerva-button
      id="fc-toggle"
      variant="outline"
      color="neutral"
      style="justify-self: start"
      @click="onClick"
      >Toggle invalid</minerva-button
    >
    <minerva-form-control
      label="API key"
      readonly
      helper-text="Read-only: focusable and submitted."
    >
      <minerva-input value="sk-live-1234"></minerva-input>
    </minerva-form-control>
    <minerva-form-control label="Team" disabled>
      <minerva-number-input value="3"></minerva-number-input>
    </minerva-form-control>
    <minerva-form-control
      label="Notes"
      required
      required-indicator="(required)"
    >
      <textarea rows="2"></textarea>
    </minerva-form-control>
  </div>
</template>
`,angular:`// form-control-states.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// While \`invalid\`, the error message replaces the helper text and the
// control gets \`invalid\` + aria-invalid; turning it off restores both.

@Component({
  selector: "app-form-control-states",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px; max-width: 360px">
      <minerva-form-control
        id="fc-username"
        label="Username"
        helper-text="Letters and digits only."
        error-message="This username is already taken."
        #field
      >
        <minerva-input value="ada"></minerva-input>
      </minerva-form-control>
      <minerva-button
        id="fc-toggle"
        variant="outline"
        color="neutral"
        style="justify-self: start"
        (click)="onClick($event)"
        >Toggle invalid</minerva-button
      >
      <minerva-form-control
        label="API key"
        readonly
        helper-text="Read-only: focusable and submitted."
      >
        <minerva-input value="sk-live-1234"></minerva-input>
      </minerva-form-control>
      <minerva-form-control label="Team" disabled>
        <minerva-number-input value="3"></minerva-number-input>
      </minerva-form-control>
      <minerva-form-control
        label="Notes"
        required
        required-indicator="(required)"
      >
        <textarea rows="2"></textarea>
      </minerva-form-control>
    </div>
  \`,
})
export class FormControlStatesComponent {
  @ViewChild("field") field!: ElementRef<HTMLElement & { invalid: boolean }>;

  onClick = () =>
    (this.field.nativeElement.invalid = !this.field.nativeElement.invalid);
}
`,svelte:`<!-- FormControlStates.svelte -->

<script lang="ts">
  // While \`invalid\`, the error message replaces the helper text and the
  // control gets \`invalid\` + aria-invalid; turning it off restores both.

  let field: HTMLElement & { invalid: boolean };

  const onClick = () => (field.invalid = !field.invalid);
<\/script>

<div style="display: grid; gap: 16px; max-width: 360px">
  <minerva-form-control
    id="fc-username"
    label="Username"
    helper-text="Letters and digits only."
    error-message="This username is already taken."
    bind:this={field}
  >
    <minerva-input value="ada"></minerva-input>
  </minerva-form-control>
  <minerva-button
    id="fc-toggle"
    variant="outline"
    color="neutral"
    style="justify-self: start"
    onclick={onClick}
  >Toggle invalid</minerva-button>
  <minerva-form-control
    label="API key"
    readonly
    helper-text="Read-only: focusable and submitted."
  >
    <minerva-input value="sk-live-1234"></minerva-input>
  </minerva-form-control>
  <minerva-form-control label="Team" disabled>
    <minerva-number-input value="3"></minerva-number-input>
  </minerva-form-control>
  <minerva-form-control label="Notes" required required-indicator="(required)">
    <textarea rows="2"></textarea>
  </minerva-form-control>
</div>
`,solid:`// FormControlStates.tsx

// While \`invalid\`, the error message replaces the helper text and the
// control gets \`invalid\` + aria-invalid; turning it off restores both.

export default function FormControlStates() {
  let field!: HTMLElement & { invalid: boolean };

  const onClick = () => (field.invalid = !field.invalid);

  return (
    <div style="display: grid; gap: 16px; max-width: 360px">
      <minerva-form-control
        id="fc-username"
        label="Username"
        helper-text="Letters and digits only."
        error-message="This username is already taken."
        ref={field}
      >
        <minerva-input value="ada"></minerva-input>
      </minerva-form-control>
      <minerva-button
        id="fc-toggle"
        variant="outline"
        color="neutral"
        style="justify-self: start"
        on:click={onClick}
      >
        Toggle invalid
      </minerva-button>
      <minerva-form-control
        label="API key"
        readonly
        helper-text="Read-only: focusable and submitted."
      >
        <minerva-input value="sk-live-1234"></minerva-input>
      </minerva-form-control>
      <minerva-form-control label="Team" disabled>
        <minerva-number-input value="3"></minerva-number-input>
      </minerva-form-control>
      <minerva-form-control
        label="Notes"
        required
        required-indicator="(required)"
      >
        <textarea rows="2"></textarea>
      </minerva-form-control>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px; max-width: 360px">
  <minerva-form-control
    id="fc-username"
    label="Username"
    helper-text="Letters and digits only."
    error-message="This username is already taken."
  >
    <minerva-input value="ada"></minerva-input>
  </minerva-form-control>
  <minerva-button
    id="fc-toggle"
    variant="outline"
    color="neutral"
    style="justify-self: start"
    >Toggle invalid</minerva-button
  >
  <minerva-form-control
    label="API key"
    readonly
    helper-text="Read-only: focusable and submitted."
  >
    <minerva-input value="sk-live-1234"></minerva-input>
  </minerva-form-control>
  <minerva-form-control label="Team" disabled>
    <minerva-number-input value="3"></minerva-number-input>
  </minerva-form-control>
  <minerva-form-control label="Notes" required required-indicator="(required)">
    <textarea rows="2"></textarea>
  </minerva-form-control>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // While \`invalid\`, the error message replaces the helper text and the
  // control gets \`invalid\` + aria-invalid; turning it off restores both.
  const field = document.querySelector("#fc-username");
  const toggle = document.querySelector("#fc-toggle");
  const onClick = () => (field.invalid = !field.invalid);
  toggle.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};