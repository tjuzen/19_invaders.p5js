function Shoot(ship)
{
    this.x = ship.x;
    this.y = ship.y;
    this.size = 30;
	this.dead = false;

    this.display = function() {
		if (this.y < 0) {
			this.dead = true;
		}
        global.shoot_img.resize(this.size, this.size);
		imageMode(CENTER);
        image(global.shoot_img, this.x, this.y);
    }

    this.move = function() {
        this.y  = this.y - 40;
    }

    this.die = function() {
        this.dead = true;
    }

    this.touch = function(cibles) {
        var d = dist(this.x, this.y, cibles.x, cibles.y);
        // if (d < this.size/2 + cibles.size/2)
        //     return true;
        //  else
        //     return false
		return  (d < this.size/2 + cibles.size/2)
    }

}
