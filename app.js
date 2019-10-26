function setup() {
    createCanvas(640, 480);
}

function draw() {
    noStroke();
    fill(0, 255, 0);
    rect (320, 240, 20, 20) // draws rectangle at x,y with zixe w,h
    
    fill(255, 0, 0)
    circle(450, 150, 20) //draws a circle at x,y with size w,h

    stroke(280, 25, 200)
    strokeWeight(2);
    line(0, 45, 640, 45);
}