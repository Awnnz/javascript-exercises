const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let newStr = '';
    for (let index = 0; index < num; index++) {
        newStr += string;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
