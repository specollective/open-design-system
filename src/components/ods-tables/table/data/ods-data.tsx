import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ods-data',
  styleUrl: 'ods-data.scss',
  shadow: true
})

export class ODSData {
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

