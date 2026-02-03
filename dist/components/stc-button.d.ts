import type { Components, JSX } from "../types/components";

interface StcButton extends Components.StcButton, HTMLElement {}
export const StcButton: {
    prototype: StcButton;
    new (): StcButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
