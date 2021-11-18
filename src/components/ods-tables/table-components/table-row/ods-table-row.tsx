import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-row',
  styleUrl: 'ods-table-row.scss',
  shadow: true
})

export class ODSTableRow {
  @Prop() class: string;
  @Prop() headless: boolean;

  render() {
    // console.log(window.headlessmode)
    // console.log(window)
    const defaultClass = 'ods-table-row-default'
    // const currentClass = this.headless
    // ? this.class : `${this.class} ${defaultClass}`
    return (
      <Host>
        <tr>
          <slot />
        </tr>
        {/* note: line break is being used until we can figure out why the <tr> tag won't create a new line/row */}
        <br />
      </Host >
    )
  }
}

