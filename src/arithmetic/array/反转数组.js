
var rotate = function(nums, k) {
    if(nums.length == 0) return nums;
    let l = nums.length;
    let offset = k % l;
    let left = nums.slice(0, l - offset);
    let right = nums.slice(l - offset, l);
    return [...right, ...left]
};

var arr = [1,2,3,4,5,6,7];
var k = 13;
console.log(rotate(arr, k))