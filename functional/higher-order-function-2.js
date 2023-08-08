//curring

function finalPrice(tax, price) {
  return price * (1 + tax);
}

console.log(finalPrice(0.0875, 25.1));
console.log(finalPrice(0.0875, 21.7));
console.log(finalPrice(0.0875, 107.9));
console.log("________________________________________");
console.log("|");
console.log("|");
console.log("|");

//function returning another function
function finalPrice2(tax) {
  return function (price) {
    return price * (1 + tax);
  };
}

console.log(finalPrice2(0.0875)(25.1));
console.log(finalPrice2(0.0875)(21.7));
console.log(finalPrice2(0.0875)(107.9));
console.log("________________________________________");
console.log("");

//function returning another function with const
function finalPrice3(tax) {
  return function (price) {
    return price * (1 + tax);
  };
}

const ukFinalPrice = finalPrice3(0.095);

console.log(ukFinalPrice(25.1));
console.log(ukFinalPrice(21.7));
console.log(ukFinalPrice(107.9));
console.log("________________________________________");
