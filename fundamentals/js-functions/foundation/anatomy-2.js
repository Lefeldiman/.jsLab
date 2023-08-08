/* eslint-disable no-unused-expressions */
// Anonymous Function
(function(a, b, c) {
    return a + b + c
})

//Function Expression

const sum = function (a,b){
    return a * b
}

const result = sum(7,3)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,4))
