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

//    while (true) {

//     var input = parseInt(prompt('Enter a number. Type 0 to end.'));
//     if (input === 0) {
//         break;
//     } else {
//         sum += input;
//         count++;
//     }
//   }
//   console.log('The average of your numbers is ' + sum/count);

  for(count = 1; count <= 15; count++){
      print(count);

  }

}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// i stands for interation
for(var i = 0; i < months.length; i++){
    print(months[i]);

var states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

states.forEach(function(state){
    print(state);i 
});



   
}
day2AM();

function day2PM (){
    var courtney = {
        firstName: "Courtney",
        middleName: "Beth",
        lastName: "Magner", 
        dob: [11,1,1994], // month, day, year
        likesPizza: true,
        heightInInches: 63,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function() {
            var today = new Date(); // new Date is built in function that pulls in the date
            var year = today.getFullYear();
            var month = today.getMonth() +1; // getMonth will result in 0 for Jan, 1 for Feb, ect. Adding 1 add the end to match numbers we know
            var day = today.getDate(); 
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]){
                myAge--;
            }
            return (myAge);
        },
    };

    print(courtney.firstName);
    print(courtney.fullName());
    print(courtney.age());

}

day2PM ();
