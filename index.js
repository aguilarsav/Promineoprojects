//inside index.js, create one variable for each of the following real-life examples and assign them values:
//item price
//amount of money in wallet
//number of friends
//age in years
//first name
//last name
//middle initial

var itemPrice = 20;
var amountOfMoneyInWallet = 45;
var numberOfFriends = 5;
var ageInYears = 28;
var firstName = "Savannah";
var lastName = "Aguilar";
var middleInitial = "V";

//create the following variables by performing operations (addition, subtraction, concatenation) on the variables created in the previous step:
//new amount of money in wallet after buying the item

var newAmountInWallet = (itemPrice + amountOfMoneyInWallet);
console.log ("The new amount of money in my wallet after buying the item is " + newAmountInWallet +  " " + "dollars ");

//number of friends you've made each year based on your age variable and your number of friends variable
var numberOfFriendsMadeEachYear = (ageInYears + numberOfFriends);
console.log ("The number of friends I make each year based on my age and number of friends is " + numberOfFriendsMadeEachYear);

//full name based on first name, middle initial, and last name
var fullName = (firstName  + " " + middleInitial +" " + lastName ); 
console.log ("My full name is " + fullName);

//use console.log() to print out the values of all the variables you've created. Provide some detail as to what the value being printed is. 
//For ex., if I had a variable called fave state, I would do:
// let favoriteState= "AZ";
//console.log ('My favorite state is:' + favoriteState);