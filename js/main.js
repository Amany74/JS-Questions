// Question 1
// Enter number then print it 

/*
var num = Number(window.prompt("Enter a number : "));

console.log(num);

*/


// ********************************************************************

// Question 2
//take number from user then print yes if that number can divide by 3
// and 4 otherwise print no

/*
var num = Number(window.prompt("Enter a number : "));

if (num%3 == 0 & num%4 == 0) 
    console.log("Yes!");
else 
    console.log("No!");

*/




// ********************************************************************

// Question 3
//allows the user to insert 2 integers then print the max

/*
var firstNum = Number(window.prompt("Enter the first number : "));
var secondNum = Number(window.prompt("Enter the second number : "));


if(firstNum >= secondNum) 
    console.log(firstNum);
else
    console.log(secondNum);

*/


// ********************************************************************

// Question 4
// allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.

/*
var num = Number(window.prompt("Enter an integer number : "));

if(num < 0)
    console.log("Negative");
else
    console.log("Positive");

*/




// ********************************************************************

// Question 5
// take 3 integers from user then print the max element
// and the min element.


/*
var num1 = Number(window.prompt("Enter an first number : "));
var num2 = Number(window.prompt("Enter an second number : "));
var num3 = Number(window.prompt("Enter an third number : "));

var max = 0;
var min = 0;

if(num1 > num2 & num1 > num3)
    max = num1;
else if(num2 > num1 & num2 > num3)
    max = num2;
else
    max = num3

if(num1 < num2 & num1 < num3)
    min = num1;
else if(num2 < num1 & num2 < num3)
    min = num2;
else
    min = num3

console.log("max element = ",max);
console.log("min element = ",min);

*/







// ********************************************************************

// Question 6
// allows the user to insert integer number then
// check If a number is oven or odd

/*
var num = Number(window.prompt("Enter a number to check: "));

if(num%2==0)
    console.log("EVEN");
else
    console.log("ODD");

*/




// ********************************************************************

// Question 7
// take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant

/*
var char = window.prompt("Enter a character to check: ").toLowerCase();

if(char == "a" | char == "e" | char == "i" | char == "o" | char == "u")
    console.log("Vowel");
else
    console.log("Consonant");

*/


// ********************************************************************

// Question 8
// allows user to insert integer then print all numbers between 1 to
// that’s number
    
/*
var n = Number(window.prompt("Enter a number to loop until: "));

for(var i = 1; i < n;i++){
    console.log(i);
}

*/




// ********************************************************************

// Question 9
// allows userto insert integerthen print a multiplication table up to 12.

/*
var n = Number(window.prompt("Enter a number to print mult. table: "));
var output = n + " ";
for(var i = 1; i <= 12 ;i++){
    output += i*n + " ";
}

console.log(output);
*/



// ********************************************************************

// Question 10
// allows to user to insert number then print all even numbers
// between 1 to this number

/*
var n = Number(window.prompt("Enter a number to print all evens: "));
var output = " ";
for(var i = 1 ; i <= n ; i++){
    if(i%2==0)
    output += i + " ";
}

console.log(output);

*/




// ********************************************************************

// Question 11
// Take two integer and print power

/*
var n1 = Number(window.prompt("Enter number: "));
var n2 = Number(window.prompt("Enter power: "));
var res = 1;

for(var i = 1 ; i <= n2 ; i++){
    res *= n1;
}

console.log(res);

*/




// ********************************************************************

// Question 12
// Write a program to enter marks of five subjects and calculate total, average and
// percentage.


/*
var m1 = Number(window.prompt("Enter mark 1: "));
var m2 = Number(window.prompt("Enter mark 2: "));
var m3 = Number(window.prompt("Enter mark 3: "));
var m4 = Number(window.prompt("Enter mark 4: "));
var m5 = Number(window.prompt("Enter mark 5: "));

var sum = m1+m2+m3+m4+m5;
console.log("Total marks : " + sum);
console.log("Avg marks : " + (sum/5));
console.log("Percentage : " + ((sum/500)*100));

*/




// ********************************************************************

// Question 13
// program to input month number and print number of days in that
// month.

