// const userSentence = prompt("Scrivi una parola e scopri se è palindroma")


// function isPalindrome(sentence) {
//     const sentenceLowerCase = sentence.toLowerCase
//     const reversedSentence = sentenceLowerCase.split('').reverse().join('')

//     if (sentenceLowerCase === reversedSentence) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isPalindrome(userSentence)) 

const sentence = "Annaciao"

sentenceLowerCase = sentence.toLowerCase()
console.log(sentenceLowerCase)

const reversedSentence = sentenceLowerCase.split('').reverse().join('')
console.log(reversedSentence)
