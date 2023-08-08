function goodMorning(){
    console.log('Good Morning!')
}

const goodAfternoon = function (){
    console.log('Good Afternoon!')
}

function executeAnything(fn){
    if(typeof fn === 'function'){
        fn()
    }
}

executeAnything(goodMorning)
executeAnything(goodAfternoon)

/*1 == '1' - 1 is type numeric and '1' is type string *
*true
*1 === '1' - 1 is type numeric and '1' is type string strictly
*false
*/

