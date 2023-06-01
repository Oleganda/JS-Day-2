// ----------------------Basic Exercises--------------------

//ex 1 | Temperature
let temperature = Math.floor(Math.random()* 31 - 5);
console.log(temperature); //to check if numbers generated correctly
if (temperature <= 10)
    { 
        console.log("The weather is cold");}
else {
    console.log("The weather is moodrate");
    }

//ex 2 | Random Food
let favouriteFood = ["humburger", "pizza", "ice cream", "chocolate"]
function randomFood(arr) {
    
    let favFoodLength = arr.length;
    let value = Math.floor(Math.random() * favFoodLength);
    console.log(value)
    console.log(arr[value]);
}
randomFood(favouriteFood);

//ex 3 | Crystal Gazer
function crystalGazer (numChildren, partnerName, geoLocation, jobTitle) {
    return(`You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numChildren} children`);
}
console.log(crystalGazer("2", "Oooo", "Vienna", "Developer"));

//ex 4 | Age Calculator
function ageCulculator(birthYear, currentYear) {
    let firstOrtion = (currentYear - birthYear);
    let secondOption = (firstOrtion + 1)
    return (`You are ${firstOrtion} or ${secondOption}`);
}
console.log(ageCulculator(1989, 2023));

//ex 5 | Age Calculator-improved
function ageCulculator(birthYear) {
    
    let currentYear = new Date().getFullYear();
    let yourAge = (currentYear - birthYear);
    let yourAgeTwo = (yourAge + 1);

        return (`You are ${yourAge} or ${yourAgeTwo}`);
}

//ex 6 | Degree-Radian Conversion
function convertorDegreeRadian (degrees) {
    const pi = Math.PI;
    return (degrees * (pi/180));
}
console.log(convertorDegreeRadian(90));


//ex 7 | Area and Volume of a box
function boxCalculator(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;

    return (`The area of the box is: ${area} The volume of the box is: ${volume}`)
}
console.log(boxCalculator(5,4,3));


//--------------------Intermediate Exercises-------------------------

//ex 8 | Capitalize only the first letter of a string
(function(){
    let text = "i am a web developer";
    console.log(text.charAt(0).toUpperCase() + text.substring(1));
})();

//ex 9 | Average Grade
function grades (math, physics, english) {
    let sum = math + physics + english;
    let average = sum/3;
    return(`Sum: ${sum} Average: ${average}`)
} 
console.log(grades(3,4,5));


//-------------------Advanced Exercises----------------------------

//ex 10 | Time Convert
function numberInMinutes(minutes) {
    let hour = minutes/60;
    let minute = hour%60;
    return `${minutes} minutes = ${hour} hours and ${minute} minutes`
}

console.log(numberInMinutes(300));

