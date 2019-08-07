
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
    // return quickSort(leftArr).concat(pivotArr.concat(quickSort(rightArr)))
    let left = quickSort(leftArr).concat(pivotArr)
    let right = quickSort(rightArr)
    return left.concat(right)
}
// 
// let arr = [5, 7, 12, 4, -5, 2]
// let arr = [1]
// console.log(quickSort(arr))

const subSets = function(arr){
    if (arr.length === 0) return [arr]
    let first = [arr.shift()]
    console.log('arr to run subsets on is: ', arr)
    let newArr = subSets(arr)
    console.log('newArr is: ', newArr)
    answer = newArr.slice(0)
    for (let i=0; i< newArr.length; i++){
        answer.push( newArr[i].concat(first) )
        // answer.push( first)
    }
    return answer
}
let arr = [1, 2]
console.log(subSets(arr))