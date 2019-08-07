
const quickSort = function(arr){
    if (arr.length <= 1 )  return arr
    let temp = arr.slice(0)
    let pivotArr = [arr.shift()]
    let leftArr = []
    let rightArr = []
    for (let i=0; i<arr.length; i++){
        if (temp[i] < pivotArr[0]){
            leftArr.push(arr[i])
        } else{
            rightArr.push(arr[i])
        }
    }
    console.log(pivotArr, leftArr, rightArr)
    // return quickSort(leftArr).concat(pivotArr.concat(quickSort(rightArr)))
    let left = quickSort(leftArr).concat(pivotArr)
    let right = quickSort(rightArr)
    return left.concat(right)
}
// 
let arr = [5, 7, 12, 4, -5, 2]
// let arr = [1]
console.log(quickSort(arr))