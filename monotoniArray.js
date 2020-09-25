
const isMonotic = (array) => {

    let increasing = true
    let decreasing = true

    for(let i = 0; i < array.length -1; i++) {
        if(array[i] < array[i+1]) {
            decreasing = false  
        } 
        if(array[i] > array[i+1]) {
            increasing = false
        }
    }
    
    console.log(increasing || decreasing) 
    
}

isMonotic([1,2,3,4])
isMonotic([1,3,1,1])