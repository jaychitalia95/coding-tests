var findDuplicates = function(nums) {
    let answer = []
    nums.unshift(0)
    for(let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i])
        if(nums[index] < 0) answer.push(index)
        nums[index] *= -1
    }
    console.log(answer)
    return answer
};

findDuplicates([4,3,2,7,8,2,3,1])