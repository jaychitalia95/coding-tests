const constraints = (array) => {
    array.sort()
    let start = 0
    let end = array.length - 1
    let count = 0
    let flag = true
    let x = 0
    let maxIndexTillNow = Infinity
    while (start <= end && maxIndexTillNow >= 0) {
        // console.log
        if (maxIndexTillNow === end-1) {
            // console.log(maxIndexTillNow)
            end--
        }
        let double = array[start] * 2
        if (double <= array[end]) {
            start++
        } else {
            if(flag == true) {
                maxIndexTillNow = start - 1
                x = maxIndexTillNow
                console.log(maxIndexTillNow)
            }
            count++
            maxIndexTillNow--
            end--
            start = 0
            flag = false
        }

    }
    console.log( array.length - count)
}

// constraints([2, 5, 7, 6, 9, 8, 4, 2])
constraints([2,2,2,2,2,4,4,4,4,4,8])