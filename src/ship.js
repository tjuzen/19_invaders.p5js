function Ship()
{
    this.x = width/2;
    this.y = height-30;
	this.xdir = 0;
    this.ydir = 0;
    this.dead = false;
    this.size = 50;
	this.boost = false;
    this.display = function() {
        if (this.dead == false) {
            fill(255);
            imageMode(CENTER);
            global.ship_img.resize(this.size, this.size);
			// /console.log(keys);
            image(global.ship_img, this.x, this.y);
        }
    }

	this.dirx = function(dirp) {
		this.xdir = dirp;
	}

    this.diry = function(dirp) {
		this.ydir = dirp;
	}

    this.move = function(dir) {
		//console.log(this.xdir, this.ydir);
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
	//let axes = null;
	global.ship.boost = global.keys.includes(SHIFT) || global.controllerKeys.includes(global.L2);
	console.log(global.controllerAxes);
	if (global.keys.includes(LEFT_ARROW) || global.controllerAxes.includes(LEFT_ARROW))
		global.ship.xdir = -2 - global.ship.boost;
	else if (global.keys.includes(RIGHT_ARROW) || global.controllerAxes.includes(RIGHT_ARROW))
		global.ship.xdir = 2 + global.ship.boost;
	else
	{
		global.controllerAxes.length = 0;
		global.ship.xdir = 0;
	}

	global.ship.move();
	global.ship.display();

}
