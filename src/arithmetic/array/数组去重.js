
/**
 * 删除排序数组中的重复项
 * 
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 
 * 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/
 */


// 用例不通过，？
var removeDuplicates1 = function(nums) {
    if(nums.length < 2) return nums.length;

    var newArray = [nums[0]]
    for(var i = 1; i < nums.length; i++) {
        if (nums[i] != newArray[newArray.length - 1]) {
            newArray.push(nums[i]);
        }
    }
    return newArray.length;
};

// 用例通过
var removeDuplicates3 = function(nums) {
    if(nums.length < 2) return nums.length;
    var j = 0
    for(var i = 1; i < nums.length; i++) {
        if ( nums[j] != nums[i]) {
            nums[++j] = nums[i]
        }
    }
    return  j + 1;
};


// var k = 0;
// for(var i = 0; i < 5; i++) {
//     console.log(++k)
// }

var array = [1, 1, 2, 2, 3];
console.log(removeDuplicates3(array))