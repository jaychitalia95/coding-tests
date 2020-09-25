// A string is considered to be in title case if each word in the string is 
// either (a) capitalised (that is, only the first letter of the word is in upper case) or (b)
// considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words).
// The list of minor words will be given as a string with each word separated by a space. 
//Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.


const titleCase = (title, minor_words) => {
    let minorWordsArray = minor_words.split(' ').map(w => w.toLowerCase())
    let answerArray = title.split(' ').map((word, index, array) => {
        return word.toLowerCase()
    }).map((word, index, array) => {
        if(minorWordsArray.indexOf(word) !== -1 && word === array[0]) {
            console.log("inside")
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
        else if(minorWordsArray.indexOf(word) !== -1 && word !== array[0]) {
            return word.toLowerCase()
        }
        else {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    }).join(' ')
    console.log(answerArray)
}

titleCase('a clash of KINGS', 'a an the of')
titleCase('THE WIND IN THE WILLOWS', 'The In')
titleCase('the quick brown fox', '')