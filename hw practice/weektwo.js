//var x =5;
//console.log(x);

//LOGICAL OPERATORS
//&&
//||
//! expr

//5 == 4
// 5 > 4

// <
// >
// >= 
// <=

// LOGICAL OPERATOR && 5 > 4 && 4 > 10
// RETURNS FALSE
// LOGICAL OPERATOR OR: 4 > 10 || 1 == 1
// RETURNS TRUE

//CONDITIONAL STATEMENTS
// IF STATEMENT

//var firstName = "sam";
//if (firstName == "sam") {
//    console.log("Hello, sam!");
//
// }

//var firstName = "sam";
//if (firstName == "sam") {
//    console.log("Hello, sam!");
//
// } else {
//   console.log("Hey" + firstName); 
// }

//var costOfMilk = 10;
//if (costOfMilk < 2) {
//    console.log("We will buy 2 gallons");
//    } else if (costOfMilk < 3) {
//        console.log("We will buy only 1 gallon");
//    } else {
//        console.log("No too expensive");
//    }

//SWITCH STATEMENTS: used to perform different actions based on different conditions, the switch statement can select one of many code blocks to be executed. 

// switch(expression) {
//    case x:
        //code block
//        break;
//    case y:
        //code block
//        break;
//    case z:
        //code block
//        break;
//    default: 
        //code block
// }
//if there is no match, the default code block will execute
// BREAK KEYWORD MEANS IT WILL BREAK OUT OF THE SWITCH BLOCK  , NOT ALWAYS NECESSARY BECAUSE THE CODE BLOCK WILL END AT THE LAST CASE...
//var grade = "d";
// switch (grade) {
//    case "A" :
//        console.log("90-100");
//        break;
//    case "B" :
//        console.log("80-89");
//        break;
//    case "C" :
//        console.log("70-79");
//        break;
 //   default:
 //       console.log("0-69");
//}

//var day = 10;
//switch (day) {
 //   case 0:
//         day = "Sunday";
//         console.log("Sunday");
//         break;
//     case 1:
//         day = "Monday";
//         console.log("Monday");
//         break;
//     case 2:
//         day = "Tuesday";
//         console.log("Tuesday");
//         break;
//     case 3:
//         day = "Wednesday";
//         console.log("Wednesday");
//         break;
//     case 4:
//         day = "Thursday";
//         console.log("Thursday");
//         break;
//     case 5:
//         day = "Friday";
//         console.log("Friday");
//         break;
//     case 6:
//         day = "Saturday";
//         console.log("Saturday");
//         break;
//     default: 
//         console.log("you are dead");
    
// }

//FOR LOOPS
// for (let i = 0; i <10; i ++) {
//     console.log(i);
// }

// for (let i = 0; i <20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
   
// }

// let names = ["Alex", "Savi", "Edward"];
// for (let i = 0; i < names.length; i ++) {
//     console.log(names [i]);
// }

//WHILE LOOPS
// let a = 0;
// while ( a < 10) {
//     console.log(a);
//     a++;
// }

// //DO WHILE LOOPS
// do {
//     console.log(a);

// } while (a < 10)

// //PRACTICE 
// var temperature = 104
//     if (temperature <= 103); {
//     console.log("stay home"); }{
//          if (temperature > 104);
//         console.log("call a doctor");
//     }
//BOOLEAN PRACTICE
//notes:
//if ("" == false ) {
//        console.log("TRUE")
// } else { console.log("FALSE")} //returns true
//STRICT EQUALITY
// // console.log(1===1);
// console.log("hello" === "hello");
// console.log("1" === 1);
// console.log(0 === false);


//Q1: IS THE STATEMENT TRUE OR FALSE
//let x = 45; let y = 65; let z = 75;
//console.log(x + y > z);
//var isThirsty = 2;
//var money = 3;
//var costOfSoda = 3;

//LOOPS PRACTICE
//Q1 
//Write a for loop that prints every third number from 0 up to, and including, 99.
// ANSWER:
// for (var i =0; i <= 99; i ++){ 
 //       if(i % 3 === 0){ console.log(i);
