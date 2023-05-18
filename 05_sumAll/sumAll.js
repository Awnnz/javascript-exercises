const sumAll = function(num1, num2) {
    if (!(num1 <= 0) && !(num2 <= 0) && Number.isInteger(num1) && Number.isInteger(num2)) {

        let sum = 0,
        numArr = [num1, num2].sort(function(a, b){return a - b});

        for (let i = numArr[0]; i <= numArr[1]; i++) {
            sum += i;
        };
    
        return sum;
    }
    return 'ERROR'
  };

// Do not edit below this line
module.exports = sumAll;


// Both #s need to be positive, if not, return 'ERROR'
// '    '    '   '  '  real numbers '   '     '
// Sort numbers so it calculates smaller number first
// initialize loop with starting number, stop at highest number
// add each number to a total variable
