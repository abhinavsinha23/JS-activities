let num = 1201;
num = num.toString()
for (i = 0; i < num.length/2; i++){
    if(num[i] != num[num.length-1-i]){
        console.log("This number is not a palindrome.")
        break;
    }
    else if (i == num.length/2-1 && num[i] == num[num.length-1-i]) {
        console.log("This number is a palindrome.")
    }
}

