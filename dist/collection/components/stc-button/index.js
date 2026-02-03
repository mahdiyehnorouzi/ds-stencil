import { h } from "@stencil/core";
export class StcButton {
    variant = "primary";
    size = "md";
    disabled = false;
    loading = false;
    render() {
        return (h("button", { key: 'd32dba487509c916b1f346e9976c711d903121a7', class: [
                "stc-button",
                `stc-button--${this.size}`,
                `stc-button--${this.variant}`,
            ].join(" "), disabled: this.disabled || this.loading }, this.loading ? h("span", { class: "stc-button__spinner" }) : null, h("slot", { key: '1724d02961769da71187d41af1fba3ced3ceff36' })));
    }
    static get is() { return "stc-button"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["stc-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stc-button.css"]
        };
    }
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
