import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ods-body',
  styleUrl: 'ods-body.scss',
  shadow: true
})

export class ODSBody {
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

