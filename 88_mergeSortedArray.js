var merge = function(nums1, m, nums2, n) {
    let length = nums1.length - 1
    let pointer1 = m-1
    let pointer2 = n-1
    while(pointer2 >= 0) {
        if(nums1[pointer1] > nums2[pointer2]){
            nums1[length] = nums1[pointer1]
            pointer1--
        } else{
            nums1[length] = nums2[pointer2]
            pointer2--
        }
        length--
    }
    console.log(nums1)
    return nums1
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)