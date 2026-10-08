import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TooltipControlled.vue -->

<script setup lang="ts">
import { ref } from "vue";

// show() / hide() / toggle() drive the tooltip directly; hover / focus
// fire the cancelable minerva-open-change (methods do not).

type Tooltip = HTMLElement & { show(): void; hide(): void; toggle(): void };
type OpenChange = CustomEvent<{ open: boolean }>;

const tip = ref<Tooltip>();
const logText = ref("");

const onShow = () => tip.value!.show();
const onHide = () => tip.value!.hide();
const onToggle = () => tip.value!.toggle();
const onChange = (event: Event) =>
  (logText.value = \`minerva-open-change: open=\${
    (event as OpenChange).detail.open
  }\`);
<\/script>

<template>
  <div style="display: grid; gap: 12px; justify-items: start">
    <div style="display: flex; gap: 8px">
      <minerva-button
        id="tip-show"
        size="small"
        variant="outline"
        @click="onShow"
        >show()</minerva-button
      >
      <minerva-button
        id="tip-hide"
        size="small"
        variant="outline"
        @click="onHide"
        >hide()</minerva-button
      >
      <minerva-button
        id="tip-toggle"
        size="small"
        variant="outline"
        @click="onToggle"
        >toggle()</minerva-button
      >
    </div>
    <minerva-tooltip
      id="tip"
      content="Controlled tooltip"
      placement="right"
      arrow
      ref="tip"
      @minerva-open-change="onChange"
    >
      <minerva-button>Target</minerva-button>
    </minerva-tooltip>
    <minerva-tooltip
      content="I follow the pointer"
      follow-cursor
      offset="12 12"
    >
      <div
        style="
          display: grid;
          place-items: center;
          width: 260px;
          height: 80px;
          border: 1px dashed currentColor;
          border-radius: 8px;
        "
      >
        Move the pointer here
      </div>
    </minerva-tooltip>
    <p id="tip-log" style="margin: 0">{{ logText }}</p>
  </div>
</template>
`,angular:`// tooltip-controlled.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// show() / hide() / toggle() drive the tooltip directly; hover / focus
// fire the cancelable minerva-open-change (methods do not).
type Tooltip = HTMLElement & { show(): void; hide(): void; toggle(): void };
type OpenChange = CustomEvent<{ open: boolean }>;

@Component({
  selector: "app-tooltip-controlled",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; justify-items: start">
      <div style="display: flex; gap: 8px">
        <minerva-button
          id="tip-show"
          size="small"
          variant="outline"
          (click)="onShow($event)"
          >show()</minerva-button
        >
        <minerva-button
          id="tip-hide"
          size="small"
          variant="outline"
          (click)="onHide($event)"
          >hide()</minerva-button
        >
        <minerva-button
          id="tip-toggle"
          size="small"
          variant="outline"
          (click)="onToggle($event)"
          >toggle()</minerva-button
        >
      </div>
      <minerva-tooltip
        id="tip"
        content="Controlled tooltip"
        placement="right"
        arrow
        #tip
        (minerva-open-change)="onChange($event)"
      >
        <minerva-button>Target</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip
        content="I follow the pointer"
        follow-cursor
        offset="12 12"
      >
        <div
          style="
            display: grid;
            place-items: center;
            width: 260px;
            height: 80px;
            border: 1px dashed currentColor;
            border-radius: 8px;
          "
        >
          Move the pointer here
        </div>
      </minerva-tooltip>
      <p id="tip-log" style="margin: 0">{{ logText }}</p>
    </div>
  \`,
})
export class TooltipControlledComponent {
  @ViewChild("tip") tip!: ElementRef<Tooltip>;
  logText = "";

  onShow = () => this.tip.nativeElement.show();
  onHide = () => this.tip.nativeElement.hide();
  onToggle = () => this.tip.nativeElement.toggle();
  onChange = (event: Event) =>
    (this.logText = \`minerva-open-change: open=\${
      (event as OpenChange).detail.open
    }\`);
}
`,svelte:`<!-- TooltipControlled.svelte -->

<script lang="ts">
  // show() / hide() / toggle() drive the tooltip directly; hover / focus
  // fire the cancelable minerva-open-change (methods do not).

  type Tooltip = HTMLElement & { show(): void; hide(): void; toggle(): void };
  type OpenChange = CustomEvent<{ open: boolean }>;

  let tip: Tooltip;
  let logText = $state("");

  const onShow = () => tip.show();
  const onHide = () => tip.hide();
  const onToggle = () => tip.toggle();
  const onChange = (event: Event) =>
    (logText = \`minerva-open-change: open=\${(event as OpenChange).detail.open}\`);
<\/script>

<div style="display: grid; gap: 12px; justify-items: start">
  <div style="display: flex; gap: 8px">
    <minerva-button
      id="tip-show"
      size="small"
      variant="outline"
      onclick={onShow}
    >show()</minerva-button>
    <minerva-button
      id="tip-hide"
      size="small"
      variant="outline"
      onclick={onHide}
    >hide()</minerva-button>
    <minerva-button
      id="tip-toggle"
      size="small"
      variant="outline"
      onclick={onToggle}
    >toggle()</minerva-button>
  </div>
  <minerva-tooltip
    id="tip"
    content="Controlled tooltip"
    placement="right"
    arrow
    bind:this={tip}
    onminerva-open-change={onChange}
  >
    <minerva-button>Target</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip content="I follow the pointer" follow-cursor offset="12 12">
    <div
      style="
        display: grid;
        place-items: center;
        width: 260px;
        height: 80px;
        border: 1px dashed currentColor;
        border-radius: 8px;
      "
    >
      Move the pointer here
    </div>
  </minerva-tooltip>
  <p id="tip-log" style="margin: 0">{logText}</p>
</div>
`,solid:`// TooltipControlled.tsx

import { createSignal } from "solid-js";

// show() / hide() / toggle() drive the tooltip directly; hover / focus
// fire the cancelable minerva-open-change (methods do not).
type Tooltip = HTMLElement & { show(): void; hide(): void; toggle(): void };
type OpenChange = CustomEvent<{ open: boolean }>;

export default function TooltipControlled() {
  let tip!: Tooltip;
  const [logText, setLogText] = createSignal("");

  const onShow = () => tip.show();
  const onHide = () => tip.hide();
  const onToggle = () => tip.toggle();
  const onChange = (event: Event) =>
    setLogText(
      \`minerva-open-change: open=\${(event as OpenChange).detail.open}\`,
    );

  return (
    <div style="display: grid; gap: 12px; justify-items: start">
      <div style="display: flex; gap: 8px">
        <minerva-button
          id="tip-show"
          size="small"
          variant="outline"
          on:click={onShow}
        >
          show()
        </minerva-button>
        <minerva-button
          id="tip-hide"
          size="small"
          variant="outline"
          on:click={onHide}
        >
          hide()
        </minerva-button>
        <minerva-button
          id="tip-toggle"
          size="small"
          variant="outline"
          on:click={onToggle}
        >
          toggle()
        </minerva-button>
      </div>
      <minerva-tooltip
        id="tip"
        content="Controlled tooltip"
        placement="right"
        arrow
        ref={tip}
        on:minerva-open-change={onChange}
      >
        <minerva-button>Target</minerva-button>
      </minerva-tooltip>
      <minerva-tooltip
        content="I follow the pointer"
        follow-cursor
        offset="12 12"
      >
        <div
          style="
            display: grid;
            place-items: center;
            width: 260px;
            height: 80px;
            border: 1px dashed currentColor;
            border-radius: 8px;
          "
        >
          Move the pointer here
        </div>
      </minerva-tooltip>
      <p id="tip-log" style="margin: 0">
        {logText()}
      </p>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; justify-items: start">
  <div style="display: flex; gap: 8px">
    <minerva-button id="tip-show" size="small" variant="outline"
      >show()</minerva-button
    >
    <minerva-button id="tip-hide" size="small" variant="outline"
      >hide()</minerva-button
    >
    <minerva-button id="tip-toggle" size="small" variant="outline"
      >toggle()</minerva-button
    >
  </div>
  <minerva-tooltip
    id="tip"
    content="Controlled tooltip"
    placement="right"
    arrow
  >
    <minerva-button>Target</minerva-button>
  </minerva-tooltip>
  <minerva-tooltip content="I follow the pointer" follow-cursor offset="12 12">
    <div
      style="
        display: grid;
        place-items: center;
        width: 260px;
        height: 80px;
        border: 1px dashed currentColor;
        border-radius: 8px;
      "
    >
      Move the pointer here
    </div>
  </minerva-tooltip>
  <p id="tip-log" style="margin: 0"></p>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // show() / hide() / toggle() drive the tooltip directly; hover / focus
  // fire the cancelable minerva-open-change (methods do not).
  const tip = document.querySelector("#tip");
  const showButton = document.querySelector("#tip-show");
  const hideButton = document.querySelector("#tip-hide");
  const toggleButton = document.querySelector("#tip-toggle");
  const log = document.querySelector("#tip-log");
  const onShow = () => tip.show();
  const onHide = () => tip.hide();
  const onToggle = () => tip.toggle();
  const onChange = (event) =>
    (log.textContent = \`minerva-open-change: open=\${event.detail.open}\`);
  showButton.addEventListener("click", onShow);
  hideButton.addEventListener("click", onHide);
  toggleButton.addEventListener("click", onToggle);
  tip.addEventListener("minerva-open-change", onChange);
<\/script>
`}})))()}n();export{t as default};