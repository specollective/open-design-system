import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table',
  styleUrl: 'ods-table.scss',
  shadow: true
})

export class ODSTable {
  @Prop() class: string;
  @Prop() headless: boolean;

  render() {
    const defaultClass = 'ods-table-default'
    const currentClass = this.headless
      ? this.class : `${this.class} ${defaultClass}`
    return (
      <Host>
        {/* <table class={currentClass}> */}
        <table>
          {/* <slot /> */}
        </table>
      </Host >
    )
  }
}
