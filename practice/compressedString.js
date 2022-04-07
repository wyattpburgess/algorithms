const compressString = (s) => {
    if (s.length <= 2) {
        return s;
    }
    let compressedString = "";
    let repeatCharCount = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i-1] === s[i]) {
            repeatCharCount++;
        } else {
            compressedString += `${s[i-1]}${repeatCharCount}`;
            repeatCharCount = 1;
        }

        if (i === s.length - 1) {
            compressedString += `${s[i-1]}${repeatCharCount}`;
        }
    }

    return compressedString.length >= s.length 
        ? s 
        : compressedString;
}

console.log(compressString("aaaaaaaaaaaabba"));