/*
var month = Number(window.prompt("Enter the month number:"));

var days = 0;

if(month == 1)
days = 31;

else if(month == 2)
days = 28;
else if(month == 3)
days = 31;
else if(month == 4)
days = 30;
else if(month == 5)
days = 31;
else if(month == 6)
days = 30;
else if(month == 7)
days = 31;
else if(month == 8)
days = 31;
else if(month == 9)
days = 30;
else if(month == 10)
days = 31;
else if(month == 11)
days = 30;
else if(month == 12)
days = 31;
else
console.log("Invalid month number");


if (days){
    console.log("Days in month: " + days);
}

*/

// ********************************************************************

// Question 14
// input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade

/*
var p = Number(window.prompt("Enter mark Physics: "));
var c = Number(window.prompt("Enter mark Chemistry: "));
var b = Number(window.prompt("Enter mark Biology: "));
var m = Number(window.prompt("Enter mark Mathematics: "));
var comp = Number(window.prompt("Enter mark Computer: "));

total  = p+c+b+m+comp;
percent = (total/500)*100;

console.log("percentage : " +percent+ " ");

if (percent >= 90){
    console.log("Grade: A");

}
else if (percent >= 80){
    console.log("Grade: B");

}
else if (percent >= 70){
    console.log("Grade: C");

}
else if (percent >= 60){
    console.log("Grade: D");

}
else if (percent >= 40){
    console.log("Grade: E");

}
else if (percent < 40){
    console.log("Grade: F");
}
else{
    console.log("Error ! Enter valid grades");
}

*/



// ****************** Switch cases *********************************

// Question 15
// print total number of days in a month

/*
var month = Number(window.prompt("Enter the month number:"));

var days = 0;

switch(month) {
    case 1:
        days = 31;
        break;
    case 2:
        days = 28;
        break;
    case 3:
        days = 31;
        break;
    case 4:
        days = 30;
        break;
    case 5:
        days = 31;
        break;
    case 6:
        days = 30;
        break;
    case 7:
        days = 31;
        break;
    case 8:
        days = 31;
        break;
    case 9:
        days = 30;
        break;
    case 10:
        days = 31;
        break;
    case 11:
        days = 30;
        break;
    case 12:
        days = 31;
        break;
    default:
        console.log("Not a month number");
        break;
}

if (days) {
    console.log("Days in month: "+ days);
}

*/


// **********************************************************
// Question 16
// to check whether an alphabet is vowel or consonant

/*
var char = window.prompt("Enter a character to check: ").toLowerCase();
var res ='';

switch(char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        res = "vowel";
        break;
    default:
        res = "consonant";
        break;
    }
console.log(res);

*/


// **********************************************************
// Question 17 find maximum between two numbers 

/*
var num1 = Number(window.prompt("Enter number one to get the max : "));
var num2 = Number(window.prompt("Enter number two to get the max : "));

var flag= 0;

if(num1 > num2)
    flag = 1;
else if(num2 > num1)
    flag = 2;
else
    console.log("Enter valid numbers");


switch(flag){
    case 1 :
        console.log("Number one is the maximum: ", num1);
        break;
    case 2 :
        console.log("Number two is the maximum : " , num2);
        break;
    case 0:
        console.log("Enter valid numbers");
        break;
}
    
*/



// **********************************************************
// Question 18 check whether a number is even or odd

/*
var num = Number(window.prompt("Enter number to check even or odd : "));

switch(num%2)
{
    case 0:
        console.log("EVEN :",num);
        break;
    case 1:
        console.log("ODD : ",num);
        break;
}

*/


// **********************************************************
// Question 19 check whether a number is positive or negative or zero


/*
var num = Number(window.prompt("Enter number to check even or odd : "));

switch(num>0)
{
    case true:
        console.log("Positive : ",num);
        break;
    case false:
        console.log("Negative : ",num);
        break;
}


*/



// **********************************************************
// Question 20 create Simple Calculator


/*
window.alert("Welcome to simple calculator ,press ok to start ..")
var first = Number(window.prompt("Enter number one : "));
var second = Number(window.prompt("Enter number two : "));
var op = window.prompt("Choose + , - , / or * :");

switch (op) {
        case '+':
            console.log("Add :" , first + second);
        break;
        case '-':
            console.log("Subtract :" , first - second);
        break;
        case '*':
            console.log("Multiply :" , first * second);
        break;
        case '/':
            console.log("Divide :" , first / second);
        break;
        default:
            console.log("Error!");
}


*/
