const intersection = (nums1, nums2) => {
    let result = new Set()
    nums1.forEach(num => {
        if(nums2.includes(num)) {
            result.add(num)
        }
    })
    return Array.from(result)
}

intersection([1,2,2,5], [2,2])