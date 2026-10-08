import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- MonthCalendarLocalized.vue -->

<script setup lang="ts">
// Labels are attributes; the column headers and accessible labels are
// properties (weekdayLabels Monday first, getDayLabel / getEventsLabel).

type Calendar = HTMLElement & {
  weekdayLabels: string[];
  getDayLabel: (day: string, count: number) => string;
  getEventsLabel: (day: string) => string;
};

const calendarWeekdayLabels = ["lu", "ma", "me", "je", "ve", "sa", "di"];
const calendarGetDayLabel = (day, count) =>
  \`\${day}, \${count} événement\${count > 1 ? "s" : ""}\`;
const calendarGetEventsLabel = (day) => \`Événements du \${day}\`;
<\/script>

<template>
  <div
    style="
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    "
  >
    <minerva-month-calendar
      id="fr"
      month="2026-03"
      locale="fr"
      previous-month-label="Mois précédent"
      next-month-label="Mois suivant"
      today-label="Aujourd'hui"
      empty-events-text="Aucun événement"
      style="--month-calendar-day-height: 3rem"
      :weekdayLabels.prop="calendarWeekdayLabels"
      :getDayLabel.prop="calendarGetDayLabel"
      :getEventsLabel.prop="calendarGetEventsLabel"
    ></minerva-month-calendar>
    <minerva-month-calendar
      month="2026-03"
      value="2026-03-12"
      hide-events
      disabled
      style="--month-calendar-day-height: 3rem"
    ></minerva-month-calendar>
  </div>
</template>
`,angular:`// month-calendar-localized.component.ts

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

// Labels are attributes; the column headers and accessible labels are
// properties (weekdayLabels Monday first, getDayLabel / getEventsLabel).
type Calendar = HTMLElement & {
  weekdayLabels: string[];
  getDayLabel: (day: string, count: number) => string;
  getEventsLabel: (day: string) => string;
};

@Component({
  selector: "app-month-calendar-localized",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div
      style="
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      "
    >
      <minerva-month-calendar
        id="fr"
        month="2026-03"
        locale="fr"
        previous-month-label="Mois précédent"
        next-month-label="Mois suivant"
        today-label="Aujourd'hui"
        empty-events-text="Aucun événement"
        style="--month-calendar-day-height: 3rem"
        [weekdayLabels]="calendarWeekdayLabels"
        [getDayLabel]="calendarGetDayLabel"
        [getEventsLabel]="calendarGetEventsLabel"
      ></minerva-month-calendar>
      <minerva-month-calendar
        month="2026-03"
        value="2026-03-12"
        hide-events
        disabled
        style="--month-calendar-day-height: 3rem"
      ></minerva-month-calendar>
    </div>
  \`,
})
export class MonthCalendarLocalizedComponent {
  calendarWeekdayLabels = ["lu", "ma", "me", "je", "ve", "sa", "di"];
  calendarGetDayLabel = (day, count) =>
    \`\${day}, \${count} événement\${count > 1 ? "s" : ""}\`;
  calendarGetEventsLabel = (day) => \`Événements du \${day}\`;
}
`,svelte:`<!-- MonthCalendarLocalized.svelte -->

<script lang="ts">
  // Labels are attributes; the column headers and accessible labels are
  // properties (weekdayLabels Monday first, getDayLabel / getEventsLabel).

  type Calendar = HTMLElement & {
    weekdayLabels: string[];
    getDayLabel: (day: string, count: number) => string;
    getEventsLabel: (day: string) => string;
  };

  const calendarWeekdayLabels = ["lu", "ma", "me", "je", "ve", "sa", "di"];
  const calendarGetDayLabel = (day, count) =>
    \`\${day}, \${count} événement\${count > 1 ? "s" : ""}\`;
  const calendarGetEventsLabel = (day) => \`Événements du \${day}\`;
<\/script>

<div
  style="
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  "
>
  <minerva-month-calendar
    id="fr"
    month="2026-03"
    locale="fr"
    previous-month-label="Mois précédent"
    next-month-label="Mois suivant"
    today-label="Aujourd'hui"
    empty-events-text="Aucun événement"
    style="--month-calendar-day-height: 3rem"
    weekdayLabels={calendarWeekdayLabels}
    getDayLabel={calendarGetDayLabel}
    getEventsLabel={calendarGetEventsLabel}
  ></minerva-month-calendar>
  <minerva-month-calendar
    month="2026-03"
    value="2026-03-12"
    hide-events
    disabled
    style="--month-calendar-day-height: 3rem"
  ></minerva-month-calendar>
</div>
`,solid:`// MonthCalendarLocalized.tsx

// Labels are attributes; the column headers and accessible labels are
// properties (weekdayLabels Monday first, getDayLabel / getEventsLabel).
type Calendar = HTMLElement & {
  weekdayLabels: string[];
  getDayLabel: (day: string, count: number) => string;
  getEventsLabel: (day: string) => string;
};

export default function MonthCalendarLocalized() {
  const calendarWeekdayLabels = ["lu", "ma", "me", "je", "ve", "sa", "di"];
  const calendarGetDayLabel = (day, count) =>
    \`\${day}, \${count} événement\${count > 1 ? "s" : ""}\`;
  const calendarGetEventsLabel = (day) => \`Événements du \${day}\`;

  return (
    <div
      style="
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      "
    >
      <minerva-month-calendar
        id="fr"
        month="2026-03"
        locale="fr"
        previous-month-label="Mois précédent"
        next-month-label="Mois suivant"
        today-label="Aujourd'hui"
        empty-events-text="Aucun événement"
        style="--month-calendar-day-height: 3rem"
        prop:weekdayLabels={calendarWeekdayLabels}
        prop:getDayLabel={calendarGetDayLabel}
        prop:getEventsLabel={calendarGetEventsLabel}
      ></minerva-month-calendar>
      <minerva-month-calendar
        month="2026-03"
        value="2026-03-12"
        hide-events
        disabled
        style="--month-calendar-day-height: 3rem"
      ></minerva-month-calendar>
    </div>
  );
}
`,html:`<div
  style="
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  "
>
  <minerva-month-calendar
    id="fr"
    month="2026-03"
    locale="fr"
    previous-month-label="Mois précédent"
    next-month-label="Mois suivant"
    today-label="Aujourd'hui"
    empty-events-text="Aucun événement"
    style="--month-calendar-day-height: 3rem"
  ></minerva-month-calendar>
  <minerva-month-calendar
    month="2026-03"
    value="2026-03-12"
    hide-events
    disabled
    style="--month-calendar-day-height: 3rem"
  ></minerva-month-calendar>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Labels are attributes; the column headers and accessible labels are
  // properties (weekdayLabels Monday first, getDayLabel / getEventsLabel).
  const calendar = document.querySelector("#fr");
  calendar.weekdayLabels = ["lu", "ma", "me", "je", "ve", "sa", "di"];
  calendar.getDayLabel = (day, count) =>
    \`\${day}, \${count} événement\${count > 1 ? "s" : ""}\`;
  calendar.getEventsLabel = (day) => \`Événements du \${day}\`;
<\/script>
`}})))()}n();export{t as default};