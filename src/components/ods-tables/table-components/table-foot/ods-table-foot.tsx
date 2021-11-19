import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-foot',
  styleUrl: 'ods-table-foot.scss',
  shadow: true
})

export class ODSTableFoot {
  @Prop() class: string;
  @Prop() headless: boolean;

  render() {
    // console.log(window.headlessmode)
    // console.log(window)
    const defaultClass = 'ods-table-foot-default'
    // const currentClass = this.headless
    // ? this.class : `${this.class} ${defaultClass}`
    return (
      // <div>
      <Host>
        {/* <table> */}
        <tfoot>
          <slot />
        </tfoot>
        {/* </table> */}
      </Host >
      // </div>
    )
  }
}

