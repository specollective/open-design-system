import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'ods-input-text',
  styleUrl: 'ods-input-text.scss',
  shadow: true
})
export class ODSInputText {
  @Prop() class: string;
  @Prop() headless: boolean;
  @State() value: string;

  render() {
    const defaultClass = 'ods-input-text-default'
    const currentClass = this.headless
      ? this.class : `${this.class} ${defaultClass}`
    return (
      <Host>
        <input type="text" class={currentClass} >
          <slot />
        </input>
      </Host >
    )
  }
}
