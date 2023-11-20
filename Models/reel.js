const chars = "ABC"

class Reel {
  constructor(finishedCallback, x, y) {
    this.index = 0
    this.symbols = new Array(chars.length).fill(0).map((_, i) => new ReelSymbol(chars[i]))
    this.isSpinning = false
    this.callback = finishedCallback
    this.x = x
    this.y = y
  }
  spin() {

    this.callback()
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

  }
}