/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * https://juejin.cn/post/6951922898638471181?share_token=e142da87-3d3a-472c-9f9e-c6795ebe722c
 * 
 * 示例1
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 */

function showNums(arr) {
    if(arr.length === 1) {
        return 1;
    }
    
    let a = 0;
    let b = arr[0];
    let n = 1;
    let temArr = [arr[0]]
    for(let i = 1; i< arr.length; i++) {
        if(arr[i] > b) {
            a = b;
            b = arr[i];
            n++;
            temArr.push(b)
        }

        if(arr[i] <= b && b > a) {
            b = arr[i];
            temArr.pop();
            temArr.push(b);
        }
    }

    console.log(temArr)
    return n;
}

const arr = [1,9,2,5,3,7,101,13, 18, 19];
let nums = showNums(arr)
console.log(nums)