/*
JS-CC-007 : Perfect Numbers
Assignment Statement
Time to put your newly learned skills to work!
Perfect Number: In number theory, a perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. 

For instance, 6 has divisors 1, 2 and 3, and 1 + 2 + 3 = 6, so 6 is a perfect number. Wikipedia

Write js code block that give "It is a perfect number" or "It is not a perfect number" depends on Perfect Number Theory.

Also, don't forget to make the solution using python.

Submit
Students will push the solutions to their own public GitHub repos.
Learning Outcomes
At the end of the this coding challenge, students will be able to;

Analyze a problem, identify and apply programming knowledge for appropriate solution.

Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

Problem Statement
Write a js code that take number and return:

. Input is a perfect number or not
*/

const number = 28;

document.write("Kullanıcı tarafından girilen değer : ", number);

document.write("<br>");

let sum = 0;

// for (let i = 1; i < number; i++) {
//   if (number % i == 0) sum += i;
// }

let numberList = [];

// for (let i = 1; i < number; i++) numberList.push(i);
// Aşağıdaki kod yukarıdakini sağlar.
numberList = [...Array(Math.floor(number / 2) + 1).keys()];
numberList.shift();

// document.write(numberList, "<br>");

// Tek satırda günün özeti
// document.write(
//   numberList.filter((i) => !(number % i)).reduce((acc, i) => (acc += i), 0) ==
//     number
//     ? "It is a perfect number"
//     : "It is not a perfect number"
// );

// let sumList2 = numberList.map((eleman) => eleman * 2);

// document.write("<br>");

// document.write(sumList2);

let sumList = numberList.filter((eleman) => number % eleman == 0);

sum = sumList.reduce((acc, eleman) => (acc += eleman), 0);

document.write(number, " sayısına tam bölünen pozitif bölenler : ", sumList);

document.write("<br>");

document.write("Tam bölenlerimizin toplamı : ", sum);

document.write("<br>");

document.write(
  sum == number ? "It is a perfect number" : "It is not a perfect number"
);