//  //       } }
//  for (var i = 0; i <= 99; i ++){
//          if(i % 3 ===0) {
//                  console.log(i);
//          }
//  }

for (var i = 0; i < 10; i++) {

        if (i  == 3 || i == 6) {
      
          i++;
      
        }
      
        console.log(i);
      
      }
//Q2: will the following return the same answer?
//var i = 0; 
//do{ if(i % 3 === 0){ console.log(i); } i ++; } while (i <=99)

//Q2: Using the supplied variables, create a loop of your choice that will add cups of rice to a bowl.
// ea time a cup of rice is added, print "The bowl contains x cups of rice." , 
//where X is the number of cups added. 
// //Once the number of cups called for has been reached, print " We have enough rice!" (we don't need to know if the bowl is empty)
// var requiredCupsOfRice = 4;
// var currentCupsOfRice = 2;
// var x = "number of cups added";
// for (var currentCupsOfRice = 0; currentCupsOfRice <= 4; currentCupsOfRice ++){
//         console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");}
//         console.log("We have enough rice!");
// ANSWER: 
//  while(currentCupsOfRice != requiredCupsOfRice){
//     console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
// }
//  console.log('We have enough rice!');
// for (var currentCupsOfRice = 1; currentCupsOfRice ++){
//         if(currentCupsofRice < requiredCupsOfRice);
//         console.log("The bowl contains " + currentCupsOfRice + " cups of rice.");}
//          console.log("We have enough rice!");

//Q3: Write a for loop that prints the numbers 0 to x. 
//The x has been initialized for you and will be based on a user's input.
// var x = 10;
// for (var x = 0; x <= 10; x ++) { 
//         console.log(x);
// }


//Q4: Create a do while loop that adds numToAdd to itself as many times as the loop runs,
//which is set by howManyTimes. Print the total at the end.
// var numToAdd = 1;
// var howManyTimes = 5;
// do {
//         numToAdd += numToAdd;
//         howManyTimes--;
//     } while (howManyTimes > 0);

    
//     console.log(numToAdd)
//Q6: Check to see if userNumber is between 1 and 100.
// If it is, create a while loop that prints all real numbers starting with userNumber to 100.
// If not, print "Your number was not between 1 and 100."
// var userNumber = 20;
// var counter = userNumber;
// if ( userNumber <= 100 && userNumber >= 1 ) {
//     while ( counter <= 100 ) {
//         console.log(counter++);
//     }
// } else {
//     console.log("Your number was not between 1 and 100.");
// }


//Q7: The game will consist of 100 turns. 
//If the number of turns is even, you gain 5 points.
// If it's odd, you gain 3 points. If ever your score is equal to 125,
// you are reset back to 25 points.
// This will only be allowed to happen once.
// The game ends if you are able to make it through 100 turns or you reach more than 290 points, 
//whichever comes first.Using a for loop, create the game.
// var points = 5;
// var pointsReset = false; 
// var turns = 5;
// for(var i = 0; i < 100 && points < 290; i++){
//         if(points == 125 && pointsReset === false){
//             points = 25;
//             pointsReset = true;
//         } else if(i % 2 === 0){
//             points = points + 5;
//         } else {
//             points = points + 3;
//         }
        
//         console.log("Turns: " + i + " Score: " + points)
//     }
//Q8: Write a for loop that loops from 1-100 and prints the iteration count
// and "foo" if the iteration count is even.
//For example, if the iteration count is 2, then the console would read "2 foo". 
//The final output should be "100 foo". Notice there is a space between the number and foo.
// for (var i = 1; i <= 100; i++){
//         if ( i % 2 ===0) {
//                 console.log(i + " foo");
//         }
// }

//Q9: Create a for loop that prints out a multiplication table for num from 1 through 10 
// //as follows (the value of num will be input by the user):
// //If a user enters 1, the console should print the following:
// 1 x 1 = 1
// 1 x 2 =2
// 1 x 3 = 3
// 1 x 4 = 4
// 1 x 5 = 5
// 1 x 6 = 6
// 1 x 7 = 7
// 1 x 8 = 8
// 1 x 9 = 9
// 1 x 10 = 10
// for(var i=1; i<=10; i++) {
//         console.log(num +" x " + i + " = " + (num*i) );
//     }

