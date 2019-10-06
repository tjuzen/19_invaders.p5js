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
        global.hadoken_img.resize(this.size/2, this.size/2 + 20);
		imageMode(CENTER);
        image(global.hadoken_img, this.x, this.y);
    }

    this.move = function() {
        this.y  = this.y + 20;
    }

    this.die = function() {
        this.dead = true;
    }

    this.touch = function(/*ship*/) {
        var d = dist(this.x, this.y, global.ship.x, global.ship.y);
        // if (d < this.size/2 + global.ship.size/2) {
        //     return true;
        // } else {
        //     return false;
        // }

		return d < this.size/2 + global.ship.size/2
    }

}
