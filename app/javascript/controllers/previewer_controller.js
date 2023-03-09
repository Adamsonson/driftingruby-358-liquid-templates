import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="previewer"
export default class extends Controller {
  static targets = ['input', 'output']

  connect() {
    this.inputTarget.setAttribute("data-action", "keyup->previewer#update_output")
    this.update_output()
  }

  update_output() {
    this.outputTarget.innerHTML = this.inputTarget.value
  }
}
