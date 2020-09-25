const maxSubArray = (nums) => {
    let maxTillNow = 0
    let maxEnd = 0
    nums.forEach(num => {
        maxEnd = maxEnd + num
        if (maxEnd > maxTillNow) {
            maxTillNow = maxEnd
        }
        if (maxEnd < 0) {
            maxEnd = 0
        }
    })
    console.log(maxTillNow)
    return maxTillNow
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSubArray([-1])
