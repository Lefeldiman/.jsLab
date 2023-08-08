//sum (3)(4)(5)

function sum(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

const sumAB = sum(3)(4)
console.log(sumAB(13))
console.log(sum(13)(20)(30))

/*
fn -> 3 * 7
fn -> 3 + 7
fn -> 3 - 7

calc(3)(7)(fn)
*/

//#2

function calc(x){
    return function(y){
        return function(fn){
            return fn(x,y)
        }
    }
}

function subtraction(a,b){
    return a - b
}

function multiplication(a,b){
    return a * b
}

const r1 = calc(10)(5)(subtraction)
const r2 = calc(10)(5)(multiplication)
console.log(r1)
console.log(r2)