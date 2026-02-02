import type { Components, JSX } from "../types/components";

interface StcModal extends Components.StcModal, HTMLElement {}
export const StcModal: {
    prototype: StcModal;
    new (): StcModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
