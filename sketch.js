class Yao {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.value = 1;
  }

  draw() {
    fill(this.value === 0 ? 'black' : 'white');
    rect(this.x, this.y, this.size, this.size);
  }

  clicked() {
    return mouseX >= this.x && mouseX <= this.x + this.size &&
           mouseY >= this.y && mouseY <= this.y + this.size;
  }

  togglevalue() {
    this.value = this.value === 1 ? 0 : 1;
  }
}

let yaos = [];
let circleColor = 'green';

function setup() {
  createCanvas(windowWidth, windowHeight);
  yaos.push(new Yao(50, 50, 50));
  yaos.push(new Yao(150, 50, 50));
  yaos.push(new Yao(250, 50, 50));
  yaos.push(new Yao(50, 150, 50));
  yaos.push(new Yao(150, 150, 50));
  yaos.push(new Yao(250, 150, 50));
}

function draw() {
  background(220);

  for (let i = 0; i < yaos.length; i++) {
    yaos[i].draw();
  }

  // Draw circle
  fill(circleColor);
  ellipse(200, 350, 150, 150);
}

function mouseClicked() {
  // Check if any square is clicked
  for (let i = 0; i < yaos.length; i++) {
    if (yaos[i].clicked()) {
      yaos[i].togglevalue();
    }
  }

  // Check the value configuration of the squares and set the circle value accordingly
  let values = yaos.map(yao => yao.value);
  let valueString = values.join(' ');

  if (valueString === '0 0 0 1 1 0') {
    circleColor = 'magenta';
  } else if (valueString === '0 0 1 0 1 0') {
    circleColor = 'red';
  } else if (valueString === '1 0 0 1 0 0') {
    circleColor = 'yellow';
  } else {
    circleColor = 'green';
  }
}

