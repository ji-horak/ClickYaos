class Yao {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.value = 1;
  }

  draw() {
    fill(this.value === 0 ? 'black' : 'white');
    rect(this.x, this.y, this.width, this.height);
  }

  clicked() {
    return mouseX >= this.x && mouseX <= this.x + this.width &&
           mouseY >= this.y && mouseY <= this.y + this.height;
  }

  togglevalue() {
    this.value = this.value === 1 ? 0 : 1;
  }
}

let yaos = [];
let circleColor = 'green';
let rectColor = 'yellow';

function setup() {
  createCanvas(windowWidth, windowHeight);
  let yaoX = width-width/7;
  let yaoY = height-height/7;
  let yaoWidth = 90;
  let yaoHeight = 15;
  let yaoSpacing = yaoHeight+20;
  yaos.push(new Yao(yaoX, yaoY, yaoWidth, yaoHeight));
  yaos.push(new Yao(yaoX, yaoY-yaoSpacing, yaoWidth, yaoHeight));
  yaos.push(new Yao(yaoX, yaoY-yaoSpacing*2, yaoWidth, yaoHeight));
  yaos.push(new Yao(yaoX, yaoY-yaoSpacing*3, yaoWidth, yaoHeight));
  yaos.push(new Yao(yaoX, yaoY-yaoSpacing*4, yaoWidth, yaoHeight));
  yaos.push(new Yao(yaoX, yaoY-yaoSpacing*5, yaoWidth, yaoHeight));
}

function draw() {
  background(220);
  noStroke();
  for (let i = 0; i < yaos.length; i++) {
    yaos[i].draw();
  }
  //Gradient stuff
  let gradient1 = drawingContext.createRadialGradient(width/2, height/2, 30, width/2, height/2, 100);
  gradient1.addColorStop(0, 'White');
  gradient1.addColorStop(0.5, 'White');
  gradient1.addColorStop(1, 'Black');

  let gradient2 = drawingContext.createRadialGradient(width/2, height/2, 30, width/2, height/2, 100);
  gradient2.addColorStop(0, 'Black');
  gradient2.addColorStop(0.5, 'Black');
  gradient2.addColorStop(1, 'White');

  let gradient3 = drawingContext.createLinearGradient(width/2-100, 0, width/2+100, 0);
  gradient3.addColorStop(0, 'White');
  gradient3.addColorStop(0.5, 'Black');
  gradient3.addColorStop(1, 'White');

  let gradient4 = drawingContext.createLinearGradient(width/2-100, 0, width/2+100, 0);
  gradient4.addColorStop(0, 'Black');
  gradient4.addColorStop(0.5, 'White');
  gradient4.addColorStop(1, 'Black');

  drawingContext.fillStyle = gradient3;
  circle(width/2, height/2-120, 200);

  drawingContext.fillStyle = gradient4;
  circle(width/2, height/2+120, 200);

  blendMode(BLEND);

  drawingContext.fillStyle = gradient1;
  circle(width/2, height/2, 200);

  blendMode(BLEND);

  drawingContext.fillStyle = 'white';

  // // Draw circle
  // fill(circleColor);
  // ellipse(200, 350, 150, 150);

  // // Draw rectangle
  // fill(rectColor);
  // rect(200, 400, 150, 50);
}

function mouseClicked() {
  // Check if any square is clicked
  for (let i = 0; i < yaos.length; i++) {
    if (yaos[i].clicked()) {
      yaos[i].togglevalue();
    }
  }

  // Check the value configuration of the squares and set the circle value accordingly

  //Individually
  if (yaos[0].value === 0 && yaos[1].value === 1) {
    rectColor = 'blue';
  } else {
    rectColor = 'yellow';
  }

  //All six
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

