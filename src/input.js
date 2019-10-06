function mouseClicked() {
	if (global.start == 0 || global.start == 2) {
		start_game();
	}
}
function keyReleased(){
	if (keyCode != 32) global.keys.splice(global.keys.indexOf(keyCode), 1);
}

function keyPressed() {
	console.log(keyCode, key);
	if (keyCode == 32) global.shoots.push(new Shoot(global.ship));
	else global.keys.push(keyCode);
}
