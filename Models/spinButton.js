class SpinButton {
  constructor(text, width, height, x, y) {
    this.text = text
    this.width = width
    this.height = height
    this.x = x
    this.y = y
  }
  render() {
    fill(135, 65, 165)
    rect(this.x, this.y, this.width, this.height)
    fill(0, 0, 0)
    textSize((this.height * 0.75))
    text(this.text, (this.x + 20), (this.y + 30))
  }
}
