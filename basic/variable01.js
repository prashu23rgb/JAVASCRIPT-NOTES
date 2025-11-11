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
Hyphens are not allowed in JavaScript. They are reserved for subtractions.
JavaScript programmers tend to use lower camel case(not nessasary)
JavaScript treats underscore as a letter.*/
let _name = "Bob";
let $age = 25; //JavaScript also treats a dollar sign as a letter.

let user1 = "Charlie";
5*10 // valid expression
console.log(5 * 10);

//JavaScript identifiers are case sensitive.The variables lastName and lastname, are different variables:

let lastName = "Smith";
let lastname = "Johnson";

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

/* NOTE: you might see examples without semicolons.
Ending statements with semicolon is not required, but highly recommended. through semicolon separation we can write multiple statements on one line 
NOTE : JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.*/
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
console.log(blocka + blockb); // Output: 30

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