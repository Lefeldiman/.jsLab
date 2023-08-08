function logParams(a,b,c){
    console.log(a,b,c)
}

logParams(1,2,3)

logParams(1,2)

function defaultParams(a,b,c = 3){
    console.log(a,b,c)
}

defaultParams(7,8)

defaultParams()

console.log(1,2,3,4,5,6,7,8,9,10)


function logNumbers(numbers){
    for(let n of numbers){
        console.log(n)
    }
}

logNumbers([1,2,3,4,5,6,7])

//spread/rest to take the brackets out we need change the functions

function logNumbers2(...numbers){
    console.log(Array.isArray(numbers))
    for(let n of numbers){
        console.log(n)
    }
}

logNumbers2(1,2,3,4)

function sumAll(...numbers){
    let total = 0
    for(let n of numbers){
        total += n
    }
    return total
}

console.log(sumAll(1,4,5,3,7,9,15))