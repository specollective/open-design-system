import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ods-header',
  styleUrl: 'ods-header.scss',
  shadow: true
})

export class ODSHeader {
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

