import { LitElement } from "lit";
/**
 * @fires input-changed Fires when the input value changes.
 * @fires validation-failed Fires when validation fails.
 */
export declare class CustomInput extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    value: string;
    validators: any[];
    private _error;
    handleInput(e: Event): void;
    _validate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "custom-input": CustomInput;
    }
}
