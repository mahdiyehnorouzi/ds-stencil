import { r as registerInstance, h, c as createEvent } from './index-DbqPiZ34.js';

const DsButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h("button", { key: '569a06631f6927a63f245207f7432c84cd926437', class: `${base} ${sizeCls[this.size]} ${variantCls[this.variant]}`, disabled: this.disabled || this.loading }, this.loading ? (h("span", { class: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" })) : null, h("slot", { key: '48c5cf31e66100855903d9c5ebd5458f56c4b4ca' })));
    }
};

const DsInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dsInput = createEvent(this, "ds-input");
    }
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
};

const DsModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dsClose = createEvent(this, "ds-close");
    }
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
};

export { DsButton as ds_button, DsInput as ds_input, DsModal as ds_modal };
