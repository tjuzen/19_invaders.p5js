function Cible(x, y)
{
    this.x = x;
    this.y = y;
    this.dead = 255;
    this.size = 40;

    this.display = function() {
        fill(0,this.dead, 0);
        ellipse(this.x, this.y, this.size, this.size);
    }

    this.die = function() {
        this.dead = 0;
    }

}
