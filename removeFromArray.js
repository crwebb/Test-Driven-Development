const removeFromArray = function (...args) {
    const array = args[0]

    const newArray = [];
    
    array.forEach(item => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
        return newArray;
    };
   
module.exports = removeFromArray

