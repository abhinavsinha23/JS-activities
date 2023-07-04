let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
for (i = 0; i < string.length; i++){
    if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
        lastVowelIndex = i;
    }
}

console.log(`The index of the last vowel in the string is ${lastVowelIndex}.`)