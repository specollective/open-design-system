import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-thead',
  styleUrl: 'ods-table-thead.scss',
  shadow: true
})

export class ODSTableThead {
  render() {
    return (
      <Host>
        <thead>
          <slot />
        </thead>
      </Host >
    )
  }
}

