const topping = "pineapple";

switch(topping) {
    case "peppers":
    case "red onions":
    case "sweet corn":
    case "tomatoes":
        console.log("These are important ingredients for my pizza.")
        break;
    case "olives":
    case "mushrooms":
    case "basil":
        console.log(`I don't mind having ${topping} on my pizza.`)
        break;
    case "pineapple":
    case "extra cheese":
    case "pepperoni":
        console.log(`${topping} should not be on my pizza.`)
        break;
}