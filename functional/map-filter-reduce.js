const students = [
  { name: "Jake Su", score: 6.4 },
  { name: "Susan Sha", score: 8.6 },
  { name: "Emma Tu", score: 9.4 },
  { name: "Peter Bor", score: 9.1 },
]

const greatStudent = (student) => student.score >= 9;
const getScore = (el) => el.score;
const avg = (accumulate, element, i, Array) => {
  if (i === Array.length - 1) {
    return (accumulate + element) / Array.length;
  } else {
    return accumulate + element;
  }
}

console.log(
    students
    .filter(greatStudent)
    .map(getScore)
    .reduce(avg)
)
