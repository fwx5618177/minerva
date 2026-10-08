import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ToastLoading.vue -->

<script setup lang="ts">
import { ref } from "vue";

// toast.promise() follows a promise; loading() + update() do it by hand.
// Loading toasts stay open until updated or dismissed.

type Id = string | number;
type ToastApi = {
  loading: (title: string) => Id;
  update: (
    id: Id,
    options: { loading?: boolean; color?: string; title?: string },
  ) => void;
  promise: <T>(
    promise: Promise<T>,
    messages: { loading: string; success: string; error: string },
  ) => Promise<T>;
  dismiss: (id?: Id) => void;
};
type Region = HTMLElement & { toast: ToastApi };

const wait = (ms: number, fail = false) =>
  new Promise<void>((resolve, reject) =>
    setTimeout(() => (fail ? reject(new Error("failed")) : resolve()), ms),
  );

const loadingRegion = ref<Region>();

const onDeploy = () =>
  loadingRegion
    .value!.toast.promise(wait(2000, Math.random() < 0.3), {
      loading: "Deploying…",
      success: "Deployed to production",
      error: "Deployment failed",
    })
    .catch(() => {});
const onSync = async () => {
  const id = loadingRegion.value!.toast.loading("Syncing 3 files…");
  await wait(1500);
  loadingRegion.value!.toast.update(id, {
    loading: false,
    color: "success",
    title: "Synced",
  });
};
const onDismiss = () => loadingRegion.value!.toast.dismiss();
<\/script>

<template>
  <minerva-toast-region
    id="loading-region"
    ref="loadingRegion"
  ></minerva-toast-region>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <minerva-button id="deploy" @click="onDeploy"
      >Deploy (promise)</minerva-button
    >
    <minerva-button id="sync" variant="outline" @click="onSync"
      >Sync (update)</minerva-button
    >
    <minerva-button
      id="dismiss-all"
      variant="ghost"
      color="neutral"
      @click="onDismiss"
      >Dismiss all</minerva-button
    >
  </div>
</template>
`,angular:`// toast-loading.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// toast.promise() follows a promise; loading() + update() do it by hand.
// Loading toasts stay open until updated or dismissed.
type Id = string | number;
type ToastApi = {
  loading: (title: string) => Id;
  update: (
    id: Id,
    options: { loading?: boolean; color?: string; title?: string },
  ) => void;
  promise: <T>(
    promise: Promise<T>,
    messages: { loading: string; success: string; error: string },
  ) => Promise<T>;
  dismiss: (id?: Id) => void;
};
type Region = HTMLElement & { toast: ToastApi };

const wait = (ms: number, fail = false) =>
  new Promise<void>((resolve, reject) =>
    setTimeout(() => (fail ? reject(new Error("failed")) : resolve()), ms),
  );

