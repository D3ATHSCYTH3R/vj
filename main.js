function preload(){
    img=loadImage('b1.jpeg');
}
function setup(){
    canvas=createCanvas(550, 400);
canvas.center();
video=createCapture(VIDEO);
video.hide();

}
function draw(){
    image(video, 0, 0, 275, 200);
    fill("skyblue");
    circle(30, 30, 20);
    fill("cyan");
    circle(410,350,30);
    ellipse(340, 180, 55, 55);
    recta=rect(340, 170, 120, 120, 20);
    
}