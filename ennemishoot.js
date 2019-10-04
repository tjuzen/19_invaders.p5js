function Ennemishoot(x, y)
{
    this.x = x;
    this.y = y;
    this.size = 50;
	this.dead = false;

    this.display = function() {
		if (this.y > width) {
			this.dead = true;
		}
        hadoken_img.resize(this.size/2, this.size/2 + 20);
		imageMode(CENTER);
        image(hadoken_img, this.x, this.y);
    }

    this.move = function() {
        this.y  = this.y + 20;
    }

    this.die = function() {
        this.dead = true;
    }

    this.touch = function(ship) {
        var d = dist(this.x, this.y, ship.x, ship.y);
        if (d < this.size/2 + ship.size/2) {
            return true;
        } else {
            return false;
        }
    }

}

function cibles_shoot() {
    for (var i = cibles.length-1; i >= 0; i--) {
            if (cibles[i].y == 15) {
                var ennemishoot = new Ennemishoot(cibles[i].x, cibles[i].y);
                ennemishoots.push(ennemishoot);
            }
    	}
  	}
