import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ConfirmScoped.vue -->

<script setup lang="ts">
import { ref } from "vue";

// confirm({ host }) (or confirmFor(host)) is lib-core's useConfirm(): the
// dialog renders inside the host's <minerva-config> scope (dark, tech,
// Chinese labels), queued by the closest <minerva-confirm-provider>.
// confirm() without a host uses the provider's own scope (here the root
// theme and language), like lib-core's confirm().
// In an app: import { confirm, confirmFor } from
// "@minerva/lib-web-components/confirm".

const scoped = ref<HTMLElement>();
const answerText = ref("—");

const onScoped = async () => {
  const { confirm } = await import("@minerva/lib-web-components");
  const ok = await confirm({
    title: "Delete this chapter? (dark, tech, 中文)",
    color: "danger",
    host: scoped.value!,
  });
  answerText.value = String(ok);
};
const onPlain = async () => {
  const { confirm } = await import("@minerva/lib-web-components");
  answerText.value = String(
    await confirm({ title: "Retry the upload? (root scope)" }),
  );
};
<\/script>

<template>
  <minerva-confirm-provider>
    <minerva-config
      theme="dark"
      palette="tech"
      locale="zh"
      style="display: block"
    >
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          padding: 12px;
          border-radius: 8px;
          background: var(--surface-color);
          color: var(--text-color);
        "
      >
        <minerva-button
          id="scoped-delete"
          color="danger"
          ref="scoped"
          @click="onScoped"
          >confirm({ host })</minerva-button
        >
        <minerva-button
          id="scoped-root"
          color="neutral"
          variant="outline"
          @click="onPlain"
          >confirm()</minerva-button
        >
        <output id="scoped-answer">{{ answerText }}</output>
      </div>
    </minerva-config>
  </minerva-confirm-provider>
</template>
`,angular:`// confirm-scoped.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// confirm({ host }) (or confirmFor(host)) is lib-core's useConfirm(): the
// dialog renders inside the host's <minerva-config> scope (dark, tech,
// Chinese labels), queued by the closest <minerva-confirm-provider>.
// confirm() without a host uses the provider's own scope (here the root
// theme and language), like lib-core's confirm().
// In an app: import { confirm, confirmFor } from
// "@minerva/lib-web-components/confirm".

