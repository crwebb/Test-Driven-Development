const leapYears = function(yearValue) {
    if (yearValue % 4 === 0 && !(yearValue % 100 === 0)) {
        return yearValue = true;
    } else if (yearValue % 400 === 0) {
        return yearValue = true;
    } else {
        return yearValue = false;
    } 
}
module.exports = leapYears
