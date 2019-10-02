function Shoot(x, y)
{
    this.x = x;
    this.y = y;
    this.dead = 255;
    this.size = 20;

    this.display = function() {
        fill(this.dead,this.dead, 0);
        ellipse(this.x, this.y, this.size, this.size);
    }

    this.move = function() {
        this.y  = this.y - 1;
    }

    this.die = function() {
        this.dead = 0;
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
