//Convert the following function into an arrow function. Refer to the new function as revert.
//function myFunction(value){ return !value; }
//let revert = (value) => !value;
//console.log(revert(a))

//Convert the following function into an arrow function. Refer to the new function as pythagoras.
//function myFunction(num1, num2) { return Math.sqrt((num1*num2)+(num2*num2)); }

let pythagoras = (num1, num2) => 
{ return Math.sqrt((num1*num2)+(num2*num2)); }

//Convert the following function into an arrow function. Refer to the new function as fancyAlgorithm.
function myFunction(num1, num2, num3) {
    let value = 0;
    for(let i =0; i < num3; i++){
        value = (value + num2) * num1;
    } return value / (num1 * (num3 * 10));
    }


let fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for(let i =0; i < num3; i++){
        value = (value + num2) * num1;
    } return value / (num1 * (num3 * 10));
    }


//Convert the following function into an arrow function. Refer to the new function as xor.
function myFunction(num1, num2) {
    return num1 ^ num2;
}

let xor = (num1, num2) => {
    return num1 ^ num2;
}

//Convert the following function into an arrow function. Refer to the new function as monthlyPayment.
function myFunction(yearlyPayment) {
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
}
let monthlyPayment = (yearlyPayment) => {
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
}

//Convert the following function into an arrow function. Refer to the new function as returnNumber.
//Note: The returned value is a template literal. Remember to use backticks.
function myFunction(num) {
    return `Your number is $(num)`
}
let returnNumber = (num) => {
    return `Your number is $(num)`
}

//Convert the following function into an arrow function. Refer to the new function as returnSum.
//function addTwoInputs(a,b) { return a+b; }
let returnSum = (a, b) => { return a+b; }

//Create a function called bingBong. This function will take 2 parameters. The first will be a number. 
//The second will be a callback.
//Create another function called displayResult that takes in one argument
// and logs it to the console.
//Within the bingBong function, 
//create a variable of any name containing an empty string.
// Loop as many times as the first passed argument. 
//For each odd iteration, add "Bing" to the end of the variable you created. 
//For each odd iteration, add "Bong" to the end of the variable you created. 
//Run the callback and pass this new variable as a parameter.
//Call the bingBong function once, passing iterations, and the displayResult function.
function bingBong(num, callback){
    let myString = "";
    for(i = 0; i < num; i++){
        if(i%2){
            myString += "Bong";
        } else{
            myString += "Bing";
        }
    }
    callback(myString)
}

function displayResult(result){
    console.log(result);
}

//bingBong(iterations, displayResult);
//Create a function called addTwoInputs. 
//It will take 2 arguments and add them together. 
//Create another function that checks a passed parameter. 
//If it is over 100, return 100. Otherwise, return the passed value.
//Log the following to the console:
//Call the addTwoInputs function. 
//For the arguments, use a callback of checkNumber for a and b.

function addTwoInputs(a,b) {
	return a+b;
}
function checkNumber(num){
    if(num > 100){
        return 100;
    }
    return num;
}


//console.log(addTwoInputs(checkNumber(a), checkNumber(b)));

//Call the addTwoInputs function with a and b as parameters.
//addTwoInputs(a,b);

//Write two functions, myFunction and returnSquareRoot. 
//In myFunction, accept 2 arguments and add them together.
// In returnSquareRoot, accept 1 argument and return its square root.
//Run myFunction but use a callback to returnSquareRoot as 
//the first argument and num2 as the second argument. 
//The callback will use num1 as it's argument.
//Log the results to the console.
//Math.sqrt() can be used to find the square root.

function myFunction(num1, num2){
    return num1 + num2;
}
function returnSquareRoot(num){
    return Math.sqrt(num);
}

//console.log(myFunction(returnSquareRoot(num1),num2));

//write 3 functions, returnFullName, getFirstName, getLastName.
//returnFullName should return a concatenated string of 2 arguments
//with a space sep them.
//getFirstName will take no arguments and return firstName, 
//getLastName will take no arguments and return lastName.
//The firstName and lastName variables are global and have been given to you.
//make a call to returnFullName with callbacks for the arguments to 
//getFirstName and getLastName as the first and second arguments respectively.
//log results to console. 
var firstName = "f";
var lastName = "l";

    
    function getFirstName(){
        return firstName;
    }
    function getLastName(){
        return lastName;
    }
    function returnFullName(f, l){
       return f + " " + l;
    }
  
    console.log(returnFullName(getFirstName(), getLastName()))

    //Call the addTwoInputs function as an argument for the doubleInput function. 
    //The two numbers to be added together then doubled will be stored in a and b.
    var a = 2;
var b = 3;

function doubleInput(x) {
    return console.log(x*2);
}

function addTwoInputs(num1,num2) {
	return num1+num2;
}
doubleInput(addTwoInputs(a,b));

//you will create two functions. the end goal is to allow a user to input a number 
//and return the circumference.
//the first function, findCircumference, will use the getRadius function
//and return the circumference based on the return value.
//the second function, getRadius will take in the user input and return the inputas an integer.
//log result to console. 

let findCircumference = (r) =>  2*r*Math.PI;
let getRadius = (radius) => parseInt(radius);
//console.log(findCircumference(getRadius(radius)));

//create a function called whoami.
//in this function, make a variable that is a concatenation
//of the first two arguments(the strings) and with a space between them.
//run the //callback and pass this new variable as a parameter.
//call the whoami function once, pass the fName, lName, and displayName function. 
//this function will have 3 parameters.
//2 will be strings, third is a callback.
//create another function called displayName. it has one argument. 
//log displayName to console.
function whoami(a, b, callback){
    let name = a + " " + b;
    callback(name);
}

function displayName(value){
    console.log(value)
}

//whoami(fName, lName, displayName);

// function sockQuestion([customers]){
//     const customers = [
//         {
//             name: 'Sam',
//             address: {
//                 street: '1234 W Bell Rd',
//                 city: 'Phoenix',
//                 zip: '85308',
//                 state: 'AZ'
//             },
//             membershipLevel: 'GOLD',
//             age: 32
//         },
//         //more customers with the same schema
//     ];

//   switch(customers) {
//     case 1: 
//         address != undefined;
//         console.log("match");
//         break;
//     case 2: 
//         city === "Peoria" && 
//         state === "AZ";
//         console.log("match");
//         break;
//     case 3:
//         membershipLevel === "GOLD" ||
//         "PLATINUM";
//         console.log("match");
//         break;
//     case 4: 
//         age <= 29 && 
//         membershipLevel === "SILVER"
//         console.log("match")
//         break;
//     case 5:
//         name.filter === "c" || "C";
//         console.log("match");    
//         break;
//     default: 
//     console.log("no match");
//     break;
//   }
for (var i = 0; i < 10; i++) {

    if (i  == 3 || i == 6) {
  
      i++;
  
    }
  
    console.log(i);
  
  }