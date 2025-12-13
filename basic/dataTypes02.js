/* 
java script is a loosely typed or a dynamic language
In a loosely typed language, you don't have to declare a variable's data type. The data type is determined automatically based on the value assigned to the variable.
For example, in JavaScript, you can assign a string value to a variable and later assign a number value to the same variable without any type declaration.  
*/
let dataType1 = "hii"
dataType1 = 25
console.log(typeof dataType1); // Output: number - JavaScript automatically changes the data type of dataType1 from string to number based on the assigned value this is caaled explicit type conversion.
let datatype2 = 25 +" is a number "
console.log(typeof dataType2); // Output: string-javaScript coerces datatype2 to string so it can be concatenated with the other operand this is called implicit type conversion.

/*primitive data types in java script
 All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.*/

// 1. String - The String type represents textual data and is encoded as a sequence of 16-bit unsigned integer values representing UTF-16 code units. Each element in the string occupies a position in the string. The first element is at index 0, the next at index 1, and so on. 
let str = "Hello, World!";
console.log(typeof str); // Output: string 

//2. Number -  it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1 (Number.MAX_SAFE_INTEGER). 
let num = 42;
console.log(typeof num); // Output: number
Number.MAX_SAFE_INTEGER =  9007199254740991// 2^53 − 1
Number.MIN_SAFE_INTEGER = -9007199254740991  // -(2^53 − 1)

// 3. BigInt - used for integers larger than 2^53 - 1
let bigIntNum = 9007199254741992n;
console.log(typeof bigIntNum); // Output: bigint

// 4. Boolean - used for true/false values
let isJavaScriptFun = true; 
console.log(typeof isJavaScriptFun); // Output: boolean

// 5. Undefined - a variable that has been declared but not assigned a value
let anyvariable;
console.log(typeof anyvariable); // Output: undefined

// 6. Null - represents the intentional absence of any object value
let emptyValue = null;  
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript; null is not actually an object)

// 7. Symbol - used to create unique identifiers for objects
let sym = Symbol("uniqueIdentifier");
console.log(typeof sym); // Output: symbol
/* A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.*/

// Non-primitive data type
/*8. Object - used to store collections of data and more complex entities In computer science, an object is a value in memory which is possibly referenced by an identifier. In JavaScript, objects are the only mutable values. Functions are, in fact, also objects with the additional capability of being callable.*/
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
console.log(typeof person); // Output: object 
