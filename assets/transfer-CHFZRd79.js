import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- UploadTransfer.vue -->

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

// Canceling \`minerva-files-selected\` lets the page own \`items\`: each file is
// listed as "uploading", then "done" (every second file fails once, to show
// the retry button and \`minerva-retry\`).

type Item = {
  id: string;
  name: string;
  status: "uploading" | "done" | "error";
  error?: string;
  file?: File;
};
type Upload = HTMLElement & { items: Item[] };

const upload = ref<Upload>();

const timers = new Set<ReturnType<typeof setTimeout>>();
let count = 0;
const update = (id: string, patch: Partial<Item>) => {
  upload.value!.items = upload.value!.items.map((item) =>
    item.id === id ? { ...item, ...patch } : item,
  );
};
const send = (id: string, fail: boolean) => {
  update(id, { status: "uploading", error: undefined });
  const timer = setTimeout(() => {
    timers.delete(timer);
    update(
      id,
      fail ? { status: "error", error: "Network error" } : { status: "done" },
    );
  }, 1500);
  timers.add(timer);
};
const onSelected = (event: Event) => {
  event.preventDefault();
  const { files } = (event as CustomEvent<{ files: File[] }>).detail;
  for (const file of files) {
    const id = \`doc-\${++count}\`;
    upload.value!.items = [
      ...upload.value!.items,
      { id, name: file.name, status: "uploading", file },
    ];
    send(id, count % 2 === 0);
  }
};
const onRetry = (event: Event) => {
  send((event as CustomEvent<{ item: Item }>).detail.item.id, false);
};

onBeforeUnmount(() => {
  timers.forEach(clearTimeout);
});
<\/script>

<template>
  <minerva-upload
    id="up-transfer"
    label="Documents"
    multiple
    removable
    retryable
    style="max-width: 480px"
    ref="upload"
    @minerva-files-selected="onSelected"
    @minerva-retry="onRetry"
  ></minerva-upload>
</template>
`,angular:`// upload-transfer.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
  type OnDestroy,
} from "@angular/core";

// Canceling \`minerva-files-selected\` lets the page own \`items\`: each file is
// listed as "uploading", then "done" (every second file fails once, to show
// the retry button and \`minerva-retry\`).
type Item = {
  id: string;
  name: string;
  status: "uploading" | "done" | "error";
  error?: string;
  file?: File;
};
type Upload = HTMLElement & { items: Item[] };

@Component({
  selector: "app-upload-transfer",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-upload
      id="up-transfer"
      label="Documents"
      multiple
      removable
      retryable
      style="max-width: 480px"
      #upload
      (minerva-files-selected)="onSelected($event)"
      (minerva-retry)="onRetry($event)"
    ></minerva-upload>
  \`,
})
export class UploadTransferComponent implements OnDestroy {
  @ViewChild("upload") upload!: ElementRef<Upload>;

  timers = new Set<ReturnType<typeof setTimeout>>();
  count = 0;
  update = (id: string, patch: Partial<Item>) => {
    this.upload.nativeElement.items = this.upload.nativeElement.items.map(
      (item) => (item.id === id ? { ...item, ...patch } : item),
    );
  };
  send = (id: string, fail: boolean) => {
    this.update(id, { status: "uploading", error: undefined });
    const timer = setTimeout(() => {
      this.timers.delete(timer);
      this.update(
        id,
        fail ? { status: "error", error: "Network error" } : { status: "done" },
      );
    }, 1500);
    this.timers.add(timer);
  };
  onSelected = (event: Event) => {
    event.preventDefault();
    const { files } = (event as CustomEvent<{ files: File[] }>).detail;
    for (const file of files) {
      const id = \`doc-\${++this.count}\`;
      this.upload.nativeElement.items = [
        ...this.upload.nativeElement.items,
        { id, name: file.name, status: "uploading", file },
      ];
      this.send(id, this.count % 2 === 0);
    }
  };
  onRetry = (event: Event) => {
    this.send((event as CustomEvent<{ item: Item }>).detail.item.id, false);
  };

  ngOnDestroy(): void {
    this.timers.forEach(clearTimeout);
  }
}
`,svelte:`<!-- UploadTransfer.svelte -->

<script lang="ts">
  import { onMount } from "svelte";

  // Canceling \`minerva-files-selected\` lets the page own \`items\`: each file is
  // listed as "uploading", then "done" (every second file fails once, to show
  // the retry button and \`minerva-retry\`).

  type Item = {
    id: string;
    name: string;
    status: "uploading" | "done" | "error";
    error?: string;
    file?: File;
  };
  type Upload = HTMLElement & { items: Item[] };

  let upload: Upload;

  const timers = new Set<ReturnType<typeof setTimeout>>();
  let count = 0;
  const update = (id: string, patch: Partial<Item>) => {
    upload.items = upload.items.map((item) =>
      item.id === id ? { ...item, ...patch } : item,
    );
  };
  const send = (id: string, fail: boolean) => {
    update(id, { status: "uploading", error: undefined });
    const timer = setTimeout(() => {
      timers.delete(timer);
      update(
        id,
        fail ? { status: "error", error: "Network error" } : { status: "done" },
      );
    }, 1500);
    timers.add(timer);
  };
  const onSelected = (event: Event) => {
    event.preventDefault();
    const { files } = (event as CustomEvent<{ files: File[] }>).detail;
    for (const file of files) {
      const id = \`doc-\${++count}\`;
      upload.items = [
        ...upload.items,
        { id, name: file.name, status: "uploading", file },
      ];
      send(id, count % 2 === 0);
    }
  };
  const onRetry = (event: Event) => {
    send((event as CustomEvent<{ item: Item }>).detail.item.id, false);
  };

  onMount(() => {
    return () => {
      timers.forEach(clearTimeout);
    };
  });
<\/script>

<minerva-upload
  id="up-transfer"
  label="Documents"
  multiple
  removable
  retryable
  style="max-width: 480px"
  bind:this={upload}
  onminerva-files-selected={onSelected}
  onminerva-retry={onRetry}
></minerva-upload>
`,solid:`// UploadTransfer.tsx

import { onCleanup } from "solid-js";

// Canceling \`minerva-files-selected\` lets the page own \`items\`: each file is
// listed as "uploading", then "done" (every second file fails once, to show
// the retry button and \`minerva-retry\`).
type Item = {
  id: string;
  name: string;
  status: "uploading" | "done" | "error";
  error?: string;
  file?: File;
};
type Upload = HTMLElement & { items: Item[] };

export default function UploadTransfer() {
  let upload!: Upload;

  const timers = new Set<ReturnType<typeof setTimeout>>();
  let count = 0;
  const update = (id: string, patch: Partial<Item>) => {
    upload.items = upload.items.map((item) =>
      item.id === id ? { ...item, ...patch } : item,
    );
  };
  const send = (id: string, fail: boolean) => {
    update(id, { status: "uploading", error: undefined });
    const timer = setTimeout(() => {
      timers.delete(timer);
      update(
        id,
        fail ? { status: "error", error: "Network error" } : { status: "done" },
      );
    }, 1500);
    timers.add(timer);
  };
  const onSelected = (event: Event) => {
    event.preventDefault();
    const { files } = (event as CustomEvent<{ files: File[] }>).detail;
    for (const file of files) {
      const id = \`doc-\${++count}\`;
      upload.items = [
        ...upload.items,
        { id, name: file.name, status: "uploading", file },
      ];
      send(id, count % 2 === 0);
    }
  };
  const onRetry = (event: Event) => {
    send((event as CustomEvent<{ item: Item }>).detail.item.id, false);
  };

  onCleanup(() => {
    timers.forEach(clearTimeout);
  });

  return (
    <minerva-upload
      id="up-transfer"
      label="Documents"
      multiple
      removable
      retryable
      style="max-width: 480px"
      ref={upload}
      on:minerva-files-selected={onSelected}
      on:minerva-retry={onRetry}
    ></minerva-upload>
  );
}
`,html:`<minerva-upload
  id="up-transfer"
  label="Documents"
  multiple
  removable
  retryable
  style="max-width: 480px"
></minerva-upload>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // Canceling \`minerva-files-selected\` lets the page own \`items\`: each file is
  // listed as "uploading", then "done" (every second file fails once, to show
  // the retry button and \`minerva-retry\`).
  const upload = document.querySelector("#up-transfer");
  const timers = new Set();
  let count = 0;
  const update = (id, patch) => {
    upload.items = upload.items.map((item) =>
      item.id === id ? { ...item, ...patch } : item,
    );
  };
  const send = (id, fail) => {
    update(id, { status: "uploading", error: undefined });
    const timer = setTimeout(() => {
      timers.delete(timer);
      update(
        id,
        fail ? { status: "error", error: "Network error" } : { status: "done" },
      );
    }, 1500);
    timers.add(timer);
  };
  const onSelected = (event) => {
    event.preventDefault();
    const { files } = event.detail;
    for (const file of files) {
      const id = \`doc-\${++count}\`;
      upload.items = [
        ...upload.items,
        { id, name: file.name, status: "uploading", file },
      ];
      send(id, count % 2 === 0);
    }
  };
  const onRetry = (event) => {
    send(event.detail.item.id, false);
  };
  upload.addEventListener("minerva-files-selected", onSelected);
  upload.addEventListener("minerva-retry", onRetry);
<\/script>
`}})))()}n();export{t as default};