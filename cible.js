function Cible(i)
{
    if (i < 9 && i >= 0) {
    this.x = i*60+60;
    this.startx = i*60+60;
    this.y = 100;
} else if (i < 18 && i >= 9) {
    this.x = (i - 9)*60+60;
    this.startx = (i-9)*60+60;
    this.y = 150;
} else if (i < 27 && i >= 18)
{
    this.x = (i - 18)*60+60;
    this.startx = (i - 18)*60+60;
    this.y = 200;
} else if (i < 36 && i >= 27) {
    this.x = (i - 27)*60+60;
    this.startx = ((i - 27)*60+60)/i;
    this.y = 250;
}
    this.dead = false;
    this.size = 40;
	this.dir = 5;
	this.passed = 0;
	this.shoot = 30;
	this.shootposx = 0;
	this.shootposy = 0;
    this.count = 0;

    this.display = function() {
		if (this.y > height) {
			this.dead = true;
		}
		picture.resize(40, 40);
		imageMode(CENTER);
        image(picture, this.x, this.y);
        console.log(this.x, this.startx, this.count)
        this.x += this.dir;
		if (this.x <= 0) {
			this.dir = 5;
			this.y += 40;
		}
		else if (this.x >= width) {
			this.dir = -5;
			this.y += 40;
		}

    }

	this.kill = function(ship) {
		// if (this.shoot > 0) {
            this.shootposx = ship.x;
			this.shootposy = ship.y;
			stroke(255, 0, 0);
			line(this.x, this.y, this.x, this.shootposy);
			this.shoot--;
		// }
	}

    this.die = function() {
        this.dead = true;
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
	for (var j = 0; j < cibles.length; j++) {
      	cibles[j].display();
  	}
}

function cibles_kill() {
	for (var i = cibles.length-1; i >= 0; i--) {
			cibles[i].kill(ship);
    	}
  	}
