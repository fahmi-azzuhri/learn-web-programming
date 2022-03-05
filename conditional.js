//if statement

let temperature = 100; //fahrenheit
let feeling = "";

//if statement
if (temperature < 60) {
  feeling = "chilly";
} else if (temperature >= 60 && temperature <= 85) {
  feeling = "warm";
} else {
  feeling = "hot";
}

console.log(feeling);

//switch
let color = "blue";

switch (color) {
  case "red":
  case "orange":
  case "yellow":
    console.log("warm color");
    break;
  case "violet":
  case "blue":
  case "green":
    console.log("cold color");
    break;
  default:
    console.log("unknown color");
}
