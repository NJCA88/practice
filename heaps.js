console.log("starting")
// console.log(5+5)
var lengthOfLongestSubstring = function (s) {
    let seenLetters = {};
    seenLetters[s[0]] = true;
    let max = 1;
    let tempCount = 1;
    let front = 0;
    let rear = 0;
    while (front < s.length - 1) {
        console.log("front, rear indices: ", front, rear)
        front += 1
        if (!seenLetters[s[front]]) {
            //if the new target of front is not a dup
            tempCount += 1
            if (tempCount > max) max = tempCount
            seenLetters[s[front]] = true
        } else {
            // if the new front is a dup, we move the rear pointer
            // console.log('into the else"')
            let going = true
            while (going) {
                seenLetters[s[rear]] = false
                tempCount -= 1
                if (s[rear] === s[front]) going = false
                rear += 1
            }
            // console.log("b4 else ends")
            // console.log("front, rear indices: ", front, rear)
        }
        console.log("max, front, rear, Tcount: ", max, front, rear, tempCount)
        console.log(seenLetters)
    }

    return max
};

console.log(lengthOfLongestSubstring("aab"));