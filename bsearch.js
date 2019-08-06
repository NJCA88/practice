const bsearch = function(nums, target) {
  if (nums.length === 1 && nums[0] !== target) return null;
  let mid = Math.floor(nums.length / 2);
  if (nums[mid] === target) {
    return nums.indexOf(target);
  } else if (nums[mid] > target) {
    return bsearch(nums.slice(0, mid), target);
  } else {
    let val = bsearch(nums.slice(mid), target);
    if (val) {
      return val + mid;
    } else {
      return null;
    }
  }
};
let arr = [1, 3, 5];
// console.log(bsearch(arr, 1))

const flatten = function(arr) {
  let answer = [];
  while (arr.length > 0) {
    if (!Array.isArray(arr[0])) {
      // do standard thing thing
      answer.push(arr.shift());
    } else {
      // do recursive thing
      let res = flatten(arr.shift());
      answer.push(res);
    }
  }
  return answer;
};

let flattenArr = [1, 2, [3, [4], 5]];

// console.log(flatten(flattenArr));

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 */
class TreeNode {
    constructor(val){
    this.val = val;
    this.left = this.right = null;
    }
}
let a, b, c, d, e

a = new TreeNode(4)
b = new TreeNode(2)
c = new TreeNode(6)
d = new TreeNode(1)
e = new TreeNode (3)
a.left = b
a.right = c
b.left = d
b.right = e

//  arr = []
// var genArr = function (node) {
//     if (node){
//         genArr(node.left)
//         arr.push(node.val)
//         genArr(node.right)
//     }
// }
var minDiff = function (root) {
    arr = []
    var genArr = function (node) {
        if (node) {
            genArr(node.left)
            arr.push(node.val)
            genArr(node.right)
        }
    }
     genArr(root)
    console.log('arr is: ', arr)
    // return
    let min = Infinity
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] < min) {
            min = arr[i + 1] - arr[i]
        }
    }
    console.log('min is: ', min)
    return min
};
console.log(minDiff(a))



// var minDiffInBST = function (root) {
//     // base case
//     if (!root) return Infinity
//     if (!root.left && !root.right) {
//         // leaf node
//         return Infinity
//     }
//     let leftRemoved = Infinity
//     let leftDif = Infinity
//     let rightDif = Infinity
//     if (root.left && root.left.right) {
//         leftRemoved = root.val - root.left.right.val
//     }
//     if (root.left) {
//         leftDif = root.val - root.left.val
//     }
//     if (root.right) {
//         rightDif = root.right.val - root.val
//     }

//     return Math.min(
//         minDiffInBST(root.left),
//         leftRemoved,
//         leftDif,
//         rightDif,
//         minDiffInBST(root.right),

//     )

// };
