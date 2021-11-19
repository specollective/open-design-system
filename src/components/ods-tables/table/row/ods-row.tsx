import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ods-row',
  styleUrl: 'ods-row.scss',
  shadow: true
})

export class ODSRow {
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

