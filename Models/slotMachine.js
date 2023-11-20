class SlotMachine {
  constructor(w, h) {
    this.balance = 0
    this.reels = new Array(3).fill(0).map((_, i) => new Reel((i * 150) + (i * 20) + 187, (h / 4)))
    this.w = 800
    this.h = 500
    this.canvasWidth = w
    this.canvasHeight = h
    this.spinButton = new SpinButton("Spin", 100, 40, (w / 2) - (100 / 2), (h / 4) * 3)
  }
  _finishedCallback() {
    for (const reel of this.reels) {
      if (reel.isSpinning) return
    }

  }
  deposit(amount) {
    if (amount > 0) this.balance += amount
  }
  spin(e) {
    if (e.offsetX < (w / 2) - (100 / 2)) return
    if (e.offsetY < (h / 4) * 3) return
    if (e.offsetX > ((w / 2) - (100 / 2)) + 100) return
    if (e.offsetY > ((h / 4) * 3) + 40) return

    for (const reel of this.reels) {
      reel.spin(() => this._finishedCallback())
    }
  }
  render() {
    fill(124, 70, 179)
    rect((this.canvasWidth / 2) - (this.w / 2), (this.canvasHeight / 2) - (this.h / 2), this.w, this.h)
    for (const reel of this.reels) {
      reel.render()
    }
    this.spinButton.render()
  }
}