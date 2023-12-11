/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 输入: [1,2,3]
 * 输出:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/permutations
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// var permute = function(nums) {
//     const getArrList = (oriArr, leftArr) => {
//         let list = [];
//         for(let i = 0; i < leftArr.length; i++) {
//             let newleftArr = [...leftArr];
//             newleftArr.splice(i, 1);
//             list.push([...oriArr, leftArr[i], ...newleftArr])
//         }
//         return list;
//     }

//     let result = [];
//     let len = nums.length;
//     for(let i = 0; i < len; i++) {
//         let newResult = [];
//         if(i > 0) {
//             for(let j = 0; j < result.length; j++) {
//                 let itemNumArr = [...result[j]];
//                 let oriArr = itemNumArr.slice(0, i);
//                 let leftArr = itemNumArr.slice(i);
//                 let arrList = getArrList(oriArr, leftArr);
//                 newResult.push(...arrList);
//             }
//         } else {
//             let arrList = getArrList([], nums);
//             newResult.push(...arrList);
//         }
//         result = newResult;
//     }
//     return result;
// }

let nums = [1, 2, 3];
// console.log(
//     permute(nums)
// )


const permute2 = (nums) => {
    const permuteArr = [];

    // 每个元素进行一次换位
    const backtrack = (path) => {
        if (path.length === nums.length) {
          permuteArr.push([...path]);
          return;
        }
        for (let i = 0; i < nums.length; i++) {
          if (path.includes(nums[i])) {
            continue;
          }
          path.push(nums[i]);
          backtrack(path);
          path.pop();
        }
      };

  backtrack([]);
    return permuteArr;
}

console.log(
    permute2(nums)
)
