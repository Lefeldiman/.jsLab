const increment1 = function(n){
    return n + 1
}

const increment2 = (n) =>{ //=> it's arrow function is always anonymous
    return n + 1
}

const increment3 = (n) =>{ //=> it's arrow function is always anonymous
    return n + 1
}

const increment4 = n => n + 1 //if I don't have include the return is implicitly



console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))

const sum = (a, b) => a + b
console.log(sum(3,8))
