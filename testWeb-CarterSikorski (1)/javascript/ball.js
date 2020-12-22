function setup() {
	var canvas=createCanvas(700, 500);
	sunColor=255;
	var increasing=false;
	planSize=10;
	planPos=true;
	var incP=false;
	planX=50;
}
function draw() {
	//drawing
	background(0);
	fill(255);
	i=0;
	while(i<20){
		ellipse(random(700), random(500), 4, 4);
		i++;
	}

    
	//sun
	if(sunColor==200)
		increasing=true;
	if(sunColor==255)
		increasing=false;
	if(increasing==true)
		sunColor++;
	else
		sunColor--;
	fill(255, sunColor, 0);
	ellipse(350, 250, 300, 300);


	//planet
	if(planX>600){
		planPos=false;
	}
	if(planX<100){
		planPos=true;
	}
	if(planPos==true)
		planX++;
	if(planPos==false){
		planX--;
		fill(255, sunColor, 0);
		ellipse(350, 250, 300, 300);
	} 
	
	if(planPos==true && planX<320)
		planSize=planSize+0.3;
	else if(planPos==true && planX>380)
		planSize=planSize-0.3;
	if(planPos==false && planX<350)
		planSize=planSize+0.1;
	else if(planPos==false && planX>350)
		planSize=planSize-0.1;
	
	
	fill(90, 60, 150);
	ellipse(planX, 200, planSize, planSize);
	
	fill(60,90,150)
	ellipse(planX-20, 325, planSize/2, planSize/2);
	
	fill(150,0,0)
	ellipse(planX+80, 275, planSize/3, planSize/3);
		
		if(planPos==false){
			fill(255, sunColor, 0);
			ellipse(350, 250, 300, 300);
	}
}
