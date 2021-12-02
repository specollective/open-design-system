import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ods-table-row',
  styleUrl: 'ods-table-row.scss',
  shadow: true
})

export class ODSTableRow {
  render() {
    return (
      <Host>
        <tr>
          <slot />
        </tr>
      </Host >
    )
  }
}

