import{n as e}from"./rolldown-runtime-8BhlS34s.js";var t;function n(){return(n=e((()=>{t={vue:`<!-- ModalBasic.vue -->

<script setup lang="ts">
import { ref } from "vue";

// The trigger slot opens the modal; footer buttons close it with hide().

const modal = ref<HTMLElement & { hide(): void }>();

const onClick = (event: Event) => {
  if ((event.target as Element).closest("[data-close]")) modal.value!.hide();
};
<\/script>

<template>
  <minerva-modal
    id="welcome"
    label="Invite your team"
    description="Members get access to every project of the workspace."
    ref="modal"
    @click="onClick"
  >
    <minerva-button slot="trigger">Open modal</minerva-button>
    <p style="margin: 0">
      Focus is trapped inside; Escape, the × button or a click on the overlay
      close the modal, and focus returns to the button.
    </p>
    <minerva-button slot="footer" data-close color="neutral" variant="outline"
      >Cancel</minerva-button
    >
    <minerva-button slot="footer" data-close>Send invites</minerva-button>
  </minerva-modal>
</template>
`,angular:`// modal-basic.component.ts

import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";

// The trigger slot opens the modal; footer buttons close it with hide().

@Component({
  selector: "app-modal-basic",
  standalone: true,
  // <minerva-*> are custom elements: bind their properties and events
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-modal
      id="welcome"
      label="Invite your team"
      description="Members get access to every project of the workspace."
      #modal
      (click)="onClick($event)"
    >
      <minerva-button slot="trigger">Open modal</minerva-button>
      <p style="margin: 0">
        Focus is trapped inside; Escape, the × button or a click on the overlay
        close the modal, and focus returns to the button.
      </p>
      <minerva-button slot="footer" data-close color="neutral" variant="outline"
        >Cancel</minerva-button
      >
      <minerva-button slot="footer" data-close>Send invites</minerva-button>
    </minerva-modal>
  \`,
})
export class ModalBasicComponent {
  @ViewChild("modal") modal!: ElementRef<HTMLElement & { hide(): void }>;

  onClick = (event: Event) => {
    if ((event.target as Element).closest("[data-close]"))
      this.modal.nativeElement.hide();
  };
}
`,svelte:`<!-- ModalBasic.svelte -->

<script lang="ts">
  // The trigger slot opens the modal; footer buttons close it with hide().

  let modal: HTMLElement & { hide(): void };

  const onClick = (event: Event) => {
    if ((event.target as Element).closest("[data-close]")) modal.hide();
  };
<\/script>

<minerva-modal
  id="welcome"
  label="Invite your team"
  description="Members get access to every project of the workspace."
  bind:this={modal}
  onclick={onClick}
>
  <minerva-button slot="trigger">Open modal</minerva-button>
  <p style="margin: 0">
    Focus is trapped inside; Escape, the × button or a click on the overlay
    close the modal, and focus returns to the button.
  </p>
  <minerva-button slot="footer" data-close color="neutral" variant="outline"
    >Cancel</minerva-button>
  <minerva-button slot="footer" data-close>Send invites</minerva-button>
</minerva-modal>
`,solid:`// ModalBasic.tsx

// The trigger slot opens the modal; footer buttons close it with hide().

export default function ModalBasic() {
  let modal!: HTMLElement & { hide(): void };

  const onClick = (event: Event) => {
    if ((event.target as Element).closest("[data-close]")) modal.hide();
  };

  return (
    <minerva-modal
      id="welcome"
      label="Invite your team"
      description="Members get access to every project of the workspace."
      ref={modal}
      on:click={onClick}
    >
      <minerva-button slot="trigger">Open modal</minerva-button>
      <p style="margin: 0">
        Focus is trapped inside; Escape, the × button or a click on the overlay
        close the modal, and focus returns to the button.
      </p>
      <minerva-button
        slot="footer"
        data-close
        color="neutral"
        variant="outline"
      >
        Cancel
      </minerva-button>
      <minerva-button slot="footer" data-close>
        Send invites
      </minerva-button>
    </minerva-modal>
  );
}
`,html:`<minerva-modal
  id="welcome"
  label="Invite your team"
  description="Members get access to every project of the workspace."
>
  <minerva-button slot="trigger">Open modal</minerva-button>
  <p style="margin: 0">
    Focus is trapped inside; Escape, the × button or a click on the overlay
    close the modal, and focus returns to the button.
  </p>
  <minerva-button slot="footer" data-close color="neutral" variant="outline"
    >Cancel</minerva-button
  >
  <minerva-button slot="footer" data-close>Send invites</minerva-button>
</minerva-modal>

<script type="module">
  // registers every <minerva-*> element (or import one entry per element)
  import "minerva-design/web-components";

  // The trigger slot opens the modal; footer buttons close it with hide().
  const modal = document.querySelector("#welcome");
  const onClick = (event) => {
    if (event.target.closest("[data-close]")) modal.hide();
  };
  modal.addEventListener("click", onClick);
<\/script>
`}})))()}n();export{t as default};