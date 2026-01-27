import { EventEmitter } from "../../stencil-public-runtime";
export declare class DsModal {
    open: boolean;
    title: string;
    dsClose: EventEmitter<void>;
    onKeyDown(e: KeyboardEvent): void;
    private close;
    private onBackdropClick;
    render(): any;
}
