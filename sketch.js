var ellipseY = 500;
var ellipseSpeed = 2;

var dogImg;


function preload() {
	dogImg = loadImage('dog.png');
}

function setup() {
  // put setup code here
createCanvas (500,500);


}

function draw() {
	background("#84CDED");
    noStroke();


	fill("yellow");
	ellipse(250, ellipseY, 100);
	ellipseY = ellipseY - ellipseSpeed;

	if (ellipseY < 100) {
		ellipseY = 100;
	}

	fill("#067C5B");
	ellipse (200, 450, 1000, 200);

    image(dogImg, mouseX, mouseY, 200, 100);
    fill("white");
    textSize(20);
    textFont("Georgia");
	textStyle(ITALIC);
	text('Good Morning Dog',10,30);
}