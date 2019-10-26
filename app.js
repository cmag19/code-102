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

function day1AM() {
    console.log("Hello World");
    var fullName = "Courtney Magner";
    var age = 25; 
    var heightInInches = 63;
    var address = "123 main st";
    // console.log(typeof(firstname));
    var likesPizza = true;
    var hasTattos = false;
    // console.log(typeof(likesPizza));
  
    age = age+1;
    console.log(age);
    age ++;
    age += 1;
    console.log(age);

    console.log(fullName + " is " + age + " years old.")
    console.log("Do you like Pizza? " + likesPizza)
    var feet = Math.floor(heightInInches/12);
    var inches = heightInInches % 12;
    console.log(fullName + " is " + feet + " foot " + inches + " inches tall");
}

day1AM(); 
