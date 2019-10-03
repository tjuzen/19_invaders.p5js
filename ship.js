function Ship(dist)
{
    this.x = width/2;
    this.y = height-30;
	this.xdir = 0;

    this.display = function() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, 40, 40);
    }

	this.dir = function(dirp) {
		this.xdir = dirp;
	}

    this.move = function(dir) {
		if (this.x <= 0) {
			this.x = 5;
		} else if (this.x >= width) {
			this.x = width - 5;
		}
        this.x += this.xdir*5;
	}
}

function ship_display() {
	ship.display();
	ship.move();
}