//Q10: Write a while loop that does a countdown from the variable countdown.
// This number represents the number that a user enters.
// Check to make sure the number is not larger than 10,
// but greater than or equal to 3. Each time the loop runs, 
//print to the console the value of the counter followed by three periods (…)
//. Once out of the loop, print to the console "We have lift off!". 
//If a number is less than 3 or greater than 10, 
//then the only message printed to the console is "We have lift off!"
//If the user inputs 3, the output should be:3…2…1…We have lift off!
// var countDown = 5;
// if (countdown <= 10 && countdown >= 3) {
//         while (countdown >= 1) {
//             console.log(countdown + "...");
//             countdown--;
//         }
//     }
    
//     console.log("We have lift off!");

//Q11: Create a do/while loop that will print the userNumber and
// // then add 6 after each loop. Stop the loop once the number is greater than or equal to 100.
// do {
//         console.log(userNumber);
//         userNumber = userNumber + 6;
//     } while(userNumber <= 100);

//Q12:

//Q3: Using the given variables and any of the boolean operators, determine if you are thirsty and you have enough money to purchase a soda. Print the result
// var money = 5;
// var costOfSoda = 4;
// var isThirsty = 1;
// if (isThirsty === 1);
// {console.log( ( costOfSoda < money ) ); }
// {console.log( isThirsty && costOfSoda < money)}

// Q4: is the statement true or false? 
// //let a = 2; let b = 5; let c = 9; console.log(a >= b || a <= c && a + c > b);
//returns TRUE

// if  ("" == 0);
// console.log("true"); //this statement is TRUE
// if ("" === 0); console.log("true");
// var x = "";
// console.log(typeof x); //The Boolean value of "" (empty string) is false 

// //Q5: If the day is "Sunday" or "Saturday", print true. Otherwise, print false.
// var day1 = "Saturday" 
// var day2 = "Sunday"
// var day = "Saturday"
// console.log( day == day2 || day == day1 );

// var number = 24;
// if (number%3  && number%8 == 0) {
//          console.log("fizz"); } 
//          else if(number%2){ 
//                  console.log("buzz");} 

// var number = 21;
// if(number%7 == 0 && number%3 == 0) 
//         { console.log("FizzBuzz");}
//         else if(number%7 == 0){ 
//                 console.log("Buzz");} 

//CONDITIONALS Practice
//Q1: Create a nested if statement (the second if statement will only run if the first one evaluates to true) that checks to see if num1 is greater than or equal to num2.
//If true then check to see if num3 is greater than or equal to num4. If both conditions are true print "Both statements are true." If the first condition is true but the second isn't, print "The first statement is true, but the second is not."
//After the outer if statement, print "Program ended."
// var num1 = 10;
// var num2 = 3;
// var num3 = 7;
// var num4 = 8;
// if (num1 >= num2) 
//         { if (num3 >= num4) {
//         console.log("Both statements are true.");
//         } else if (num1 >= num2 || (num3  >= num4)) {
//                 console.log("The first statement is true, but the second is not."); 
//         } 
//    } console.log("Program ended.");

