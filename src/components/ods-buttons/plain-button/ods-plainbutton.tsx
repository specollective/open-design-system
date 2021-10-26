import { Component, h } from '@stencil/core'

@Component({
  tag: 'plain-button',
  styleUrl: 'plain-button.scss',
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
