let array = [];

for (i = 0; i < 6; i++){
    array[i] = Math.floor(Math.random() * 50 + 1);
}

for (i = 0; i < array.length; i++){
    console.log(array[i])
}