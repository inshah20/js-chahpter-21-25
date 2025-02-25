// Chapter No : 21-25 
// Strings Methods

// Qno:1 Write a program that takes two user input for first and 
// last name using prompt and merger them in a new variable
// titled FULL NAME.Greet the user using his full name.
// ans;
// let fisrtName = prompt("Enter your first Name");
// let lastName = prompt("Enter your last Name");
// alert("hello " +fisrtName + lastName);

// Qno :2 Write a program to take a user input about his favourite
//  mobile phone model. Find and display the lenght of user 
// input in your browser.
// ans;
// let favMobile = prompt("enter your favoutite Mobile phone");
// let lenght = favMobile.length;
// document.write("My favourite mobile phone is: " + favMobile + "<br />");
// document.write("Lenght of string is: " + lenght);

// Qno:3 Write a program to find the index letter "n" in the word
// "Pakistani" and display the result in your browser.
// ans;

// let word = "pakistani";
// let lastIndex = word.lastIndexOf("n");
// document.write("String:" + word + "<br />" + "Index of 'n': " + lastIndex);

// Qno:4 Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// ans;
// let word = "hello world";
// let lastIndexOf = word.lastIndexOf("l");
// document.write("String: " + word + "<br />" + "last index of 'l': " + lastIndexOf)

// Qno:5 Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
//ans;
// let word = "pakistani";
// let charWord = word.charAt(3);
// document.write("String: " + word + "<br />" + "Character at index 3: " + charWord);

// Qno:6 . Repeat Q1 using string concat() method
//ans;
// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// alert("hello " + firstName .concat(lastName));

// Qno:6 Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
//ans;
// let city1 = "hyderabad";
// let city2 = "Islamabad";
// let replace = city1.replace('hyder' , 'Islam');
// document.write("City: " + city1 + "<br />" + "After Replacement: " + city2);

// Qno:8 Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
//ans;
// let message = "Ali and Sami are Best friends. They play cricket and football together.";
// let replace = message.replace('and' , "&");
// document.write("Message: " + message + "<br />" + "After Relacement: " + replace);

// Qno:9 Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
//ans;
// let str = "472";
// let num = +str;
// document.write("Value " + str + "<br />"); 
// document.write("Type: " + typeof(str) + "<br />");
// document.write("Value: " + num + "<br />");
// document.write("Type: " + typeof(num) + "<br />");

// Qno:10 Write a program that takes user input. Convert and
// show the input in capital letters.
// let userInput = prompt("enter the word");
// let capital = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br />" + "Upper Case: " + capital);

//Qno:11 Write a program that takes user input. Convert and
// show the input in title case.
//ans;
// var userInput = prompt("enter the word");
// let firstchar = userInput.slice(0 , 1);
// firstchar = firstchar.toUpperCase();
// let restChar = userInput.slice(1);
// restChar = restChar.toLowerCase();
// let titleCase = firstchar + restChar;
// document.write("User input: " + userInput + "<br />" + "Title case: " + titleCase);

// Qno:12 Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
//ans;
// let num = 35.36;
// let str = num.toString();
// let dotindex = str.indexOf(".");
// let result = str.slice(0 , dotindex) + str.slice(dotindex + 1);
// document.write("Number: " + str + "<br />" + "Result: " + result);

// Qno:13 Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
//ans;
// let userName = prompt("Enter your name");
// for (let i = 0; i < userName.length; i++) {
// if (userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64) {
//   alert("please enter a valid username");
// }
// }

// Qno:14 You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability.
//ans;
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// alert("Welcome to our bakery sir/ma'am");
// let saylaniBakery = prompt("What you wanna order sir/ma'am").toLowerCase();
// let checkout = false

// for (let i = 0; i<A.length; i++){
//    if(saylaniBakery == A[i]){
//     document.write(saylaniBakery + " is available at index " + i + " in our bakery!!!");
//     checkout = true;
//    }
// }

// if(checkout === false){
// document.write("We are sorry. " + saylaniBakery + " is not available in our bakery!!1");
// }

// Qno:15 Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
//ans;
// let password = prompt("Enter your passward");
// if (password.length < 6) {
//     alert("password must be at least 6 characters long");
// }
// else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//     alert("password should not start with number");
// }

// let haveNumber = false;
// let haveLetter = false;

// for (i = 0; i < password.length; i++) {
//     let charcode = password.charCodeAt(i);

//     if (charcode >= 65 && charcode <= 90 || charcode >= 97 && charcode <= 122) {
//         haveLetter = true
//     }

//     else if (charcode >= 49 && charcode <= 57) {
//         haveNumber = true;
//     }
// }

// if (haveLetter && haveNumber) {
//     alert("Password accepted!")
// }
// else {
//     alert("Password should contain both numbers and letters \n Please enter a valid password");
// }

// Qno:16 Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser
//ans;

// let university = "University of Karachi";
// let universityArray = university.split("");
// for(let i = 0; i < universityArray.length; i++){
// document.write(universityArray[i] + "<br />");
// }

// Qno:17 Write a program to display the last character of a user 
// input.
//ans;-
// let userInput = "pakistan"
// let result = userInput.charAt(7);
// document.write("User input is: Pakistan" + "<br />" + " last charcter of input: " + result )

// Qno:18 You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.
//ans;
// let statement = "The quick brown fox jumps over the lazy dog";
// statement = statement.toLowerCase();
// let count = 0;

// for (let i = 0; i < statement.length; i++) {
//     if (statement.slice(i, i + 3) === "the") {
//         count++;
//     }
// }

// document.write("Text: The quick brown fox jumps over the lazy dog" + "<br />" + "There are " + count + " occurence(s) of the word 'the'");