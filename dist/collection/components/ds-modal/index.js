import { h } from "@stencil/core";
export class DsModal {
    open = false;
    title = "";
    dsClose;
    onKeyDown(e) {
        if (this.open && e.key === "Escape")
            this.close();
    }
    close = () => {
        this.open = false;
        this.dsClose.emit();
    };
    onBackdropClick = (e) => {
        // فقط اگر روی خود backdrop کلیک شد
        if (e.target.classList.contains("ds-backdrop")) {
            this.close();
        }
    };
    render() {
        if (!this.open)
            return null;
        return (h("div", { class: "ds-root", role: "dialog", "aria-modal": "true" }, h("button", { class: "ds-backdrop fixed inset-0 bg-black/40", "aria-label": "Close backdrop", onClick: this.onBackdropClick }), h("div", { class: "ds-panel fixed left-1/2 top-1/2 w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-xl" }, h("div", { class: "mb-3 flex items-center justify-between" }, h("h2", { class: "text-base font-semibold text-zinc-900" }, this.title), h("button", { class: "rounded-lg px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-100", onClick: this.close }, "\u2715")), h("div", { class: "text-sm text-zinc-700" }, h("slot", null)), h("div", { class: "mt-4 flex justify-end gap-2" }, h("ds-button", { variant: "secondary", onClick: this.close }, "Cancel"), h("ds-button", null, "OK")))));
    }
    static get is() { return "ds-modal"; }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "open",
                "defaultValue": "false"
            },
            "title": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "title",
                "defaultValue": "\"\""
            }
        };
    }
    static get events() {
        return [{
                "method": "dsClose",
                "name": "ds-close",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeyDown",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
