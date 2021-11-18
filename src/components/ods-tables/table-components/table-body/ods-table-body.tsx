import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-body',
  styleUrl: 'ods-table-body.scss',
  shadow: true
})

export class ODSTableBody {
  @Prop() class: string;
  @Prop() headless: boolean;

  render() {
    // console.log(window.headlessmode)
    // console.log(window)
    const defaultClass = 'ods-table-body-default'
    // const currentClass = this.headless
    // ? this.class : `${this.class} ${defaultClass}`
    return (
      // <div>
      <Host>
        {/* <table> */}
        <tbody>
          <slot />
        </tbody>
        {/* </table> */}
      </Host >
      // </div>
    )
  }
}

