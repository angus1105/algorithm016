学习笔记

#### BFS 广度优先模板代码

```javascript
//JavaScript
const bfs = (root) => {
  let result = [], queue = [ root ]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      level.push(node.val) 
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(level)
  }
  return result
};
```

#### DFS 深度优先模板代码
```javascript
//JavaScript 递归写法
const visited = new Set()
const dfs = node => {
  if (visited.has(node)) return
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}

//非递归写法：
const visited = {}

if (!root) {
  return
}

const stack = [ root ]

while (stack.length) {
  const node = stack.pop()

  if (visited[node.val]) {
    continue
  }

  visited[node.val] = 1

  for (let i = node.children.length - 1; i >= 0; i--) {
    stack.push(node.children[i])
  }

  return
}
```

#### 本周学到的算法
##### 柠檬水找零
- 题目地址: https://leetcode-cn.com/problems/lemonade-change/description/
- 思路: 
  1. 为可以做为零钱的5美元和10美元建立hash map，并计数
  2. 找零时优先使用10美元进行找零
  3. 时间复杂度O(n)，n为账单数量

##### 买卖股票的最佳时机II
- 题目地址: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
- 思路: 
  1. 解法一，动态规划，dp[i][0]记录未持有状态的最大收益，dp[i][1]记录持有状态下的最大收益，时间复杂度O(n)，空间复杂度O(n)，n为天数
  2. 因为不限制交易次数，所以只要后一天的股价比前一天高，就可以记录一次收益，求总和，时间复杂度O(n)，n为天数，空间复杂度O(1)

##### 单词接龙
- 题目地址：https://leetcode-cn.com/problems/word-ladder/description/
- 思路：
  1. 将beginWord的每一个字符用26个字母替换，然后去wordList中寻找，找到了放入队列中
  2. 使用上一步找到的单词，重复寻找，直到找到endWord
  3. 注意使用visited来记录已经访问过的单词