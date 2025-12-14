/* In computer science, type conversion,type casting,type coercion and type juggling are different ways of changing an expression from one data type to another.

Two Types of Conversion
1) implicit Conversion: Done automatically by JS engine.Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types.
*/
let a_variable  = "5" - 2; // here JS engine converts string "5" to number 5 automatically
console.log(a_variable); // Output: 3
let b_variable = "5" + 2; // here JS engine converts number 2 to string "2" automatically
console.log(b_variable); // Output: "52" 
// rule - If either operand is a string, + becomes string concatenation and this does NOT apply to - * /
let c_variable = true + 10 // here JS engine converts boolean true to number 1 automatically
console.log(c_variable); // Output: 11


// 2) Explicit Conversion: Done manually by programmer using built-in functions.
let d_variable = String(123); // converts number 123 to string "123"
console.log( typeof d_variable); // Output: string

a = Number('123')     
b =Number('123abc') 
c= Number(true)      
d= Number(false)     
e = Number(null)      
f = Number(undefined)   
g =Boolean(1)         
h =Boolean(0)     

console.table({
  a: { value: a, type: typeof a },
  b: { value: b, type: typeof b },
  c: { value: c, type: typeof c },
  d: { value: d, type: typeof d },
  e: { value: e, type: typeof e },
  f: { value: f, type: typeof f },
  g: { value: g, type: typeof g },
  h: { value: h, type: typeof h }
});

// note : When a non-numeric string is converted to a number, the result is NaN (Not-a-Number)
let nanValue = Number("hello");
console.log(nanValue); // Output: NaN
console.log (typeof NaN)  // Output: number