import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- PopoverAnchor.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The panel is positioned against \`anchor\` (an element id) while an
// external button opens it; \`modal\` traps focus until it closes.

type Popover = HTMLElement & { show(): void; hide(): void };
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

const popover = ref<Popover>();
const form = ref<HTMLFormElement>();
const logText = ref("");

const onClick = () => popover.value!.show();
const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  logText.value = \`Saved "\${new FormData(form.value!).get("name")}"\`;
  popover.value!.hide();
};
const onChange = (event: Event) => {
  const { open, reason } = (event as OpenChange).detail;
  if (!open) logText.value = \`Closed (reason: \${reason})\`;
};
<\/script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
    <span
      id="avatar-anchor"
      style="
        display: inline-grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--color-primary-100, #dbeafe);
      "
      >AL</span
    >
    <minerva-button id="edit-profile" variant="outline" @click="onClick"
      >Edit profile</minerva-button
    >
    <minerva-popover
      id="profile"
      anchor="avatar-anchor"
      side="right"
      modal
      label="Edit profile"
      ref="popover"
      @minerva-open-change="onChange"
    >
      <form
        id="profile-form"
        style="display: grid; gap: 8px; width: 220px"
        ref="form"
        @submit="onSubmit"
      >
        <label style="display: grid; gap: 4px"
          >Display name <input name="name" value="Ada Lovelace" required
        /></label>
        <minerva-button type="submit" size="small">Save</minerva-button>
      </form>
    </minerva-popover>
  </div>
  <p id="profile-log" style="margin: 8px 0 0">{{ logText }}</p>
</template>
`,angular:`// popover-anchor.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The panel is positioned against \`anchor\` (an element id) while an
// external button opens it; \`modal\` traps focus until it closes.
type Popover = HTMLElement & { show(): void; hide(): void };
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

@Component({
  selector: "app-popover-anchor",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
      <span
        id="avatar-anchor"
        style="
          display: inline-grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-primary-100, #dbeafe);
        "
        >AL</span
      >
      <minerva-button
        id="edit-profile"
        variant="outline"
        (click)="onClick($event)"
        >Edit profile</minerva-button
      >
      <minerva-popover
        id="profile"
        anchor="avatar-anchor"
        side="right"
        modal
        label="Edit profile"
        #popover
        (minerva-open-change)="onChange($event)"
      >
        <form
          id="profile-form"
          style="display: grid; gap: 8px; width: 220px"
          #form
          (submit)="onSubmit($event)"
        >
          <label style="display: grid; gap: 4px"
            >Display name <input name="name" value="Ada Lovelace" required
          /></label>
          <minerva-button type="submit" size="small">Save</minerva-button>
        </form>
      </minerva-popover>
    </div>
    <p id="profile-log" style="margin: 8px 0 0">{{ logText }}</p>
  \`,
})
export class PopoverAnchorComponent {
  @ViewChild("popover") popover!: ElementRef<Popover>;
  @ViewChild("form") form!: ElementRef<HTMLFormElement>;
  logText = "";

  onClick = () => this.popover.nativeElement.show();
  onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    this.logText = \`Saved "\${new FormData(this.form.nativeElement).get("name")}"\`;
    this.popover.nativeElement.hide();
  };
  onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    if (!open) this.logText = \`Closed (reason: \${reason})\`;
  };
}
`,svelte:`<!-- PopoverAnchor.svelte -->

<script lang="ts">
  // The panel is positioned against \`anchor\` (an element id) while an
  // external button opens it; \`modal\` traps focus until it closes.

  type Popover = HTMLElement & { show(): void; hide(): void };
  type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

  let popover: Popover;
  let form: HTMLFormElement;
  let logText = $state("");

  const onClick = () => popover.show();
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    logText = \`Saved "\${new FormData(form).get("name")}"\`;
    popover.hide();
  };
  const onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    if (!open) logText = \`Closed (reason: \${reason})\`;
  };
<\/script>

<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
  <span
    id="avatar-anchor"
    style="
      display: inline-grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--color-primary-100, #dbeafe);
    "
    >AL</span>
  <minerva-button
    id="edit-profile"
    variant="outline"
    onclick={onClick}
  >Edit profile</minerva-button>
  <minerva-popover
    id="profile"
    anchor="avatar-anchor"
    side="right"
    modal
    label="Edit profile"
    bind:this={popover}
    onminerva-open-change={onChange}
  >
    <form
      id="profile-form"
      style="display: grid; gap: 8px; width: 220px"
      bind:this={form}
      onsubmit={onSubmit}
    >
      <label style="display: grid; gap: 4px"
        >Display name <input name="name" value="Ada Lovelace" required
      /></label>
      <minerva-button type="submit" size="small">Save</minerva-button>
    </form>
  </minerva-popover>
</div>
<p id="profile-log" style="margin: 8px 0 0">{logText}</p>
`,solid:`// PopoverAnchor.tsx

import { createSignal } from "solid-js";

// The panel is positioned against \`anchor\` (an element id) while an
// external button opens it; \`modal\` traps focus until it closes.
type Popover = HTMLElement & { show(): void; hide(): void };
type OpenChange = CustomEvent<{ open: boolean; reason: string }>;

export default function PopoverAnchor() {
  let popover!: Popover;
  let form!: HTMLFormElement;
  const [logText, setLogText] = createSignal("");

  const onClick = () => popover.show();
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    setLogText(\`Saved "\${new FormData(form).get("name")}"\`);
    popover.hide();
  };
  const onChange = (event: Event) => {
    const { open, reason } = (event as OpenChange).detail;
    if (!open) setLogText(\`Closed (reason: \${reason})\`);
  };

  return (
    <>
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
        <span
          id="avatar-anchor"
          style="
            display: inline-grid;
            place-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--color-primary-100, #dbeafe);
          "
        >
          AL
        </span>
        <minerva-button id="edit-profile" variant="outline" on:click={onClick}>
          Edit profile
        </minerva-button>
        <minerva-popover
          id="profile"
          anchor="avatar-anchor"
          side="right"
          modal
          label="Edit profile"
          ref={popover}
          on:minerva-open-change={onChange}
        >
          <form
            id="profile-form"
            style="display: grid; gap: 8px; width: 220px"
            ref={form}
            on:submit={onSubmit}
          >
            <label style="display: grid; gap: 4px">
              Display name <input name="name" value="Ada Lovelace" required />
            </label>
            <minerva-button type="submit" size="small">
              Save
            </minerva-button>
          </form>
        </minerva-popover>
      </div>
      <p id="profile-log" style="margin: 8px 0 0">
        {logText()}
      </p>
    </>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
  <span
    id="avatar-anchor"
    style="
      display: inline-grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--color-primary-100, #dbeafe);
    "
    >AL</span
  >
  <minerva-button id="edit-profile" variant="outline"
    >Edit profile</minerva-button
  >
  <minerva-popover
    id="profile"
    anchor="avatar-anchor"
    side="right"
    modal
    label="Edit profile"
  >
    <form id="profile-form" style="display: grid; gap: 8px; width: 220px">
      <label style="display: grid; gap: 4px"
        >Display name <input name="name" value="Ada Lovelace" required
      /></label>
      <minerva-button type="submit" size="small">Save</minerva-button>
    </form>
  </minerva-popover>
</div>
<p id="profile-log" style="margin: 8px 0 0"></p>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The panel is positioned against \`anchor\` (an element id) while an
  // external button opens it; \`modal\` traps focus until it closes.
  const button = document.querySelector("#edit-profile");
  const popover = document.querySelector("#profile");
  const form = document.querySelector("#profile-form");
  const log = document.querySelector("#profile-log");
  const onClick = () => popover.show();
  const onSubmit = (event) => {
    event.preventDefault();
    log.textContent = \`Saved "\${new FormData(form).get("name")}"\`;
    popover.hide();
  };
  const onChange = (event) => {
    const { open, reason } = event.detail;
    if (!open) log.textContent = \`Closed (reason: \${reason})\`;
  };
  button.addEventListener("click", onClick);
  form.addEventListener("submit", onSubmit);
  popover.addEventListener("minerva-open-change", onChange);
<\/script>
`}})))()}n();export{t as default};