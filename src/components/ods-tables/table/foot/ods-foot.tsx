import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-foot',
  styleUrl: 'ods-foot.scss',
  shadow: true
})

export class ODSFoot {
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

