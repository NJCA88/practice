var maxSubArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums);
};


// done and tested.


var arrayCoverage = function(array, size){
    let difNeeded = array[array.length-1] * size / 100
    let startIdx = 0
    let endIdx = array.length - 1
    let curDif = array[endIdx] - array[startIdx]
    while (true){
        if (array[startIdx + 1] - array[startIdx] <  array[endIdx] - array[endIdx-1]){
            //increment first pointer, probably
            let newDif = array[endIdx] - array[startIdx + 1]
            if (newDif >= difNeeded){
                 startIdx +=1
            } else break
        } else{
            //increment second pointer, probably
            let newDif = array[endIdx - 1] - array[startIdx]
            if (newDif >= difNeeded) {
                endIdx -= 1
            } else break
        }
    }
    console.log("startIdx, EndIdx: ", startIdx, endIdx)
}

// arrayCoverage([1,2,5,99,100,1000], 90)


var myAtoi = function (str) {
    let newString = ""
    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let sign = null;
    let seenNum = false;
    for (let i = 0; i < str.length; i++) {
        if(!seenNum) continue
        if (str[i] === " ") {
            if (seenNum) break
            continue
        }
        if (!sign && str[i] === "-" ) {
            sign = "-"
            continue
        }
        if (!sign && str[i] === "+") {
            sign = "+"
            continue
        }

        if (!nums.includes(str[i])) {
            break

        } else {
            newString += str[i]
            seenNum = true

        }
    }

    if (sign === "-") newString = sign + newString
    if (newString === "-") return 0
    if (!newString.length > 0) return 0
    // return parseInt(newString)
    let parsed = parseInt(newString)
    if (parsed > 2147483648) return 2147483648
    if (parsed < -2147483648) return -2147483648
    return parsed
};

console.log(myAtoi("   +0 123"));