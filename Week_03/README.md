学习笔记
## 本周学习的数据结构

## 本周学习到的算法
#### pow(x, n)
- 题目地址: https://leetcode-cn.com/problems/powx-n/
- 思路: 
  1. 要计算 `x`的 n 次方，只需要计算出 `x` 的 n/2 次方，然后再相乘即可
  2. 要分别处理n大于0和小于0的情况，因为n为整数，所以不需要考虑 (0 < n < 1) 的情况
  3. ！！！注意，只计算一次 `x`的 n/sub_n 次方即可，否则会超时
  4. 时间复杂度为O(logn)

#### 爬楼梯
- 题目地址: https://leetcode-cn.com/problems/climbing-stairs/
- 思路:
  1. 暴力递归，f(n)为n个台阶的爬法 = f(n - 1) + f(n - 2)
  2. 上面为自顶向下的方式
  3. 自底向上的方式计算

#### 二叉树的最近公共祖先
- 题目地址: https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
- 思路: 
  1. 由于首先是要判断一个节点的左右子树是否包含p或q，所以采用后序遍历的框架
  2. 先简化一下，如果当前节点是最近公共祖先，那么p或q只能分别在这个节点的左右子树两边，而不能同时在当前节点的一个子树上
  3. 符合条件2的必然是最近公共祖先，返回
  4. 后续遍历根节点时，追加条件，当前节点是否等于p或q

#### 从前序和中序遍历构建二叉树
- 题目地址: https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
- 思路: 
  1. 根据前序遍历的特点，根节点一定是第一个元素
  2. 根据中序遍历的特点，根节点的左子树所有的节点一定在数组中根节点的左侧，右侧为所有右子树的节点
  3. 根据1中查到的根节点，去中序数组中匹配，从而分割中序数组，拿到左右子树的两个子数组，长度为leftSize和rightSize
  4. 从先序遍历的数组中刨去根节点之外根据leftSize和rightSize来分割数组
  5. 递归执行直到数组为空

#### 组合
- 题目地址: https://leetcode-cn.com/problems/combinations/
- 思路: 
  1. 按照回溯框架，写递归，参数为当前结果集和可选择的列表
  2. 找到终止条件为，当前结果集的长度达到k，将结果集放入到最终的结果里，此处注意要有一次浅拷贝
  3. 遍历可选则的列表
  4. 循环里做选择，path.push(item)
  5. 以已经加入path的值为依据，递归剩下的可选择列表
  6. 撤销选择
