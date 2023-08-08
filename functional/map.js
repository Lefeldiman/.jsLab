const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = numbers.map(function (el) {
  return el * 2;
});

console.log(numbers, numbersV2);

const students = [
  { name: "Jake Su", score: 6.4 },
  { name: "Susan Sha", score: 8.6 },
  { name: "Emma Tu", score: 9.4 },
  { name: "Peter Bor", score: 9.1 },
];

const getScore = (el) => el.score;

console.log(students.map(getScore));

console.log(students.map(getScore).map(Math.ceil));
