
var cells=new Array(5); 
var t1;
var killCount;
var lives;


function setup()
{
  createCanvas(1920,1080);
  t1=new turret();
 
 killCount=0;
 lives=5;
  for(var i=0; i<5; i++)
  {
    cells[i]= new Cell();
  }
  
}

function draw()
{
  background(0);
  railroad();
  t1.drawTurret();
  for(var i=0; i<5; i++)
  {
    cells[i].display();
    cells[i].move();
  }
  board();
  check();
  if(lives<=0)
  {
    noLoop();
    fill(255,0,0);
    textSize(64);
    text("Gameover", 800,400);
  } 
  
  
}

function mousePressed()
{
  background(0);
  fill(51,255,51);
  rect(276, t1.getTurretY()+50, 2000, 2);
  for(var j=0; j<5; j++)
  {
    if((t1.getTurretY()+50)<(cells[j].getY()+100)&&(t1.getTurretY()+50)>(cells[j].getY()-100))
    {
      if(cells[j].getX()>275&&cells[j].getX()<1920)
      {
        killCount++;
      }
      cells[j].setX((int)(Math.random()*1000+1920));
      cells[j].setY((int)(Math.random()*1080));
    }
  }
  
}

function keyPressed()
{
    if(keyCode==UP_ARROW)
    {
      t1.moveUp();
    }
    if(keyCode==DOWN_ARROW)
    {
      t1.moveDown();
    }  
  
}

function railroad()
{
  fill(192,192,192);
  rect(160, 0, 5, 1100);
  rect(185, 0, 5, 1100);

}

function board()
{
  fill(255,0,0);
  textSize(32);
  text("Hits: "+killCount, 30, 80);
  fill(0,0,255);
  textSize(32);
  text("Lives: "+lives, 30, 115);
  
}

function check()
{
   for(var l=0; l<5; l++)
  {
    if(cells[l].getX()<0)
    {
      lives--;
      cells[l].setX((int)(Math.random()*1000+1920));
    }
  }
}

class Cell
{
  
 
  
  
    constructor()
  {
    this.radius=100;
    this.xPos=(int)(Math.random()*1000+1920);
    this.yPos=(int)(Math.random()*1080);
    
  }
  
   setX( x)
  {
    this.xPos=x;
  }
  
   setY( y)
  {
    this.yPos=y;
  }
  
  display()
  {
    
      fill(255,0,0);
      ellipse(this.xPos, this.yPos, this.radius, this.radius);
   
    
  }
   move()
  {
  
    this.xPos-=5;
    
  } 
   getRadius()
  {
    return this.radius;
  }
   getY()
  {
    return this.yPos;
  }
   getX()
  {
    return this.xPos;
  }

}

class turret
{
  
 
  
  constructor()
  {
    this.boxWidth=70;
    this.boxLength=100;
    this.xPosition=140;
    this.yPosition=500;
  }
 
   drawTurret()
  {
    fill(102,102,0);
    rect(175, this.yPosition+35, 100, 30);
    rect(this.xPosition, this.yPosition, this.boxWidth, this.boxLength);
  }
   moveUp()
  {
    this.yPosition-=12;
  }
   moveDown()
  {
    this.yPosition+=12;
  }
  
  getTurretY()
  {
    return this.yPosition;
  }
  
}