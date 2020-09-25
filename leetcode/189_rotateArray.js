const rotateArray = (nums, k) => {

    let count = 0
    while(count < k) {
        nums.unshift(nums[nums.length-1])
        nums.pop()
        count++
    }
    console.log(nums)


}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3)