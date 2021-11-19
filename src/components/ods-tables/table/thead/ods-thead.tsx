import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-thead',
  styleUrl: 'ods-thead.scss',
  shadow: true
})

export class ODSThead {
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

