var isPalindrome = function(x) {
  const number = x.toString();
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== number[number.length - i - 1]) {
      console.log(number[number.length - i - 1]);
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome(-121))

class Node {
  constructor(data, next = null) {
    (this.val = data), 
    (this.next = next);
  }
}
const head = new Node (1)
const tail = new Node (2)
head.next = tail

var linkedListIsPalindrome = function(head) {
  const vals = [];
  let current = head;
  let flag = true;
  while (true) {
      vals.push(current.val);
      if (!current.next) {
          break
        }
    current = current.next;
  }
  for (let i = 0; i < vals.length / 2; i++) {
    if (vals[i] !== vals[vals.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// console.log(linkedListIsPalindrome(head));


var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    let shortest = strs[0]
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i]
        }
    }
    let string
    string = shortest
    const outerLoop = true
    const innerLoop = true
    while (outerLoop) {
        // while the test string can be decremented
        let innerLoop = true
        while (innerLoop){
            // check and see if test string starts all words
            for (let i = 0; i < strs.length; i++) {
                let word = strs[i];
                if (word.slice(0, string.length) !== string) {
                    // console.log( word.slice(0, string.length), string
                    // );
                    // console.log('fails test')
                    innerLoop = false
                    break
                }
            }
            // console.log('l69', string, innerLoop)
            if (innerLoop) return string
            // return string
        }
        // console.log('l72, string is: ', string)
        if (string.length > 0){
            string = string.slice(0, string.length -1)
        } else{
            return ""
        }
    }
    return string
};

// let answer = longestCommonPrefix(['catsinpants', 'cat', 'casherine'])
// console.log('answer is: ', answer)

var convert = function (s, numRows) {
    // creates the container, currently too wide
    if (numRows === 1) {
        return s
    }
    let container = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        container[i] = new Array(Math.floor(s.length / numRows))
    }
    let letters = s.split("")
    let dir = 'down'
    let curX = 0
    let curY = 0
    while (letters.length > 0) {
        // logic is add letter, then move pos, then             update dir
        if (dir === 'down') {
            // addLetterDown
            container[curY][curX] = letters.shift()
            curY += 1 // cur moved
            if (curY + 1 >= numRows) {
                dir = 'up'
            }
        } else {
            //add letter up
            container[curY][curX] = letters.shift()
            curY -= 1
            curX += 1
            if (curY === 0) {
                dir = 'down'
            }
        }
    }
    // console.log('final container is: ')
    // console.log(container)

    let answer = "";
    for (let row = 0; row < numRows; row++) {
        for (let idx = 0; idx < s.length; idx++) {
            // do thing
            if (container[row][idx]) {
                answer = answer + container[row][idx]
            }
        }
    }
    return answer
};
// let convertedAnswer = convert('PAYPALISHIRING', 3);
let convertedAnswer = convert('AB', 1);
// console.log(convertedAnswer)
