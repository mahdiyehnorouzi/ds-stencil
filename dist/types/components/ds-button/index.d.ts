type Variant = "primary" | "secondary" | "danger";
type Size = "sm" | "md" | "lg";
export declare class DsButton {
    variant: Variant;
    size: Size;
    disabled: boolean;
    loading: boolean;
    render(): any;
}
export {};
