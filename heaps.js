console.log("starting")
// console.log(5+5)

var lengthOfLongestSubstring = function (s) {
    let seenLetters = {};
    let max = 0;
    let tempCount = 0
    for (let i = 0; i < s.length; i++) {
        console.log(seenLetters)
        if (tempCount > max) max = tempCount
        if (!seenLetters[s[i]]) {
            tempCount += 1;
            seenLetters[s[i]] = true
            if (tempCount > max) max = tempCount
        } else {
            tempCount = 1;
            seenLetters = {}
            console.log(seenLetters)
            seenLetters[s[i]] = true
            if (tempCount > max) max = tempCount

        }

    }

    return max
};

console.log(lengthOfLongestSubstring('dvdf'))