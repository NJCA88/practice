var findDuplicates = function (nums) {
    let answer = {}
    let curVal, nextVal
    for (let i = 0; i < nums.length; i++) {
        
        curVal = nums[i]
        if (curVal - 1 === i){
            // console.log('skip')
            continue
        }
        console.log('NUMS: ', nums)
        console.log('curVal: ', curVal, 'i: ', i)
        // if (i===4){
        //     console.log( 'i4')
        //     console.log(nums)
        // }
        if (nums[curVal - 1] === curVal && curVal - 1 !== i) {
            console.log('pushing in place 1')
            answer[curVal] = true
            console.log('pushed in place 1 ', answer)
             
            
        } else {
            // we need to do 2 things, move the inial value but check the moving one
            
            //here is the first thing
            nextVal = nums[curVal - 1]
            nums[curVal - 1] = curVal
            
            //now, here is the second thing, but we should check it first
            if ( nums[nextVal - 1] === nextVal && nextVal - 1 !== i){
                console.log('pushing in place 2 with val: ', nextVal)
                answer[nextVal] = true
                console.log('pushed in place 2', answer)
            } else{
                nums[i] = nextVal 
            }
        }

    }

    return Object.keys(answer)
};

// let arr = [4, 3, 2, 7, 8, 2, 3, 1]
let arr = [5, 4, 6, 7, 9, 3, 10, 9, 5, 6]
// let arr = [3, 2, 2]
// let arr = [3, 2, 1, 2]

// console.log(findDuplicates(arr))


var findDupes = function (nums) {
    let answer = {}
    let curVal, nextVal

    var moveVal = function(start, end) {
        curVal = nums[start]
        if (curVal - 1 === start) {
            return
        }
        if (nums[curVal - 1] === curVal && curVal - 1 !== start) {
            answer[curVal] = true
        } else{
             // we need to do 2 things, move the inial value but check the moving one

            //here is the first thing
            nextVal = nums[curVal - 1]
            nums[curVal - 1] = curVal
            moveVal(nextVal, start)
        }
    }
    for (let i=0; i<nums.length; i++){
        moveVal(nums[i])
    }

    // for (let i = 0; i < nums.length; i++) {

    //     curVal = nums[i]
    //     if (curVal - 1 === i) {
    //         continue
    //     }
    //     if (nums[curVal - 1] === curVal && curVal - 1 !== i) {
    //         answer[curVal] = true


    //     } else {
    //         // we need to do 2 things, move the inial value but check the moving one

    //         //here is the first thing
    //         nextVal = nums[curVal - 1]
    //         nums[curVal - 1] = curVal

    //         //now, here is the second thing, but we should check it first
    //         if (nums[nextVal - 1] === nextVal && nextVal - 1 !== i) {
    //             answer[nextVal] = true
    //         } else {
    //             nums[i] = nextVal
    //         }
    //     }

    // }

    return Object.keys(answer)
};


/* this solution basically is using pos vs neg as a flag, to determine whether something has been seen
 so in [1, 4, 2, 3], after we have visited  the 2nd element, the array looks like [-1, 4, 2, -3]
 it negativizes the element at that index, so mark we've seen it before, then in checking it, we start by taking the abs
 value, and then looking to see if the element at that index is pos or neg
*/

var acquireDupes = function(nums) {
    if(nums.length === 0) return [];
    var index, ans =[];
    for(var i = 0; i < nums.length; i++){
        console.log(nums)
        index = Math.abs(nums[i]);
        if(nums[index-1] < 0){
            ans.push(index);
        } else {
            nums[index-1] *= -1;
        }
    }
    return ans;
};

arr = [1, 4, 2, 3 ]
console.log(acquireDupes(arr))
