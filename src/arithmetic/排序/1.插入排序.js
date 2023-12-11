
const selectSort = (nums) => {
    const len = nums.length;
    for(let i=0; i<len; i++) {
        let k = i;
        for(j=i+1; j<len; j++) {
            if(nums[j] > nums[k]) {
                k = j
            }
        }
        if(k !== i) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
        }
    }
    return nums;
}

const nums = [2,5,4,6,3,7,9,1,8];
console.log(
    selectSort(nums)
)