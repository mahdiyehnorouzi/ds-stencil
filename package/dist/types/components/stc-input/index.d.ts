import { EventEmitter } from "../../stencil-public-runtime";
type InputState = "default" | "error" | "success";
export declare class StcInput {
    label: string;
    placeholder: string;
    value: string;
    disabled: boolean;
    state: InputState;
    helperText: string;
    /** Emits on each input */
    stcInput: EventEmitter<{
        value: string;
    }>;
    private onInput;
    render(): any;
}
export {};
