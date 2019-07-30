// console.log("test")
// roomA = [ t, t,...x30]

var minMeetingRooms = function (intervals) {
    let rooms = { 0: [null] }
    for (let i = 0; i < intervals.length; i++) {
        setClassroom(intervals[i], rooms)
    }
    console.log("rooms are: ", rooms)
    return Object.keys(rooms).length
}
let usableFlag
let setClassroom = (time, rooms) => {
    let keys = Object.keys(rooms);
    console.log("time is: ", time)
    for (let i = 0; i < keys.length; i++) {
        let schedule = rooms[keys[i]];
        usableFlag = true
        for (let i = time[0]; i < time[1]; i++) {
            console.log("cur room timeslot: ", schedule[i])
            if (schedule[i] === 't') {
                console.log("breaking")
                usableFlag = false
                break
            }
        }
        // I can use this room
        if (usableFlag) {
            for (let i = time[0]; i < time[1]; i++) {
                schedule[i] = 't'
            }
            console.log("no new room needed")
            return "true"
        }
    }
    console.log("creating a new room")
    rooms[keys.length] = new Array(time[0]).fill(null)
    for (let j = 0; j < time[1] - time[0]; j++) {
        rooms[keys.length].push("t")
    }
}




// let classTimes = [[0, 30], [60, 75], [60, 90], [35, 45] ]
let classTimes = [[0, 30], [5, 10], [15, 20]]

// let classTimes = [[0,30],[5,10],[15,20]]

// let classTimes = [[0, 30], [5, 10], [15, 20]]
// let classTimes = [[0, 30], [5, 10], [15, 20]]
console.log("answer is: ", minMeetingRooms(classTimes))

// let arr1 = new Array(5).fill("cat")

// console.log("array is: ", arr1)