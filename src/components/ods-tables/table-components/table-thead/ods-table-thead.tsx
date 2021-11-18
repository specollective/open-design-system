import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-thead',
  styleUrl: 'ods-table-thead.scss',
  shadow: true
})

export class ODSTableBody {
  @Prop() class: string;
  @Prop() headless: boolean;

  render() {
    // console.log(window.headlessmode)
    // console.log(window)
    const defaultClass = 'ods-table-thead-default'
    // const currentClass = this.headless
    // ? this.class : `${this.class} ${defaultClass}`
    return (
      // <div>
      <Host>
        {/* <table> */}
        <thead>
          <slot />
        </thead>
        {/* </table> */}
      </Host >
      // </div>
    )
  }
}

