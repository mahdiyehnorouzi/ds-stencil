import { r as registerInstance, a as createEvent, h } from './index-a8s8SgN-.js';

const StcModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stcClose = createEvent(this, "stc-close", 7);
    }
    open = false;
    title = "";
    stcClose;
    onKeyDown(e) {
        if (this.open && e.key === "Escape")
            this.close();
    }
    close = () => {
        this.open = false;
        this.stcClose.emit();
    };
    onBackdropClick = (e) => {
        if (e.target.classList.contains("stc-backdrop")) {
            this.close();
        }
    };
    render() {
        if (!this.open)
            return null;
        return (h("div", { class: "stc-root", role: "dialog", "aria-modal": "true" }, h("button", { class: "stc-backdrop fixed inset-0 bg-black/40", "aria-label": "Close backdrop", onClick: this.onBackdropClick }), h("div", { class: "ds-panel fixed left-1/2 top-1/2 w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-xl" }, h("div", { class: "mb-3 flex items-center justify-between" }, h("h2", { class: "text-base font-semibold text-zinc-900" }, this.title), h("button", { class: "rounded-lg px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-100", onClick: this.close }, "\u2715")), h("div", { class: "text-sm text-zinc-700" }, h("slot", null)), h("div", { class: "mt-4 flex justify-end gap-2" }, h("stc-button", { variant: "secondary", onClick: this.close }, "Cancel"), h("stc-button", null, "OK")))));
    }
};

export { StcModal as stc_modal };
//# sourceMappingURL=stc-modal.entry.esm.js.map

//# sourceMappingURL=stc-modal.entry.js.map