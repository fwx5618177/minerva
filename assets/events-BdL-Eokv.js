import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ThemePaletteEvents.vue -->

<script setup lang="ts">
import { ref } from "vue";

// labels overrides the option texts; minerva-change is cancelable.

type ThemeToggle = HTMLElement & {
  labels?: Partial<Record<"light" | "dark" | "system", string>>;
  resolvedTheme: "light" | "dark";
};
type PaletteToggle = HTMLElement & {
  labels?: Partial<Record<string, string>>;
};

const theme = ref<ThemeToggle>();
const lock = ref<HTMLInputElement>();
const logText = ref("");

const themeLabels = { light: "☀️ Day", dark: "🌙 Night" };
const paletteLabels = { editorial: "Paper", graphite: "Ink" };

const onTheme = (e: Event) => {
  const { value } = (e as CustomEvent<{ value: string }>).detail;
  if (lock.value!.checked) {
    e.preventDefault();
    logText.value = \`Blocked: \${value} (still \${theme.value!.resolvedTheme})\`;
  } else logText.value = \`Theme: \${value}\`;
};
const onPalette = (e: Event) => {
  const { value } = (e as CustomEvent<{ value: string | null }>).detail;
  logText.value = \`Palette: \${value ?? "default"}\`;
};
<\/script>

<template>
  <minerva-config theme="light">
    <minerva-card variant="outline" padding="medium" style="max-width: 520px">
      <minerva-card-content style="display: grid; gap: 12px">
        <minerva-theme-toggle
          id="theme"
          hide-system
          ref="theme"
          :labels.prop="themeLabels"
          @minerva-change="onTheme"
        ></minerva-theme-toggle>
        <minerva-palette-toggle
          id="palette"
          palettes="editorial graphite"
          :labels.prop="paletteLabels"
          @minerva-change="onPalette"
        ></minerva-palette-toggle>
        <label style="display: flex; gap: 8px; align-items: center">
          <input id="lock" type="checkbox" ref="lock" />
          Lock the theme (cancels minerva-change)
        </label>
        <output id="log">{{ logText }}</output>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
</template>
`,angular:`// theme-palette-events.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// labels overrides the option texts; minerva-change is cancelable.
type ThemeToggle = HTMLElement & {
  labels?: Partial<Record<"light" | "dark" | "system", string>>;
  resolvedTheme: "light" | "dark";
};
type PaletteToggle = HTMLElement & {
  labels?: Partial<Record<string, string>>;
};

@Component({
  selector: "app-theme-palette-events",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-config theme="light">
      <minerva-card variant="outline" padding="medium" style="max-width: 520px">
        <minerva-card-content style="display: grid; gap: 12px">
          <minerva-theme-toggle
            id="theme"
            hide-system
            #theme
            [labels]="themeLabels"
            (minerva-change)="onTheme($event)"
          ></minerva-theme-toggle>
          <minerva-palette-toggle
            id="palette"
            palettes="editorial graphite"
            [labels]="paletteLabels"
            (minerva-change)="onPalette($event)"
          ></minerva-palette-toggle>
          <label style="display: flex; gap: 8px; align-items: center">
            <input id="lock" type="checkbox" #lock />
            Lock the theme (cancels minerva-change)
          </label>
          <output id="log">{{ logText }}</output>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
  \`,
})
export class ThemePaletteEventsComponent {
  @ViewChild("theme") theme!: ElementRef<ThemeToggle>;
  @ViewChild("lock") lock!: ElementRef<HTMLInputElement>;
  logText = "";

  themeLabels = { light: "☀️ Day", dark: "🌙 Night" };
  paletteLabels = { editorial: "Paper", graphite: "Ink" };

  onTheme = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string }>).detail;
    if (this.lock.nativeElement.checked) {
      e.preventDefault();
      this.logText = \`Blocked: \${value} (still \${this.theme.nativeElement.resolvedTheme})\`;
    } else this.logText = \`Theme: \${value}\`;
  };
  onPalette = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string | null }>).detail;
    this.logText = \`Palette: \${value ?? "default"}\`;
  };
}
`,svelte:`<!-- ThemePaletteEvents.svelte -->

<script lang="ts">
  // labels overrides the option texts; minerva-change is cancelable.

  type ThemeToggle = HTMLElement & {
    labels?: Partial<Record<"light" | "dark" | "system", string>>;
    resolvedTheme: "light" | "dark";
  };
  type PaletteToggle = HTMLElement & {
    labels?: Partial<Record<string, string>>;
  };

  let theme: ThemeToggle;
  let lock: HTMLInputElement;
  let logText = $state("");

  const themeLabels = { light: "☀️ Day", dark: "🌙 Night" };
  const paletteLabels = { editorial: "Paper", graphite: "Ink" };

  const onTheme = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string }>).detail;
    if (lock.checked) {
      e.preventDefault();
      logText = \`Blocked: \${value} (still \${theme.resolvedTheme})\`;
    } else logText = \`Theme: \${value}\`;
  };
  const onPalette = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string | null }>).detail;
    logText = \`Palette: \${value ?? "default"}\`;
  };
<\/script>

<minerva-config theme="light">
  <minerva-card variant="outline" padding="medium" style="max-width: 520px">
    <minerva-card-content style="display: grid; gap: 12px">
      <minerva-theme-toggle
        id="theme"
        hide-system
        bind:this={theme}
        labels={themeLabels}
        onminerva-change={onTheme}
      ></minerva-theme-toggle>
      <minerva-palette-toggle
        id="palette"
        palettes="editorial graphite"
        labels={paletteLabels}
        onminerva-change={onPalette}
      ></minerva-palette-toggle>
      <label style="display: flex; gap: 8px; align-items: center">
        <input id="lock" type="checkbox" bind:this={lock} />
        Lock the theme (cancels minerva-change)
      </label>
      <output id="log">{logText}</output>
    </minerva-card-content>
  </minerva-card>
</minerva-config>
`,solid:`// ThemePaletteEvents.tsx

import { createSignal } from "solid-js";

// labels overrides the option texts; minerva-change is cancelable.
type ThemeToggle = HTMLElement & {
  labels?: Partial<Record<"light" | "dark" | "system", string>>;
  resolvedTheme: "light" | "dark";
};
type PaletteToggle = HTMLElement & {
  labels?: Partial<Record<string, string>>;
};

export default function ThemePaletteEvents() {
  let theme!: ThemeToggle;
  let lock!: HTMLInputElement;
  const [logText, setLogText] = createSignal("");

  const themeLabels = { light: "☀️ Day", dark: "🌙 Night" };
  const paletteLabels = { editorial: "Paper", graphite: "Ink" };

  const onTheme = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string }>).detail;
    if (lock.checked) {
      e.preventDefault();
      setLogText(\`Blocked: \${value} (still \${theme.resolvedTheme})\`);
    } else setLogText(\`Theme: \${value}\`);
  };
  const onPalette = (e: Event) => {
    const { value } = (e as CustomEvent<{ value: string | null }>).detail;
    setLogText(\`Palette: \${value ?? "default"}\`);
  };

  return (
    <minerva-config theme="light">
      <minerva-card variant="outline" padding="medium" style="max-width: 520px">
        <minerva-card-content style="display: grid; gap: 12px">
          <minerva-theme-toggle
            id="theme"
            hide-system
            ref={theme}
            prop:labels={themeLabels}
            on:minerva-change={onTheme}
          ></minerva-theme-toggle>
          <minerva-palette-toggle
            id="palette"
            palettes="editorial graphite"
            prop:labels={paletteLabels}
            on:minerva-change={onPalette}
          ></minerva-palette-toggle>
          <label style="display: flex; gap: 8px; align-items: center">
            <input id="lock" type="checkbox" ref={lock} />
            Lock the theme (cancels minerva-change)
          </label>
          <output id="log">{logText()}</output>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
  );
}
`,html:`<minerva-config theme="light">
  <minerva-card variant="outline" padding="medium" style="max-width: 520px">
    <minerva-card-content style="display: grid; gap: 12px">
      <minerva-theme-toggle id="theme" hide-system></minerva-theme-toggle>
      <minerva-palette-toggle
        id="palette"
        palettes="editorial graphite"
      ></minerva-palette-toggle>
      <label style="display: flex; gap: 8px; align-items: center">
        <input id="lock" type="checkbox" />
        Lock the theme (cancels minerva-change)
      </label>
      <output id="log"></output>
    </minerva-card-content>
  </minerva-card>
</minerva-config>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // labels overrides the option texts; minerva-change is cancelable.
  const theme = document.querySelector("#theme");
  const palette = document.querySelector("#palette");
  const lock = document.querySelector("#lock");
  const log = document.querySelector("#log");
  theme.labels = { light: "☀️ Day", dark: "🌙 Night" };
  palette.labels = { editorial: "Paper", graphite: "Ink" };

  const onTheme = (e) => {
    const { value } = e.detail;
    if (lock.checked) {
      e.preventDefault();
      log.value = \`Blocked: \${value} (still \${theme.resolvedTheme})\`;
    } else log.value = \`Theme: \${value}\`;
  };
  const onPalette = (e) => {
    const { value } = e.detail;
    log.value = \`Palette: \${value ?? "default"}\`;
  };
  theme.addEventListener("minerva-change", onTheme);
  palette.addEventListener("minerva-change", onPalette);
<\/script>
`}})))()}n();export{t as default};