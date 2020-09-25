const plusOne = (digits) => {


    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1
            return digits
        } else {
            digits[i] = 0
        }
    }
    digits.unshift(1)
    return digits
}

plusOne([1,2,3])
plusOne([1,9,9])
plusOne([9,9,9])
plusOne([9])
