import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators";

/**
 * @fires input-changed Fires when the input value changes.
 * @fires validation-failed Fires when validation fails.
 */
@customElement("custom-input")
export class CustomInput extends LitElement {
  static styles = css`
    input {
      border: 1px solid #ccc;
      padding: 8px;
      font-size: 1em;
      width: 100%;
    }
    .error {
      color: red;
      font-size: 0.9em;
    }
  `;

  @property({ type: String })
  label = "";

  @property({ type: String })
  value = "";

  @property({ type: Array })
  validators = [];

  @state()
  private _error = "";

  handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;

    this._validate();
    this.dispatchEvent(
      new CustomEvent("input-changed", { detail: this.value })
    );
  }

  _validate() {
    this._error = "";
    if (this.validators.length > 0) {
      for (const validator of this.validators) {
        const errorMessage = validator(this.value);
        if (errorMessage) {
          this._error = errorMessage;
          this.dispatchEvent(
            new CustomEvent("validation-failed", { detail: errorMessage })
          );
          break;
        }
      }
    }
  }

  render() {
    return html`
      <div>
        <label>${this.label}</label>
        <input .value=${this.value} @input=${this.handleInput} />
        ${this._error ? html`<p class="error">${this._error}</p>` : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-input": CustomInput;
  }
}
