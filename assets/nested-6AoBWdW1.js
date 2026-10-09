import{n as e}from"./rolldown-runtime-B0Z9INg1.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ConfigProviderNested.vue -->

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

// minerva-theme-change reports the resolved mode of a scope, including the
// system preference when theme="system".

type Config = HTMLElement & {
  theme: string;
  resolvedMode: "light" | "dark" | null;
};

const root = ref<HTMLElement>();
const outer = ref<Config>();
const modeText = ref("");

const show = () =>
  (modeText.value = \`Resolved mode: \${outer.value!.resolvedMode}\`);
const onClick = (event: Event) => {
  const id = (event.target as Element).closest("minerva-button")?.id;
  if (id?.startsWith("outer-")) outer.value!.theme = id.slice("outer-".length);
};
const frame = requestAnimationFrame(show);

onBeforeUnmount(() => {
  cancelAnimationFrame(frame);
});
<\/script>

<template>
  <div ref="root" @click="onClick">
    <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
      <minerva-button
        id="outer-light"
        size="small"
        variant="outline"
        color="neutral"
        >Outer: light</minerva-button
      >
      <minerva-button
        id="outer-dark"
        size="small"
        variant="outline"
        color="neutral"
        >Outer: dark</minerva-button
      >
      <minerva-button
        id="outer-system"
        size="small"
        variant="outline"
        color="neutral"
        >Outer: system</minerva-button
      >
      <output id="mode" aria-live="polite">{{ modeText }}</output>
    </div>
    <minerva-config
      id="outer"
      theme="dark"
      ref="outer"
      @minerva-theme-change="show"
    >
      <minerva-card variant="outline" padding="medium" style="margin-top: 12px">
        <minerva-card-header>
          <minerva-card-title>Outer scope</minerva-card-title>
          <minerva-card-description
            >Follows the buttons above.</minerva-card-description
          >
        </minerva-card-header>
        <minerva-card-content>
          <minerva-config theme="light" palette="cool">
            <minerva-card variant="elevated" padding="small">
              <minerva-card-content>
                Nested scope: always light with the cool palette (the closest
                scope wins).
                <minerva-button size="small" style="margin-top: 8px"
                  >Nested button</minerva-button
                >
              </minerva-card-content>
            </minerva-card>
          </minerva-config>
        </minerva-card-content>
      </minerva-card>
    </minerva-config>
  </div>
</template>
`,angular:`// config-provider-nested.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type OnDestroy,
} from "@angular/core";

// minerva-theme-change reports the resolved mode of a scope, including the
// system preference when theme="system".
type Config = HTMLElement & {
  theme: string;
  resolvedMode: "light" | "dark" | null;
};

@Component({
  selector: "app-config-provider-nested",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div #root (click)="onClick($event)">
      <div
        style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center"
      >
        <minerva-button
          id="outer-light"
          size="small"
          variant="outline"
          color="neutral"
          >Outer: light</minerva-button
        >
        <minerva-button
          id="outer-dark"
          size="small"
          variant="outline"
          color="neutral"
          >Outer: dark</minerva-button
        >
        <minerva-button
          id="outer-system"
          size="small"
          variant="outline"
          color="neutral"
          >Outer: system</minerva-button
        >
        <output id="mode" aria-live="polite">{{ modeText }}</output>
      </div>
      <minerva-config
        id="outer"
        theme="dark"
        #outer
        (minerva-theme-change)="show($event)"
      >
        <minerva-card
          variant="outline"
          padding="medium"
          style="margin-top: 12px"
        >
          <minerva-card-header>
            <minerva-card-title>Outer scope</minerva-card-title>
            <minerva-card-description
              >Follows the buttons above.</minerva-card-description
            >
          </minerva-card-header>
          <minerva-card-content>
            <minerva-config theme="light" palette="cool">
              <minerva-card variant="elevated" padding="small">
                <minerva-card-content>
                  Nested scope: always light with the cool palette (the closest
                  scope wins).
                  <minerva-button size="small" style="margin-top: 8px"
                    >Nested button</minerva-button
                  >
                </minerva-card-content>
              </minerva-card>
            </minerva-config>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
    </div>
  \`,
})
export class ConfigProviderNestedComponent implements OnDestroy {
  @ViewChild("root") root!: ElementRef<HTMLElement>;
  @ViewChild("outer") outer!: ElementRef<Config>;
  modeText = "";

  show = () =>
    (this.modeText = \`Resolved mode: \${this.outer.nativeElement.resolvedMode}\`);
  onClick = (event: Event) => {
    const id = (event.target as Element).closest("minerva-button")?.id;
    if (id?.startsWith("outer-"))
      this.outer.nativeElement.theme = id.slice("outer-".length);
  };
  frame = requestAnimationFrame(this.show);

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frame);
  }
}
`,svelte:`<!-- ConfigProviderNested.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // minerva-theme-change reports the resolved mode of a scope, including the
  // system preference when theme="system".

  type Config = HTMLElement & {
    theme: string;
    resolvedMode: "light" | "dark" | null;
  };

  let root: HTMLElement;
  let outer: Config;
  let modeText = $state("");

  const show = () => (modeText = \`Resolved mode: \${outer.resolvedMode}\`);
  const onClick = (event: Event) => {
    const id = (event.target as Element).closest("minerva-button")?.id;
    if (id?.startsWith("outer-")) outer.theme = id.slice("outer-".length);
  };
  const frame = requestAnimationFrame(show);

  onMount(() => {
    return () => {
      cancelAnimationFrame(frame);
    };
  });
<\/script>

<div
  bind:this={root}
  onclick={onClick}
>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
    <minerva-button
      id="outer-light"
      size="small"
      variant="outline"
      color="neutral"
      >Outer: light</minerva-button>
    <minerva-button id="outer-dark" size="small" variant="outline" color="neutral"
      >Outer: dark</minerva-button>
    <minerva-button
      id="outer-system"
      size="small"
      variant="outline"
      color="neutral"
      >Outer: system</minerva-button>
    <output id="mode" aria-live="polite">{modeText}</output>
  </div>
  <minerva-config
    id="outer"
    theme="dark"
    bind:this={outer}
    onminerva-theme-change={show}
  >
    <minerva-card variant="outline" padding="medium" style="margin-top: 12px">
      <minerva-card-header>
        <minerva-card-title>Outer scope</minerva-card-title>
        <minerva-card-description
          >Follows the buttons above.</minerva-card-description>
      </minerva-card-header>
      <minerva-card-content>
        <minerva-config theme="light" palette="cool">
          <minerva-card variant="elevated" padding="small">
            <minerva-card-content>
              Nested scope: always light with the cool palette (the closest scope
              wins).
              <minerva-button size="small" style="margin-top: 8px"
                >Nested button</minerva-button>
            </minerva-card-content>
          </minerva-card>
        </minerva-config>
      </minerva-card-content>
    </minerva-card>
  </minerva-config>
</div>
`,solid:`// ConfigProviderNested.tsx

import { createSignal, onCleanup } from "solid-js";

// minerva-theme-change reports the resolved mode of a scope, including the
// system preference when theme="system".
type Config = HTMLElement & {
  theme: string;
  resolvedMode: "light" | "dark" | null;
};

export default function ConfigProviderNested() {
  let root!: HTMLElement;
  let outer!: Config;
  const [modeText, setModeText] = createSignal("");

  const show = () => setModeText(\`Resolved mode: \${outer.resolvedMode}\`);
  const onClick = (event: Event) => {
    const id = (event.target as Element).closest("minerva-button")?.id;
    if (id?.startsWith("outer-")) outer.theme = id.slice("outer-".length);
  };
  const frame = requestAnimationFrame(show);

  onCleanup(() => {
    cancelAnimationFrame(frame);
  });

  return (
    <div ref={root} on:click={onClick}>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
        <minerva-button
          id="outer-light"
          size="small"
          variant="outline"
          color="neutral"
        >
          Outer: light
        </minerva-button>
        <minerva-button
          id="outer-dark"
          size="small"
          variant="outline"
          color="neutral"
        >
          Outer: dark
        </minerva-button>
        <minerva-button
          id="outer-system"
          size="small"
          variant="outline"
          color="neutral"
        >
          Outer: system
        </minerva-button>
        <output id="mode" aria-live="polite">
          {modeText()}
        </output>
      </div>
      <minerva-config
        id="outer"
        theme="dark"
        ref={outer}
        on:minerva-theme-change={show}
      >
        <minerva-card
          variant="outline"
          padding="medium"
          style="margin-top: 12px"
        >
          <minerva-card-header>
            <minerva-card-title>Outer scope</minerva-card-title>
            <minerva-card-description>
              Follows the buttons above.
            </minerva-card-description>
          </minerva-card-header>
          <minerva-card-content>
            <minerva-config theme="light" palette="cool">
              <minerva-card variant="elevated" padding="small">
                <minerva-card-content>
                  Nested scope: always light with the cool palette (the closest
                  scope wins).
                  <minerva-button size="small" style="margin-top: 8px">
                    Nested button
                  </minerva-button>
                </minerva-card-content>
              </minerva-card>
            </minerva-config>
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
    </div>
  );
}
`,html:`<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center">
  <minerva-button
    id="outer-light"
    size="small"
    variant="outline"
    color="neutral"
    >Outer: light</minerva-button
  >
  <minerva-button id="outer-dark" size="small" variant="outline" color="neutral"
    >Outer: dark</minerva-button
  >
  <minerva-button
    id="outer-system"
    size="small"
    variant="outline"
    color="neutral"
    >Outer: system</minerva-button
  >
  <output id="mode" aria-live="polite"></output>
</div>
<minerva-config id="outer" theme="dark">
  <minerva-card variant="outline" padding="medium" style="margin-top: 12px">
    <minerva-card-header>
      <minerva-card-title>Outer scope</minerva-card-title>
      <minerva-card-description
        >Follows the buttons above.</minerva-card-description
      >
    </minerva-card-header>
    <minerva-card-content>
      <minerva-config theme="light" palette="cool">
        <minerva-card variant="elevated" padding="small">
          <minerva-card-content>
            Nested scope: always light with the cool palette (the closest scope
            wins).
            <minerva-button size="small" style="margin-top: 8px"
              >Nested button</minerva-button
            >
          </minerva-card-content>
        </minerva-card>
      </minerva-config>
    </minerva-card-content>
  </minerva-card>
</minerva-config>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // minerva-theme-change reports the resolved mode of a scope, including the
  // system preference when theme="system".
  const outer = document.querySelector("#outer");
  const mode = document.querySelector("#mode");
  const show = () => (mode.value = \`Resolved mode: \${outer.resolvedMode}\`);
  const onClick = (event) => {
    const id = event.target.closest("minerva-button")?.id;
    if (id?.startsWith("outer-")) outer.theme = id.slice("outer-".length);
  };
  document.addEventListener("click", onClick);
  outer.addEventListener("minerva-theme-change", show);
  const frame = requestAnimationFrame(show);
<\/script>
`}})))()}n();export{t as default};