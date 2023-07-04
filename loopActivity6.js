let bobsFollowers = ["Dave", "Steve", "Lucy", "Matthew"];
let hannahsFollowers = ["Paul", "Dave", "George", "Lucy"];

for (i = 0; i < bobsFollowers.length; i++){
    for (j = 0; j < hannahsFollowers.length; j++){
        if (bobsFollowers[i] == hannahsFollowers[j]){
            console.log(`${bobsFollowers[i]}`)
        }
    }
}