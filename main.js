function preload(){

}

function setup(){
canvas = createCanvas(300,300);
canvas.Position(150,150);
video = createCapture(VIDEO);
video.hide()
}

function draw(){
image(video,230,150,220,200);
fill(0,150,150);
stroke(0,255,0);
circle(70,70,360);
circle(140,140,360);
circle(140,180,360);
circle(70,250,360);
}