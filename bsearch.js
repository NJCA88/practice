const bsearch = function(nums, target){
    if (nums.length === 1 && nums[0] !== target) return null
    let mid = Math.floor(nums.length / 2)
    if (nums[mid] === target) {
        return nums.indexOf(target)
    } else if (nums[mid] > target){
        return bsearch(nums.slice(0, mid), target)
    } else{
        let val = bsearch(nums.slice(mid), target)
        if (val){
            return (val + mid)
        } else{
            return null
        }
    }


}
let arr = [1, 3, 5]
console.log(bsearch(arr, 1))