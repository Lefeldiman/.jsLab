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
