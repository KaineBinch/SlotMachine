let w
let h
let slotMachine
let button

function setup() {
  w = windowWidth * 0.97
  h = windowHeight * 0.97
  createCanvas(w, h);
  slotMachine = new SlotMachine(w, h)
  spinButton = new SpinButton(text, width, height)
}
function draw() {
  background(51);
  slotMachine.render()
}
