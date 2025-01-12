import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "minerva-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: "primary" | "secondary" | "success" | "warning" | "error";
          size?: "small" | "medium" | "large";
          shape?: "square" | "rounded" | "circle";
          disabled?: boolean;
          loading?: boolean;
          active?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

export {};
