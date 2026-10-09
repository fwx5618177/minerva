import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MonthCalendarSizes.vue -->

<script setup lang="ts">
// size="small" draws events as dots, size="large" puts the day number at
// the top of a taller cell. Events are a JS property.

type CalendarEvent = { id: string; date: string; title: string };
type Calendar = HTMLElement & { events: CalendarEvent[] };

const compactEvents = [
  { id: "1", date: "2026-03-02", title: "Sprint planning" },
  { id: "2", date: "2026-03-12", title: "Design review" },
  { id: "3", date: "2026-03-12", title: "Customer call" },
  { id: "4", date: "2026-03-19", title: "Release 2.4" },
];
const comfortableEvents = [
  { id: "1", date: "2026-03-02", title: "Sprint planning" },
  { id: "2", date: "2026-03-12", title: "Design review" },
  { id: "3", date: "2026-03-12", title: "Customer call" },
  { id: "4", date: "2026-03-19", title: "Release 2.4" },
];
<\/script>

<template>
  <div
    style="
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      align-items: start;
    "
  >
    <minerva-month-calendar
      id="compact"
      size="small"
      month="2026-03"
      value="2026-03-12"
      hide-events
      aria-label="Compact calendar"
      :events.prop="compactEvents"
    ></minerva-month-calendar>
    <minerva-month-calendar
      id="comfortable"
      size="large"
      month="2026-03"
      value="2026-03-12"
      aria-label="Comfortable calendar"
      :events.prop="comfortableEvents"
    ></minerva-month-calendar>
  </div>
</template>
`,angular:`// month-calendar-sizes.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// size="small" draws events as dots, size="large" puts the day number at
// the top of a taller cell. Events are a JS property.
type CalendarEvent = { id: string; date: string; title: string };
type Calendar = HTMLElement & { events: CalendarEvent[] };

@Component({
  selector: "app-month-calendar-sizes",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        align-items: start;
      "
    >
      <minerva-month-calendar
        id="compact"
        size="small"
        month="2026-03"
        value="2026-03-12"
        hide-events
        aria-label="Compact calendar"
        [events]="compactEvents"
      ></minerva-month-calendar>
      <minerva-month-calendar
        id="comfortable"
        size="large"
        month="2026-03"
        value="2026-03-12"
        aria-label="Comfortable calendar"
        [events]="comfortableEvents"
      ></minerva-month-calendar>
    </div>
  \`,
})
export class MonthCalendarSizesComponent {
  compactEvents = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
  ];
  comfortableEvents = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
  ];
}
`,svelte:`<!-- MonthCalendarSizes.svelte -->

<script lang="ts">
  // size="small" draws events as dots, size="large" puts the day number at
  // the top of a taller cell. Events are a JS property.

  type CalendarEvent = { id: string; date: string; title: string };
  type Calendar = HTMLElement & { events: CalendarEvent[] };

  const compactEvents = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
  ];
  const comfortableEvents = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
  ];
<\/script>

<div
  style="
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    align-items: start;
  "
>
  <minerva-month-calendar
    id="compact"
    size="small"
    month="2026-03"
    value="2026-03-12"
    hide-events
    aria-label="Compact calendar"
    events={compactEvents}
  ></minerva-month-calendar>
  <minerva-month-calendar
    id="comfortable"
    size="large"
    month="2026-03"
    value="2026-03-12"
    aria-label="Comfortable calendar"
    events={comfortableEvents}
  ></minerva-month-calendar>
</div>
`,solid:`// MonthCalendarSizes.tsx

// size="small" draws events as dots, size="large" puts the day number at
// the top of a taller cell. Events are a JS property.
type CalendarEvent = { id: string; date: string; title: string };
type Calendar = HTMLElement & { events: CalendarEvent[] };

export default function MonthCalendarSizes() {
  const compactEvents = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
  ];
  const comfortableEvents = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
  ];

  return (
    <div
      style="
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        align-items: start;
      "
    >
      <minerva-month-calendar
        id="compact"
        size="small"
        month="2026-03"
        value="2026-03-12"
        hide-events
        aria-label="Compact calendar"
        prop:events={compactEvents}
      ></minerva-month-calendar>
      <minerva-month-calendar
        id="comfortable"
        size="large"
        month="2026-03"
        value="2026-03-12"
        aria-label="Comfortable calendar"
        prop:events={comfortableEvents}
      ></minerva-month-calendar>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    align-items: start;
  "
>
  <minerva-month-calendar
    id="compact"
    size="small"
    month="2026-03"
    value="2026-03-12"
    hide-events
    aria-label="Compact calendar"
  ></minerva-month-calendar>
  <minerva-month-calendar
    id="comfortable"
    size="large"
    month="2026-03"
    value="2026-03-12"
    aria-label="Comfortable calendar"
  ></minerva-month-calendar>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // size="small" draws events as dots, size="large" puts the day number at
  // the top of a taller cell. Events are a JS property.
  const compact = document.querySelector("#compact");
  const comfortable = document.querySelector("#comfortable");
  compact.events = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
  ];
  comfortable.events = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
  ];
<\/script>
`}})))()}n();export{t as default};