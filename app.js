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

var age = 20;
function day1AM() {
    console.log("Hello World");
    var fullName = "Courtney Magner";
    var heightInInches = 63;
    var address = "123 main st";
    console.log(typeof(firstname));
    var likesPizza = true;
    var hasTattos = false;
    console.log(typeof(likesPizza));
  
    age = age+1;
    console.log(age);
    age ++;
    age += 1;
    console.log(age);

    console.log(fullName + " is " + age + " years old.")
    console.log("Do you like Pizza? " + likesPizza)
    var feet = Math.floor(heightInInches/12);
    var inches = heightInInches % 12;
    //console.log(fullName + " is " + feet + " foot " + inches + " inches tall");
    
   
}

function day1PM(){
    print("Hello World");
    var convertedTemp = f2c(212);
    print(convertedTemp);
    print(canIGoToTheCasino(age, "IA"));
    age = 19;
    print(canIGoToTheCasino(age, "IA"));
    print(canIGoToTheCasino(age, "MN"));
    print(whatToWear(90));    
    print(whatToWear(60)); 
    print(whatToWear(0)); 

}
// day1AM(); 
// day1PM(); 
function print(input) {
    console.log(input);   
}

//converts Fahrenheit to Celsius 
//input: tempurate in fahrenheit
function f2c(t) {
    return((t - 32)*5/9);

}

function canIGoToTheCasino(age, location){
    return age >=21 && location == "IA" || age >= 18 && location == "MN"; 
}

function whatToWear (temp){
    if(temp >= 75){
        return "Swim Wear";
    } else if(temp >= 45) {
        return "Jacket or hoodie";}
    else if(temp >= 10) {
        return "Winter Coat"
    }
    else {
        return "Don't Go Outside"
    }

}
    

function day2AM (){
    

   var sum = 0;
   var count = 0;

   while (true) {

    var input = parseInt(prompt('Enter a number. Type 0 to end.'));
    if (input === 0) {
        break;
    } else {
        sum += input;
        count++;
    }
  }
  console.log('The average of your numbers is ' + sum/count);

}


day2AM();

