function Ship(dist)
{
    this.x = width/2;
    this.y = height-30;
	this.shipdir = 0;

    this.display = function() {
        fill(150,10,255);
        rectMode(CENTER);
        rect(this.x, this.y, 40, 40);
    }

	this.dir = function(dir) {
		this.shipdir = dir;
	}

    this.move = function(dir) {
		if (this.x <= 0) {
			this.x = 5;
		} else if (this.x >= width) {
			this.x = width - 5;
		}
        this.x += this.shipdir;
	}
}
