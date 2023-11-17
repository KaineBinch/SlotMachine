let w 
let h 
let textBox
function setup() {
  w = windowWidth * 0.97
  h = windowHeight * 0.97
  textBox = new TextBox("Test text", 100, 200, ((w/2) - 50), (h/2) - 80)
  createCanvas(w, h);
}
let i = 0 

function draw() {
  background(51);
  textBox.update({x: textBox.x + i})
  textBox.render()
  i++
}