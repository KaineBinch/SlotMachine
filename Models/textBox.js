class TextBox{
  constructor(text, width, height, x, y){
    this.text = text
    this.width = width
    this.height = height
    this.x = x
    this.y = y
  } 
  render(){
    fill(60, 20, 60)
    strokeWeight(3)
    stroke(255)
    textSize(this.width / 10)
    // noStroke()
    rect(this.x, this.y, this.width, this.height)
    text(this.text,this.x, this.y + this.height / 2)
  }
}