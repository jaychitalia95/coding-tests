var sortedSquares = function(A) {
    let start = 0
    let end = A.length - 1
    let answer = []
    // answer.push(Math.pow(A[end], 2))
    while (start <= end) {
        if(Math.pow(A[start], 2) > Math.pow(A[end], 2)) {
            answer.push(Math.pow(A[start], 2))
            start++
        } else {
            answer.push(Math.pow(A[end], 2))
            end--
        }
    }
    console.log(answer.reverse())

    return answer.reverse()

};

sortedSquares([-4,-1,0, 3, 10])