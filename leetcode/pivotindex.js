var pivotIndex = function (nums) {
    for (let index = 0; index < nums.length; index++) {
        let sumOfLeft = nums.slice(0, index).reduce((acc, value) => acc + value, 0)
        let sumOfRight = nums.slice(index + 1).reduce((acc, value) => acc + value, 0)
        if (sumOfLeft == sumOfRight) {
            return index
        }
    }
    return -1
};

pivotIndex([1, 7, 3, 6, 5, 6])