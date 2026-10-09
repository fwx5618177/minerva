import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- AlertClosable.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The close button fires a cancelable \`minerva-close\`; unless prevented, the
// alert moves focus out and sets its \`hidden\` attribute.

const cookies = ref<HTMLElement>();
const sticky = ref<HTMLElement>();
const keep = ref<HTMLInputElement>();
const show = ref<HTMLElement>();
const logText = ref("");

const onStickyClose = (event: Event) => {
  if (keep.value!.checked) {
    event.preventDefault();
    logText.value = "Close prevented";
  }
};
const onAccept = () => {
  logText.value = "Cookies accepted";
  show.value!.focus();
  cookies.value!.hidden = true;
};
const onShow = () => {
  cookies.value!.hidden = false;
  sticky.value!.hidden = false;
  logText.value = "";
};
<\/script>

<template>
  <div style="display: grid; gap: 12px">
    <minerva-alert id="cookies" closable color="info" ref="cookies">
      <span slot="heading">Cookies</span>
      We use cookies to improve your experience.
      <minerva-button slot="action" size="small" id="accept" @click="onAccept"
        >Accept</minerva-button
      >
    </minerva-alert>
    <minerva-alert
      id="sticky"
      closable
      color="warning"
      close-label="Dismiss warning"
      ref="sticky"
      @minerva-close="onStickyClose"
    >
      This warning stays while "Keep the warning" is checked.
    </minerva-alert>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
      <label
        ><input id="keep" type="checkbox" checked ref="keep" /> Keep the
        warning</label
      >
      <minerva-button
        id="show"
        size="small"
        variant="outline"
        ref="show"
        @click="onShow"
        >Show alerts again</minerva-button
      >
      <output id="log">{{ logText }}</output>
    </div>
  </div>
</template>
`,angular:`// alert-closable.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The close button fires a cancelable \`minerva-close\`; unless prevented, the
// alert moves focus out and sets its \`hidden\` attribute.

@Component({
  selector: "app-alert-closable",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px">
      <minerva-alert id="cookies" closable color="info" #cookies>
        <span slot="heading">Cookies</span>
        We use cookies to improve your experience.
        <minerva-button
          slot="action"
          size="small"
          id="accept"
          (click)="onAccept($event)"
          >Accept</minerva-button
        >
      </minerva-alert>
      <minerva-alert
        id="sticky"
        closable
        color="warning"
        close-label="Dismiss warning"
        #sticky
        (minerva-close)="onStickyClose($event)"
      >
        This warning stays while "Keep the warning" is checked.
      </minerva-alert>
      <div
        style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center"
      >
        <label
          ><input id="keep" type="checkbox" checked #keep /> Keep the
          warning</label
        >
        <minerva-button
          id="show"
          size="small"
          variant="outline"
          #show
          (click)="onShow($event)"
          >Show alerts again</minerva-button
        >
        <output id="log">{{ logText }}</output>
      </div>
    </div>
  \`,
})
export class AlertClosableComponent {
  @ViewChild("cookies") cookies!: ElementRef<HTMLElement>;
  @ViewChild("sticky") sticky!: ElementRef<HTMLElement>;
  @ViewChild("keep") keep!: ElementRef<HTMLInputElement>;
  @ViewChild("show") show!: ElementRef<HTMLElement>;
  logText = "";

  onStickyClose = (event: Event) => {
    if (this.keep.nativeElement.checked) {
      event.preventDefault();
      this.logText = "Close prevented";
    }
  };
  onAccept = () => {
    this.logText = "Cookies accepted";
    this.show.nativeElement.focus();
    this.cookies.nativeElement.hidden = true;
  };
  onShow = () => {
    this.cookies.nativeElement.hidden = false;
    this.sticky.nativeElement.hidden = false;
    this.logText = "";
  };
}
`,svelte:`<!-- AlertClosable.svelte -->

<script lang="ts">
  // The close button fires a cancelable \`minerva-close\`; unless prevented, the
  // alert moves focus out and sets its \`hidden\` attribute.

  let cookies: HTMLElement;
  let sticky: HTMLElement;
  let keep: HTMLInputElement;
  let show: HTMLElement;
  let logText = $state("");

  const onStickyClose = (event: Event) => {
    if (keep.checked) {
      event.preventDefault();
      logText = "Close prevented";
    }
  };
  const onAccept = () => {
    logText = "Cookies accepted";
    show.focus();
    cookies.hidden = true;
  };
  const onShow = () => {
    cookies.hidden = false;
    sticky.hidden = false;
    logText = "";
  };
<\/script>

<div style="display: grid; gap: 12px">
  <minerva-alert id="cookies" closable color="info" bind:this={cookies}>
    <span slot="heading">Cookies</span>
    We use cookies to improve your experience.
    <minerva-button
      slot="action"
      size="small"
      id="accept"
      onclick={onAccept}
    >Accept</minerva-button>
  </minerva-alert>
  <minerva-alert
    id="sticky"
    closable
    color="warning"
    close-label="Dismiss warning"
    bind:this={sticky}
    onminerva-close={onStickyClose}
  >
    This warning stays while "Keep the warning" is checked.
  </minerva-alert>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
    <label><input id="keep" type="checkbox" checked bind:this={keep} /> Keep the warning</label>
    <minerva-button
      id="show"
      size="small"
      variant="outline"
      bind:this={show}
      onclick={onShow}
    >Show alerts again</minerva-button>
    <output id="log">{logText}</output>
  </div>
</div>
`,solid:`// AlertClosable.tsx

import { createSignal } from "solid-js";

// The close button fires a cancelable \`minerva-close\`; unless prevented, the
// alert moves focus out and sets its \`hidden\` attribute.

export default function AlertClosable() {
  let cookies!: HTMLElement;
  let sticky!: HTMLElement;
  let keep!: HTMLInputElement;
  let show!: HTMLElement;
  const [logText, setLogText] = createSignal("");

  const onStickyClose = (event: Event) => {
    if (keep.checked) {
      event.preventDefault();
      setLogText("Close prevented");
    }
  };
  const onAccept = () => {
    setLogText("Cookies accepted");
    show.focus();
    cookies.hidden = true;
  };
  const onShow = () => {
    cookies.hidden = false;
    sticky.hidden = false;
    setLogText("");
  };

  return (
    <div style="display: grid; gap: 12px">
      <minerva-alert id="cookies" closable color="info" ref={cookies}>
        <span slot="heading">Cookies</span>
        We use cookies to improve your experience.
        <minerva-button
          slot="action"
          size="small"
          id="accept"
          on:click={onAccept}
        >
          Accept
        </minerva-button>
      </minerva-alert>
      <minerva-alert
        id="sticky"
        closable
        color="warning"
        close-label="Dismiss warning"
        ref={sticky}
        on:minerva-close={onStickyClose}
      >
        This warning stays while "Keep the warning" is checked.
      </minerva-alert>
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
        <label>
          <input id="keep" type="checkbox" checked ref={keep} /> Keep the
          warning
        </label>
        <minerva-button
          id="show"
          size="small"
          variant="outline"
          ref={show}
          on:click={onShow}
        >
          Show alerts again
        </minerva-button>
        <output id="log">{logText()}</output>
      </div>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px">
  <minerva-alert id="cookies" closable color="info">
    <span slot="heading">Cookies</span>
    We use cookies to improve your experience.
    <minerva-button slot="action" size="small" id="accept"
      >Accept</minerva-button
    >
  </minerva-alert>
  <minerva-alert
    id="sticky"
    closable
    color="warning"
    close-label="Dismiss warning"
  >
    This warning stays while "Keep the warning" is checked.
  </minerva-alert>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center">
    <label><input id="keep" type="checkbox" checked /> Keep the warning</label>
    <minerva-button id="show" size="small" variant="outline"
      >Show alerts again</minerva-button
    >
    <output id="log"></output>
  </div>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The close button fires a cancelable \`minerva-close\`; unless prevented, the
  // alert moves focus out and sets its \`hidden\` attribute.
  const cookies = document.querySelector("#cookies");
  const sticky = document.querySelector("#sticky");
  const accept = document.querySelector("#accept");
  const keep = document.querySelector("#keep");
  const show = document.querySelector("#show");
  const log = document.querySelector("#log");
  const onStickyClose = (event) => {
    if (keep.checked) {
      event.preventDefault();
      log.value = "Close prevented";
    }
  };
  const onAccept = () => {
    log.value = "Cookies accepted";
    show.focus();
    cookies.hidden = true;
  };
  const onShow = () => {
    cookies.hidden = false;
    sticky.hidden = false;
    log.value = "";
  };
  sticky.addEventListener("minerva-close", onStickyClose);
  accept.addEventListener("click", onAccept);
  show.addEventListener("click", onShow);
<\/script>
`}})))()}n();export{t as default};