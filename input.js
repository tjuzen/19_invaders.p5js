function mouseClicked() {
	if (start == 0 || start == 2) {
		start_game();
	}
}
// function keyReleased() {
// 	if (key != ' ') {
// 		ship.dirx(0);
//         ship.diry(0);
// 	}
// }

function keyPressed() {

    if (key === ' ') {
        var shoot = new Shoot(ship.x, ship.y);
        shoots.push(shoot);
    } if (keyCode === RIGHT_ARROW) {
        ship.dirx(2);
    } else if (keyCode === LEFT_ARROW){
        ship.dirx(-2);
    }
}
