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
