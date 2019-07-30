

let touchingEdges = {}
let islandSizes = {}
var numEnclaves = function (A) {
    console.log("A is: ", A)
    let islandCounter = 2
    for (let i=0; i< A.length; i++){
        for (let j=0; j < A[0].length; j++){
            //iterating over all squares by row
            if (A[i][j] !== 1 ) continue
            console.log("incrementing")
            islandCounter +=1
            dfs(A, [i, j], islandCounter)
        }
    }
    console.log(A)
};


let dfs = (A, loc, islandId) => { 
    if (A[loc[0]][loc[1]] === 0) return 
    if (!islandSizes[islandId]) islandSizes[islandId] = 0
    islandSizes[islandId] +=1

    console.log("A and loc are: ", A, loc)
    // console.log("A[loc[0]][loc[1]] is: ", A[loc[0]][loc[1]]);
    if (loc[0] < 0 ||loc[0] >= A.length ||
        loc[1] < 0 || loc[1] > A[0].length){
            // we went off the map
            return "edge";
        }
    A[loc[0]][loc[1]] = islandId
    let up = [loc[0] - 1, loc[1]]
    let down = [loc[0] + 1, loc[1]]
    let left = [loc[0] , loc[1] - 1]
    let right = [loc[0] , loc[1] + 1]

    if (A[up[0], up[1]] === 1 ) dfs(A, up, islandId)
    if (A[down[0], down[1]] === 1) dfs(A, down, islandId)
    if (A[left[0], left[1]] === 1) dfs(A, left, islandId)
    if (A[right[0], right[1]] === 1) dfs(A, right, islandId)

}



// let inputVal =[[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
let inputVal =[[1, 0, 0,],[0,0,0],[0, 1, 1] ]
// let inputVal =[[0,1], [0,0]]
console.log(numEnclaves(inputVal))