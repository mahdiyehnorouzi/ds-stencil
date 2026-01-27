import { h } from "@stencil/core";
export class StcButton {
    variant = "primary";
    size = "md";
    disabled = false;
    loading = false;
    render() {
        const base = "inline-flex items-center justify-center rounded-xl font-medium transition select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
        const sizeCls = {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-5 text-base",
        };
        const variantCls = {
            primary: "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-400",
            secondary: "bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300",
            danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300",
        };
        return (h("button", { key: 'b8cc4fabfecd35b2787ff2bfa28b37fef41b2844', class: `${base} ${sizeCls[this.size]} ${variantCls[this.variant]}`, disabled: this.disabled || this.loading }, this.loading ? (h("span", { class: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" })) : null, h("slot", { key: '2ce92ecb56c8a9bddef4233a0acb943264919c98' })));
    }
    static get is() { return "stc-button"; }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Variant",
                    "resolved": "\"danger\" | \"primary\" | \"secondary\"",
                    "references": {
                        "Variant": {
                            "location": "global",
                            "id": "global::Variant"
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
                "attribute": "variant",
                "defaultValue": "\"primary\""
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "Size": {
                            "location": "global",
                            "id": "global::Size"
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
                "attribute": "size",
                "defaultValue": "\"md\""
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
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "loading": {
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
                "attribute": "loading",
                "defaultValue": "false"
            }
        };
    }
}
