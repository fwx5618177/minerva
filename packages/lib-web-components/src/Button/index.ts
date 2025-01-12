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

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  block = false;

  @property({ type: Boolean, reflect: true })
  elevation = false;

  @property({ type: Boolean, reflect: true })
  animation = false;

  @property({ type: String })
  icon = "";

  @property({ type: String })
  iconPosition: ButtonProps["iconPosition"] = "left";

  @property({ type: Boolean, reflect: true })
  ripple = false;

  @property({ type: Boolean, reflect: true })
  outlined = false;

  @property({ type: Boolean, reflect: true })
  gradient = false;

  @property({ type: Boolean, reflect: true })
  transparent = false;

  @property({ type: Boolean, reflect: true })
  borderless = false;

  @property({ type: Boolean, reflect: true })
  compact = false;

  @property({ type: Boolean, reflect: true })
  uppercase = false;

  @property({ type: Boolean, reflect: true })
  lowercase = false;

  @property({ type: Boolean, reflect: true })
  capitalize = false;

  private handleClick(e: MouseEvent) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (this.ripple) {
      this.createRippleEffect(e);
    }
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
        @click=${this.handleClick}
      >
        ${this.loading
          ? html`<span class="loading-spinner"></span>`
          : html`
              ${this.icon && this.iconPosition === "left"
                ? html`<span class="icon left">${this.icon}</span>`
                : null}
              <slot></slot>
              ${this.icon && this.iconPosition === "right"
                ? html`<span class="icon right">${this.icon}</span>`
                : null}
            `}
      </button>
    `;
  }

  private generateClasses(): string {
    return [
      "button",
      `variant-${this.variant}`,
      `size-${this.size}`,
      `shape-${this.shape}`,
      this.loading && "loading",
      this.active && "active",
      this.disabled && "disabled",
      this.block && "block",
      this.elevation && "elevation",
      this.animation && "animation",
      this.ripple && "ripple",
      this.outlined && "outlined",
      this.gradient && "gradient",
      this.transparent && "transparent",
      this.borderless && "borderless",
      this.compact && "compact",
      this.uppercase && "uppercase",
      this.lowercase && "lowercase",
      this.capitalize && "capitalize",
    ]
      .filter(Boolean)
      .join(" ");
  }
}
