import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-table-thead',
  styleUrl: 'ods-table-thead.scss',
  shadow: true
})

export class ODSTableThead {
  @Prop() class: string;
  @Prop() headless: boolean;

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

