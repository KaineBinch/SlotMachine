class ReelSymbol {
  constructor(char, x, y) {
    this.char = char
    this.x = x
    this.y = y
  }
  update(y) {
    this.y = y
  }
  render() {
    fill(0)
    text(this.char, this.x, this.y)
  }

}