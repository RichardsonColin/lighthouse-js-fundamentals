var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;
console.log("**While loop ingredients list**")
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("\n**For loop ingredients list**")
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("\n**Ingredients list (backwards)**")
for (var i = ingredients.length - 1; i > -1; i--) {
  console.log(ingredients[i]);
}