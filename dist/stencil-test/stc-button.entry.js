import { r as registerInstance, h } from './index-a8s8SgN-.js';

const stcButtonCss = () => `.sc-stc-button-h{display:inline-block}.sc-stc-button-h button.stc-button.sc-stc-button{display:inline-flex;align-items:center;justify-content:center;border-radius:0.75rem;font-weight:500;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:background-color 150ms ease, color 150ms ease,       border-color 150ms ease, box-shadow 150ms ease;outline:none}.sc-stc-button-h button.stc-button--sm.sc-stc-button{height:2rem;padding:0 0.75rem;font-size:0.875rem}.sc-stc-button-h button.stc-button--md.sc-stc-button{height:2.5rem;padding:0 1rem;font-size:0.875rem}.sc-stc-button-h button.stc-button--lg.sc-stc-button{height:3rem;padding:0 1.25rem;font-size:1rem}.sc-stc-button-h button.stc-button--primary.sc-stc-button{background:var(--stc-fg);color:var(--stc-primary-contrast);border:1px solid transparent}.sc-stc-button-h button.stc-button--primary.sc-stc-button:hover:not(:disabled){background:color-mix(in srgb, var(--stc-fg) 85%, var(--stc-surface))}.sc-stc-button-h button.stc-button--secondary.sc-stc-button{background:var(--stc-surface);color:var(--stc-fg);border:1px solid var(--stc-border)}.sc-stc-button-h button.stc-button--danger.sc-stc-button{background:var(--stc-danger, #dc2626);color:var(--stc-danger-contrast, #fff)}`;

const StcButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
};
StcButton.style = stcButtonCss();

export { StcButton as stc_button };
//# sourceMappingURL=stc-button.entry.esm.js.map

//# sourceMappingURL=stc-button.entry.js.map