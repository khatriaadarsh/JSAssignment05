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




// ===============>  1d and 2d Arrays and Loops  <========================


// Declare and initialize an empty multidimensional array.
// (Array of arrays)

const sampleArr = [
    [],
    []
];



// Declare and initialize a multidimensional array
// representing  number in 2d Array.

const numArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 0, 1, 2],
];

for (var i = 0; i < numArr.length; i++) {
    for (var j = 0; j < numArr.length; j++) {
        console.log(numArr[i][j] + " ");
    }
    console.log("<br>");
}



// Write a program to print numeric counting from 1 to 10.

for (var i = 1; i < 11; i++) {
    console.log(`- ${i}`)
}




// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var tableNum = +prompt("Enter a number: ");

var lengthOfTable = +prompt("Enter a length of table: ");

if (tableNum > 1 && lengthOfTable > 1) {
    for (var i = 1; i <= lengthOfTable; i++) {
        document.write(`${tableNum} * ${i} = ${tableNum * i} <br>`);
    }
}



// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}


// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

for (var i = 0; i <= 15; i++) {
    console.log(`Counting ${i}`);
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (var i = 10; i >= 1; i--) {
    console.log(`Reverse Counting: ${i}`);
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

for (var i = 0; i <= 20; i += 2) {
    console.log(`Even: ${i}`)
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for (var i = 1; i < 20; i += 2) {
    console.log(`Odd: ${i}`);
}

//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

for (var i = 2; i <= 20; i += 2) {
    console.log(`Series: ${i}k`)
}

// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.

// var cookies = ["Cake", "Apple pie", "Cookies", "Chips", "Pattern"];

var searchInput = prompt("Enter a cookie name: ");
var flag = 0;

for (var i = 0; i < cookies.length; i++) {
    if (cookies[i] == searchInput) {
        document.write(`${cookies[i]} is available at ${i} in our bakery`);
        flag = 1;
    }
}

if (flag == 0) {
    document.write(`Sorry, ${searchInput} is not available in our bakery`);
}

// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var findLargestNum = [24, 53, 78, 91, 12];

var largestNum = findLargestNum[0];

for (i = 0; i < findLargestNum.length; i++) {
    if (findLargestNum[i] > largestNum) {
        largestNum = findLargestNum[i];
    }
}
console.log(largestNum)


// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var smallestNum = [24, 53, 78, 91, 12];

var startIndex = smallestNum[0];

for (var i = 0; i < smallestNum.length; i++) {
    if (smallestNum[i] < startIndex) {
        startIndex = smallestNum[i];
    }
}
console.log(startIndex)



// Write a program to print multiples of 5 ranging 1 to 100.

for (var i = 5; i <= 100; i += 5) {
    console.log(`Given Range: ${i}`);
}
