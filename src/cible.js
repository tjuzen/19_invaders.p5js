class Cible
{
	constructor (){
		this.x = random(50, global.width-50);
		this.y = 0;
		this.dead = false;
		this.size = 40;
		this.dir = 5;
		this.passed = 0;
		this.shoot = 30;
		this.shootposx = 0;
		this.shootposy = 0;
		this.count = 0;
		this.randomshoot = floor(random(0, global.height));
	}
    display = function() {
		if (this.y > global.height) {
			this.dead = true;
		}
		display_ennemi_img(this);
		this.y += 15;
    }
    die = function() {
        this.dead = true;
    }
	touch = function(ship) {
        let d = dist(this.x, this.y, ship.x, ship.y);
        if (d < this.size/2 + ship.size/2) {
            return true;
        } else {
            return false;
        }
    }
}

function display_ennemi_img(that){
	if (global.score < 500) {
		global.ennemi_img.resize(60, 60);
		imageMode(CENTER);
        image(global.ennemi_img, that.x, that.y);
	}
	else if (global.score >= 1000) {
		global.ennemi_img.resize(200, 200);
		imageMode(CENTER);
        image(global.ennemi_img, that.x, that.y);

	}
	//global.ennemi_img.resize((Math.max(global.score, 100) / 100) * 100, (Math.max(global.score, 100) /100) * 100);
	//imageMode(CENTER);
	//image(global.ennemi_img, that.x, that.y);
}
function cibles_display() {
    if (global.counter%20 == 0) {
        global.cibles.push(new Cible());
    }
	for (let j = 0; j < global.cibles.length; j++) {
		if (global.cibles[j].touch(global.ship)) {
            global.start = 2;
	   		global.cibles[j].die();
	   		global.ship.die();
            break;
	 	}
      	global.cibles[j].display();
  	}
    global.counter++;
}

function cibles_shoot() {
    for (let i = global.cibles.length-1; i >= 0; i--) {
            if (global.cibles[i].y == 15 && global.score < 500) {
                let ennemishoot = new Ennemishoot(global.cibles[i].x, global.cibles[i].y);
                global.ennemishoots.push(ennemishoot);
            }
			else if (global.cibles[i].y == 15 && global.score < 1000) {
                let ennemishoot = new Ennemishoot(global.cibles[i].x, global.cibles[i].y);
                global.ennemishoots.push(ennemishoot);
            }
			else if (global.cibles[i].y == 15) {
                let ennemishoot = new Ennemishoot(global.cibles[i].x, global.cibles[i].y);
                global.ennemishoots.push(ennemishoot);
            }
    	}
  	}

function destroy_cibles() {
	for (let i = 0; i < global.shoots.length; i++) {
   		global.shoots[i].display();
   		global.shoots[i].move();
   		for (let j = 0; j < global.cibles.length; j++) {
	 		if (global.shoots[i].touch(global.cibles[j])) {
	   			global.cibles[j].die();
	   			global.shoots[i].die();
                global.score += 100;
	 		}
   		}
 	}
	for (let i = 0; i < global.ennemishoots.length; i++) {
   		global.ennemishoots[i].display();
   		global.ennemishoots[i].move();
	 	if (global.ennemishoots[i].touch(global.ship)) {
            global.start = 2;
	   		global.ennemishoots[i].die();
	   		global.ship.die();
            break;
	 	}
 	}
	delete_dead_objects();
}

function delete_dead_objects()
{
	for (let i = global.shoots.length-1; i >= 0; i--) {
    	if (global.shoots[i].dead) {
      		global.shoots.splice(i, 1);
    	}
  	}
	for (let i = global.cibles.length-1; i >= 0; i--) {
    	if (global.cibles[i].dead) {
      		global.cibles.splice(i, 1);
    	}
  	}
}
