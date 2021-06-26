//week3 instructions
//1. 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//a.	Programmatically subtract the value of the first element in the array
// from the value in the last element of the array (do not use numbers to reference the last element, 

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var differenceOfElements = [ages[0] - ages[ages.length - 1]];

//find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
//b.	Add a new age to your array and repeat the step above to ensure 
//it is dynamic (works for arrays of different lengths).
//c.	Use a loop to iterate through the array and calculate the average age.
// Print the result to the console.
{
    var ages = [3, 9, 23, 64, 2, 8, 28, 93];
    ages.length = 15;
    ages[16] = 40;
    
    let count = 0;
    let total = 0;

    for(let i = 0; i < ages.length; i++){
        if(ages[i] != undefined){

            count++;
            total += ages[i];
        }
    }

    let avg = total / count;
    console.log(avg);
}

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
{
  var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
}

//a.	Use a loop to iterate through the array and calculate the average number of letters per name.
// Print the result to the console.
//b.	Use a loop to iterate through the array again and concatenate all the names together, 
//separated by spaces, and print the result to the console.


//3.	How do you access the last element of any array?
//The last elemeent of the array is retrieved is shown as:
var myArray = [1, 2, 3];
var lastElement = myArray[myArray.length - 1];
console.log(lastElement);




//4.	How do you access the first element of any array?
//The first element in an array is retrieved by asking for the 0 index of the array.
//example:
 var myArray = [1, 2, 3];
 myArray[0] = 1;
 console.log(myArray[0]);

//5.	Create a new array called nameLengths.
// Write a loop to iterate over the previously created
// names array and add the length of each name to the nameLengths array.
//test the for loop first
var nameLengths = [];

for(let i = 0; i < names.length; i++){
    console.log("question 5 for loop");
    console.log(names[i])
    console.log(names[i].length)
    nameLengths.push(names[i].length)
}

console.log(nameLengths);


//6.	Write a loop to iterate over the nameLengths array 
//and calculate the sum of all the elements in the array. 
//Print the result to the console.
var total = 0;
var nameLengths = ["Andy", "Jenn", "Kody"];
for(let i = 0; i < nameLengths; i++){
total += nameLengths[i];
}
console.log(nameLengths);

//7.	Write a function that takes two parameters, 
//word and n, as arguments and returns the word concatenated to itself 
//n number of times. (i.e. if I pass in ‘Hello’ and 3, 
//I would expect the function to return ‘HelloHelloHello’).
var a = "word";
var b = 3;

function allTheFunctions(a, b){
    return a.concat(a ++, b);

}
console.log(a, b);


//8.	Write a function that takes two parameters, 
//firstName and lastName, and returns a full name 
//(the full name should be the first and the last name separated by a space).
function myFunction(firstName, lastName) {
    console.log(firstName +" " + lastName);
}
myFunction("Full Name", "Last Name");



//9.	Write a function that takes an array of numbers 
//and returns true if the sum of all the numbers in the array is greater than 100.
var array = [4, 6, 8, 12];
var sum = array.reduce(function(a, b){
    return a + b;
    
}, 0);

console.log(sum);


//10.	Write a function that takes an array of numbers 
//and returns the average of all the elements in the array.
var ducks = [2, 3, 27, 33, 5];
function findAvg(array){
    let sum = 0;
    for(element of array){
        sum += element;
    }
    let total = array.length;
    let avg = sum/total;
    
    console.log(avg);
}
findAvg(ducks);
//alt answer:
//findSum(array)/array.length;

//11.	Write a function that takes two arrays of numbers 
//and returns true if the average of the elements in the
// first array is greater than the average of the elements in the second array.
var firstArr = [1, 2 , 3];
var secondArr = [2, 5, 6, 98];

firstArr.length = 15;
    firstArr[16] = 40;
    
    let count = 0;
    let total1 = 0;

    for(let i = 0; i < firstArr.length; i++){
        if(firstArr[i] != undefined){

            count++;
            total1 += firstArr[i];
        }
    }

    let avg = total1 / count;
    console.log(avg);



//12.	Write a function called willBuyDrink that takes 
//a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.50){
    return true;
}
    else return false;
}
console.log(willBuyDrink(102, 5));

//13.	Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.

//
function addition (a, b, add){
    return a + b;
}
function as a parameter - callback
function passed into another function as a parameter
parameters for setInterval
setTimeout(a, b, function)

Promise - Object
