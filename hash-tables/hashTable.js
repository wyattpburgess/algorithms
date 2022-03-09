const alreadyVoted = {};

// people can only vote once.
const vote = (name, value) => {
    if (alreadyVoted[name] === undefined) {
        alreadyVoted[name] = value;
        return true;
    } else {
        return false;
    }
}

console.log(vote("Wyatt", "Biden"));
console.log(vote("Jason", "Trump"));
console.log(vote("Wyatt", "Trump"));
console.log(vote("Jason", "I change my mind"));
console.log(alreadyVoted);
