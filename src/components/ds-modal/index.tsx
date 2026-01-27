import { Component, Prop, Event, EventEmitter, h, Listen } from "@stencil/core";

@Component({
    tag: "ds-modal",
    shadow: false,
})
export class DsModal {
    @Prop({ reflect: true, mutable: true }) open = false;
    @Prop() title = "";

    @Event({ eventName: "ds-close" }) dsClose!: EventEmitter<void>;

    @Listen("keydown", { target: "window" })
    onKeyDown(e: KeyboardEvent) {
        if (this.open && e.key === "Escape") this.close();
    }

    private close = () => {
        this.open = false;
        this.dsClose.emit();
    };

    private onBackdropClick = (e: MouseEvent) => {
        // فقط اگر روی خود backdrop کلیک شد
        if ((e.target as HTMLElement).classList.contains("ds-backdrop")) {
            this.close();
        }
    };

    render() {
        if (!this.open) return null;

        return (
            <div class="ds-root" role="dialog" aria-modal="true">
                <button
                    class="ds-backdrop fixed inset-0 bg-black/40"
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
                        <ds-button variant="secondary" onClick={this.close}>
                            Cancel
                        </ds-button>
                        <ds-button>OK</ds-button>
                    </div>
                </div>
            </div>
        );
    }
}
