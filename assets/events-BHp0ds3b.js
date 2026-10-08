import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MonthCalendarEvents.vue -->

<script setup lang="ts">
import { ref } from "vue";

// minerva-change (day), minerva-month-change (month) and, with
// clickable-events, minerva-event-click (event of the selected day).

type CalendarEvent = { id: string; date: string; title: string };

const logText = ref("Select a day, change month or click an event.");

const calendarEvents = [
  { id: "1", date: "2026-03-12", title: "Design review" },
  { id: "2", date: "2026-03-12", title: "Customer call" },
  { id: "3", date: "2026-04-02", title: "Quarterly planning" },
];
const onChange = (e: Event) => {
  const { value } = (e as CustomEvent<{ value: string }>).detail;
  logText.value = \`Selected \${value}\`;
};
const onMonth = (e: Event) => {
  const { month } = (e as CustomEvent<{ month: Date }>).detail;
  logText.value = \`Showing \${month.toLocaleDateString("en", { month: "long", year: "numeric" })}\`;
};
const onEvent = (e: Event) => {
  const { event } = (e as CustomEvent<{ event: CalendarEvent }>).detail;
  logText.value = \`Opened "\${event.title}"\`;
};
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 560px">
    <minerva-month-calendar
      id="calendar"
      month="2026-03"
      value="2026-03-12"
      clickable-events
      :events.prop="calendarEvents"
      @minerva-change="onChange"
      @minerva-month-change="onMonth"
      @minerva-event-click="onEvent"
    ></minerva-month-calendar>
    <output id="log">{{ logText }}</output>
  </div>
</template>
`,angular:`// month-calendar-events.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// minerva-change (day), minerva-month-change (month) and, with
// clickable-events, minerva-event-click (event of the selected day).
type CalendarEvent = { id: string; date: string; title: string };

@Component({
  selector: "app-month-calendar-events",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 560px">
      <minerva-month-calendar
        id="calendar"
        month="2026-03"
        value="2026-03-12"
        clickable-events
        [events]="calendarEvents"
        (minerva-change)="onChange($event)"
        (minerva-month-change)="onMonth($event)"
        (minerva-event-click)="onEvent($event)"
      ></minerva-month-calendar>
      <output id="log">{{ logText }}</output>
    </div>
  \`,
})
export class MonthCalendarEventsComponent {
  logText = "Select a day, change month or click an event.";

  calendarEvents = [
    { id: "1", date: "2026-03-12", title: "Design review" },
    { id: "2", date: "2026-03-12", title: "Customer call" },
    { id: "3", date: "2026-04-02", title: "Quarterly planning" },
  ];
  onChange = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string }>).detail;
    this.logText = \`Selected \${value}\`;
  };
  onMonth = (e: Event) => {
    const { month } = (e as CustomEvent<{ month: Date }>).detail;
    this.logText = \`Showing \${month.toLocaleDateString("en", { month: "long", year: "numeric" })}\`;
  };
  onEvent = (e: Event) => {
    const { event } = (e as CustomEvent<{ event: CalendarEvent }>).detail;
    this.logText = \`Opened "\${event.title}"\`;
  };
}
`,svelte:`<!-- MonthCalendarEvents.svelte -->

<script lang="ts">
  // minerva-change (day), minerva-month-change (month) and, with
  // clickable-events, minerva-event-click (event of the selected day).

  type CalendarEvent = { id: string; date: string; title: string };

  let logText = $state("Select a day, change month or click an event.");

  const calendarEvents = [
    { id: "1", date: "2026-03-12", title: "Design review" },
    { id: "2", date: "2026-03-12", title: "Customer call" },
    { id: "3", date: "2026-04-02", title: "Quarterly planning" },
  ];
  const onChange = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string }>).detail;
    logText = \`Selected \${value}\`;
  };
  const onMonth = (e: Event) => {
    const { month } = (e as CustomEvent<{ month: Date }>).detail;
    logText = \`Showing \${month.toLocaleDateString("en", { month: "long", year: "numeric" })}\`;
  };
  const onEvent = (e: Event) => {
    const { event } = (e as CustomEvent<{ event: CalendarEvent }>).detail;
    logText = \`Opened "\${event.title}"\`;
  };
<\/script>

<div style="display: grid; gap: 12px; max-width: 560px">
  <minerva-month-calendar
    id="calendar"
    month="2026-03"
    value="2026-03-12"
    clickable-events
    events={calendarEvents}
    onminerva-change={onChange}
    onminerva-month-change={onMonth}
    onminerva-event-click={onEvent}
  ></minerva-month-calendar>
  <output id="log">{logText}</output>
</div>
`,solid:`// MonthCalendarEvents.tsx

import { createSignal } from "solid-js";

// minerva-change (day), minerva-month-change (month) and, with
// clickable-events, minerva-event-click (event of the selected day).
type CalendarEvent = { id: string; date: string; title: string };

export default function MonthCalendarEvents() {
  const [logText, setLogText] = createSignal(
    "Select a day, change month or click an event.",
  );

  const calendarEvents = [
    { id: "1", date: "2026-03-12", title: "Design review" },
    { id: "2", date: "2026-03-12", title: "Customer call" },
    { id: "3", date: "2026-04-02", title: "Quarterly planning" },
  ];
  const onChange = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string }>).detail;
    setLogText(\`Selected \${value}\`);
  };
  const onMonth = (e: Event) => {
    const { month } = (e as CustomEvent<{ month: Date }>).detail;
    setLogText(
      \`Showing \${month.toLocaleDateString("en", { month: "long", year: "numeric" })}\`,
    );
  };
  const onEvent = (e: Event) => {
    const { event } = (e as CustomEvent<{ event: CalendarEvent }>).detail;
    setLogText(\`Opened "\${event.title}"\`);
  };

  return (
    <div style="display: grid; gap: 12px; max-width: 560px">
      <minerva-month-calendar
        id="calendar"
        month="2026-03"
        value="2026-03-12"
        clickable-events
        prop:events={calendarEvents}
        on:minerva-change={onChange}
        on:minerva-month-change={onMonth}
        on:minerva-event-click={onEvent}
      ></minerva-month-calendar>
      <output id="log">{logText()}</output>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 560px">
  <minerva-month-calendar
    id="calendar"
    month="2026-03"
    value="2026-03-12"
    clickable-events
  ></minerva-month-calendar>
  <output id="log">Select a day, change month or click an event.</output>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // minerva-change (day), minerva-month-change (month) and, with
  // clickable-events, minerva-event-click (event of the selected day).
  const calendar = document.querySelector("#calendar");
  const log = document.querySelector("#log");
  calendar.events = [
    { id: "1", date: "2026-03-12", title: "Design review" },
    { id: "2", date: "2026-03-12", title: "Customer call" },
    { id: "3", date: "2026-04-02", title: "Quarterly planning" },
  ];
  const onChange = (e) => {
    const { value } = e.detail;
    log.value = \`Selected \${value}\`;
  };
  const onMonth = (e) => {
    const { month } = e.detail;
    log.value = \`Showing \${month.toLocaleDateString("en", { month: "long", year: "numeric" })}\`;
  };
  const onEvent = (e) => {
    const { event } = e.detail;
    log.value = \`Opened "\${event.title}"\`;
  };
  calendar.addEventListener("minerva-change", onChange);
  calendar.addEventListener("minerva-month-change", onMonth);
  calendar.addEventListener("minerva-event-click", onEvent);
<\/script>
`}})))()}n();export{t as default};