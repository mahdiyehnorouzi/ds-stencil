import { Component, Prop, Event, EventEmitter, h } from "@stencil/core";

type InputState = "default" | "error" | "success";

@Component({
    tag: "ds-input",
    shadow: false,
})
export class DsInput {
    @Prop() label = "";
    @Prop() placeholder = "";
    @Prop({ mutable: true }) value = "";
    @Prop() disabled = false;
    @Prop() state: InputState = "default";
    @Prop() helperText = "";

    /** Emits on each input */
    @Event({ eventName: "ds-input" }) dsInput!: EventEmitter<{ value: string }>;

    private onInput = (e: Event) => {
        const v = (e.target as HTMLInputElement).value;
        this.value = v;
        this.dsInput.emit({ value: v });
    };

    render() {
        const ring =
            this.state === "error"
                ? "focus:ring-red-300 border-red-300"
                : this.state === "success"
                    ? "focus:ring-emerald-300 border-emerald-300"
                    : "focus:ring-zinc-300 border-zinc-200";

        const helperColor =
            this.state === "error"
                ? "text-red-600"
                : this.state === "success"
                    ? "text-emerald-600"
                    : "text-zinc-500";

        return (
            <label class="block">
                {this.label ? (
                    <span class="mb-1 block text-sm font-medium text-zinc-800">
                        {this.label}
                    </span>
                ) : null}

                <input
                    class={`h-10 w-full rounded-xl border bg-white px-3 text-sm outline-none transition disabled:cursor-not-allowed disabled:bg-zinc-50 ${ring}`}
                    value={this.value}
                    disabled={this.disabled}
                    placeholder={this.placeholder}
                    onInput={this.onInput}
                />

                {this.helperText ? (
                    <span class={`mt-1 block text-xs ${helperColor}`}>{this.helperText}</span>
                ) : null}
            </label>
        );
    }
}
