let gnimg;
function preload() {
  gnimg = loadImage('gnimg.JPG');
}

function setup() {
  size(1227, 816);
  //set size according to background image size
  gnimg = loadImage("gnimg.JPG");
  background(gnimg);

  //loading background of the app
}




function draw() {
  for (let i = 0; i < 1227; i = i+10) {
    for (let a = 0; a < 816; a = a+10) {
      let c = get(i, a);
      fill(c);
      noStroke();
      rect(i, a, 10, 10);
    }
  }
}
