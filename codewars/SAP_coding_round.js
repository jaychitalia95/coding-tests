
// finding whether Mona will like the number or not

const Mona = (number) => {
    let count = 1
    let array = number.toString().split('')
    array.forEach((digit, index, array) => {
        if(index != array.length - 1){
            if(digit < array[index+1]) count++
        }
        
    })
    console.log(count)
    if(count == array.length)
        console.log(true)
    else
        console.log(false)
}

Mona(648)


// giving a number which Mona will like which is less than the given number

const giveMonaNumber = (number) => {
    console.log()
    number.toString().split('').forEach((digit, index, array) => {
    })
}