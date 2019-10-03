// List of my objects

var ship;
var cibles = [];
var shoots = [];
var ennemishoots = [];

// State of the game

var start = 0;

// img for objects

var ship_img;
var ennemi_img;
var shoot_img;
var hadoken_img;

// counter to create ennemi shoot

var counter = 0;

// for the background

var stars = [];
var speed = 15;

// for the informations about the game

var score = 0;

function preload() {
	ennemi_img = loadImage('images/enemy.png');
	ship_img = loadImage('images/ship.png');
	shoot_img = loadImage('images/shoot.png');
	hadoken_img = loadImage('images/hadouken.png');
}

function setup() {
    createCanvas(600, 600);
	for (var i = 0; i < 400; i++) {
    stars[i] = new Star();
  }
}

function draw() {
	frameRate(20);
	background(0);
	if (start == 0) {
		background(0);
		wait_for_start();
	}
	else if (start == 1) {
		play();
	}
	else if (start == 2) {
		end_game();
	}
	show_fps();
}

function start_game() {
	ship = new Ship();
	start = 1;
}

function play() {
  	background(0);
	cibles_display();
	ship_display();
	cibles_shoot();
	destroy_cibles();
	display_score();
	show_fps();
	starsbg();
}
