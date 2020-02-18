const sumAll = function(min, max) {
    let totalSum = 0;
    
    if (min > max) [min, max] = [max, min];
  
    if (min < 0 || max < 0) return "ERROR";
  
    if (typeof min == 'string' || typeof max == 'string') return "ERROR";
  
    if (Array.isArray(min) || Array.isArray(max)) return 'ERROR';
  
    for (let i = min; i <= max; i++) {
      totalSum += i;
    }
  
    return totalSum;
  } 

module.exports = sumAll
