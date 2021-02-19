var satisfaction = [-1,-8,0,5,-9];

var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => a-b);
    const maxSums = (list) => {
        let sum1 = list.reduce((sum, val, index) => sum + val*(index + 1), 0);
        let newList = list.slice(1);
        let sum2 = newList.reduce((sum, val, index) => sum + val*(index + 1), 0);
        if(sum2 > sum1) {
            return maxSums(newList)
        } else {
            console.log(list)
            return sum1;
        }
    };
    return maxSums(satisfaction);
};
console.log(maxSatisfaction(satisfaction))

var a = 'asdfasdf'
console.log(

    a.indexOf('as')
)