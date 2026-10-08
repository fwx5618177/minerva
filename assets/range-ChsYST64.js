import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MonthCalendarRange.vue -->

<script setup lang="ts">
import { ref } from "vue";

// range-start / range-end highlight days (display only, either order):
// here a first click starts a new range and a second one closes it.

type Calendar = HTMLElement & { rangeStart: string; rangeEnd: string };

const calendar = ref<Calendar>();
const outputText = ref("From 2026-03-09 to 2026-03-13");

const onChange = (e: Event) => {
  const { value } = (e as CustomEvent<{ value: string }>).detail;
  if (calendar.value!.rangeStart === calendar.value!.rangeEnd) {
    calendar.value!.rangeEnd = value;
    outputText.value = \`From \${calendar.value!.rangeStart} to \${value}\`;
  } else {
    calendar.value!.rangeStart = value;
    calendar.value!.rangeEnd = value;
    outputText.value = \`From \${value}: pick the last day\`;
  }
};
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 560px">
    <minerva-month-calendar
      id="calendar"
      month="2026-03"
      value="2026-03-13"
      range-start="2026-03-09"
      range-end="2026-03-13"
      hide-events
      ref="calendar"
      @minerva-change="onChange"
    ></minerva-month-calendar>
    <output id="range">{{ outputText }}</output>
  </div>
</template>
`,angular:`// month-calendar-range.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// range-start / range-end highlight days (display only, either order):
// here a first click starts a new range and a second one closes it.
type Calendar = HTMLElement & { rangeStart: string; rangeEnd: string };

@Component({
  selector: "app-month-calendar-range",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 560px">
      <minerva-month-calendar
        id="calendar"
        month="2026-03"
        value="2026-03-13"
        range-start="2026-03-09"
        range-end="2026-03-13"
        hide-events
        #calendar
        (minerva-change)="onChange($event)"
      ></minerva-month-calendar>
      <output id="range">{{ outputText }}</output>
    </div>
  \`,
})
export class MonthCalendarRangeComponent {
  @ViewChild("calendar") calendar!: ElementRef<Calendar>;
  outputText = "From 2026-03-09 to 2026-03-13";

  onChange = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string }>).detail;
    if (
      this.calendar.nativeElement.rangeStart ===
      this.calendar.nativeElement.rangeEnd
    ) {
      this.calendar.nativeElement.rangeEnd = value;
      this.outputText = \`From \${this.calendar.nativeElement.rangeStart} to \${value}\`;
    } else {
      this.calendar.nativeElement.rangeStart = value;
      this.calendar.nativeElement.rangeEnd = value;
      this.outputText = \`From \${value}: pick the last day\`;
    }
  };
}
`,svelte:`<!-- MonthCalendarRange.svelte -->

<script lang="ts">
  // range-start / range-end highlight days (display only, either order):
  // here a first click starts a new range and a second one closes it.

  type Calendar = HTMLElement & { rangeStart: string; rangeEnd: string };

  let calendar: Calendar;
  let outputText = $state("From 2026-03-09 to 2026-03-13");

  const onChange = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string }>).detail;
    if (calendar.rangeStart === calendar.rangeEnd) {
      calendar.rangeEnd = value;
      outputText = \`From \${calendar.rangeStart} to \${value}\`;
    } else {
      calendar.rangeStart = value;
      calendar.rangeEnd = value;
      outputText = \`From \${value}: pick the last day\`;
    }
  };
<\/script>

<div style="display: grid; gap: 12px; max-width: 560px">
  <minerva-month-calendar
    id="calendar"
    month="2026-03"
    value="2026-03-13"
    range-start="2026-03-09"
    range-end="2026-03-13"
    hide-events
    bind:this={calendar}
    onminerva-change={onChange}
  ></minerva-month-calendar>
  <output id="range">{outputText}</output>
</div>
`,solid:`// MonthCalendarRange.tsx

import { createSignal } from "solid-js";

// range-start / range-end highlight days (display only, either order):
// here a first click starts a new range and a second one closes it.
type Calendar = HTMLElement & { rangeStart: string; rangeEnd: string };

export default function MonthCalendarRange() {
  let calendar!: Calendar;
  const [outputText, setOutputText] = createSignal(
    "From 2026-03-09 to 2026-03-13",
  );

  const onChange = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string }>).detail;
    if (calendar.rangeStart === calendar.rangeEnd) {
      calendar.rangeEnd = value;
      setOutputText(\`From \${calendar.rangeStart} to \${value}\`);
    } else {
      calendar.rangeStart = value;
      calendar.rangeEnd = value;
      setOutputText(\`From \${value}: pick the last day\`);
    }
  };

  return (
    <div style="display: grid; gap: 12px; max-width: 560px">
      <minerva-month-calendar
        id="calendar"
        month="2026-03"
        value="2026-03-13"
        range-start="2026-03-09"
        range-end="2026-03-13"
        hide-events
        ref={calendar}
        on:minerva-change={onChange}
      ></minerva-month-calendar>
      <output id="range">{outputText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 560px">
  <minerva-month-calendar
    id="calendar"
    month="2026-03"
    value="2026-03-13"
    range-start="2026-03-09"
    range-end="2026-03-13"
    hide-events
  ></minerva-month-calendar>
  <output id="range">From 2026-03-09 to 2026-03-13</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // range-start / range-end highlight days (display only, either order):
  // here a first click starts a new range and a second one closes it.
  const calendar = document.querySelector("#calendar");
  const output = document.querySelector("#range");
  const onChange = (e) => {
    const { value } = e.detail;
    if (calendar.rangeStart === calendar.rangeEnd) {
      calendar.rangeEnd = value;
      output.textContent = \`From \${calendar.rangeStart} to \${value}\`;
    } else {
      calendar.rangeStart = value;
      calendar.rangeEnd = value;
      output.textContent = \`From \${value}: pick the last day\`;
    }
  };
  calendar.addEventListener("minerva-change", onChange);
<\/script>
`}})))()}n();export{t as default};