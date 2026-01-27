import { Component, Prop, Event, EventEmitter, h, Listen } from "@stencil/core";

@Component({
    tag: "stc-modal",
    shadow: false,
})
export class StcModal {
    @Prop({ reflect: true, mutable: true }) open = false;
    @Prop() title = "";

    @Event({ eventName: "stc-close" }) stcClose!: EventEmitter<void>;

    @Listen("keydown", { target: "window" })
    onKeyDown(e: KeyboardEvent) {
        if (this.open && e.key === "Escape") this.close();
    }

    private close = () => {
        this.open = false;
        this.stcClose.emit();
    };

    private onBackdropClick = (e: MouseEvent) => {
        if ((e.target as HTMLElement).classList.contains("stc-backdrop")) {
            this.close();
        }
    };

    render() {
        if (!this.open) return null;

        return (
            <div class="stc-root" role="dialog" aria-modal="true">
                <button
                    class="stc-backdrop fixed inset-0 bg-black/40"
                    aria-label="Close backdrop"
                    onClick={this.onBackdropClick}
                ></button>

                <div class="ds-panel fixed left-1/2 top-1/2 w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-xl">
                    <div class="mb-3 flex items-center justify-between">
                        <h2 class="text-base font-semibold text-zinc-900">{this.title}</h2>
                        <button
                            class="rounded-lg px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-100"
                            onClick={this.close}
                        >
                            ✕
                        </button>
                    </div>

                    <div class="text-sm text-zinc-700">
                        <slot />
                    </div>

                    <div class="mt-4 flex justify-end gap-2">
                        <stc-button variant="secondary" onClick={this.close}>
                            Cancel
                        </stc-button>
                        <stc-button>OK</stc-button>
                    </div>
                </div>
            </div>
        );
    }
}
