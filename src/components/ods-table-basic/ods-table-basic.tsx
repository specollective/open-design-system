import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-basic',
  styleUrl: 'ods-table-basic.scss',
  shadow: true
})

export class ODSTableBasic {
  @Prop() class: string;
  @Prop() headless: boolean;

  render() {
    const defaultClass = 'ods-table-basic-default'
    const currentClass = this.headless
      ? this.class : `${this.class} ${defaultClass}`
    return (
      <Host>
        <table class={currentClass}>
          <slot />
        </table>
      </Host >
    )
  }
}
