import { Component, Prop, h } from "@stencil/core";

type Variant = "primary" | "secondary" | "danger";
type Size = "sm" | "md" | "lg";

@Component({ tag: "stc-button", shadow: false })
export class StcButton {
    @Prop() variant: Variant = "primary";
    @Prop() size: Size = "md";
    @Prop({ reflect: true }) disabled = false;
    @Prop() loading = false;

    render() {
        const base =
            "inline-flex items-center justify-center rounded-xl font-medium transition select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

        const sizeCls: Record<Size, string> = {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-5 text-base",
        };

        const variantCls: Record<Variant, string> = {
            primary: "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-400",
            secondary:
                "bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300",
            danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300",
        };

        return (
            <button
                class={`${base} ${sizeCls[this.size]} ${variantCls[this.variant]}`}
                disabled={this.disabled || this.loading}
            >
                {this.loading ? (
                    <span class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
                ) : null}
                <slot />
            </button>
        );
    }
}
