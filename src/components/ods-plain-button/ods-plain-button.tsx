import { Component, h } from '@stencil/core'

@Component({
  tag: 'ods-plain-button',
  styleUrl: 'ods-plain-button.scss',
  shadow: true
})

export class PlainButton {


  render() {
    return (
      <div>
        <button class="plainjane">
          <slot />
        </button>
      </div>
    )
  }
}
