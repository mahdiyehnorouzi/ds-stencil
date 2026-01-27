import { h } from "@stencil/core";
export class DsInput {
    label = "";
    placeholder = "";
    value = "";
    disabled = false;
    state = "default";
    helperText = "";
    /** Emits on each input */
    dsInput;
    onInput = (e) => {
        const v = e.target.value;
        this.value = v;
        this.dsInput.emit({ value: v });
    };
    render() {
        const ring = this.state === "error"
            ? "focus:ring-red-300 border-red-300"
            : this.state === "success"
                ? "focus:ring-emerald-300 border-emerald-300"
                : "focus:ring-zinc-300 border-zinc-200";
        const helperColor = this.state === "error"
            ? "text-red-600"
            : this.state === "success"
                ? "text-emerald-600"
                : "text-zinc-500";
        return (h("label", { key: 'cf2d2d3dbfa3b9766b1c9f83da09303627fe9210', class: "block" }, this.label ? (h("span", { class: "mb-1 block text-sm font-medium text-zinc-800" }, this.label)) : null, h("input", { key: '9783af6323c8c30cc93d27cca0a5e66b766d0e45', class: `h-10 w-full rounded-xl border bg-white px-3 text-sm outline-none transition disabled:cursor-not-allowed disabled:bg-zinc-50 ${ring}`, value: this.value, disabled: this.disabled, placeholder: this.placeholder, onInput: this.onInput }), this.helperText ? (h("span", { class: `mt-1 block text-xs ${helperColor}` }, this.helperText)) : null));
    }
    static get is() { return "ds-input"; }
    static get properties() {
        return {
            "label": {
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
                "attribute": "label",
                "defaultValue": "\"\""
            },
            "placeholder": {
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
                "attribute": "placeholder",
                "defaultValue": "\"\""
            },
            "value": {
                "type": "string",
                "mutable": true,
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
                "attribute": "value",
                "defaultValue": "\"\""
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
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
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputState",
                    "resolved": "\"default\" | \"error\" | \"success\"",
                    "references": {
                        "InputState": {
                            "location": "global",
                            "id": "global::InputState"
                        }
                    }
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
                "attribute": "state",
                "defaultValue": "\"default\""
            },
            "helperText": {
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
                "attribute": "helper-text",
                "defaultValue": "\"\""
            }
        };
    }
    static get events() {
        return [{
                "method": "dsInput",
                "name": "ds-input",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits on each input"
                },
                "complexType": {
                    "original": "{ value: string }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }];
    }
}
