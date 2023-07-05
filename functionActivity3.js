let userEntry = 7890;
let userPin = 7890;
let withdrawalAmount = 100;
let balance = 90;

const cashMachine = () => {
    if (userEntry == userPin){
        console.log("Your PIN is correct.")
        dispenseCash(balance, withdrawalAmount);
    } else {
        console.log("The PIN you have entered is incorrect.")
    }
}

const dispenseCash = (balanceAmount, withdrawal) => {
    if (balanceAmount >= withdrawal){
        console.log(`Balance: £${balanceAmount}`)
        console.log(`Withdrawal amount: £${withdrawal}`)
        console.log("Your cash withdrawal is complete.")
        balanceAmount = balanceAmount - withdrawal;
        console.log(`Your remaining balance is £${balanceAmount}.`)
    } else {
        console.log("You have insufficient funds.")
    }
}

cashMachine()