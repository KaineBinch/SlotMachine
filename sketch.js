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
  textBox.render()
  fill(60+i, 20, 60)
  strokeWeight(3)
  stroke(255)
  textSize(10)
  // noStroke()
  rect(((w/2) - 50)+i, (h/2) - 100, 100, 200)
  text("Test text", ((w/2) - 50)+i, (h/2) - 80)
  i++
}