function Star() {
  this.x = random(-width/2, width/2);
  this.y = random(-height/2, height/2);
  this.z = random(width/2);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - global.speed;
    if (this.z < 1) {
      this.z = width/2;
      this.x = random(-width/2, width/2);
      this.y = random(-height/2, height/2);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(0);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width/2);
    var sy = map(this.y / this.z, 0, 1, 0, height/2);

    var r = map(this.z, 0, width/2, 8, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width/2);
    var py = map(this.y / this.pz, 0, 1, 0, height/2);

    this.pz = this.z;

    stroke(100);
    line(px, py, sx, sy);

  }
}

function starsbg() {
	translate(width / 2, height / 2);
	for (var i = 0; i < global.stars.length; i++) {
	    global.stars[i].update();
	    global.stars[i].show();
	  }
  translate(width, height);
}
