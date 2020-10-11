/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] !== '1') {
      return
    }

    grid[row][col] = '0'
    dfs(row - 1, col)
    dfs(row + 1, col)
    dfs(row, col - 1)
    dfs(row, col + 1)
  }

  for (let i = 0; i < grid.length; i++) {
    const rows = grid[i]
    
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count ++
        dfs(i, j)
      }
    }
  }

  return count
};