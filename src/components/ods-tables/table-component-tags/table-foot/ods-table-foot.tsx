import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-foot',
  styleUrl: 'ods-table-foot.scss',
  shadow: true
})

export class ODSTableFoot {
  render() {
    return (
      <Host>
        <tfoot>
          <slot />
        </tfoot>
      </Host >
    )
  }
}

