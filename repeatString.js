const repeatString = function(string, num) {

    let returningString="";
    if (num < 0) return "ERROR";
    for (let i=0; i < num; i++) {
        returningString += string;
    }
    return returningString;
    }

module.exports = repeatString
