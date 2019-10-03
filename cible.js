function Cible()
{
    this.x = random(50, width-50);
    this.y = 0;
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
		ennemi_img.resize(60, 60);
		imageMode(CENTER);
        image(ennemi_img, this.x, this.y);
		this.y += 5;
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
                score += 100;
	 		}
   		}
 	}

    for (var i = 0; i < ennemishoots.length; i++) {
   		ennemishoots[i].display();
   		ennemishoots[i].move();
	 	if (ennemishoots[i].touch(ship)) {
            start = 2;
	   		ennemishoots[i].die();
	   		ship.die();
            break;
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
    if (counter%20 == 0) {
        var cible = new Cible();
        cibles.push(cible);
    }
	for (var j = 0; j < cibles.length; j++) {
        if (cibles[j].y > height) {
            ship.die();
            start = 2;
            break;
        }
      	cibles[j].display();
  	}
    counter++;
}
