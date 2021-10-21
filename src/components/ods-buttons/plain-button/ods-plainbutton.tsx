import { Component, State, Method, Prop, h } from '@stencil/core'

@Component({
  tag: 'plain-button',
  styleUrl: 'plain-button.scss',
  shadow: true
})


export class PlainButton {

  @Prop() name: string

  render() {
    return (
      <div>
        <button>{this.name}</button>
      </div>
    )
  }
}
