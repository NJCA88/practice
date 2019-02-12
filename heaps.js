console.log("starting")
// console.log(5+5)
var lengthOfLongestSubstring = function (s) {
    let seenLetters = {};
    seenLetters[s[0]] = true;
    let max = 1;
    let front = 0;
    let rear = 0;
    while (front < s.length - 1  ) {
        front += 1
        if (!seenLetters[s[front]]) {
            //if the new target of front is not a dup
            // tempCount += 1
            if ((front - rear) + 1 > max) max = (front - rear) + 1
            seenLetters[s[front]] = true
        } else {
            // if the new front is a dup, we move the rear pointer
            while ( !(s[rear]=== s[front]) ) {
                seenLetters[s[rear]] = false
                rear += 1
            }
            rear += 1

        }

    }
    return max
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));