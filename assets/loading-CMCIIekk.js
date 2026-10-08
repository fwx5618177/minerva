import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- SkeletonLoading.vue -->

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

// The skeleton is a busy region until \`loaded\` is set; then it renders its
// slotted content instead.

const post = ref<HTMLElement & { loaded: boolean }>();

let timer: ReturnType<typeof setTimeout> | undefined;
const load = () => {
  post.value!.loaded = false;
  clearTimeout(timer);
  timer = setTimeout(() => (post.value!.loaded = true), 1500);
};

onMounted(() => {
  load();
});

onBeforeUnmount(() => {
  clearTimeout(timer);
});
<\/script>

<template>
  <div style="display: grid; gap: 12px; max-width: 420px">
    <div>
      <minerva-button id="reload" size="small" variant="outline" @click="load"
        >Reload</minerva-button
      >
    </div>
    <minerva-skeleton id="post" avatar heading paragraph ref="post">
      <article style="display: flex; gap: 12px">
        <minerva-avatar name="Ada Lovelace"></minerva-avatar>
        <div>
          <strong>Ada Lovelace</strong>
          <p style="margin: 4px 0 0">
            The Analytical Engine weaves algebraic patterns just as the Jacquard
            loom weaves flowers and leaves.
          </p>
        </div>
      </article>
    </minerva-skeleton>
  </div>
</template>
`,angular:`// skeleton-loading.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type AfterViewInit,
  type OnDestroy,
} from "@angular/core";

// The skeleton is a busy region until \`loaded\` is set; then it renders its
// slotted content instead.

@Component({
  selector: "app-skeleton-loading",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <div style="display: grid; gap: 12px; max-width: 420px">
      <div>
        <minerva-button
          id="reload"
          size="small"
          variant="outline"
          (click)="load($event)"
          >Reload</minerva-button
        >
      </div>
      <minerva-skeleton id="post" avatar heading paragraph #post>
        <article style="display: flex; gap: 12px">
          <minerva-avatar name="Ada Lovelace"></minerva-avatar>
          <div>
            <strong>Ada Lovelace</strong>
            <p style="margin: 4px 0 0">
              The Analytical Engine weaves algebraic patterns just as the
              Jacquard loom weaves flowers and leaves.
            </p>
          </div>
        </article>
      </minerva-skeleton>
    </div>
  \`,
})
export class SkeletonLoadingComponent implements AfterViewInit, OnDestroy {
  @ViewChild("post") post!: ElementRef<HTMLElement & { loaded: boolean }>;

  timer: ReturnType<typeof setTimeout> | undefined;
  load = () => {
    this.post.nativeElement.loaded = false;
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => (this.post.nativeElement.loaded = true),
      1500,
    );
  };

  ngAfterViewInit(): void {
    this.load();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
`,svelte:`<!-- SkeletonLoading.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // The skeleton is a busy region until \`loaded\` is set; then it renders its
  // slotted content instead.

  let post: HTMLElement & { loaded: boolean };

  let timer: ReturnType<typeof setTimeout> | undefined;
  const load = () => {
    post.loaded = false;
    clearTimeout(timer);
    timer = setTimeout(() => (post.loaded = true), 1500);
  };

  onMount(() => {
    load();
    return () => {
      clearTimeout(timer);
    };
  });
<\/script>

<div style="display: grid; gap: 12px; max-width: 420px">
  <div>
    <minerva-button
      id="reload"
      size="small"
      variant="outline"
      onclick={load}
    >Reload</minerva-button>
  </div>
  <minerva-skeleton id="post" avatar heading paragraph bind:this={post}>
    <article style="display: flex; gap: 12px">
      <minerva-avatar name="Ada Lovelace"></minerva-avatar>
      <div>
        <strong>Ada Lovelace</strong>
        <p style="margin: 4px 0 0">
          The Analytical Engine weaves algebraic patterns just as the Jacquard
          loom weaves flowers and leaves.
        </p>
      </div>
    </article>
  </minerva-skeleton>
</div>
`,solid:`// SkeletonLoading.tsx

import { onCleanup, onMount } from "solid-js";

// The skeleton is a busy region until \`loaded\` is set; then it renders its
// slotted content instead.

export default function SkeletonLoading() {
  let post!: HTMLElement & { loaded: boolean };

  let timer: ReturnType<typeof setTimeout> | undefined;
  const load = () => {
    post.loaded = false;
    clearTimeout(timer);
    timer = setTimeout(() => (post.loaded = true), 1500);
  };

  onMount(() => {
    load();
  });

  onCleanup(() => {
    clearTimeout(timer);
  });

  return (
    <div style="display: grid; gap: 12px; max-width: 420px">
      <div>
        <minerva-button
          id="reload"
          size="small"
          variant="outline"
          on:click={load}
        >
          Reload
        </minerva-button>
      </div>
      <minerva-skeleton id="post" avatar heading paragraph ref={post}>
        <article style="display: flex; gap: 12px">
          <minerva-avatar name="Ada Lovelace"></minerva-avatar>
          <div>
            <strong>Ada Lovelace</strong>
            <p style="margin: 4px 0 0">
              The Analytical Engine weaves algebraic patterns just as the
              Jacquard loom weaves flowers and leaves.
            </p>
          </div>
        </article>
      </minerva-skeleton>
    </div>
  );
}
`,html:`<div style="display: grid; gap: 12px; max-width: 420px">
  <div>
    <minerva-button id="reload" size="small" variant="outline"
      >Reload</minerva-button
    >
  </div>
  <minerva-skeleton id="post" avatar heading paragraph>
    <article style="display: flex; gap: 12px">
      <minerva-avatar name="Ada Lovelace"></minerva-avatar>
      <div>
        <strong>Ada Lovelace</strong>
        <p style="margin: 4px 0 0">
          The Analytical Engine weaves algebraic patterns just as the Jacquard
          loom weaves flowers and leaves.
        </p>
      </div>
    </article>
  </minerva-skeleton>
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // The skeleton is a busy region until \`loaded\` is set; then it renders its
  // slotted content instead.
  const post = document.querySelector("#post");
  const reload = document.querySelector("#reload");
  let timer;
  const load = () => {
    post.loaded = false;
    clearTimeout(timer);
    timer = setTimeout(() => (post.loaded = true), 1500);
  };
  load();
  reload.addEventListener("click", load);
<\/script>
`}})))()}n();export{t as default};