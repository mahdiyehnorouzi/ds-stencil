import { EventEmitter } from "../../stencil-public-runtime";
export declare class StcModal {
    open: boolean;
    title: string;
    stcClose: EventEmitter<void>;
    onKeyDown(e: KeyboardEvent): void;
    private close;
    private onBackdropClick;
    render(): any;
}
