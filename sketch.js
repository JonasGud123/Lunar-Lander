let playerX = 0;
let playerY = 0;
let velocityY = 2;
let rockX = 50;
let rockY = 50;
let rockSpeed = 8;




function league (x, y) {


push();
//rotate(PI)
scale(0.5);
translate(850, 0);


//Blue circle/circle background fill
fill(84, 140, 180);
strokeWeight(40);
ellipse(234+ playerX, 234 + playerY, 356);

//Black circle/outline
stroke(0, 0, 0);
ellipse(234 + playerX, 234 + playerY, 400);

//Gold outline going around the black outline
stroke(196, 161, 91);
strokeWeight(10);
noFill();
ellipse(234 + playerX, 234 + playerY, 400);

//Text inside the circle "L"
fill(196, 161, 91);
stroke(0, 0, 0);
strokeWeight(40);
textSize(500);
textFont("League");
text("L", 100 + playerX, 380 + playerY);
pop();


/*rectangle needed to pass previous checkpoint, 
but not needed in current character*/
//rect(-209, 20, 20)
}

function asteroid (x, y) {

    fill(166, 166, 166);
    rect(rockX, rockY, 100, 100);


}

function draw() {
    clear();
    league(playerX, 100);
let rockCord;
    
asteroid(rockX + rockCord ,rockY);
rockY = rockY + rockSpeed;

rockCord = Math.floor(Math.random() * 1300) + 1;



if (keyIsDown(67)) {
    console.log(rockCord);
}





}