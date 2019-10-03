var ship;
var cibles = [];
var shoots = [];
var start = 0;
var col = 0;
var time_bg;
// var picture = [];

var picture;

var timeoutID;


function preload() {
	// for (i = 0; i < 2 ;i++) {
	// 	picture = loadImage('images/theo${i}.jpg');
	// }
	picture = loadImage('images/theo0.jpg');
}

function setup() {
    createCanvas(600, 600);
	// timeoutID = setTimeout(start_game, 3000);
}

function start_game() {
	ship = new Ship();
	for (var i = 0; i < 36; i++) {
		cibles[i] = new Cible(i);
	}
	start = 1;
}

function draw() {
	frameRate(20);
	background(col);
	// changecolor();
	if (start == 0) {
		wait_for_start();
	}
	else if (start == 1) {
		cibles_display();
		ship_display();
		cibles_kill();
		destroy_cibles();
	}
	let fps = frameRate();
	fill(255);
	stroke(0);
	text("FPS: " + fps.toFixed(2), 10, height - 10);
}

function wait_for_start() {
	noStroke();
	fill(255);
	textSize(60);
	text('click to start', width/2-150, height/2-30);
}

function changecolor() {
	col = random(250);
	console.log("Three seconds have elapsed.");
}

function mouseClicked() {
	start_game();
}
function keyReleased() {
	if (key != ' ') {
		ship.dir(0);
	}
}

function keyPressed() {

    if (key === ' ') {
        var shoot = new Shoot(ship.x, ship.y);
        shoots.push(shoot);
    } if (keyCode === RIGHT_ARROW) {
        ship.dir(2);
    }  if (keyCode === LEFT_ARROW){
        ship.dir(-2);
    }
}
