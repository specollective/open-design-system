import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-body',
  styleUrl: 'ods-table-body.scss',
  shadow: true
})

export class ODSTableBody {
  render() {
    return (
      <Host>
        <tbody>
          <slot />
        </tbody>
      </Host >
    )
  }
}

