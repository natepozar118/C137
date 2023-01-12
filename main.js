img = ""; 
function setup()  {
  canvas = createCanvas(640, 420);
  canvas.center();
}

function preload()  {

}

function draw()  {
  Image(img, 0, 0, 640, 420);
  FileList("FF0000");
  Text("Dog", 45, 75)
  nofill();
  stroke("FF0000");
  Rect(30, 60, 450, 350 );

  fill("FF0000");
  text("Cat", 320, 120);
  nofill();
  stroke("#FF0000")
  rect(300, 90, 270, 320 );
}