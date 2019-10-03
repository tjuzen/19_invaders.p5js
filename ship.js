function Ship(dist)
{
    this.x = width/2;
    this.y = height-30;
	this.xdir = 0;
    this.ydir = 0;
    this.dead = false;
    this.size = 50;

    this.display = function() {
        if (this.dead == false) {
            fill(255);
            imageMode(CENTER);
            ship_img.resize(this.size, this.size);
            image(ship_img, this.x, this.y);
        }
    }

	this.dirx = function(dirp) {
		this.xdir = dirp;
	}

    this.diry = function(dirp) {
		this.ydir = dirp;
	}

    this.move = function(dir) {
		if (this.x <= 0) {
			this.x = 20;
		} else if (this.x >= width) {
			this.x = width - 20;
		}
        if (this.y <= 0) {
			this.y = 5;
		} else if (this.y >= width) {
			this.y = width - 5;
		}
        this.x += this.xdir*10;
        this.y += this.ydir*10;
	}

    this.die = function() {
        this.dead = true;
    }
}

function ship_display() {
	ship.display();
	ship.move();
}
