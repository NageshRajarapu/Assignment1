// #1 Write a program to find out whether a given 
// year is leap or not

let year = 1700;

if((year%4==0 && year%100!=0) || year%400==0)
    console.log("Leap");
else
    console.log("Not leap");

console.log();

// #2 Write a program to convert 
//temperature to and from Celsius, Fahrenheit

let f = 45;
let c = 60;

let Celsius = ((f-32)/9)*5;
let Fahrenheit = ((c/5)*9)+32;

console.log("60 C is " +Fahrenheit +" F");
console.log("45 F is " +Celsius +" C");

console.log();

// #3 Write a program to find the factorial of
// a number

let num = 12;

function factorial(num)
{
    if(num==0 || num==1)
        return 1;
    else
        return num * factorial(num-1);
}

let result = factorial(num);
console.log(`The factorial of ${num} is ` +result);