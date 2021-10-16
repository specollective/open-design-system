import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core'

@Component({
  tag: 'modal-button',
  styleUrl: 'modal-button.scss',
  shadow: true
})

export class ModalButton {
  @State openModal: boolean = false
  @Event closeModal: EventEmitter
  @Prop() title: string
  @Prop() content: string
  @Prop() width: string
  @Prop() color: string

  openComponent() {
    this.openModal = !this.openModal
    this.closeModal.emit({ visible: this.openModal })
  }

  render() {
    return (
      <div class="backdrop-div">
        <div class="modal-div">
          <div onClick={() => this.openComponent()}>
            close
          </div>
          <h4 class="modal-header"> {this.title}</h4>
          <h4>{this.content}</h4>
        </div>
      </div>
    )
  }
}
