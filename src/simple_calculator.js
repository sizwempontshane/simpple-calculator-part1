function add() {
  var sum = 0;
  for (i = 0; i < argument.length; i++) {
    sum = sum + argument[i];
  }
  return sum;
}

function multiply() {
  var product = 1;
  for (i = 0; i < argument.length; i++) {
    product = product * argument[i];
  }
  return product;
}

module.exports = { add, multiply };
