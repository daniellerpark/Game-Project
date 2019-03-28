//create a variable to hold one ball
let b;
let anotherBall;
let smileyface;
function setup() {
  createCanvas(800, 400);
  b = new square(0, 100,"red",5,5); //make a new ball from the Ball class and call it b.
  anotherBall = new square(200,20,"green",6,6);
  smileyface= new square (1,100,100,14,14);

}


function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    smileyface.drawBall();
    smileyface.moveBall();

}


//ball class from which to create new balls with similar properties.
class square {

	constructor(x,y,color, diameter){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.width=width;
        this.height=height;

	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    rect(this.x,this.y,this.width,this.height);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}
