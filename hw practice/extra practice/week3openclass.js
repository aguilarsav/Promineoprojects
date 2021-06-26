// function willBuyDrink(isHotOutside, moneyInPocket){
//     if(isHotOutside && moneyInPocket > 10.50){
//     return true;
// }
  
// console.log(willBuyDrink(102, 5));

// function sayHello(userName){
//     console.log("hello ", userName);
// }
// sayHello("Kate");

// function addNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// addNumbers();

// function square(num) {
//     console.log(num * num)
// }
// square(5);

// let grades = [90, 87, 60, 72, 50, 100];

// let sum = grades.reduce(function(accumulator, currentValue) {
//     console.log("Accumulator  + currentValue", accumulator, currentValue);
//     console.log("CurrentValue", currentValue);

//     return accumulator + currentValue;
// });

// function findCircumference(math.pi, num2){
//     console.log(math.pi * (2 * num2)
// }
// findCircumference(3.14, 5);

// //Using the given function, gradList, 
// //add the following names to the passed array: 
// //Mary, Steven, Eddie. Sort the remaining students from Z-A.
// function gradList(graduates){
//     graduates.push("Mary", "Steven", "Eddie");
//     graduates.sort();
//     let reverseGrads = graduates.reverse();
//     return reverseGrads;
// }


// console.log(gradList(grads));
// }

// //Write a function called sortArray that accepts an array as an argument. 
// //Within the function, sort the array alphabetically or numerically. 
// //Return the sorted array.
// var array = ["zucchini", "apple", "melon"];
// function sortArray(array){
//     return array.sort();
// }
// console.log(sortArray(array));
// //Write a function called reverseArray that accepts an array as an argument. 
// //Within the function, reverse the array. Return the reversed array
// var array = ["hello", "goodbye", "eddie"];
// function reverseArray(array){
//     return array.reverse();
// }
// console.log(reverseArray(array));
// //Write a function called indexArray that accepts an array as an argument as well as a string.
// // Return the index of the string in the given array.
// // If the array does not contain the string, return false.
// function indexArray(array, string){
//     if(array.indexOf(string) == -1){
//         return false
//     }
//     return array.indexOf(string);
// }
// console.log(indexArray(array, "Eddie"));
// //Write a function called joinArrays that accepts two arrays as arguments.
// // Join the two arrays and return the new array.
// function joinArrays(array1, array2){
//     let newArray = array1.concat(array2);
//     return newArray;
// }
// console.log(joinArrays(array1, newArray));

// //Write a function called printArray that accepts an array as an argument.
// // Create a loop that will print each value of the passed in array.
// function printArray(array){
//     for(let i=0; i < array.length; i++){
//         console.log(array[i])
//     }
// }
// printArray(array);

var groceryList = ["nuggets ", "cheese", "noodles"];
for(let i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
}

function aliensAreReal(a, b){
console.log(a ** b);
}
aliensAreReal(4, 2);

var a = "word";
var b = 3;

function allTheFunctions(a, b){
    return a.concat(a ++, b);

}
console.log(a, b);

//Create a function named returnSum that accepts 3 integer variables
// named num1, num2, and num3. Return the sum of the three variables.
function returnSum(num1, num2, num3){
    return num1 + num2 + num3;
}

//create a function named checkout and accepts 2 variables, named 
//cardBalance and price.
//if the price is more than the card balance, return false.
//otherwise return new card balance
function checkout(cardBalance, price){
    if(price > cardBalance) { return false; }
    else { return cardBalance - price; }
}

//Write a function called speakFriend that takes one parameter. 
//Return the string "Access Denied". But, if the passed in value is "Mellon", return "Enter"
function speakFriend(a){
    if(a == "Mellon"){
        return "Enter";
    } 
    return "Access Denied";
}

//write the function loopUntilX that takes one parameter. within the function,
// write a loop that loops as many times as the passed in value, starting at 0.
//within the loop, print the number of iterationsto the console.
//once the loop is done, return true.
function loopUntilX(g){
    for(let i = 0; i < g; i++)
    console.log(i);
        return true;
}

//create a function called isBlue. it takes one parameter.
//return true if it is passed "blue", otherwise return false.
function isBlue(var1){
    return var1.toLowerCase() === "blue";
}
console.log(isBlue(a));

//Create a function called findCircumference that returns the circumference of a circle if given the radius.

The formula to find the circumference of a circle is PI * 2r where r is the radius
function findCircumference(radius){
    return Math.PI * (2 * radius);

//Write a function called sumOfTwo that takes two numbers as parameters and returns the sum.
function sumOfTwo(a, b){
    return a + b;
}

//create a function named calculateGPA that accepts 6 variables as parameters. some of these
//may be empty, "undefined", less than 0, or higher than 4. these should not be included 
//in the calculation.
//return GPA of all grades.
function calculateGPA(grade1, grade2, grade3, grade4, grade5, grade6){
    let GPA = 0;
    let emptyCount = 6;
    let sum = 0;
    
    if(grade1 <= 4 && grade1 >= 0){
        emptyCount--;
        sum = sum + grade1;
    }
    if(grade2 <= 4 && grade2 >= 0){
        emptyCount--;
        sum = sum + grade2;
    }
      if(grade3 <= 4 && grade3 >= 0){
        emptyCount--;
        sum = sum + grade3;
    }
      if(grade4 <= 4 && grade4 >= 0){
        emptyCount--;
        sum = sum + grade4;
    }
    
      if(grade5 <= 4 && grade5 >= 0){
        emptyCount--;
        sum = sum + grade5;
    }
    
      if(grade6 <= 4 && grade6 >= 0){
        emptyCount--;
        sum = sum + grade6;
    }
    
    
    GPA = sum / (6 - emptyCount);
    
  
    return GPA;
  }
  console.log(calculateGPA(a,b,c,d,e,f));

//write a function called loopUntilX that takes one parameter. within the function,
//write a loop that loops as many times as the passed in value.
//Starting at 0. within the loop print the number of iterations to the console.
//once the loop is done, return true.
function loopUntilX(a){
    for(let i = 0; i < a; i++;)
    console.log(i);
    return true;    
}}

class NotificationSender {
    constructor(status){
        this.status = status;
    }
    sendNotification(notification){
        console.log("Sending " + notification);
    }
findUserWithStatus(status){
    let users = getUsers(status);
    return users;
   
}}

class PromotionSender extends NotificationSender{
    constructor(status){
        super(status);
    }
    calculateDiscount(status){
        if(status === "LOYAL CUSTOMER"){
            return .15;
        }else if(status === "NEW CUSTOMER")
            return .05;
    }
        return 0;
}
}
class BillSender extends NotificationSender{
    constructor(status){
        super(status);
            }

    calculateFee(status) {
        if (status === "Monthly Balance Due"){
            return 60;
        } else if (status === "Past Due"){
            return 15; } 
            else (status === "Delinquent"){
                return 25;
            }
    }
let billSender = new BillSender("Monthly Balance Due");
billSender.sendNotification("Hi ${this.firstName}, this is your Monthly Balance Due");