const duplicateZeros = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(num == 0){
            arr.splice(i, 0, 0)
            arr.pop()
            i++
        }
    }


    console.log(arr)
}

duplicateZeros([1,0,2,3,0])
duplicateZeros([1,0,2,3,0,4,5,0])

