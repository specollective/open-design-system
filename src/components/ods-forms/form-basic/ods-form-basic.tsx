import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'ods-form-basic',
  styleUrl: 'ods-form-basic.scss',
  shadow: true
})

export class ODSFormBasic {
  @Prop() class: string;
  @Prop() headless: boolean;
  @State() value: string;

  handleSubmit(event: any) {
    event.preventDefault()
    // this.value = event.target.value;
    // console.log(1, event.target);
  }

  render() {
    const defaultClass = 'ods-form-basic-default'
    const currentClass = this.headless
      ? this.class : `${this.class} ${defaultClass}`
    return (
      <Host>
        <form
          onSubmit={(event) => this.handleSubmit(event)}
          class={currentClass}
          autoComplete="on">
          <slot />
          <input
            type="submit"
            value="Submit">
          </input>
        </form>
      </Host >
    )
  }
}
