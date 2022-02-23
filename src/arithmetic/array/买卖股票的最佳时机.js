/**
 * 买卖股票的最佳时机 II
 * 
 * 给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。
 * 在每一天，你可能会决定购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以购买它，然后在 同一天 出售。
 * 返回 你能获得的 最大 利润 。
 * 给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。
 * 
 * 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/
 */

 var maxProfit = function(prices) {
    let curP = 0;
    let hasP = false;
    let max = 0;
    for(let i = 0; i<prices.length - 1; i++) {
        // 股价降低或不变，不操作
        if(prices[i] >= prices[i+1]) {
            if(hasP) {
                hasP = false;
                curP = 0;
                max = max + prices[i];
            } 
        } else {
            if(hasP) {
                hasP = false;
                curP = 0;
                max = max + prices[i];
            } else {
                // 股票如果增加，
                hasP = true;
                curP = prices[i];
                max = max - prices[i];
            }
        }
    }
    return max;
};

const prices = [1,2,3,4,5];
let max = maxProfit(prices);
console.log(max);
