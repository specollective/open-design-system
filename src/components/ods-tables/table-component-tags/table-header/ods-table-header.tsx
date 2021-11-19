import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-header',
  styleUrl: 'ods-table-header.scss',
  shadow: true
})

export class ODSTableHeader {
  render() {
    return (
      <Host>
        <th>
          <slot />
        </th>
      </Host >
    )
  }
}

