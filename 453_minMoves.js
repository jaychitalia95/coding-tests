// const minMoves = (nums) => {

//     let moves = 0
//     let equal = false
//     if (nums.every(num => num == nums[0])) {   
//             equal = true
//             console.log(moves)
//         }

//     // console.log(nums.map(num => num+1))

//     while (equal == false) {
//         let max = Math.max(...nums)
//         let maxIndex = nums.indexOf(max)

//         nums.forEach((num, idx, arr) => {
//             if (idx != maxIndex) {
//                 nums.splice(idx, 1, num + 1)
//             }
//         })
//         moves++
//         if (nums.every(num => num == nums[0])) equal = true
//     }
//     // console.log(moves)
// }

// MUCH OPTIMAL SOLUTION FOUND ONLINE


// "Adding 1 onto N - 1 elements in A until all elements in A have the same value" requires the same amount of steps as 
// "subtracting 1 from each element in A until all elements in A are equal to the minimum element in A."
// Simply calculate and return the difference between each element in A and the minimum element in A.


let minMoves = A => A.reduce((a, b) => a + b) - (Math.min(...A) * A.length);




minMoves([1, 2, 3])
minMoves([1, 1, 1])
