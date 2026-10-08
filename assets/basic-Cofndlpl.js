import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- TimePickerBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// minerva-change fires when a time is picked, typed (then normalized on
// blur) or cleared; valueAsDate gives it as today's Date.

type TimePicker = HTMLElement & { value: string; valueAsDate: Date | null };

const picker = ref<TimePicker>();
const resultText = ref("");

const onChange = () => {
  const date = picker.value!.valueAsDate;
  resultText.value = date
    ? \`value = \${picker.value!.value} (\${date.toLocaleTimeString()})\`
    : "Cleared";
};
<\/script>

<template>
  <div style="display: grid; gap: 8px; justify-items: start">
    <minerva-time-picker
      id="alarm"
      label="Alarm"
      value="07:30:00"
      ref="picker"
      @minerva-change="onChange"
    >
    </minerva-time-picker>
    <output id="result">{{ resultText }}</output>
  </div>
</template>
`,angular:`// time-picker-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// minerva-change fires when a time is picked, typed (then normalized on
// blur) or cleared; valueAsDate gives it as today's Date.
type TimePicker = HTMLElement & { value: string; valueAsDate: Date | null };

@Component({
  selector: "app-time-picker-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 8px; justify-items: start">
      <minerva-time-picker
        id="alarm"
        label="Alarm"
        value="07:30:00"
        #picker
        (minerva-change)="onChange($event)"
      >
      </minerva-time-picker>
      <output id="result">{{ resultText }}</output>
    </div>
  \`,
})
export class TimePickerBasicComponent {
  @ViewChild("picker") picker!: ElementRef<TimePicker>;
  resultText = "";

  onChange = () => {
    const date = this.picker.nativeElement.valueAsDate;
    this.resultText = date
      ? \`value = \${this.picker.nativeElement.value} (\${date.toLocaleTimeString()})\`
      : "Cleared";
  };
}
`,svelte:`<!-- TimePickerBasic.svelte -->

<script lang="ts">
  // minerva-change fires when a time is picked, typed (then normalized on
  // blur) or cleared; valueAsDate gives it as today's Date.

  type TimePicker = HTMLElement & { value: string; valueAsDate: Date | null };

  let picker: TimePicker;
  let resultText = $state("");

  const onChange = () => {
    const date = picker.valueAsDate;
    resultText = date
      ? \`value = \${picker.value} (\${date.toLocaleTimeString()})\`
      : "Cleared";
  };
<\/script>

<div style="display: grid; gap: 8px; justify-items: start">
  <minerva-time-picker
    id="alarm"
    label="Alarm"
    value="07:30:00"
    bind:this={picker}
    onminerva-change={onChange}
  >
  </minerva-time-picker>
  <output id="result">{resultText}</output>
</div>
`,solid:`// TimePickerBasic.tsx

import { createSignal } from "solid-js";

// minerva-change fires when a time is picked, typed (then normalized on
// blur) or cleared; valueAsDate gives it as today's Date.
type TimePicker = HTMLElement & { value: string; valueAsDate: Date | null };

export default function TimePickerBasic() {
  let picker!: TimePicker;
  const [resultText, setResultText] = createSignal("");

  const onChange = () => {
    const date = picker.valueAsDate;
    setResultText(
      date
        ? \`value = \${picker.value} (\${date.toLocaleTimeString()})\`
        : "Cleared",
    );
  };

  return (
    <div style="display: grid; gap: 8px; justify-items: start">
      <minerva-time-picker
        id="alarm"
        label="Alarm"
        value="07:30:00"
        ref={picker}
        on:minerva-change={onChange}
      ></minerva-time-picker>
      <output id="result">{resultText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 8px; justify-items: start">
  <minerva-time-picker id="alarm" label="Alarm" value="07:30:00">
  </minerva-time-picker>
  <output id="result"></output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // minerva-change fires when a time is picked, typed (then normalized on
  // blur) or cleared; valueAsDate gives it as today's Date.
  const picker = document.querySelector("#alarm");
  const result = document.querySelector("#result");
  const onChange = () => {
    const date = picker.valueAsDate;
    result.value = date
      ? \`value = \${picker.value} (\${date.toLocaleTimeString()})\`
      : "Cleared";
  };
  picker.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};