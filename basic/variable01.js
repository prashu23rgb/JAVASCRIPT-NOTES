// lets declare a variable
let greeting = "Hello, World!";
console.log(greeting);

let x =10
y = 20
z = "The sum is: " + (x + y)
console.table([x, y, z ]) // using console.table to display values in a table format

const pi = 3.14159; // constant variable

// LET name = "Alice"; // incorrect variable declaration (case-sensitive)
/* This is a multi-line comment
   that spans multiple lines */

 /*An identifier is the name you give to a variable.
Rules for identifiers:
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter, a $ sign or an underscore (_).
Names are case sensitive (X is different from x).
Reserved words (JavaScript keywords) cannot be used as names.
Can contain digits after the first character
**Hyphens are not allowed in JavaScript. They are reserved for subtractions.**
JavaScript programmers tend to use lower camel case(not nessasary)
**JavaScript treats underscore as a letter.**/
let _name = "Bob";
let $age = 25; //JavaScript also treats a dollar sign as a letter.

let user1 = "Charlie";
5*10 // valid expression
console.log(5 * 10);

//JavaScript identifiers are case sensitive.The variables lastName and lastname, are different variables:

let lastName = "Smith";
let lastname = "Johnson";  // both are different variables {lets check equality}

/*if (lastname = lastName ) { 
  console.log("They are equal");
} else {
  console.log("They are not equal");
}
 Output: They are equal reason that single = is not a comparison operator, it's an assignment operator.
To compare values, use == or ===*/

if (lastname == lastName) { 
  console.log("They are equal");
} else {
  console.log("They are not equal");
}  // loose equality (type conversion allowed)

if (lastname === lastName) { 
  console.log("They are equal");
} else {
  console.log("They are not equal");
} // strict equality (no type conversion)

/* NOTE: you might see examples of js statements without ending by semicolons in last.
Ending statements with semicolon is not required, but highly recommended. through semicolon separation we can write multiple statements on one line 
**NOTE : JavaScript ignores multiple spaces.**
 You can add white space to your script to make it more readable.*/
let a = 5;     let b = 10;      let c = a + b;       console.log(c);

// Using var to declare a variable (not recommended in modern JavaScript)
var city = "New York";
console.log(city);
// problem with var is that it has function scope, which can lead to unexpected behavior in block scopes.and var can be redeclared within the same scope.
var city = "Los Angeles"; // redeclaring var   

//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let hii = "5" + 23 +2;
console.log(hii); // Output: "5232"
let hello = 5 + 23 + "2";
console.log(hello); // Output: "282"

//Variables declared inside a { } block cannot be accessed from outside the block:
{
  let blockx = 10;
  const blocky = 20;
  console.log(blockx + blocky); // Output: 30 
}
/*console.log(blockx + blocky); // Error: blockx is not defined
Variables declared with varinside a { } block can be accessed from outside the block:*/
{
  var blocka = 10;
  var blockb = 20;
} 
console.log(blocka + blockb); // Output: 30 this works because var is not block-scoped {problematic}

// Reassigning vs Redeclaring
let vii = 80
vii = 90 //reassigning value to variable
console.log(vii); // but can"t be redeclared with let in the same scope let vii = 100; // Error: Identifier 'vii' has already been declared

/* NOTE:
Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:
Change the elements of constant array
Change the properties of constant object*/

const myArray = [1, 2, 3];
// you can change elements:
myArray[0] = 10;
console.log(myArray); // Output: [10, 2, 3]
// but you cannot reassign the array:
// myArray = [4, 5, 6]; // Error: Assignment to constant variable. Even you can add elements in array 
myArray.push(4);
console.log(myArray); // Output: [10, 2, 3, 4]

const myobject = {name: "prashu", age : 21, city : "rewa"};
// you can change properties:
myobject.city = "indore";
console.log(myobject); // Output: {name: "prashu", age: 21, city: "indore"}
// but you cannot reassign the object:
// myobject = {name: "rahul", age : 25, city : "delhi"}; // Error: Assignment to constant variable.

// summary 
// 🔹 VARIABLE DECLARATION
let greeting2 = "Hello, World!"; // 'let' is block-scoped, can be reassigned but not redeclared
const pi2 = 3.14159;             // 'const' is block-scoped, cannot be reassigned or redeclared
var city2 = "New York";          // 'var' is function-scoped and can be redeclared (not recommended)

// 🔹 IDENTIFIERS & NAMING RULES
/* 
- Can include letters, digits, _ , $
- Must start with letter, _ , or $
- Case-sensitive (name ≠ Name)
- Cannot use reserved keywords
- Hyphens (-) not allowed
- Prefer lowerCamelCase
*/

// Examples:
let _name2 = "Bob";
let $age2 = 25;

// 🔹 EXPRESSIONS & OUTPUT
console.log(5 * 10);                 // Arithmetic operation
console.table([x, y, z]);            // Displays values in table form

// 🔹 EQUALITY OPERATORS
/* 
=   → assignment
==  → loose equality (type conversion)
=== → strict equality (no type conversion)
*/
if (lastname === lastName) console.log("Not equal");

// 🔹 SEMICOLONS & SPACES
// Semicolons are optional but recommended.
// JS ignores multiple spaces — add them for readability.

// 🔹 SCOPE RULES
{
  let blockx = 10;  // block-scoped
  const blocky = 20;
  console.log(blockx + blocky);
}
// console.log(blockx); // ❌ Error

{
  var blocka = 10;   // var is not block-scoped
  var blockb = 20;
}
console.log(blocka + blockb); // ✅ Works (but bad practice)

// 🔹 REASSIGNING vs REDECLARING
let num = 80;
num = 90;          // ✅ reassign
// let num = 100;  // ❌ redeclare (same scope)

// 🔹 CONST ARRAYS & OBJECTS
const myArray2 = [1, 2, 3];
myArray2[0] = 10;    // ✅ allowed (modifying)
myArray2.push(4);    // ✅ allowed
// myArray = [4, 5]; // ❌ Error (reassigning)

const myObject2 = { name: "Prashu", age: 21, city: "Rewa" };
myObject2.city = "Indore"; // ✅ modify property
// myObject = {...}       // ❌ reassign object

// 🔹 TYPE COERCION IN STRINGS
let hii2 = "5" + 23 + 2; // "5232" (string concatenation)
let hello2 = 5 + 23 + "2"; // "282" (numbers added before string conversion)


