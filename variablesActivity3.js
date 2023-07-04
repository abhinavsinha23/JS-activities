
const birthday = new Date ("2000-04-26T00:00:00") 
const now = Date.now();

const timeInSeconds = (now - birthday)/1000;
const timeInDays = Math.floor(timeInSeconds / 86400);

console.log(`I am ${timeInDays} days old.`)

