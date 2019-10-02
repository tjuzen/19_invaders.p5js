var ship;
var cibles = [];
var shoots = [];
// var picture = [];
var picture;

function preload() {
	// for (i = 0; i < 2 ;i++) {
	// 	picture = loadImage('images/theo${i}.jpg');
	// }
	picture = loadImage('images/theo0.jpg');
}

function setup() {
    createCanvas(1000, 1000);
    ship = new Ship();
    add_ship();
}


function draw() {
    background(0);
	ship_display();
	cibles_display();
	cibles_kill();
	destroy_cibles();
}

function add_ship()
{
	for (var i = 0; i < 12; i++) {
        cibles[i] = new Cible(i*80+80, 60);
    }
}

function cibles_kill() {
	for (var i = cibles.length-1; i >= 0; i--) {
			cibles[i].kill(ship);
    	}
  	}

function destroy_cibles() {
	for (var i = 0; i < shoots.length; i++) {
   		shoots[i].display();
   		shoots[i].move();
   		for (var j = 0; j < cibles.length; j++) {
	 		if (shoots[i].touch(cibles[j])) {
	   			cibles[j].die();
	   			shoots[i].die();
	 		}

   		}
 	}
	for (var i = shoots.length-1; i >= 0; i--) {
    	if (shoots[i].dead) {
      		shoots.splice(i, 1);
    	}
  	}
	for (var i = cibles.length-1; i >= 0; i--) {
    	if (cibles[i].dead) {
      		cibles.splice(i, 1);
    	}
  	}
}

function cibles_display() {
	for (var i = cibles.length-1; i >= 0; i--) {
      	cibles[i].display();
  	}
}

function ship_display() {
	ship.display();
	ship.move();
}

function keyReleased() {
	if (key != ' ') {
		ship.move(0);
	}
}

function keyPressed() {

    if (key === ' ') {
        var shoot = new Shoot(ship.x, ship.y);
        shoots.push(shoot);
    } else if (keyCode === RIGHT_ARROW) {
        ship.dir(5);
    } else if (keyCode === LEFT_ARROW){
        ship.dir(-5);
    }
}
