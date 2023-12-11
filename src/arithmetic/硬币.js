/**
 * 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)
 *
 *  输入: n = 10
 *  输出：4
 *  解释: 有四种方式可以凑成总金额:
 * 10=10
 * 10=5+5
 * 10=5+1+1+1+1+1
 * 10=1+1+1+1+1+1+1+1+1+1
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/coin-lcci
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number} n
 * @return {number}
 */
var wayToCharge = function(n) {
    let defaultCoinMap = [
        { type: 15, count: 0 },
        { type: 10, count: 0 },
        { type: 5, count: 0 },
        { type: 1, count: 0 }
    ];
    let coinMap = JSON.parse(JSON.stringify(defaultCoinMap));
    for(let i = 0; i < coinMap.length; i++) {
        let coinData = coinMap[i];
        let dividor = Math.floor(n / coinData.type);
        coinData.count = dividor;
    }


    const getCurCoinList = (options) => {
        console.log(options)
        let { preCoinMap, coin, index, total } = options;
        let list = [];
        for(let i = coin.count; i >=0; i--) {

        }
        return list;
    }


    let result = [];
    let len = coinMap.length;
    let start = coinMap.findIndex(coin => coin.count > 0);
    // console.log(start)
    for(let i = start; i < len; i++) {
        let coin = coinMap[i];
        let newResult = [];
        if(i > start) {
            // for(let j = 0; j < result.length; j++) {
            //     let preCoinMap = result[j];
            //     let list = getCurCoinList({ preCoinMap, coin, index: i, total: n});
            //     newResult.push(...list);
            // }
        } else {
            let preCoinMap = JSON.parse(JSON.stringify(defaultCoinMap));
            let list = getCurCoinList({ preCoinMap, coin, index: i, total: n});
            newResult.push(...list);
        }
        result = newResult;
    }

    // console.log(coinMap)
    console.log(result.length)
};

// waysToChange(10)
// waysToChange(20)
// waysToChange(25)








// 
// function wayToCharge(n) {
//     const coins = [1, 5, 10, 25];
//     const maxCoinCounts = coins.map(coin => Math.floor(n/coin));
   

//     const conNums = []

//     // maxCoinCounts.reduce((coinMaxCount, index) => {
//     //     const coin = coins[index];
//     //     for(let i = 1; i < coinMaxCount; i++) {
            
//     //     }
//     // })

//     for(let i = 0; i <= coinMaxNum25; i++) {
//         for(let j = 0; j <= coinMaxNum10; j++) {
//             for(let k=0; k <= coinMaxNum5; k++) {
//                 const coinNum1 = n - 25*i - 10*j - 5 * k
//                 if(coinNum1 >= 0) {
//                     conNums.push([i, j, k, coinNum1])
//                 }
//             }
//         }
//     }
        
//     return {
//         number: conNums.length,
//         conNums: conNums
//     }
// }

// 动态规划解法
// var wayToCharge = function(n) {
//     const coins = [1, 5, 10, 25];
//     const mod = 1000000007;
//     const dp = new Array(n + 1).fill(0);
//     dp[0] = 1;
//     // console.log(dp)

//     for (let i = 0; i < 4; i++) {
//         const coin = coins[i];
//         console.log(dp)
//         for (let j = coin; j <= n; j++) {
//             dp[j] = (dp[j] + dp[j - coin]) % mod;
//         }
//     }

    
//     // console.log(dp)
//     return dp[n];
// };


var wayToCharge = function(n) {
    const coins = [1, 5, 10, 25];
    const mod = 1000000007;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    // console.log(dp)

    
    for (let i = 0; i < 4; i++) {
        
    }

    
    // console.log(dp)
    return dp[n];
};


// console.log(wayToCharge(10))
console.log(wayToCharge(20))
// console.log(wayToCharge(25))