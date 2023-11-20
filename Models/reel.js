const chars = "ABC"

class Reel {
  constructor(x, y) {
    this.index = 0
    this.symbols = new Array(chars.length).fill(0).map((_, i) => new ReelSymbol(chars[i], x + 63, y + 75 + (i * 60)))
    this.isSpinning = false
    this.x = x
    this.y = y
  }
  spin(callback) {
    callback()
  }
  render() {
    noStroke()
    fill(135, 65, 165)
    rect(this.x, this.y, 150, 250)
    fill(255)
    const borderWidth = 15
    rect(this.x + borderWidth, this.y + borderWidth, 150 - (borderWidth * 2), 250 - (borderWidth * 2))
    for (const symbol of this.symbols) {
      symbol.render()
    }
    fill(150)
    rect(this.x + borderWidth, this.y + borderWidth, 150 - (borderWidth * 2), (250 - (borderWidth * 2)) / 3)
    rect(this.x + borderWidth, this.y + borderWidth + ((250 - (borderWidth * 2)) / 3) * 2, 150 - (borderWidth * 2), (250 - (borderWidth * 2)) / 3)
  }
}