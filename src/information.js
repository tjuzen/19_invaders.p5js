function show_fps() {
	let fps = frameRate();
	fill(255);
	stroke(0);
	textSize(25);
	text("FPS: " + fps.toFixed(2), global.width-130, 30);
}

function end_game() {
	noStroke();
	fill(255, 0, 0);
	textSize(80);
	text('U SUCK', global.width/2, global.height/2);
	display_score();

}

function wait_for_start() {
	global.click_img.resize(596, 121);
	imageMode(CENTER);
	image(global.click_img, 300, 300);
}

function display_score() {
    fill(255);
	stroke(0);
	textSize(20);
	text("SCORE: " + global.score, 0+20, 30);
}

function reset_var() {
	global.cibles.splice(0, global.cibles.length);
	global.shoots.splice(0, global.shoots.length);
	global.ennemishoots.splice(0, global.ennemishoots.length);
	global.score = 0;
}
