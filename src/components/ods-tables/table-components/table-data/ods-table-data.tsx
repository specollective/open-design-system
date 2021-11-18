import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-data',
  styleUrl: 'ods-table-data.scss',
  shadow: true
})

export class ODSTableData {
  @Prop() class: string;
  @Prop() headless: boolean;

  render() {
    // console.log(window.headlessmode)
    // console.log(window)
    const defaultClass = 'ods-table-data-default'
    // const currentClass = this.headless
    // ? this.class : `${this.class} ${defaultClass}`
    return (
      // <div>
      <Host>
        {/* <table> */}
        <td>
          <slot />
        </td>
        {/* </table> */}
      </Host >
      // </div>
    )
  }
}

