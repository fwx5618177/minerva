import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles";
import { ButtonProps } from "./types";

@customElement("minerva-button")
export class Button extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String, reflect: true })
  variant: ButtonProps["variant"] = "primary";

  @property({ type: String, reflect: true })
  size: ButtonProps["size"] = "medium";

  @property({ type: String, reflect: true })
  shape: ButtonProps["shape"] = "rounded";

  @property({ type: String, reflect: true })
  borderRadius: ButtonProps["borderRadius"] = "medium";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: String })
  ariaLabel = "";

  private handleClick(e: MouseEvent) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.createRippleEffect(e);
  }

  private createRippleEffect(e: MouseEvent) {
    const button = this.shadowRoot?.querySelector(".button") as HTMLElement;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }

  render() {
    return html`
      <button
        class=${this.generateClasses()}
        ?disabled=${this.disabled}
        ?active=${this.active}
        aria-label=${this.ariaLabel}
        @click=${this.handleClick}
      >
        ${this.loading
          ? html`<span class="loading-spinner"></span>`
          : html`<slot></slot>`}
      </button>
    `;
  }

  private generateClasses(): string {
    return [
      "button",
      `variant-${this.variant}`,
      `size-${this.size}`,
      `shape-${this.shape}`,
      `border-radius-${this.borderRadius}`,
      this.loading && "loading",
      this.active && "active",
      this.disabled && "disabled",
    ]
      .filter(Boolean)
      .join(" ");
  }
}
