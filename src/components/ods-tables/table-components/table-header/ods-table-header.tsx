import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-header',
  styleUrl: 'ods-table-header.scss',
  shadow: true
})

export class ODSTableHeader {
  @Prop() class: string;
  @Prop() headless: boolean;

  render() {
    // console.log(window.headlessmode)
    // console.log(window)
    const defaultClass = 'ods-table-header-default'
    // const currentClass = this.headless
    // ? this.class : `${this.class} ${defaultClass}`
    return (
      // <div>
      <Host>
        {/* <table> */}
        <th>
          <slot />
        </th>
        {/* </table> */}
      </Host >
      // </div>
    )
  }
}

