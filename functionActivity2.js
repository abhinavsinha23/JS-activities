let orderCount = 0;

const takeOrder = (topping, orderNumber) => {
    console.log(`Order ${orderNumber+1}: Pizza with ${topping}`);
    orderNumber++;
    return orderNumber;
}

orderCount = takeOrder("pineapple", orderCount);
orderCount = takeOrder("pepperoni", orderCount);
orderCount = takeOrder("bbq chicken", orderCount);