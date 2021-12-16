import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'ods-input-numeric',
  styleUrl: 'ods-input-numeric.scss',
  shadow: true
})
export class ODSInputNumeric {
  @Prop() class: string;
  @Prop() headless: boolean;
  @State() value: string;

  handleChange(event: any) {
    this.value = event.target.value;
    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    }
    console.log(4, this.value);
  }

  render() {
    const defaultClass = 'ods-input-numeric-default'
    const currentClass = this.headless
      ? this.class : `${this.class} ${defaultClass}`
    return (
      <Host>
        <input
          type="number"
          class={currentClass}
          onInput={(event) => this.handleChange(event)}>
          <slot />
        </input>
      </Host >
    )
  }
}
