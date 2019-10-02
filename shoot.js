function Shoot(x, y)
{
    this.x = x;
    this.y = y;
    this.size = 20;
	this.dead = false;

    this.display = function() {
		if (this.y < 0) {
			this.dead = true;
		}
        fill(255,this.dead, 0);
        ellipse(this.x, this.y, this.size, this.size);
		stroke(random(255));
		line(this.x, this.y, random(width),random(height));
    }

    this.move = function() {
        this.y  = this.y - 10;
    }

    this.die = function() {
        this.dead = true;
    }

    this.touch = function(cibles) {
        var d = dist(this.x, this.y, cibles.x, cibles.y);
        if (d < this.size/2 + cibles.size/2) {
            return true;
        } else {
            return false;
        }
    }

}
