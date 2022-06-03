function getPermutations(s) {
    if (s.length === 0) return "";
    if (s.length === 1) return s;

    const results = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const remainingChars = s.slice(0, i) + s.slice(i+1);
        const perms = getPermutations(remainingChars);
        for (let j = 0; j < perms.length; j++) {
            results.push(char + perms[j]);
        }
    }
    return results;
}

function getPermutationWDuplicates(s) {
    const prevChars = [];
    const charCount = getCharCount(s);
    const permutations = getPermutationWDups(s, charCount);
    return Array.from(permutations);
}

function getCharCount(s) {
    const charCount = [];
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === undefined) {
            charCount[s[i]] = 1;
        } else {
            charCount[s[i]] += 1;
        }
    }
    return charCount;
}

function getPermutationSet(s, charCount) {
    if (s.length === 0) return "";
    if (s.length === 1) return s;
    const res = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (prevChars.has(char)) continue;
        const remainingChars = s.slice(0, i) + s.slice(i+1);
        const permutations = getPermutationSet(remainingChars, prevChars);
        for (let j = 0; j < permutations.length; j++) {
            res.push(char + permutations[j]);
        }
        prevChars.add(char);
    }

    return res;
}

const str = "abc";
// console.log(getPermutations(str));
console.log(getPermutationWDuplicates(str));