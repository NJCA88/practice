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
    (this.val = data), (this.next = next);
  }
}
const head = new Node(1);
const tail = new Node(2);
head.next = tail;

var linkedListIsPalindrome = function(head) {
  const vals = [];
  let current = head;
  let flag = true;
  while (true) {
    vals.push(current.val);
    if (!current.next) {
      break;
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

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  let shortest = strs[0];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < shortest.length) {
      shortest = strs[i];
    }
  }
  let string;
  string = shortest;
  const outerLoop = true;
  const innerLoop = true;
  while (outerLoop) {
    // while the test string can be decremented
    let innerLoop = true;
    while (innerLoop) {
      // check and see if test string starts all words
      for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        if (word.slice(0, string.length) !== string) {
          // console.log( word.slice(0, string.length), string
          // );
          // console.log('fails test')
          innerLoop = false;
          break;
        }
      }
      // console.log('l69', string, innerLoop)
      if (innerLoop) return string;
      // return string
    }
    // console.log('l72, string is: ', string)
    if (string.length > 0) {
      string = string.slice(0, string.length - 1);
    } else {
      return '';
    }
  }
  return string;
};

// let answer = longestCommonPrefix(['catsinpants', 'cat', 'casherine'])
// console.log('answer is: ', answer)

var convert = function(s, numRows) {
  // creates the container, currently too wide
  if (numRows === 1) {
    return s;
  }
  let container = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    container[i] = new Array(Math.floor(s.length / numRows));
  }
  let letters = s.split('');
  let dir = 'down';
  let curX = 0;
  let curY = 0;
  while (letters.length > 0) {
    // logic is add letter, then move pos, then             update dir
    if (dir === 'down') {
      // addLetterDown
      container[curY][curX] = letters.shift();
      curY += 1; // cur moved
      if (curY + 1 >= numRows) {
        dir = 'up';
      }
    } else {
      //add letter up
      container[curY][curX] = letters.shift();
      curY -= 1;
      curX += 1;
      if (curY === 0) {
        dir = 'down';
      }
    }
  }
  // console.log('final container is: ')
  // console.log(container)

  let answer = '';
  for (let row = 0; row < numRows; row++) {
    for (let idx = 0; idx < s.length; idx++) {
      // do thing
      if (container[row][idx]) {
        answer = answer + container[row][idx];
      }
    }
  }
  return answer;
};
// let convertedAnswer = convert('PAYPALISHIRING', 3);
// let convertedAnswer = convert('AB', 1);
// console.log(convertedAnswer)

function count(el, arr){
    let count = 0
    for (let i=0; i<arr.length; i++){
        if (arr[i] === el){
            count +=1
        }
    }
    return count
}
// console.log(count('a', ['a', 'b', 'a']))

var threeSum = function(nums) {
  let dict = {};
  let sum, val1, val2;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      val1 = nums[i];
      val2 = nums[j];
      sum = val1 + val2;
      if (!dict[sum]) {
        // if theres no entry yet
        dict[sum] = [[[val1, val2], [i, j]]];
        // console.log('dict, dict[6] ', dict, dict[6]);
      } else {
        dict[sum].push([[val1, val2], [i, j]]);
      }
    }
  }
//   console.log('dict is: ', dict);
//   console.log('dict[-2] is: ', dict[-2]);

  let answer = [];
  let need;
  let curr;
  let newRes;
  for (let i = 0; i < nums.length; i++) {
    need = 0 - nums[i];
    if (dict[need]) {
      for (let j = 0; j < dict[need].length; j++) {
        // iterate through the valid options

        curr = dict[need][j];
         if (count(nums[i], curr[0]) > count(i, nums)) continue

        // console.log(nums[i], curr[1])
        if (curr[1].includes(i)) continue;
        newRes = curr[0].slice();
        newRes.push(nums[i]);
        newRes.sort();
        if (!answer.some((arr) => (JSON.stringify(arr) === JSON.stringify(newRes)))) {
            answer.push(newRes);
        }
      }
    }
  }
  return answer;
};
// console.log(threeSum([-13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14, 13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5, -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8, -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4, 2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10, -4, -15, -9, -1, -1, 3, 4, 1, 8, 1]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

var removeDuplicates = function (nums) {
    if (nums.length === 1) return nums
    if (nums[0] === nums[1]) {
        return [nums[0]].concat( removeDuplicates(nums.slice(2, nums.length)))
    } else {
        return [nums[0]].concat( removeDuplicates(nums.slice(1, nums.length)))
    }
};

console.log(removeDuplicates([1, 1, 2]))
