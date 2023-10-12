const userSentence = prompt("Scrivi una parola e scopri se è palindroma")


function isPalindrome(sentence) {

    if (sentence === sentence.reverse) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome(userSentence)) 
