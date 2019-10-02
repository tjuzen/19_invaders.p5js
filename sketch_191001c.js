var ship;
var cibles = [];
var shoots = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (var i = 0; i < 6; i++) {
        cibles[i] = new Cible(i*80+80, 60);
    }
}


function draw() {
    background(0);
    ship.display();

    // display cibles

    for (var k = 0; k < cibles.length; k++)
    {
        cibles[k].display();
    }

    // deletes cibles et shoots

    for (var i = 0; i < shoots.length - 1; i++)
    {
        shoots[i].display();
        shoots[i].move();
        for (var j = 0; j < cibles.length; j++)
        {
            if (shoots[i].touch(cibles[j]))
            {
                shoots.splice(i, 1);
                i++;
            }
        }
    }
}

function keyPressed() {

    if (key === ' ') {
        var shoot = new Shoot(ship.x, ship.y);
        shoots.push(shoot);
    } else if (keyCode === RIGHT_ARROW) {
        ship.move(15);
    } else if (keyCode === LEFT_ARROW){
        ship.move(-15);
    }
}
