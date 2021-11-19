import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-foot',
  styleUrl: 'ods-table-foot.scss',
  shadow: true
})

export class ODSTableFoot {
  @Prop() class: string;
  @Prop() headless: boolean;

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

