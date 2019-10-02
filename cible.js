function Cible(x, y)
{
    this.x = x;
    this.y = y;
    this.dead = false;
    this.size = 40;
	this.dir = 5;
	this.passed = 0;
	this.shoot = 30;
	this.shootposx = 0;
	this.shootposy = 0;

    this.display = function() {
		if (this.y > height) {
			this.dead = true;
		}
		picture.resize(40, 40);
		imageMode(CENTER);
        image(picture, this.x, this.y);
		stroke(random(255));
		line(this.x, this.y, random(-3000,3000),random(-3000,3000));
		console.log(this.y);
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
		if (this.x - 100 == ship.x) {
			this.shoot = 30;
			this.shootposx = ship.x;
			this.shootposy = ship.y;
		}
		if (this.shoot > 0) {
			stroke(255, 0, 0);
			line(this.x, this.y, this.x, this.shootposy);
			this.shoot--;
		}
	}

    this.die = function() {
        this.dead = true;
    }

}
