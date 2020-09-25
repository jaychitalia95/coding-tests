var searchInsert = function(nums, target) {

    if(nums[nums.length - 1] < target) {
        return nums.length
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == target || nums[i] > target) {
            console.log(i)
            return i
        }
    }
};

searchInsert([1,2,3,5,6], 5 )
searchInsert([1,2,3,6], 5 )
searchInsert([1,3,5,6], 5 )