// //Q2: what will print- Poodles or Labs?
// if (45 > 45){
//         console.log("Poodles")
// } else { console.log("Labradors")}
//Q3: Write an IF/ELSE statement that prints the smaller of the two given inputs, num1 and num2. If they are the same, print "same".
// var num1 = 8;
// var num2 = 6;
// if (num1 > num2) { 
//                 console.log(num2); } 
//         else { (num1 === num2) 
//                 console.log("same"); }
//ALTERNATIVE ANSWER FROM INSTRUCTOR:
// if(num1 == num2){
//         console.log("same");
//     }
//     else if(num1 < num2){
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// Q4: what will print ? (answer: a)
//var num1 = 5
// var num2 = 5
// if (num1 === num2) {
//         console.log("a");
// } else if (num1 >= num2) {
//         console.log("b"); }
//          else {
//                  console.log("c");
//          }
//Q5: Write a switch statement to check the value of monthNumber and then when the match is made, print out that month in word format (i.e. July).var monthNumber = 5;
// switch (monthNumber) {
//         case 1: 
//                 monthNumber = 1;
//                 console.log("January");
//                 break;
//         case 2:
//                 monthNumber = 2;
//                 console.log("February");
//                 break;
//         case 3: 
//                 monthNumber = 3;
//                 console.log("March");
//                 break;
//         case 4:
//                 monthNumber = 4;
//                 console.log("April");
//                 break;
//         case 5:
//                 monthNumber = 5;
//                 console.log("May");
//                 break;
//         case 6:
//                 monthNumber = 6;
//                 console.log("June");
//                 break;
//         case 7:
//                 monthNumber = 7;
//                 console.log("July");
//                 break;
//         case 8:
//                 monthNumber = 8;
//                 console.log("August");
//                 break;
//         case 9:
//                 monthNumber = 9;
//                 console.log("September");
//                 break;
//         case 10:
//                 monthNumber = 10;
//                 console.log("October");
//                 break;
//         case 11:
//                 monthNumber = 11;
//                 console.log("November");
//                 break;
//         case 12:
//                 monthNumber = 12;
//                 console.log("December");
//                 break;
//         default: 
//                 console.log("Invalid Month")
// }
//Q6: Write a series of IF/ELSE IF statements that check the numberGrade and assign letterGrade to a string of the corresponding letter grade. Print the letter grade to the console.
 //var numberGrade =75;
// if (numberGrade >= 90) {
//         console.log("A"); }
//         else if  (numberGrade >= 80) 
//               {  console.log("B"); } 
//         else if (numberGrade >= 70)
//         { console.log("C");
// }       else if (numberGrade >= 60)
//         { console.log("D"); }
//         else if (numberGrade >=0)
//         { console.log("F"); }
//Q3: Write an if statement that compares num1 to num2 and prints the larger of the two. If they are equal, print "Num1 is equal to Num2.
//  var num1 = 8;
//  var num2 = 6;
//  if (num1 == num2) { 
//                  console.log("Num1 is equal to Num2"); } 
//         else { (num1 > num2)  
//                 console.log(num1); }
//Q7: Create an if/else if statement that checks myNumber against num1 and based on which condition evaluates to true, print the following messages:
// num1 + " is smaller than my number, " + myNumber num1 + " is larger than my number, " + myNumber num1 + " is equal to my number, " + myNumber 

//  var myNumber = 14;
// var num1 = 14;
//  if (num1 < myNumber) {
//         console.log(num1 + " " + "is smaller than my number" + " " + myNumber);
//  } else if (num1 > myNumber) {
//          console.log(num1 + " " + "is larger than my number" + " " + myNumber);
// } else { 
//          console.log(num1 + " is equal to my number, " + myNumber);
// }
// //Q8: What will print to the console if num1 = 3 and num2 = 5?
// var num1 = 3;
// var num2 = 5;
// if (num1 == num2) { console.log("a");} 
// else if (num1 > num2) {console.log("b"); }
// else {console.log("c"); }
// Q9: Write an if statement that compares num1 to num2. If they are equal, print "Num1 is equal to Num2."
// var num1 = 8;
// var num2 =8;
// if (num1 == num2) {
//         console.log("Num1 is equal to Num2");
// }
// Q10:Write a switch statement that checks the numberOfDay and prints the name of the day of the week.
// For example, if numberOfDay is 1, "Sunday" will be printed to the console.

// If the number is not between 1 and 7, print "The number of day is invalid."
// var numberOfDay = 3;
// switch (numberOfDay) {
//         case 1 :
//           numberOfDay = 1;
//          console.log("Sunday");
//          break;
//     case 2:
//         numberOfDay = 2;
//        console.log("Monday");
//         break;
//      case 3:
//         numberOfDay = 3;
//          console.log("Tuesday");
//         break;
//      case 4:
//         numberOfDay = 4;
//          console.log("Wednesday");
//         break;
//     case 5:       
//         numberOfDay = 5;
//          console.log("Thursday");
//         break;
//     case 6:
//         numberOfDay = 6;
//          console.log("Friday");
//          break;
//      case 7:
//         numberOfDay = 7;
//          console.log("Saturday");
//          break;

