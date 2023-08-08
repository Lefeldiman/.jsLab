function goodMorning() {
  console.log("Good Morning!");
}

const goodAfternoon = function () {
  console.log("Good Afternoon!");
};

function executeAnything(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

executeAnything(goodMorning);
executeAnything(goodAfternoon);

/*1 == '1' - 1 is type numeric and '1' is type string *
 *true
 *1 === '1' - 1 is type numeric and '1' is type string strictly
 *false
 */

 // return the function from another

 function potential(base, exp){
    return Math.pow(base,exp)
 }

 const bits8 = potential(2,8)
 console.log(bits8)

 function potential1(base){
    return function(exp){
        return Math.pow(base,exp)
    }
 }

 const potencialof2 = potential1(2)
 console.log(potencialof2(8))

const pot34 = potential(3,4)
console.log(pot34)