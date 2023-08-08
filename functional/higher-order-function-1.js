/**
 * Functions that operate on other functions,
 * either by taking them as arguments or by
 * returning them, are called higher-order functions
 *
 * I can pass a function as an argument to another function, or return a function from another function.
 *
 */

function run(fn) {
  return `Result...:  ${fn()}`;
}

function sayHello() {
  console.log("Hello!!!");
}

run(sayHello);

run(function () {
  console.log("run!!!");
});

const result = run(Math.random);
console.log(result);
