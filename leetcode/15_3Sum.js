var threeSum = function(nums) {
    let p1 = 0
    let p2 = nums.length -1
    let answer = []
    nums.sort()
    for(let i = 0; i < nums.length; i++) {

        if(i > 0 && nums[i] == nums[i+1]) continue


        p1 = i + 1
        right = nums.length -1
        let sum = 0
        while(p1 < p2) {
            sum = nums[i] + nums[p1] + nums[p2]
            if(sum == 0) {
                answer.push([nums[i],nums[p1],nums[p2]])
                p1++
                p2--
            } else if(sum> 0) {
                p2--
                while(p1 < p2 && nums[p2] === nums[p2+1]) p2--
            } else {
                p1++
                while(p1 < p2 && nums[p1] === nums[p1-1]) p1++
            }
        }
    }
    console.log(answer)
    return answer

}



threeSum([-1,0,1,2,-1,-4])
// threeSum([])
