PImage gnimg;


function setup() {
  size(1227, 816);
  //set size according to background image size
  gnimg = loadImage("gnimg.JPG");
  background(gnimg);

  //loading background of the app
}


function draw() {
  for (int i = 0; i < 1227; i = i+10) {
    for (int a = 0; a < 816; a = a+10) {
      color c = get(i, a);
      fill(c);
      noStroke();
      rect(i, a, 10, 10);
    }
  }
}
