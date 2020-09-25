var findDuplicate = function(nums) {
    nums.sort()
    let p1 = 0
    let p2 = 1

    while(p2 < nums.length) {
        if(nums[p1] === nums[p2]) {
            console.log(nums[p1])
            return nums[p1]
        } else {
            p1++
            p2++
        }
    }
};

findDuplicate([1,3,4,2,2])