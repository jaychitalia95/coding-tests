
// My Solution - Not So optimal


var twoSum = function(nums, target) {
    let currentIndex = 0

    for(let i=0; currentIndex < nums.length; i++) {
        if(i <= currentIndex) {
            i++
        }
        // console.log(currentIndex, i)
        if(nums[currentIndex] + nums[i] == target){
            console.log(currentIndex, i)
            return [currentIndex, i]
        }
        if(i == nums.length - 1) {
            currentIndex++
            i=0
        }
    }
};

// Optimal solution 

// var twoSum = function(nums, target) {
//     let numsMap = new Map()
//     let ans = 0
//     for (i = 0; i < nums.length; i++) {
//         ans = target - nums[i]
//         if (numsMap.has(ans)) return [numsMap.get(ans), i]
//         numsMap.set(nums[i], i)
//     }
// };

twoSum([2,7,11,15], 9)
twoSum([3,2,4], 6)