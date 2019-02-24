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

arrayCoverage([1,2,5,99,100,1000], 90)