const reverseString = function(str) {
    return str.split("").reverse().join("");

    /*
    let splitString = str.split("");
    
    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join();

    return joinArray;
 */
}

module.exports = reverseString
