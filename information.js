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
}

function wait_for_start() {
	noStroke();
	fill(255);
	textSize(80);
	text('click to start', width/2-230, height/2+20);
}

function display_score() {
    fill(255);
	stroke(0);
	textSize(20);
	text("SCORE: " + score, 0+20, 30);
}