//     default: 
//         console.log("The number of day is invalid.");
// }
//Q11: If you omit the break statement, the next case will be executed even if the evaluation does not match the case. (answer: true)
//Q12:Write an IF statement that checks to see if there is enough money to cover the cost of a soda. If so, print "I can buy a soda!".
// //If not, print "I need to earn some more money!"
// var money = 2;
// var costOfSoda = 3;
// if (money >= costOfSoda) {
//         console.log("I can buy a soda!");
// } else { (money < costOfSoda) 
//         console.log("I need to earn some more money!");
// }

//BOOLEAN PRACTICE Qs:
//Q1: If the day is "Sunday" or "Saturday", print true. Otherwise, print false.
// var day = "Friday";
// var day1 = "Saturday"
// var day2 = "Sunday"
// console.log( day == day2 || day == day1 );
//answer: console.log(day == "Sunday" || day == "Saturday")
// //Q2: what is the expected output:
//  var a = 2;
//  var b = 15;
//  var c = 9;
//  console.log(a >= b || a <= c && a + c > b);

//Q3: Using Boolean Operators, 
//print the result of a is greater than b, or b and c are greater than d.
// var a = 2;
// var b = 14;
// var c = 6;
// var d = 3;
// //ANSWER: console.log(a > b || (b > c && c > d));

//Q4: What is the expected output?
// var a = 100;
// var b = 200;
// var c = 300;
// console.log(a >= b || a <= c);

//Q5: Determine if myGrade is passing. Print true if it is and false if not.
//Then, determine if myGrade is an A. Print true or false to the console. (A will be 90 or above).
//var myGrade = 90;
//var passingGrade = 70;
//answer: console.log(myGrade >= passingGrade);
//console.log(myGrade >= 90);

//Q6: what will the statement print?
// var num1 = 16;
// var num2 = 52;
// var num3 = 45;
// console.log(num1 >= num2 && num3 > num2);

//Q7: Using the given variables and any of the boolean operators, 
//determine if you are thirsty and you have enough money to purchase a soda. Print the result.
//When testing, use a 0, for false, or a 1, for true
// var money = 3;
// var costOfSoda = 0;
// var isThirsty = 1;
// answer: console.log(isThirsty && money >= costOfSoda)

//Q8:Using a boolean operator, print the result of num1 is greater than num2.
//Then write another comparison printing the result of num1 is less than num2.
// var num1 = 4;
// var num2 = 8;
// console.log(num1 > num2);
// console.log(num1 < num2);

// //Q9: What is the expected output?
// var num1 = 16;
// var num2 = 52;
// var num3 = 45;

// console.log(num1 >= num2);
// console.log(num2 <= num3);
// console.log(num1 < num3);
//answer: f, f, t

//Q10:Using Boolean Operators, print the result of a is greater than b or b and c are greater than d.
// var a = 2;
// var b = 1;
// var c = 8;
// var d = 22;
// console.log(a > b || (b >d) && (c > d));
//Q11: We can go if we have enough money for a plane ticket and we have vacation time. Determine if we can go.
// var planeTicket = 250;
// var money = 160;
// var vacationTime = 1;
// console.log(money && vacationTime > planeTicket );
// //ANSWER:
// console.log((money >= planeTicket) && vacationTime)
//Print true or false to the console if daytime is true and sunny is true or indoorPool is true.
//  var daytime = 0;
//  var sunny = 0;
//  var indoorPool = 1;
// // console.log((daytime == 0) && (sunny == 0) || (indoorPool == 1));
// //answer:
//  console.log(indoorPool || (sunny && daytime));
// var lottery = 8;
// var myNumber = 4;

// console.log(lottery ===myNumber);
//  var num1 =156;
//  if (num1 % 2 == 0){ console.log ('yes')} else {console.log("no")}

//  var x =45;
//  var y = 65;
//  var z = 75;
//  console.log(x + y > z);
