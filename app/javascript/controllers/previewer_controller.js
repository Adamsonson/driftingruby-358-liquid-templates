import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="previewer"
export default class extends Controller {
  static targets = ['input', 'output']
  static values = { url: String }

  connect() {
    this.inputTarget.setAttribute("data-action", "keyup->previewer#update_output")
    this.update_output()
  }

  update_output() {
    // this.outputTarget.innerHTML = this.inputTarget.value
    const params = { content: this.inputTarget.value }
    const options = {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": this.getMetaValue("csrf-token")
      },
      body: JSON.stringify(params)
    }

    this.currTime = new Date()
    this.elapsed = this.currTime - this.timer
    if (this.timer === undefined || this.elapsed > 1000) {
      fetch(this.urlValue, options)
        .then(r => r.text())
        .then(text => this.outputTarget.innerHTML = text)
      this.timer = this.currTime
    } else {
      this.outputTarget.innerHTML = this.inputTarget.value
    }
  }

  getMetaValue(name) {
    const element = document.head.querySelector(`meta[name="${name}"]`)
    return element.getAttribute("content")
  }
}
