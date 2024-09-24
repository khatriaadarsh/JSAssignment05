// ------------>  Arrays  <----------------

// Declare an empty array using JS literal notation to store
// student names in future.

var stdArr = [];
stdArr[0] = "Aadarsh Kumar";
console.log(stdArr[0]);

// Declare and initialize a strings array.

var stdNames = ["Ali", "Asad", "Muhammad"];
console.log(stdNames);

// Declare and initialize a numbers array.

var nums = [11, 22, 33, 44, 55];
console.log(nums)

// Declare and initialize a boolean array.

var boolArr = [true, false, true, false];
console.log(boolArr);

// Declare and initialize a mixed array.

var mixedArr = [11, "kumar", "Apple", true];
console.log(mixedArr);


// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD).

var qualified = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M", "Phil", "Phd"];

for (var i = 1; i < qualified.length; i++) {
    console.log(`${i}. ${qualified[i]}`);
}

// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var nameOfStudent = ["Wasif", "Ahmed", "Sharjeel"];
var total = 500;
var scoreOfStudent = [320, 230, 480];

var percentage = [];

for (var i = 0; i < scoreOfStudent.length; i++) {
    console.log(`Score of ${nameOfStudent[i]} is ${scoreOfStudent[i]} Percentage: ${percentage = (scoreOfStudent[i] / total) * 100}%`);
}

// 9. Initialize an array with color names.Display the array
// elements in your browser.
// a.Ask the user what color he / she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b.Ask the user what color he / she wants to add to the end &
//     add that color to the end of the array.Display the
// updated array in your browser.
// c.Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d.Delete the first color in the array.Display the updated
// array in your browser.
// e.Delete the last color in the array.Display the updated
// array in your browser.

var colorNames = ["blue", "green", "yellow"];

var addColorInStart = prompt('Which color do you want to Add in start? ');

colorNames.unshift(addColorInStart)

document.write(`Color Added in Start: ${colorNames}`);

var addColorInEnd = prompt("Which color do you want Add in end? ");

colorNames.push(addColorInEnd);

document.write(`\n Color Added in end: ${colorNames}`);

var firstColor = prompt("Enter first Color: ");

var SecondColor = prompt("Enter second Color: ");

colorNames.splice(0, 0, firstColor, SecondColor);

document.write(colorNames);

colorNames.shift();

document.write(colorNames);

colorNames.pop();

console.log(colorNames);


// f.Ask the user at which index he / she wants to add a color &
//     color name.Then add the color to desired
// position / index..Display the updated array in your
// browser.

var colorArr = ["Black", "White", "Red", "Green"];

var updationInArray = +prompt("Which position you want to add color: \n 1.Start \n 2.Between Start and End \n 3.End");

if (updationInArray == 1) {
    var addColorInStart = prompt("Enter a color: ");
    colorArr.unshift(addColorInStart);
    document.write(colorArr.join(" | "));
} else if (updationInArray == 2) {
    var startIndex = +prompt("Enter Index of color: ");
    var color = prompt("Enter color: ");
    colorArr.splice(startIndex, 0, color);
    document.write(colorArr.join(" | "));
} else if (updationInArray == 3) {
    var AddColorInEnd = prompt("Enter a color: ");
    colorArr.push(AddColorInEnd);
    document.write(colorArr.join(" | "));
} else {
    alert("Invalid option!");
}


// g.Ask the user at which index he / she wants to delete
// color(s) & how many colors he / she wants to delete.Then


var colorsArr = ["Green", "Yellow", "Blue", "Alpha"];

var deletionIndex = +prompt("Which option you want to delete color? \n 1. Start \n 2.Between Start and End \n 3. End");

if (deletionIndex == 1) {
    document.write(`<br>Before remove color: ${colorsArr.join(" | ")}`);
    colorsArr.shift();
    document.write(`<br>After remove color: ${colorsArr.join(" | ")}`);
} else if (deletionIndex == 2) {
    document.write(`<br>Before remove color: ${colorsArr.join(" | ")}`);
    var startIndex = +prompt("Enter start index: ");
    var endIndex = +prompt("Enter end index: ");
    colorsArr.splice(startIndex, endIndex);
    document.write(`<br>After remove color: ${colorsArr.join(" | ")}`);
} else if (deletionIndex == 3) {
    document.write(`<br>Before remove color: ${colorsArr.join(" | ")}`);
    colorsArr.pop();
    document.write(`<br>After remove color: ${colorsArr.join(" | ")}`);
}


// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var studentScores = [320, 230, 480, 120];

console.log("Before Sort: " + studentScores.join(" | "));

studentScores.sort();

console.log("After Sort: " + studentScores.join(" | "));

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var citiesForCopy = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];

console.log(`All Cities: ${citiesForCopy.join(" | ")}`);

var selectedCities = citiesForCopy.slice(0, 3);

console.log(`Selected Cities: ${selectedCities.join(" | ")}`);


// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var message = ["This", "is", "my", "cat"];
console.log("String: "+message.join(" ")); // Output: String: This is my cat


// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var fifoArr = [];

var numberFromUser = +prompt("Enter numbers for Array: \n1. Push Number: \n2. POP number: ");

if (numberFromUser == 1) {
    var lengthOfNumber = +prompt("Enter length: ");
    for (var i = 0; i < lengthOfNumber; i++) {
        var pushNumber = +prompt(`Enter ${i + 1} numbers: `);
        fifoArr.push(pushNumber);
        document.write(`${pushNumber}`);
    }
} else if (numberFromUser == 2) {
    if (fifoArr.length == "") {
        var pushNum = +prompt("Array is empty Please enter a number: ");
        fifoArr.push(pushNum);
        document.write("\n" + fifoArr);
    } else {
        var popNumber = +prompt("Enter a number: ");
        fifoArr.pop(popNumber);
        console.log(fifoArr);
    }
}


// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

var lifoArr = [];

var numberForLifo = +prompt("Enter numbers for Array: \n1. Push Number: \n2. POP number: ");

if (numberForLifo == 1) {
    var lengthOfNumber = +prompt("Enter length: ");
    for (var i = 0; i < lengthOfNumber; i++) {
        var pushNumber = +prompt(`Enter ${i + 1} numbers: `);
        lifoArr.push(pushNumber);
        document.write(`${pushNumber}`);
    }
} else if (numberForLifo == 2) {
    if (lifoArr.length == "") {
        var pushNum = +prompt("Array is empty Please enter a number: ");
        lifoArr.push(pushNum);
        document.write("\n" + lifoArr);
    } else {
        var popNumber = +prompt("Enter a number: ");
        fifoArr.shift(popNumber);
        console.log(lifoArr);
    }
} else {
    alert("Invalid Option!");
}


// Write a program to store phone manufacturers(Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown / select menu in your
// browser using document.write()

var mobileBrands = ["Sumsung", "Motorola", "Nokia", "Sony", "Haier"];

for (var i = 1; i < mobileBrands.length; i++) {
    document.write(`<br >${i} .${mobileBrands[i]}`);
}