import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ods-table-data',
  styleUrl: 'ods-table-data.scss',
  shadow: true
})

export class ODSTableData {
  render() {
    return (
      <Host>
        <td>
          <slot />
        </td>
      </Host >
    )
  }
}

