import { Component, Host, Prop, h } from '@stencil/core';
// import ods-table-row from '../table-components/table-row/ods-table-row';
// import 'ods-table-row'; //from '../table-components/table-row/ods-table-row';

@Component({
  tag: 'ods-table-basic',
  styleUrl: 'ods-table-basic.scss',
  shadow: true
})

export class ODSTableBasic {
  @Prop() class: string;
  @Prop() headless: boolean;

  render() {
    // console.log(window.headlessmode)
    // console.log(window)
    const defaultClass = 'ods-table-basic-default'
    const currentClass = this.headless
      ? this.class : `${this.class} ${defaultClass}`
    return (
      <Host>
        {/* <div> */}
        <table class={currentClass}
        // style={{
        // }}
        >
          {/* <tr>
            <th>Person 1</th>
            <th>Person 2</th>
            <th>Person 3</th>
            <th>Person 3</th>
            <th>Person 3</th>
            <th>Person 3</th>
          </tr> */}
          <tr>
            {/* <td></td>
            <td>USD</td>
            <td>EUR</td> */}
            <slot />
          </tr>
        </table>
        {/* </div> */}
      </Host >
    )
  }
}
