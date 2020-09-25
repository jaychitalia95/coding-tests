// Problem:
// - Given a list of unsorted, independent meetings, returns a list of a merged
//   one.
// Example:
// - Input: []meeting{{1, 2}, {2, 3}, {4, 5}}
//   Output: []meeting{{1, 3}, {4, 5}}
// - Input: []meeting{{1, 5}, {2, 3}}
//   Output: []meeting{{1, 5}}



const mergeMeetingTimes = (array) => {
    let sortedArr = array.sort()
    let answer = []
    let innerArrayLength = array[0].length - 1
    for(let i = 0; i < sortedArr.length; i++) {
        if(i == 0) {
            answer.push(sortedArr[0])
            continue
        }
            
        if(answer[0][innerArrayLength] >= sortedArr[i][0]) {
            // console.log("inside")
            answer[0][innerArrayLength] = Math.max(answer[0][innerArrayLength], sortedArr[i][innerArrayLength])
        } else {
            answer.push(sortedArr[i])
        }
    }
    console.log(answer)
}


mergeMeetingTimes([[4,5], [2,3], [1,2]])
mergeMeetingTimes([[1,5], [2,3]])
mergeMeetingTimes([[1,6], [2,3], [4,7]])

