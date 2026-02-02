import { h } from "@stencil/core";
export class StcInput {
    label = "";
    placeholder = "";
    value = "";
    disabled = false;
    state = "default";
    helperText = "";
    /** Emits on each input */
    stcInput;
    onInput = (e) => {
        const v = e.target.value;
        this.value = v;
        this.stcInput.emit({ value: v });
    };
    render() {
        return (h("label", { key: 'f20aa660ccf0e4327748fef86fdc24ec57838570' }, this.label ? (h("span", { class: "stc-input__label" }, this.label)) : null, h("input", { key: '16ef374038d96c5fa723942646f3993d3729db48', class: [
                "stc-input",
                `stc-input--${this.state}`,
            ].join(" "), value: this.value, disabled: this.disabled, placeholder: this.placeholder, onInput: this.onInput }), this.helperText ? (h("span", { class: [
                "stc-input__helper",
                this.state !== "default"
                    ? `stc-input__helper--${this.state}`
                    : "",
            ].join(" ") }, this.helperText)) : null));
    }
    static get is() { return "stc-input"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["stc-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stc-input.css"]
        };
    }
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
                "method": "stcInput",
                "name": "stc-input",
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
