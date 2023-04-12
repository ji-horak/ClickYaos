class Yao {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.value = 1;
  }

  draw() {
    if (this.value) {
      fill('white');
    } else {
      fill('black');
    }
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
let circleOneFill;
let circleTwoFill;
let circleThreeFill;

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

  renderControls(yaos)

  function renderControls(a) {
    const controlsHolder = document.createElement('div')
    controlsHolder.classList.add('controls-holder')
    
    a.forEach((e) => {
      const cI = document.createElement('div') //controlItem
      cI.dataset.value = e.value      
      cI.addEventListener('click', function() {
        e.togglevalue()

        cI.dataset.value = e.value

        if (cI.dataset.value == 0) {
          cI.classList.add('is-active')
        } else {
          cI.classList.remove('is-active')
        }
      })      

      controlsHolder.append(cI)
    })

    document.querySelector('main').append(controlsHolder)
  }
}

function draw() {
  background(200);
  noStroke();

  // for (let i = 0; i < yaos.length; i++) {
    // yaos[i].draw();    
  // }

  blendMode(BLEND);

  drawingContext.fillStyle = circleOneFill;
  circle(width/2, height/2-120, 200);

  drawingContext.fillStyle = circleThreeFill;
  circle(width/2, height/2+120, 200);

  drawingContext.fillStyle = circleTwoFill;
  circle(width/2, height/2, 200);

  blendMode(BLEND);

  drawingContext.fillStyle = 'white';
}

function mouseClicked() {
  // Check if any square is clicked
  for (let i = 0; i < yaos.length; i++) {
    if (yaos[i].clicked()) {
      yaos[i].togglevalue();
    }
  }

  // Check the value configuration of the squares and set the circle value accordingly

  //Individually (corresponding pairs)
  //Circle One
  if (yaos[0].value === 1 && yaos[3].value === 0) {
    circleOneFill = drawingContext.createLinearGradient(width/2-100, 0, width/2+100, 0);
    circleOneFill.addColorStop(0, 'White');
    circleOneFill.addColorStop(0.5, 'Black');
    circleOneFill.addColorStop(1, 'White');
  } else if (yaos[0].value === 1 && yaos[3].value === 1) {
    circleOneFill = drawingContext.createRadialGradient(width/2, height/2-120, 30, width/2, height/2-120, 100);
    circleOneFill.addColorStop(0, 'White');
    circleOneFill.addColorStop(0.5, 'White');
    circleOneFill.addColorStop(1, 'Black');
  } else if (yaos[0].value === 0 && yaos[3].value === 1) {
    circleOneFill = drawingContext.createLinearGradient(width/2-100, 0, width/2+100, 0);
    circleOneFill.addColorStop(0, 'Black');
    circleOneFill.addColorStop(0.5, 'White');
    circleOneFill.addColorStop(1, 'Black');
  } else {
    circleOneFill = drawingContext.createRadialGradient(width/2, height/2-120, 30, width/2, height/2-120, 100);
    circleOneFill.addColorStop(0, 'Black');
    circleOneFill.addColorStop(0.5, 'Black');
    circleOneFill.addColorStop(1, 'White');
  }
  //Circle Two
  if (yaos[1].value === 1 && yaos[4].value === 0) {
    circleTwoFill = drawingContext.createLinearGradient(width/2-100, 0, width/2+100, 0);
    circleTwoFill.addColorStop(0, 'White');
    circleTwoFill.addColorStop(0.5, 'Black');
    circleTwoFill.addColorStop(1, 'White');
  } else if (yaos[1].value === 1 && yaos[4].value === 1) {
    circleTwoFill = drawingContext.createRadialGradient(width/2, height/2, 30, width/2, height/2, 100);
    circleTwoFill.addColorStop(0, 'White');
    circleTwoFill.addColorStop(0.5, 'White');
    circleTwoFill.addColorStop(1, 'Black');
  } else if (yaos[1].value === 0 && yaos[4].value === 1) {
    circleTwoFill = drawingContext.createLinearGradient(width/2-100, 0, width/2+100, 0);
    circleTwoFill.addColorStop(0, 'Black');
    circleTwoFill.addColorStop(0.5, 'White');
    circleTwoFill.addColorStop(1, 'Black');
  } else {
    circleTwoFill = drawingContext.createRadialGradient(width/2, height/2, 30, width/2, height/2, 100);
    circleTwoFill.addColorStop(0, 'Black');
    circleTwoFill.addColorStop(0.5, 'Black');
    circleTwoFill.addColorStop(1, 'White');
  }
  //Circle Three
  if (yaos[2].value === 1 && yaos[5].value === 0) {
    circleThreeFill = drawingContext.createLinearGradient(width/2-100, 0, width/2+100, 0);
    circleThreeFill.addColorStop(0, 'White');
    circleThreeFill.addColorStop(0.5, 'Black');
    circleThreeFill.addColorStop(1, 'White');
  } else if (yaos[2].value === 1 && yaos[5].value === 1) {
    circleThreeFill = drawingContext.createRadialGradient(width/2, height/2+120, 30, width/2, height/2+120, 100);
    circleThreeFill.addColorStop(0, 'White');
    circleThreeFill.addColorStop(0.5, 'White');
    circleThreeFill.addColorStop(1, 'Black');
  } else if (yaos[2].value === 0 && yaos[5].value === 1) {
    circleThreeFill = drawingContext.createLinearGradient(width/2-100, 0, width/2+100, 0);
    circleThreeFill.addColorStop(0, 'Black');
    circleThreeFill.addColorStop(0.5, 'White');
    circleThreeFill.addColorStop(1, 'Black');
  } else {
    circleThreeFill = drawingContext.createRadialGradient(width/2, height/2+120, 30, width/2, height/2+120, 100);
    circleThreeFill.addColorStop(0, 'Black');
    circleThreeFill.addColorStop(0.5, 'Black');
    circleThreeFill.addColorStop(1, 'White');
  }

  

  //All six
   let values = yaos.map(yao => yao.value);
   let valueString = values.join(' ');
   print(valueString);
  // if (valueString === '0 0 0 1 1 0') {
  //   circleColor = 'magenta';
  // } else if (valueString === '0 0 1 0 1 0') {
  //   circleColor = 'red';
  // } else if (valueString === '1 0 0 1 0 0') {
  //   circleColor = 'yellow';
  // } else {
  //   circleColor = 'green';
  // }
}

