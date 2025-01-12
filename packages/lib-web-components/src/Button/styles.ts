import { css } from "lit";

export default css`
  :host {
    display: inline-block;
    --primary-color: #3b82f6;
    --primary-hover: #2563eb;
    --secondary-color: #6b7280;
    --secondary-hover: #4b5563;
    --success-color: #10b981;
    --success-hover: #059669;
    --warning-color: #f59e0b;
    --warning-hover: #d97706;
    --error-color: #ef4444;
    --error-hover: #dc2626;
    --info-color: #3b82f6;
    --info-hover: #2563eb;
    --ghost-color: transparent;
    --ghost-hover: rgba(0, 0, 0, 0.05);
    --disabled-color: #e5e7eb;
    --disabled-text: #9ca3af;
    --ripple-color: rgba(255, 255, 255, 0.7);
  }

  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    outline: none;
    user-select: none;
  }

  /* Variants */
  .variant-primary {
    background-color: var(--primary-color);
    color: white;
  }

  .variant-primary:hover:not(:disabled) {
    background-color: var(--primary-hover);
  }

  .variant-secondary {
    background-color: var(--secondary-color);
    color: white;
  }

  .variant-secondary:hover:not(:disabled) {
    background-color: var(--secondary-hover);
  }

  .variant-success {
    background-color: var(--success-color);
    color: white;
  }

  .variant-success:hover:not(:disabled) {
    background-color: var(--success-hover);
  }

  .variant-warning {
    background-color: var(--warning-color);
    color: white;
  }

  .variant-warning:hover:not(:disabled) {
    background-color: var(--warning-hover);
  }

  .variant-error {
    background-color: var(--error-color);
    color: white;
  }

  .variant-error:hover:not(:disabled) {
    background-color: var(--error-hover);
  }

  .variant-info {
    background-color: var(--info-color);
    color: white;
  }

  .variant-info:hover:not(:disabled) {
    background-color: var(--info-hover);
  }

  .variant-ghost {
    background-color: var(--ghost-color);
    color: var(--primary-color);
  }

  .variant-ghost:hover:not(:disabled) {
    background-color: var(--ghost-hover);
  }

  /* Sizes */
  .size-tiny {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  .size-small {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }

  .size-medium {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  .size-large {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }

  /* Shapes */
  .shape-square {
    border-radius: 0;
  }

  .shape-rounded {
    border-radius: 0.375rem;
  }

  .shape-circle {
    border-radius: 9999px;
  }

  .shape-pill {
    border-radius: 9999px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  /* States */
  .disabled,
  :disabled {
    background-color: var(--disabled-color) !important;
    color: var(--disabled-text) !important;
    cursor: not-allowed;
    pointer-events: none;
  }

  .loading {
    cursor: wait;
    pointer-events: none;
  }

  .active {
    transform: scale(0.98);
  }

  /* Modifiers */
  .block {
    width: 100%;
  }

  .elevation {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .elevation:hover:not(:disabled) {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .animation {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animation:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  .outlined {
    background-color: transparent;
    border: 1px solid currentColor;
  }

  .gradient {
    background: linear-gradient(45deg, var(--primary-color), var(--info-color));
  }

  .transparent {
    background-color: transparent;
  }

  .borderless {
    border: none;
  }

  .compact {
    padding: 0.25rem 0.5rem;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .lowercase {
    text-transform: lowercase;
  }

  .capitalize {
    text-transform: capitalize;
  }

  /* Icons */
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon.left {
    margin-right: 0.5rem;
  }

  .icon.right {
    margin-left: 0.5rem;
  }

  /* Loading Spinner */
  .loading-spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.75s linear infinite;
  }

  /* Ripple Effect */
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    background-color: var(--ripple-color);
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
