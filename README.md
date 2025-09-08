# Assignment 06

## Completed by Fahmida

### The private repository link doesn't work for me, so submitting the public repo.

### Following are the answers to the questions asked:

1. What is the difference between var, let, and const?

```
var:
    $var$ is function-scoped or globally-scoped keyword. If declared inside a function, it's accessible anywhere within that function. If declared outside any function, it's globally accessible. $var$ declarations are hoisted to the top of their scope, meaning you can access a var variable before its declaration in the code, though its value will be undefined until the actual assignment.

let:
    $let$ is block-scoped. It is only accessible within the block (e.g., if statement, for loop, or any curly braces {}) where it is declared. let declarations are also hoisted, but they are placed in a "Temporal Dead Zone" (TDZ) until their declaration is encountered.

const:

    $const$ is also block-scoped, similar to let.const declarations are also hoisted and subject to the TDZ, meaning you cannot access them before their declaration.

```

2. What is the difference between map(), forEach(), and filter()?

```
The map(), forEach(), and filter() methods in JavaScript are all used to iterate over arrays, but they serve different purposes and have distinct return values.

forEach():
    To execute a provided function once for each array element. It is primarily used for performing side effects, such as logging values, updating external variables, or manipulating the DOM.
    Return Value: forEach() does not return a new array or any value.

map():
    To create a new array by transforming each element of the original array based on a provided function.
    Return Value: A new array containing the results of calling the provided function on every element in the original array. The new array will have the same length as the original array.

filter():
    To create a new array containing only the elements that pass a specific test (a condition) implemented by a provided function.
    Return Value: A new array containing a subset of the original array's elements, specifically those for which the provided function returns true. If no elements pass the test, an empty array is returned.
```
