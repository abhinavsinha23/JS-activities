let num = 37;

if (num%3 == 0 && num%5 != 0){
    console.log("fizz")
} else if (num%3 != 0 && num%5 == 0){
    console.log("buzz")
} else if (num%3 == 0 && num%5 == 0){
    console.log("fizz buzz")
} else {
    console.log("This number is divisible neither by 3 nor by 5.")
}