@Component({
  selector: "app-confirm-scoped",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-confirm-provider>
      <minerva-config
        theme="dark"
        palette="tech"
        locale="zh"
        style="display: block"
      >
        <div
          style="
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            padding: 12px;
            border-radius: 8px;
            background: var(--surface-color);
            color: var(--text-color);
          "
        >
          <minerva-button
            id="scoped-delete"
            color="danger"
            #scoped
            (click)="onScoped($event)"
            >confirm(&#123; host &#125;)</minerva-button
          >
          <minerva-button
            id="scoped-root"
            color="neutral"
            variant="outline"
            (click)="onPlain($event)"
            >confirm()</minerva-button
          >
          <output id="scoped-answer">{{ answerText }}</output>
        </div>
      </minerva-config>
    </minerva-confirm-provider>
  \`,
})
export class ConfirmScopedComponent {
  @ViewChild("scoped") scoped!: ElementRef<HTMLElement>;
  answerText = "—";

  onScoped = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    const ok = await confirm({
      title: "Delete this chapter? (dark, tech, 中文)",
      color: "danger",
      host: this.scoped.nativeElement,
    });
    this.answerText = String(ok);
  };
  onPlain = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    this.answerText = String(
      await confirm({ title: "Retry the upload? (root scope)" }),
    );
  };
}
`,svelte:`<!-- ConfirmScoped.svelte -->

<script lang="ts">
  // confirm({ host }) (or confirmFor(host)) is lib-core's useConfirm(): the
  // dialog renders inside the host's <minerva-config> scope (dark, tech,
  // Chinese labels), queued by the closest <minerva-confirm-provider>.
  // confirm() without a host uses the provider's own scope (here the root
  // theme and language), like lib-core's confirm().
  // In an app: import { confirm, confirmFor } from
  // "@minerva/lib-web-components/confirm".

  let scoped: HTMLElement;
  let answerText = $state("—");

  const onScoped = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    const ok = await confirm({
      title: "Delete this chapter? (dark, tech, 中文)",
      color: "danger",
      host: scoped,
    });
    answerText = String(ok);
  };
  const onPlain = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    answerText = String(
      await confirm({ title: "Retry the upload? (root scope)" }),
    );
  };
<\/script>

<minerva-confirm-provider>
  <minerva-config
    theme="dark"
    palette="tech"
    locale="zh"
    style="display: block"
  >
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 12px;
        border-radius: 8px;
        background: var(--surface-color);
        color: var(--text-color);
      "
    >
      <minerva-button
        id="scoped-delete"
        color="danger"
        bind:this={scoped}
        onclick={onScoped}
      >confirm(&#123; host &#125;)</minerva-button>
      <minerva-button
        id="scoped-root"
        color="neutral"
        variant="outline"
        onclick={onPlain}
      >confirm()</minerva-button>
      <output id="scoped-answer">{answerText}</output>
    </div>
  </minerva-config>
</minerva-confirm-provider>
`,solid:`// ConfirmScoped.tsx

import { createSignal } from "solid-js";

// confirm({ host }) (or confirmFor(host)) is lib-core's useConfirm(): the
// dialog renders inside the host's <minerva-config> scope (dark, tech,
// Chinese labels), queued by the closest <minerva-confirm-provider>.
// confirm() without a host uses the provider's own scope (here the root
// theme and language), like lib-core's confirm().
// In an app: import { confirm, confirmFor } from
// "@minerva/lib-web-components/confirm".

export default function ConfirmScoped() {
  let scoped!: HTMLElement;
  const [answerText, setAnswerText] = createSignal("—");

  const onScoped = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    const ok = await confirm({
      title: "Delete this chapter? (dark, tech, 中文)",
      color: "danger",
      host: scoped,
    });
    setAnswerText(String(ok));
  };
  const onPlain = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    setAnswerText(
      String(await confirm({ title: "Retry the upload? (root scope)" })),
    );
  };

  return (
    <minerva-confirm-provider>
      <minerva-config
        theme="dark"
        palette="tech"
        locale="zh"
        style="display: block"
      >
        <div
          style="
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            padding: 12px;
            border-radius: 8px;
            background: var(--surface-color);
            color: var(--text-color);
          "
        >
          <minerva-button
            id="scoped-delete"
            color="danger"
            ref={scoped}
            on:click={onScoped}
          >
            confirm(&#123; host &#125;)
          </minerva-button>
          <minerva-button
            id="scoped-root"
            color="neutral"
            variant="outline"
            on:click={onPlain}
          >
            confirm()
          </minerva-button>
          <output id="scoped-answer">{answerText()}</output>
        </div>
      </minerva-config>
    </minerva-confirm-provider>
  );
}
`,html:`<minerva-confirm-provider>
  <minerva-config
    theme="dark"
    palette="tech"
    locale="zh"
    style="display: block"
  >
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 12px;
        border-radius: 8px;
        background: var(--surface-color);
        color: var(--text-color);
      "
    >
      <minerva-button id="scoped-delete" color="danger"
        >confirm({ host })</minerva-button
      >
      <minerva-button id="scoped-root" color="neutral" variant="outline"
        >confirm()</minerva-button
      >
      <output id="scoped-answer">—</output>
    </div>
  </minerva-config>
</minerva-confirm-provider>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // confirm({ host }) (or confirmFor(host)) is lib-core's useConfirm(): the
  // dialog renders inside the host's <minerva-config> scope (dark, tech,
  // Chinese labels), queued by the closest <minerva-confirm-provider>.
  // confirm() without a host uses the provider's own scope (here the root
  // theme and language), like lib-core's confirm().
  // In an app: import { confirm, confirmFor } from
  // "@minerva/lib-web-components/confirm".
  const scoped = document.querySelector("#scoped-delete");
  const plain = document.querySelector("#scoped-root");
  const answer = document.querySelector("#scoped-answer");
  const onScoped = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    const ok = await confirm({
      title: "Delete this chapter? (dark, tech, 中文)",
      color: "danger",
      host: scoped,
    });
    answer.value = String(ok);
  };
  const onPlain = async () => {
    const { confirm } = await import("@minerva/lib-web-components");
    answer.value = String(
      await confirm({ title: "Retry the upload? (root scope)" }),
    );
  };
  scoped.addEventListener("click", onScoped);
  plain.addEventListener("click", onPlain);
<\/script>
`}})))()}n();export{t as default};