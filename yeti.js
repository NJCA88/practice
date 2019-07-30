// console.log("test")


let count = 0
function countItems(arr, item) {
    // Write the code that goes here

    for (let i=0; i < arr.length; i++){
        if ( Array.isArray(arr[i])) {
            // console.log("recursing")
            countItems(arr[i], item)
        } else{
            if ( arr[i] === item) count += 1
        }
    }
    return count
}

var arr = [
    [[['dog']]],
    "apple",
    ["banana", "strawberry", "apple", ['apple', 'dog']]
];
console.log("answer is: ", countItems(arr, "apple"));

