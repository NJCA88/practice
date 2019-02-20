var twoSum = function (nums, target) {
    let myHash = {}
    for (let i = 0; i < nums.length; i++) {
        let need =  target - nums[i]
     
        if (myHash[need] !== undefined) {
            return [i, myHash[need]]
        }

        if (!myHash[nums[i]]) {
            myHash[nums[i]] = i
 
        }
    }

}

// console.log(twoSum([2,7, 11, 15], 9))


var numUniqueEmails = function (emails) {
    let store = {};
    let count = 0
    emails.forEach(email => {
        let reduced = reduceEmail(email);
        if (!store[reduced]) {
            count += 1
            store[reduced] = true
        }
    })
    console.log(store)
    return count


};

var reduceEmail = function (email) {
    let newEmail = "";
    let postAt = false;
    let seenPlus = false
    for (let i = 0; i < email.length; i++) {
        if (!postAt && !seenPlus) {
            if (email[i] === ".") continue;
            if (email[i] === "+") {
                seenPlus = true
                continue;
            }
            if (email[i] === "@") {
                postAt = true
            }
            newEmail += email[i]
        }
        else if (!postAt && seenPlus) {
            if (email[i] === "@") {
                postAt = true
                newEmail += email[i]
            }
            continue
        }
        else if (postAt) {
            newEmail += email[i]
        }
    }
    return newEmail
}

let emails = ["testemail@leetcode.com","testemail1@leetcode.com","testemail + david@lee.tcode.com"]
console.log(numUniqueEmails(emails))
