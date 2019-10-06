// List of my objects

let global = {
	ship: null,
	cibles: [],
	shoots: [],
	ennemishoots: [],
	// State of the game
	start: 0,
	keys: [],
	// img for objects
	ship_img: null,
	ennemi_img: null,
	shoot_img: null,
	hadoken_img: null,
	click_img: null,
	// counter to create ennemi shoot
	counter: 0,
	// for the background
	stars: [],
	speed: 15,
	// for the informations about the game
	score: 0,
	listen: 0,
	song: null,
	width: window.innerWidth,
	height: window.innerHeight,
	starsCount: 1200,
	controllers: [],
	controllerType: "keyboard",
	moveX: 2,
	L2: 6,
	R2: 7,
	controllerKeys: [],
	controllerAxes: [],
}

function preload() {
	global.ennemi_img = loadImage('images/enemy.png');
	global.ship_img = loadImage('images/ship.png');
	global.shoot_img = loadImage('images/shoot.png');
	global.hadoken_img = loadImage('images/hadouken.png');
	global.click_img = loadImage('images/click.png');
	// global.song = loadSound('musique2.mp3');
}

function setup() {
    createCanvas(global.width, global.height);
	window.addEventListener("gamepadconnected", function(e) {
		//console.log("gamepad connect ", e);
		global.controllerType = "controller";
		//global.controllers.push();
	})
	window.addEventListener("gamepaddisconnected", function(e) {
		//console.log("gamepad connect ", e);
		global.controllerType = "keyboard";
		//global.controllers.push();
	})
	// global.song.play();
	// let lang = navigator.language || 'en-US'
	// let speechRec = new p5.SpeechRec(lang, gotSpeech);
	// let continuous = true;
	// let interim = true;
	//
	// speechRec.start(continuous, interim);
	// function gotSpeech() {
	// 	if (speechRec.resultValue) {
	// 		listen = (speechRec.resultString) + ' ';
	// 	}
	// 	console.log(listen);
	// }
	for (let i = 0; i < global.starsCount; i++) global.stars[i] = new Star();
}

let gamepadLoop = () => {
	if (!navigator.getGamepads()[0])
		return ;
	global.controllerKeys.length = 0;
	global.controllerAxes.length = 0;
	let controller = navigator.getGamepads()[0];

	let axes = controller.axes;
	axes.forEach((x,y)=>{
		if (y == global.moveX)
		{
			let round = Number(x.toFixed(1))
			console.log("Movex:", round, "IS 0: " + !round);
			if (round > 0 && round <= 1)
				global.controllerAxes.push(RIGHT_ARROW)
			else if (round < 0 && round >= -1)
			 	global.controllerAxes.push(LEFT_ARROW)
			else
			{
				 console.log("ON TOUCHE PA A LA MANETTE")
				 global.ship.xdir = 0;
				 global.controllerAxes.length = 0;
			}

		}

	})
	let buttons = controller.buttons;
	buttons.forEach((x,y)=>{
		if (x.pressed)
			global.controllerKeys.push(y)
	})
	//global.keys.push(...buttons.filter((x,y)=>x.pressed).map((x,y)=>y));
	if (global.controllerKeys.includes(global.R2))
		global.shoots.push(new Shoot(global.ship))
	//console.log("touched", buttons.filter((x)=>{
	//	return x.touched;
	//}));
	//console.log("pressed", buttons.filter((x)=>{
	//	return x.pressed;
	//}));
}


function draw() {
	frameRate(60);
	gamepadLoop();
	background(0);
	global.width = window.innerWidth;
	global.height =  window.innerHeight;
	if (global.start == 0) {
		background(0);
		wait_for_start();
	}
	else if (global.start == 1) {
		play();
	}
	else if (global.start == 2) {
		end_game();
	}
	show_fps();
}

function start_game() {
	reset_var();
	global.ship = new Ship();
	global.start = 1;
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
