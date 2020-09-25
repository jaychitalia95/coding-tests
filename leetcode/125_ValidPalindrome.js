var isPalindrome = function(s) {
    let cleanString = s.split(" ").map(word => { return word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()}).join("")
    
    let start = 0
    let end = cleanString.length - 1

    // console.log(cleanString)
    // if(cleanString.length == 2) {
    //     console.log(true)
    //     return true
    // }

    while(start < end) {
        if(cleanString[start] === cleanString[end]) {
            start++
            end--
        } else {
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true

};

isPalindrome("A man, a plan, a canal: Panama")
isPalindrome("race a car")
isPalindrome("OPC")
isPalindrome("0P")
isPalindrome("ab")


