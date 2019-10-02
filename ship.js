function Ship(dist)
{
    this.x = width/2;
    this.y = height-30;
    this.display = function() {
        fill(150,10,255);
        rectMode(CENTER);
        rect(this.x, this.y, 40, 40);
    }

    this.move = function(dir) {
        this.x += dir;
    }
}
