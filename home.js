console.log('hello');
//alert('Yo this me');

//Variables

var b = 'smoothie';
console.log(b);

var number = 45;
console.log(number);

//Manipulate DOM with Javascript
/*...It's just a Fancy way of saying 
Change HTML with Javascript*/

//var age = prompt ('What is your age?');

//document.getElementById('someText').innerHTML = age;

//Numbers in Javascript
var num1 = 10;

//Increment Num1 by 1
//num1 = num1 + 1; //You can also do 
num1++
console.log(num1);

//Decrement Num1 by 1
num1--;
console.log(num1);

//Divide,Multiply *,reminder %
console.log(num1 % 5);
console.log(num1 * 4);

//Increment /decrement by any number you want e.g by 10
num1 += 10;
console.log(num1);

/*Functions
1.Create a function
2.Call the function
*/

//Create
function fun() {
    console.log('this is a funtion');
}

//Call
fun();

/* Let's create a function that take in a name
and say hello followed by your name
For example
*/

function greetings() {

    var name =  prompt("What is your name?");
    var result = "Hello" +" "+ name;
    console.log(result);
}

//greetings();

//Functions can also take in arguments 

//How do we add 2 numbers together

function sumNumbers(num1,num2) {
    var assignment = num1 + num2;
    console.log(assignment);
}

//sumNumbers(100,100);

/*var name = prompt("What is your name?");
greetings(name);

function greetings(yourName){
     var statement = " Hello" + " " + yourName; // String Concant.
     console.log(statement);
}

function fun() {
    alert('this is a function');
}

 /*while loops

 var num = 0;

while (num < 100) {

       num += 1;
         console.log(num);
}
 */

/* For Loop
for (let num = 0; num <= 100; num++){
    console.log(num);
}
*/

// Data types

let yourAge = 18; // number
let yourName = 'Bob'; // string
let name = {first: 'Jane',last:'Doe'};// object
let truth = false; //boolean
let groceries = ['apple','banana'];//array

let fruit = 'banana';
let moreFruits = 'banana\napple'; //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.replace('ban','123'));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split('')); // split by characters

//Array
let fruits = ['banana','apple','orange','pineapple'];
fruits = new Array('banana','apple','orange','pineapple');

console.log(fruits[2]); //access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods
console.log('to string',fruits.toString());
console.log(fruits.join('*'));
console.log(fruits,fruits.pop(),fruits);
console.log(fruits.push('blackberries'),fruits);//appends
console.log(fruits[4]);
fruits[fruits.length]= 'new fruit'//same as push
console.log(fruits)
fruits.shift();// remove first element from an array
console.log (fruits)
fruits.unshift('kiwi');//add first element to an array
console.log(fruits)

let vegetables = ['apple','tomato','broccolli'];
let allGroceries = fruits.concat(vegetables);//combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5,10,2,25,3,255,1,2,5,334,321,2];
console.log(someNumbers.sort(function(a,b) {return a-b}));//Ascending order
console.log(someNumbers.sort(function(a,b) {return b-a}));//Descending order

let emptyArray = [];
for(let num = 0;num < 10;num++){
    emptyArray.push(num);
}
 console.log(emptyArray);

 //Objects in Javascript
 //dictionaries in Python

 let student = {
     first:'Rafeh', 
     last:'Qazi',
    age:25,
     studentinfo: function () {
         return this.first + '\n' + this.last + "\n" + this.age;
        }
    };

    //console.log(student.first);
    //console.log(student.last);
    //console.log(student.age);
    student.first ='notRafeh'; //Change value
    //console.log(student.first);
    student.age++;
    //console.log(student.age);

    console.log(student.studentinfo());

    //Conditionals, Control flows (if else)
    // 18-35 is my target demographic
    //&& AND
    // || OR
    var age = prompt('what is your age?');
    if ((age >= 18) && (age <= 35)) {
        status = 'target demo';
    } else {
        status = 'not my audience';
        console.log(status);
    }
    
    //Switch statements
    //differentiate between weekday vs. weekend
    //day 0 --> Sunday
    //day 1 --> Monday
    //day 2 --> Tuesday
    //day 3 --> Wednesday
    //day 6 --> Saturday -->
    //day 4 --> Thursday --> weekaday

    switch (0) {
        case 0:
            text = 'weekend';
            break;
        case 5:
            text = 'weekend';
            break;
        case 6:
            text = 'weekend';
            break;
        default:
            text = 'weekday';
    }            

    console.log(text);

    
