import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MonthCalendarBasic.vue -->

<script setup lang="ts">
// Events are a JS property; each day shows its count and the selected day's
// events are listed below the grid. Arrows, Home / End and PageUp / PageDown
// move through the grid (one tab stop).

type CalendarEvent = { id: string; date: string; title: string };

const calendarEvents = [
  { id: "1", date: "2026-03-02", title: "Sprint planning" },
  { id: "2", date: "2026-03-12", title: "Design review" },
  { id: "3", date: "2026-03-12", title: "Customer call" },
  { id: "4", date: "2026-03-19", title: "Release 2.4" },
  { id: "5", date: "2026-03-27", title: "Retrospective" },
];
<\/script>

<template>
  <minerva-month-calendar
    id="calendar"
    month="2026-03"
    value="2026-03-12"
    style="max-width: 560px"
    :events.prop="calendarEvents"
  ></minerva-month-calendar>
</template>
`,angular:`// month-calendar-basic.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Events are a JS property; each day shows its count and the selected day's
// events are listed below the grid. Arrows, Home / End and PageUp / PageDown
// move through the grid (one tab stop).
type CalendarEvent = { id: string; date: string; title: string };

@Component({
  selector: "app-month-calendar-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-month-calendar
      id="calendar"
      month="2026-03"
      value="2026-03-12"
      style="max-width: 560px"
      [events]="calendarEvents"
    ></minerva-month-calendar>
  \`,
})
export class MonthCalendarBasicComponent {
  calendarEvents = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
    { id: "5", date: "2026-03-27", title: "Retrospective" },
  ];
}
`,svelte:`<!-- MonthCalendarBasic.svelte -->

<script lang="ts">
  // Events are a JS property; each day shows its count and the selected day's
  // events are listed below the grid. Arrows, Home / End and PageUp / PageDown
  // move through the grid (one tab stop).

  type CalendarEvent = { id: string; date: string; title: string };

  const calendarEvents = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
    { id: "5", date: "2026-03-27", title: "Retrospective" },
  ];
<\/script>

<minerva-month-calendar
  id="calendar"
  month="2026-03"
  value="2026-03-12"
  style="max-width: 560px"
  events={calendarEvents}
></minerva-month-calendar>
`,solid:`// MonthCalendarBasic.tsx

// Events are a JS property; each day shows its count and the selected day's
// events are listed below the grid. Arrows, Home / End and PageUp / PageDown
// move through the grid (one tab stop).
type CalendarEvent = { id: string; date: string; title: string };

export default function MonthCalendarBasic() {
  const calendarEvents = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
    { id: "5", date: "2026-03-27", title: "Retrospective" },
  ];

  return (
    <minerva-month-calendar
      id="calendar"
      month="2026-03"
      value="2026-03-12"
      style="max-width: 560px"
      prop:events={calendarEvents}
    ></minerva-month-calendar>
  );
}
`,html:`<minerva-month-calendar
  id="calendar"
  month="2026-03"
  value="2026-03-12"
  style="max-width: 560px"
></minerva-month-calendar>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Events are a JS property; each day shows its count and the selected day's
  // events are listed below the grid. Arrows, Home / End and PageUp / PageDown
  // move through the grid (one tab stop).
  const calendar = document.querySelector("#calendar");
  calendar.events = [
    { id: "1", date: "2026-03-02", title: "Sprint planning" },
    { id: "2", date: "2026-03-12", title: "Design review" },
    { id: "3", date: "2026-03-12", title: "Customer call" },
    { id: "4", date: "2026-03-19", title: "Release 2.4" },
    { id: "5", date: "2026-03-27", title: "Retrospective" },
  ];
<\/script>
`}})))()}n();export{t as default};