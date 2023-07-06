let drinkOrder = "Latte";
let foodOrder = "Wrap";

const coffeeShop = {
    branch: "Manchester",
    drinks: ["Cappuccino", 3, "Mocha", 3.50, "Latte", 3.20, "Americano", 3.90, "Flat White", 3.60, "Espresso", 3],
    foods: ["Sandwich", 4.50, "Wrap", 4.60, "Chocolate bar", 2],
    drinkOrdered(drink){
        let i = 0;
        while (i < this.drinks.length){
            if (drink == this.drinks[i]){
                drinkPrice = this.drinks[i+1];
            }
            i = i + 2;
        }
        console.log(`Your drink order: ${drink}   £${drinkPrice}`)
        return drinkPrice;
    },
    foodOrdered(food){
        let i = 0;
        while (i < this.foods.length){
            if (food == this.foods[i]){
                foodPrice = this.foods[i+1];
            }
            i = i + 2;
        }
        console.log(`Your food order: ${food}   £${foodPrice}`)
        return foodPrice;
    },
    entireOrder(drink, drinkPrice, food, foodPrice){
        console.log(`Branch: ${this.branch}`)
        console.log(`Your full order:`)
        console.log(`${drink}   £${drinkPrice}`)
        console.log(`${food}    £${foodPrice}`)
        console.log(`Total cost: £${drinkPrice+foodPrice}`)
    }
}

priceOne = coffeeShop.drinkOrdered(drinkOrder);
priceTwo = coffeeShop.foodOrdered(foodOrder);
coffeeShop.entireOrder(drinkOrder, priceOne, foodOrder, priceTwo);