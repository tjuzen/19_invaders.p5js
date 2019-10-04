function show_fps() {
	let fps = frameRate();
	fill(255);
	stroke(0);
	textSize(25);
	text("FPS: " + fps.toFixed(2), width-130, 30);
}

function end_game() {
	noStroke();
	fill(255, 0, 0);
	textSize(80);
	text('U SUCK', width/2-150, height/2+20);
	display_score();
	createP(listen);
}

function wait_for_start() {
	click_img.resize(596, 121);
	imageMode(CENTER);
	image(click_img, 300, 300);
}

function display_score() {
    fill(255);
	stroke(0);
	textSize(20);
	text("SCORE: " + score, 0+20, 30);
}
