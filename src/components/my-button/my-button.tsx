import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  /**
   * Sets the disabled state of the component
   */
  @Prop()
  disabled: boolean = false;

  /**
   * Displays the button as loading (visually and omitting pointer events)
   */
  @Prop()
  loading: boolean = false;

  render() {
    return (
      <button disabled={this.disabled} aria-busy={this.loading.toString()}>
        <slot />
      </button>
    );
  }
}
