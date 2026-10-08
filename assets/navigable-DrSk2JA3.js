import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- StepsNavigable.vue -->

<script setup lang="ts">
import { ref } from "vue";

// navigable renders each step as a button. minerva-change is cancelable:
// the caller validates the transition (here: the terms checkbox).

type Step = { value: string; label: string; disabled?: boolean };
type Steps = HTMLElement & { items: Step[]; value: string };

const steps: Step[] = [
  { value: "account", label: "Account" },
  { value: "team", label: "Team" },
  { value: "billing", label: "Billing" },
  { value: "done", label: "Done", disabled: true },
];

const wizard = ref<Steps>();
const terms = ref<HTMLInputElement>();
const statusText = ref("");

const wizardItems = steps;

const allowed = (from: string) => from !== "account" || terms.value!.checked;
const onChange = (e: Event) => {
  if (!allowed(wizard.value!.value)) {
    e.preventDefault();
    statusText.value = "Accept the terms first.";
    return;
  }
  statusText.value = \`Moved to \${(e as CustomEvent<{ value: string }>).detail.value}\`;
};
const move = (delta: number) => () => {
  const index = steps.findIndex((s) => s.value === wizard.value!.value) + delta;
  const target = steps[index];
  if (!target || target.disabled) return;
  if (!allowed(wizard.value!.value) && delta > 0) {
    statusText.value = "Accept the terms first.";
    return;
  }
  wizard.value!.value = target.value;
  statusText.value = \`Moved to \${target.value}\`;
};
const onPrev = move(-1);
const onNext = move(1);
<\/script>

<template>
  <div style="display: grid; gap: 16px">
    <minerva-steps
      id="wizard"
      value="account"
      navigable
      ref="wizard"
      :items.prop="wizardItems"
      @minerva-change="onChange"
    ></minerva-steps>
    <label style="display: flex; gap: 8px; align-items: center">
      <input id="terms" type="checkbox" ref="terms" />
      I accept the terms (required to leave the first step)
    </label>
    <div style="display: flex; gap: 8px">
      <minerva-button
        id="prev"
        variant="outline"
        color="neutral"
        @click="onPrev"
        >Previous</minerva-button
      >
      <minerva-button id="next" @click="onNext">Next</minerva-button>
    </div>
    <output id="status">{{ statusText }}</output>
  </div>
</template>
`,angular:`// steps-navigable.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// navigable renders each step as a button. minerva-change is cancelable:
// the caller validates the transition (here: the terms checkbox).
type Step = { value: string; label: string; disabled?: boolean };
type Steps = HTMLElement & { items: Step[]; value: string };

const steps: Step[] = [
  { value: "account", label: "Account" },
  { value: "team", label: "Team" },
  { value: "billing", label: "Billing" },
  { value: "done", label: "Done", disabled: true },
];

@Component({
  selector: "app-steps-navigable",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 16px">
      <minerva-steps
        id="wizard"
        value="account"
        navigable
        #wizard
        [items]="wizardItems"
        (minerva-change)="onChange($event)"
      ></minerva-steps>
      <label style="display: flex; gap: 8px; align-items: center">
        <input id="terms" type="checkbox" #terms />
        I accept the terms (required to leave the first step)
      </label>
      <div style="display: flex; gap: 8px">
        <minerva-button
          id="prev"
          variant="outline"
          color="neutral"
          (click)="onPrev($event)"
          >Previous</minerva-button
        >
        <minerva-button id="next" (click)="onNext($event)">Next</minerva-button>
      </div>
      <output id="status">{{ statusText }}</output>
    </div>
  \`,
})
export class StepsNavigableComponent {
  @ViewChild("wizard") wizard!: ElementRef<Steps>;
  @ViewChild("terms") terms!: ElementRef<HTMLInputElement>;
  statusText = "";

  wizardItems = steps;

  allowed = (from: string) =>
    from !== "account" || this.terms.nativeElement.checked;
  onChange = (e: Event) => {
    if (!this.allowed(this.wizard.nativeElement.value)) {
      e.preventDefault();
      this.statusText = "Accept the terms first.";
      return;
    }
    this.statusText = \`Moved to \${(e as CustomEvent<{ value: string }>).detail.value}\`;
  };
  move = (delta: number) => () => {
    const index =
      steps.findIndex((s) => s.value === this.wizard.nativeElement.value) +
      delta;
    const target = steps[index];
    if (!target || target.disabled) return;
    if (!this.allowed(this.wizard.nativeElement.value) && delta > 0) {
      this.statusText = "Accept the terms first.";
      return;
    }
    this.wizard.nativeElement.value = target.value;
    this.statusText = \`Moved to \${target.value}\`;
  };
  onPrev = this.move(-1);
  onNext = this.move(1);
}
`,svelte:`<!-- StepsNavigable.svelte -->

<script lang="ts">
  // navigable renders each step as a button. minerva-change is cancelable:
  // the caller validates the transition (here: the terms checkbox).

  type Step = { value: string; label: string; disabled?: boolean };
  type Steps = HTMLElement & { items: Step[]; value: string };

  const steps: Step[] = [
    { value: "account", label: "Account" },
    { value: "team", label: "Team" },
    { value: "billing", label: "Billing" },
    { value: "done", label: "Done", disabled: true },
  ];

  let wizard: Steps;
  let terms: HTMLInputElement;
  let statusText = $state("");

  const wizardItems = steps;

  const allowed = (from: string) => from !== "account" || terms.checked;
  const onChange = (e: Event) => {
    if (!allowed(wizard.value)) {
      e.preventDefault();
      statusText = "Accept the terms first.";
      return;
    }
    statusText = \`Moved to \${(e as CustomEvent<{ value: string }>).detail.value}\`;
  };
  const move = (delta: number) => () => {
    const index = steps.findIndex((s) => s.value === wizard.value) + delta;
    const target = steps[index];
    if (!target || target.disabled) return;
    if (!allowed(wizard.value) && delta > 0) {
      statusText = "Accept the terms first.";
      return;
    }
    wizard.value = target.value;
    statusText = \`Moved to \${target.value}\`;
  };
  const onPrev = move(-1);
  const onNext = move(1);
<\/script>

<div style="display: grid; gap: 16px">
  <minerva-steps
    id="wizard"
    value="account"
    navigable
    bind:this={wizard}
    items={wizardItems}
    onminerva-change={onChange}
  ></minerva-steps>
  <label style="display: flex; gap: 8px; align-items: center">
    <input id="terms" type="checkbox" bind:this={terms} />
    I accept the terms (required to leave the first step)
  </label>
  <div style="display: flex; gap: 8px">
    <minerva-button
      id="prev"
      variant="outline"
      color="neutral"
      onclick={onPrev}
    >Previous</minerva-button>
    <minerva-button id="next" onclick={onNext}>Next</minerva-button>
  </div>
  <output id="status">{statusText}</output>
</div>
`,solid:`// StepsNavigable.tsx

import { createSignal } from "solid-js";

// navigable renders each step as a button. minerva-change is cancelable:
// the caller validates the transition (here: the terms checkbox).
type Step = { value: string; label: string; disabled?: boolean };
type Steps = HTMLElement & { items: Step[]; value: string };

const steps: Step[] = [
  { value: "account", label: "Account" },
  { value: "team", label: "Team" },
  { value: "billing", label: "Billing" },
  { value: "done", label: "Done", disabled: true },
];

export default function StepsNavigable() {
  let wizard!: Steps;
  let terms!: HTMLInputElement;
  const [statusText, setStatusText] = createSignal("");

  const wizardItems = steps;

  const allowed = (from: string) => from !== "account" || terms.checked;
  const onChange = (e: Event) => {
    if (!allowed(wizard.value)) {
      e.preventDefault();
      setStatusText("Accept the terms first.");
      return;
    }
    setStatusText(
      \`Moved to \${(e as CustomEvent<{ value: string }>).detail.value}\`,
    );
  };
  const move = (delta: number) => () => {
    const index = steps.findIndex((s) => s.value === wizard.value) + delta;
    const target = steps[index];
    if (!target || target.disabled) return;
    if (!allowed(wizard.value) && delta > 0) {
      setStatusText("Accept the terms first.");
      return;
    }
    wizard.value = target.value;
    setStatusText(\`Moved to \${target.value}\`);
  };
  const onPrev = move(-1);
  const onNext = move(1);

  return (
    <div style="display: grid; gap: 16px">
      <minerva-steps
        id="wizard"
        value="account"
        navigable
        ref={wizard}
        prop:items={wizardItems}
        on:minerva-change={onChange}
      ></minerva-steps>
      <label style="display: flex; gap: 8px; align-items: center">
        <input id="terms" type="checkbox" ref={terms} />I accept the terms
        (required to leave the first step)
      </label>
      <div style="display: flex; gap: 8px">
        <minerva-button
          id="prev"
          variant="outline"
          color="neutral"
          on:click={onPrev}
        >
          Previous
        </minerva-button>
        <minerva-button id="next" on:click={onNext}>
          Next
        </minerva-button>
      </div>
      <output id="status">{statusText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 16px">
  <minerva-steps id="wizard" value="account" navigable></minerva-steps>
  <label style="display: flex; gap: 8px; align-items: center">
    <input id="terms" type="checkbox" />
    I accept the terms (required to leave the first step)
  </label>
  <div style="display: flex; gap: 8px">
    <minerva-button id="prev" variant="outline" color="neutral"
      >Previous</minerva-button
    >
    <minerva-button id="next">Next</minerva-button>
  </div>
  <output id="status"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // navigable renders each step as a button. minerva-change is cancelable:
  // the caller validates the transition (here: the terms checkbox).
  const steps = [
    { value: "account", label: "Account" },
    { value: "team", label: "Team" },
    { value: "billing", label: "Billing" },
    { value: "done", label: "Done", disabled: true },
  ];

  const wizard = document.querySelector("#wizard");
  const terms = document.querySelector("#terms");
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  const status = document.querySelector("#status");
  wizard.items = steps;

  const allowed = (from) => from !== "account" || terms.checked;
  const onChange = (e) => {
    if (!allowed(wizard.value)) {
      e.preventDefault();
      status.value = "Accept the terms first.";
      return;
    }
    status.value = \`Moved to \${e.detail.value}\`;
  };
  const move = (delta) => () => {
    const index = steps.findIndex((s) => s.value === wizard.value) + delta;
    const target = steps[index];
    if (!target || target.disabled) return;
    if (!allowed(wizard.value) && delta > 0) {
      status.value = "Accept the terms first.";
      return;
    }
    wizard.value = target.value;
    status.value = \`Moved to \${target.value}\`;
  };
  const onPrev = move(-1);
  const onNext = move(1);
  wizard.addEventListener("minerva-change", onChange);
  prev.addEventListener("click", onPrev);
  next.addEventListener("click", onNext);
<\/script>
`}})))()}n();export{t as default};