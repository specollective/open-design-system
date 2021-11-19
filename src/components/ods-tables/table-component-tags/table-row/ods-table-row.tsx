import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-row',
  styleUrl: 'ods-table-row.scss',
  shadow: true
})

export class ODSTableRow {
  @Prop() class: string;
  @Prop() headless: boolean;

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

