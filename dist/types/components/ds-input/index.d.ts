import { EventEmitter } from "../../stencil-public-runtime";
type InputState = "default" | "error" | "success";
export declare class DsInput {
    label: string;
    placeholder: string;
    value: string;
    disabled: boolean;
    state: InputState;
    helperText: string;
    /** Emits on each input */
    dsInput: EventEmitter<{
        value: string;
    }>;
    private onInput;
    render(): any;
}
export {};
