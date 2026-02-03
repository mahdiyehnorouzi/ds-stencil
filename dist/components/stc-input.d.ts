import type { Components, JSX } from "../types/components";

interface StcInput extends Components.StcInput, HTMLElement {}
export const StcInput: {
    prototype: StcInput;
    new (): StcInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
