'use strict';

var index = require('./index-CoQcVkOE.js');

const stcButtonCss = () => `.sc-stc-button-h{display:inline-block}.sc-stc-button-h button.stc-button.sc-stc-button{display:inline-flex;align-items:center;justify-content:center;border-radius:0.75rem;font-weight:500;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:background-color 150ms ease, color 150ms ease,       border-color 150ms ease, box-shadow 150ms ease;outline:none}.sc-stc-button-h button.stc-button--sm.sc-stc-button{height:2rem;padding:0 0.75rem;font-size:0.875rem}.sc-stc-button-h button.stc-button--md.sc-stc-button{height:2.5rem;padding:0 1rem;font-size:0.875rem}.sc-stc-button-h button.stc-button--lg.sc-stc-button{height:3rem;padding:0 1.25rem;font-size:1rem}.sc-stc-button-h button.stc-button--primary.sc-stc-button{background:var(--stc-fg);color:var(--stc-primary-contrast);border:1px solid transparent}.sc-stc-button-h button.stc-button--primary.sc-stc-button:hover:not(:disabled){background:color-mix(in srgb, var(--stc-fg) 85%, var(--stc-surface))}.sc-stc-button-h button.stc-button--secondary.sc-stc-button{background:var(--stc-surface);color:var(--stc-fg);border:1px solid var(--stc-border)}.sc-stc-button-h button.stc-button--danger.sc-stc-button{background:var(--stc-danger, #dc2626);color:var(--stc-danger-contrast, #fff)}`;

const StcButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    variant = "primary";
    size = "md";
    disabled = false;
    loading = false;
    render() {
        return (index.h("button", { key: 'd32dba487509c916b1f346e9976c711d903121a7', class: [
                "stc-button",
                `stc-button--${this.size}`,
                `stc-button--${this.variant}`,
            ].join(" "), disabled: this.disabled || this.loading }, this.loading ? index.h("span", { class: "stc-button__spinner" }) : null, index.h("slot", { key: '1724d02961769da71187d41af1fba3ced3ceff36' })));
    }
};
StcButton.style = stcButtonCss();

const stcInputCss = () => `.sc-stc-input-h{display:block}.sc-stc-input-h label.sc-stc-input{display:block}.stc-input__label.sc-stc-input{margin-bottom:0.25rem;display:block;font-size:0.875rem;font-weight:500;color:var(--stc-fg)}.stc-input.sc-stc-input{width:100%;height:2.5rem;padding:0 0.75rem;font-size:0.875rem;border-radius:0.75rem;border:1px solid var(--stc-border);background:var(--stc-surface);color:var(--stc-fg);outline:none;transition:border-color 150ms ease,       box-shadow 150ms ease,       background-color 150ms ease}.stc-input.sc-stc-input::-moz-placeholder{color:var(--stc-muted)}.stc-input.sc-stc-input::placeholder{color:var(--stc-muted)}.stc-input.sc-stc-input:disabled{cursor:not-allowed;opacity:0.6;background:color-mix(in srgb, var(--stc-surface) 92%, var(--stc-fg))}.stc-input.sc-stc-input:focus{border-color:var(--stc-border);box-shadow:0 0 0 2px var(--stc-surface),       0 0 0 4px color-mix(in srgb, var(--stc-primary) 30%, transparent)}.stc-input--default.sc-stc-input{border-color:var(--stc-border)}.stc-input--error.sc-stc-input{border-color:#ef4444}.stc-input--error.sc-stc-input:focus{box-shadow:0 0 0 2px var(--stc-surface),       0 0 0 4px color-mix(in srgb, #ef4444 35%, transparent)}.stc-input--success.sc-stc-input{border-color:#22c55e}.stc-input--success.sc-stc-input:focus{box-shadow:0 0 0 2px var(--stc-surface),       0 0 0 4px color-mix(in srgb, #22c55e 35%, transparent)}`;

const StcInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.stcInput = index.createEvent(this, "stc-input");
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
        return (index.h("label", { key: 'f20aa660ccf0e4327748fef86fdc24ec57838570' }, this.label ? (index.h("span", { class: "stc-input__label" }, this.label)) : null, index.h("input", { key: '16ef374038d96c5fa723942646f3993d3729db48', class: [
                "stc-input",
                `stc-input--${this.state}`,
            ].join(" "), value: this.value, disabled: this.disabled, placeholder: this.placeholder, onInput: this.onInput }), this.helperText ? (index.h("span", { class: [
                "stc-input__helper",
                this.state !== "default"
                    ? `stc-input__helper--${this.state}`
                    : "",
            ].join(" ") }, this.helperText)) : null));
    }
};
StcInput.style = stcInputCss();

const StcModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.stcClose = index.createEvent(this, "stc-close");
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
        return (index.h("div", { class: "stc-root", role: "dialog", "aria-modal": "true" }, index.h("button", { class: "stc-backdrop fixed inset-0 bg-black/40", "aria-label": "Close backdrop", onClick: this.onBackdropClick }), index.h("div", { class: "ds-panel fixed left-1/2 top-1/2 w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-xl" }, index.h("div", { class: "mb-3 flex items-center justify-between" }, index.h("h2", { class: "text-base font-semibold text-zinc-900" }, this.title), index.h("button", { class: "rounded-lg px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-100", onClick: this.close }, "\u2715")), index.h("div", { class: "text-sm text-zinc-700" }, index.h("slot", null)), index.h("div", { class: "mt-4 flex justify-end gap-2" }, index.h("stc-button", { variant: "secondary", onClick: this.close }, "Cancel"), index.h("stc-button", null, "OK")))));
    }
};

exports.stc_button = StcButton;
exports.stc_input = StcInput;
exports.stc_modal = StcModal;
