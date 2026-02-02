import { r as registerInstance, a as createEvent, h } from './index-a8s8SgN-.js';

const stcInputCss = () => `.sc-stc-input-h{display:block}.sc-stc-input-h label.sc-stc-input{display:block}.stc-input__label.sc-stc-input{margin-bottom:0.25rem;display:block;font-size:0.875rem;font-weight:500;color:var(--stc-fg)}.stc-input.sc-stc-input{width:100%;height:2.5rem;padding:0 0.75rem;font-size:0.875rem;border-radius:0.75rem;border:1px solid var(--stc-border);background:var(--stc-surface);color:var(--stc-fg);outline:none;transition:border-color 150ms ease,       box-shadow 150ms ease,       background-color 150ms ease}.stc-input.sc-stc-input::-moz-placeholder{color:var(--stc-muted)}.stc-input.sc-stc-input::placeholder{color:var(--stc-muted)}.stc-input.sc-stc-input:disabled{cursor:not-allowed;opacity:0.6;background:color-mix(in srgb, var(--stc-surface) 92%, var(--stc-fg))}.stc-input.sc-stc-input:focus{border-color:var(--stc-border);box-shadow:0 0 0 2px var(--stc-surface),       0 0 0 4px color-mix(in srgb, var(--stc-primary) 30%, transparent)}.stc-input--default.sc-stc-input{border-color:var(--stc-border)}.stc-input--error.sc-stc-input{border-color:#ef4444}.stc-input--error.sc-stc-input:focus{box-shadow:0 0 0 2px var(--stc-surface),       0 0 0 4px color-mix(in srgb, #ef4444 35%, transparent)}.stc-input--success.sc-stc-input{border-color:#22c55e}.stc-input--success.sc-stc-input:focus{box-shadow:0 0 0 2px var(--stc-surface),       0 0 0 4px color-mix(in srgb, #22c55e 35%, transparent)}`;

const StcInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stcInput = createEvent(this, "stc-input", 7);
    }
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
};
StcInput.style = stcInputCss();

export { StcInput as stc_input };
//# sourceMappingURL=stc-input.entry.esm.js.map

//# sourceMappingURL=stc-input.entry.js.map