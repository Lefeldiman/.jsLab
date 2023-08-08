// Function declaration

function sayHello(){
    console.log('Hello')
}

sayHello()

function sayHelloTo(name){
    console.log(`Hello ${name}!`) //return literally use with dollar and include with different ``
}

sayHelloTo('Mike')

function returnHi(){
    return 'Hi-> !'
}

const greeting = returnHi()
console.log(greeting)

console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo('Leonardo'))