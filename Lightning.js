var startX=150;
var startY=60;
var endX=0;
var endY=150;

function setup() {
  createCanvas(500, 500);
	background(0);
	strokeWeight(2);
}

function draw() {
scene();

}

function scene(){
	fill(97,94,94);
	stroke(0);
	ellipse(25,40,100,50);
	ellipse(50,50,100,50);
	ellipse(75,40,100,50);
	ellipse(100,58,100,50);
	ellipse(125,44,100,50);
	ellipse(150,66,100,50);
	ellipse(175,38,100,50);
	ellipse(200,63,100,50);
	ellipse(225,42,100,50);
	ellipse(250,65,100,50);
	ellipse(275,40,100,50);
	ellipse(300,62,100,50);
	ellipse(325,37,100,50);
	ellipse(350,60,100,50);
	ellipse(375,45,100,50);
	ellipse(400,65,100,50);
	ellipse(425,40,100,50);
	ellipse(450,60,100,50);
	ellipse(475,43,100,50);
	ellipse(500,62,100,50);
		
}

function mousePressed(){
	
	while(endY<=500)
	{
		endX=startX+(((int)(Math.random()*19))-9);
		endY=startY+((int)(Math.random()*10));
		stroke(247,255,38);
		line(startX,startY,endX,endY);
		startX=endX;
		startY=endY	
	}
	startX=((int)(Math.random()*501));
	startY=60;
	endX=0;
	endY=0;
	
	
}