@Component({
  selector: "app-toast-loading",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-toast-region
      id="loading-region"
      #loadingRegion
    ></minerva-toast-region>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <minerva-button id="deploy" (click)="onDeploy($event)"
        >Deploy (promise)</minerva-button
      >
      <minerva-button id="sync" variant="outline" (click)="onSync($event)"
        >Sync (update)</minerva-button
      >
      <minerva-button
        id="dismiss-all"
        variant="ghost"
        color="neutral"
        (click)="onDismiss($event)"
        >Dismiss all</minerva-button
      >
    </div>
  \`,
})
export class ToastLoadingComponent {
  @ViewChild("loadingRegion") loadingRegion!: ElementRef<Region>;

  onDeploy = () =>
    this.loadingRegion.nativeElement.toast
      .promise(wait(2000, Math.random() < 0.3), {
        loading: "Deploying…",
        success: "Deployed to production",
        error: "Deployment failed",
      })
      .catch(() => {});
  onSync = async () => {
    const id =
      this.loadingRegion.nativeElement.toast.loading("Syncing 3 files…");
    await wait(1500);
    this.loadingRegion.nativeElement.toast.update(id, {
      loading: false,
      color: "success",
      title: "Synced",
    });
  };
  onDismiss = () => this.loadingRegion.nativeElement.toast.dismiss();
}
`,svelte:`<!-- ToastLoading.svelte -->

<script lang="ts">
  // toast.promise() follows a promise; loading() + update() do it by hand.
  // Loading toasts stay open until updated or dismissed.

  type Id = string | number;
  type ToastApi = {
    loading: (title: string) => Id;
    update: (
      id: Id,
      options: { loading?: boolean; color?: string; title?: string },
    ) => void;
    promise: <T>(
      promise: Promise<T>,
      messages: { loading: string; success: string; error: string },
    ) => Promise<T>;
    dismiss: (id?: Id) => void;
  };
  type Region = HTMLElement & { toast: ToastApi };

  const wait = (ms: number, fail = false) =>
    new Promise<void>((resolve, reject) =>
      setTimeout(() => (fail ? reject(new Error("failed")) : resolve()), ms),
    );

  let loadingRegion: Region;

  const onDeploy = () =>
    loadingRegion.toast
      .promise(wait(2000, Math.random() < 0.3), {
        loading: "Deploying…",
        success: "Deployed to production",
        error: "Deployment failed",
      })
      .catch(() => {});
  const onSync = async () => {
    const id = loadingRegion.toast.loading("Syncing 3 files…");
    await wait(1500);
    loadingRegion.toast.update(id, {
      loading: false,
      color: "success",
      title: "Synced",
    });
  };
  const onDismiss = () => loadingRegion.toast.dismiss();
<\/script>

<minerva-toast-region id="loading-region" bind:this={loadingRegion}></minerva-toast-region>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
  <minerva-button id="deploy" onclick={onDeploy}>Deploy (promise)</minerva-button>
  <minerva-button id="sync" variant="outline" onclick={onSync}>Sync (update)</minerva-button>
  <minerva-button
    id="dismiss-all"
    variant="ghost"
    color="neutral"
    onclick={onDismiss}
  >Dismiss all</minerva-button>
</div>
`,solid:`// ToastLoading.tsx

// toast.promise() follows a promise; loading() + update() do it by hand.
// Loading toasts stay open until updated or dismissed.
type Id = string | number;
type ToastApi = {
  loading: (title: string) => Id;
  update: (
    id: Id,
    options: { loading?: boolean; color?: string; title?: string },
  ) => void;
  promise: <T>(
    promise: Promise<T>,
    messages: { loading: string; success: string; error: string },
  ) => Promise<T>;
  dismiss: (id?: Id) => void;
};
type Region = HTMLElement & { toast: ToastApi };

const wait = (ms: number, fail = false) =>
  new Promise<void>((resolve, reject) =>
    setTimeout(() => (fail ? reject(new Error("failed")) : resolve()), ms),
  );

export default function ToastLoading() {
  let loadingRegion!: Region;

  const onDeploy = () =>
    loadingRegion.toast
      .promise(wait(2000, Math.random() < 0.3), {
        loading: "Deploying…",
        success: "Deployed to production",
        error: "Deployment failed",
      })
      .catch(() => {});
  const onSync = async () => {
    const id = loadingRegion.toast.loading("Syncing 3 files…");
    await wait(1500);
    loadingRegion.toast.update(id, {
      loading: false,
      color: "success",
      title: "Synced",
    });
  };
  const onDismiss = () => loadingRegion.toast.dismiss();

  return (
    <>
      <minerva-toast-region
        id="loading-region"
        ref={loadingRegion}
      ></minerva-toast-region>
      <div style="display: flex; flex-wrap: wrap; gap: 8px">
        <minerva-button id="deploy" on:click={onDeploy}>
          Deploy (promise)
        </minerva-button>
        <minerva-button id="sync" variant="outline" on:click={onSync}>
          Sync (update)
        </minerva-button>
        <minerva-button
          id="dismiss-all"
          variant="ghost"
          color="neutral"
          on:click={onDismiss}
        >
          Dismiss all
        </minerva-button>
      </div>
    </>
  );
}
`,html:`<minerva-toast-region id="loading-region"></minerva-toast-region>
<div style="display: flex; flex-wrap: wrap; gap: 8px">
  <minerva-button id="deploy">Deploy (promise)</minerva-button>
  <minerva-button id="sync" variant="outline">Sync (update)</minerva-button>
  <minerva-button id="dismiss-all" variant="ghost" color="neutral"
    >Dismiss all</minerva-button
  >
</div>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "@minerva/lib-web-components";

  // toast.promise() follows a promise; loading() + update() do it by hand.
  // Loading toasts stay open until updated or dismissed.
  const wait = (ms, fail = false) =>
    new Promise((resolve, reject) =>
      setTimeout(() => (fail ? reject(new Error("failed")) : resolve()), ms),
    );

  const { toast } = document.querySelector("#loading-region");
  const deploy = document.querySelector("#deploy");
  const sync = document.querySelector("#sync");
  const dismissAll = document.querySelector("#dismiss-all");
  const onDeploy = () =>
    toast
      .promise(wait(2000, Math.random() < 0.3), {
        loading: "Deploying…",
        success: "Deployed to production",
        error: "Deployment failed",
      })
      .catch(() => {});
  const onSync = async () => {
    const id = toast.loading("Syncing 3 files…");
    await wait(1500);
    toast.update(id, { loading: false, color: "success", title: "Synced" });
  };
  const onDismiss = () => toast.dismiss();
  deploy.addEventListener("click", onDeploy);
  sync.addEventListener("click", onSync);
  dismissAll.addEventListener("click", onDismiss);
<\/script>
`}})))()}n();export{t as default};