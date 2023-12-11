

const grid = [[1,2], [5,6], [1,1]];
function minPathSum(grid) {
    let parhSum = {};
    const m = grid[0].length;
    const n = grid.length;
    
    for(let i = m -1; i > -1; i--) {
        for(let j=n-1; j > -1; j--) {
            parhSum[`${i=}_${j-1}`]
            parhSum[`${i}_${j}`] = Math.min(parhSum[`${i-1}_${j}`], parhSum[`${i}_${j-1}`]) + grid[i][j]
            console.log( parhSum[`${i}_${j}`] )
        }
    }

    return parhSum[`${m}_${n}`]


}

console.log(minPathSum(grid))