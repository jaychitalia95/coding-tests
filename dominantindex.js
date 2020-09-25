

const dominantIndex = (nums) => {
    let largest = nums.reduce((acc, curr, idx, array) => {
        return Math.max(acc, curr)
    })

    let bool = nums.filter(num => num != largest).every(num => largest >= num * 2)
    if (bool == true) {
        console.log(nums.indexOf(largest))
    } else console.log(-1)

}
dominantIndex([0, 0, 0, 1])