

// 1. Create a variable to store your name and display it in an alert.
let myName = "jeremiah";  
alert(myName);


//  Declare two number variables and show their sum, difference, product, and quotient.
let num1 = 10;
let num2 = 5;


let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;


console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Write a program that converts Celsius to Fahrenheit.
let celsius = 25; // Example temperature in Celsius
let fahrenheit = (celsius * 9/5) + 32;  
console.log(celsius + "°C is equal to " + fahrenheit + "°F.");

//Create a program that calculates the area of a rectangle using variables for length and width.
let length = 10; // Example length
let width = 5; // Example width
let area = length * width;
console.log("Area of the rectangle: " + area + " square units.");

// Write code that checks if a number is even or odd and displays the result.
let number = 7; // Example number
if (number % 2 === 0) {
    console.log(number + " is even.");
}
else {
    console.log(number + " is odd.");
}  

//Create a program that determines if a year entered is a leap year.
let year = 2024; // Example year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}   

//Write a function that returns the reverse of a string input.
function reverseString(str) {
    return str.split("").reverse().join("");
}
let inputString = "hello"; // Example string
let reversedString = reverseString(inputString);
console.log("Reversed string: " + reversedString);

//Create a function that counts the number of vowels in a string.
function countVowels(str) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
let inputString2 = "hello world"; // Example string
let vowelCount = countVowels(inputString2);
console.log("Number of vowels in '" + inputString2 + "': " + vowelCount);

//Write a program that finds the largest number in an array of 5 numbers.   
let numbers = [3, 7, 2, 9, 5]; // Example array
let largestNumber = Math.max(...numbers);
console.log("Largest number in the array: " + largestNumber);

//Create a function that checks if a string is a palindrome.
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
let inputString3 = "racecar"; // Example string
let palindromeCheck = isPalindrome(inputString3);
console.log(inputString3 + " is a palindrome: " + palindromeCheck);

//Write code that calculates the factorial of a number.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
let numberToFactorial = 5; // Example number    
let factorialResult = factorial(numberToFactorial);
console.log("Factorial of " + numberToFactorial + " is: " + factorialResult);

//Create a function that generates a random number between two given values.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let minValue = 1; // Example minimum value
let maxValue = 10; // Example maximum value
let randomNumber = getRandomNumber(minValue, maxValue);
console.log("Random number between " + minValue + " and " + maxValue + ": " + randomNumber);

//Write a program that converts a number of seconds into hours, minutes, and seconds.
let totalSeconds = 3665; // Example total seconds
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
console.log(totalSeconds + " seconds is equal to " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds.");

//Create a program that checks if a number is prime.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let numberToCheck = 11; // Example number
let primeCheck = isPrime(numberToCheck);
console.log(numberToCheck + " is prime: " + primeCheck);

// Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
let inputSentence = "hello world"; // Example sentence
let capitalizedSentence = capitalizeFirstLetter(inputSentence);
console.log("Capitalized sentence: " + capitalizedSentence);

//Create a program that calculates the sum of all numbers from 1 to n.
function sumOfNumbers(n) {
    return (n * (n + 1)) / 2;
}
let n = 10; // Example number
let sumResult = sumOfNumbers(n);
console.log("Sum of numbers from 1 to " + n + ": " + sumResult);

//Write code that finds the average of numbers in an array.
function calculateAverage(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
let numbersArray = [1, 2, 3, 4, 5]; // Example array
let average = calculateAverage(numbersArray);
console.log("Average of the array: " + average);

//Create a function that removes duplicate values from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5]; // Example array
let uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log("Array without duplicates: " + uniqueArray);

//Write a program that counts down from 10 to 1, then displays "Blast off!".
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Blast off!");

//Create a function that determines if a string contains only numbers.
function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}
let inputString4 = "12345"; // Example string
let numericCheck = isNumeric(inputString4);
console.log(inputString4 + " contains only numbers: " + numericCheck);

//Write code that finds the second smallest number in an array.
function findSecondSmallest(arr) {
    let uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => a - b);
    return uniqueArr[1]; // Second smallest number
}
let numbersArray2 = [5, 3, 8, 1, 4]; // Example array
let secondSmallest = findSecondSmallest(numbersArray2);
console.log("Second smallest number in the array: " + secondSmallest);

//Create a program that displays the multiplication table for a given number.
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
let tableNumber = 5; // Example number
multiplicationTable(tableNumber);

//Write a function that validates if a password meets specific criteria (at least 8 characters, one uppercase, one lowercase, one number).
function validatePassword(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLongEnough = password.length >= 8;
    return hasUppercase && hasLowercase && hasNumber && isLongEnough;
}
let passwordToCheck = "Password123"; // Example password    
let passwordValidation = validatePassword(passwordToCheck);

//Create code that simulates a simple calculator with basic operations
function calculator(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}
let numA = 10; // Example number
let numB = 5; // Example number
let operation = "add"; // Example operation
let calculatorResult = calculator(numA, numB, operation);
console.log("Calculator result: " + calculatorResult);

//Write a program that finds all factors of a given number.
function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
let numberToFactor = 12; // Example number
let factors = findFactors(numberToFactor);
console.log("Factors of " + numberToFactor + ": " + factors);

//Create a function that checks if two strings are anagrams.
function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
}
let string1 = "listen"; // Example string
let string2 = "silent"; // Example string
let anagramCheck = areAnagrams(string1, string2);
console.log(string1 + " and " + string2 + " are anagrams: " + anagramCheck);

// Write a program that generates the Fibonacci sequence up to n terms.
function fibonacci(n) {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence.slice(0, n);
}
let terms = 10; // Example number of terms
let fibonacciSequence = fibonacci(terms);
console.log("Fibonacci sequence up to " + terms + " terms: " + fibonacciSequence);

//Create code that sorts an array of numbers without using the built-in sort method.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
let unsortedArray = [5, 3, 8, 1, 4]; // Example array
let sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array: " + sortedArray);

//Write a function that counts how many times a specific element appears in an array.
function countOccurrences(arr, element) {
    return arr.filter(item => item === element).length;
}
let arrayToCheck = [1, 2, 3, 1, 4, 1]; // Example array
let elementToCount = 1; // Example element
let occurrences = countOccurrences(arrayToCheck, elementToCount);
console.log("Occurrences of " + elementToCount + " in the array: " + occurrences);

//Create a shopping cart program where users can add items, remove items, and calculate the total price.
let shoppingCart = [];
function addItem(item, price) {
    shoppingCart.push({ item, price });
}
function removeItem(item) {
    shoppingCart = shoppingCart.filter(cartItem => cartItem.item !== item);
}
function calculateTotal() {
    return shoppingCart.reduce((total, cartItem) => total + cartItem.price, 0);
}
addItem("Apple", 1.5); // Example item
addItem("Banana", 0.5); // Example item 
removeItem("Apple"); // Example item to remove
let totalPrice = calculateTotal();
console.log("Total price of items in the cart: $" + totalPrice);

