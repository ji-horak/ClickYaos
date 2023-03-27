class Square {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = 1;
  }

  draw() {
    fill(this.color === 0 ? 'black' : 'white');
    rect(this.x, this.y, this.size, this.size);
  }

  clicked() {
    return mouseX >= this.x && mouseX <= this.x + this.size &&
           mouseY >= this.y && mouseY <= this.y + this.size;
  }

  toggleColor() {
    this.color = this.color === 1 ? 0 : 1;
  }
}

let squares = [];
let circleColor = 'green';

function setup() {
  createCanvas(400, 400);
  squares.push(new Square(50, 50, 50));
  squares.push(new Square(150, 50, 50));
  squares.push(new Square(250, 50, 50));
  squares.push(new Square(50, 150, 50));
  squares.push(new Square(150, 150, 50));
  squares.push(new Square(250, 150, 50));
}

function draw() {
  background(220);

  for (let i = 0; i < squares.length; i++) {
    squares[i].draw();
  }

  // Draw circle
  fill(circleColor);
  ellipse(200, 350, 150, 150);
}

function mouseClicked() {
  // Check if any square is clicked
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].clicked()) {
      squares[i].toggleColor();
    }
  }

  // Check the color configuration of the squares and set the circle color accordingly
  let colors = squares.map(square => square.color);
  let colorString = colors.join(' ');

  if (colorString === '0 0 0 1 1 0') {
    circleColor = 'blue';
  } else if (colorString === '0 0 1 0 1 0') {
    circleColor = 'red';
  } else if (colorString === '1 0 0 1 0 0') {
    circleColor = 'yellow';
  } else {
    circleColor = 'green';
  }
}

