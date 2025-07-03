let angle = 0;

function setup() {
  let canvas = createCanvas(600, 400, WEBGL);
  canvas.parent('canvas-container');

  // El tamaño lo maneja CSS
  canvas.style('width', '100%');
  canvas.style('height', '100%');
}

function draw() {
  background(0); // Negro puro, se funde con fondo del canvas

  // Iluminación sutil y estética
  ambientLight(100);
  directionalLight(255, 255, 255, 0.3, -1, 0.5);
  pointLight(255, 100, 100, 200, 0, 300);

  orbitControl();
  rotateY(angle * 0.3);

  // Piso
  noStroke();
  fill(40);
  box(300, 10, 300);

  // Cubo central
  push();
  translate(0, -55, 0);
  rotateY(angle);
  fill(140, 180, 255);
  box(100);
  pop();

  // Columnas
  push();
  translate(-120, -30, -120);
  fill(255, 107, 107);
  cylinder(10, 80);
  pop();

  push();
  translate(120, -30, 120);
  fill(255, 107, 107);
  cylinder(10, 80);
  pop();

  angle += 0.01;
}
