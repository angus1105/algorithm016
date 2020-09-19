学习笔记
## 本周学习的数据结构

#### hashMap

#### heap
1. 最简单的实现是使用完全二叉树来实现
2. 完全二叉树要求任意一节点的值总是大于其子节点的值
3. find-min/find-max时间复杂度为O(1)

#### graph
1. 图为一种特殊形式的树
2. 切记解决图的问题需要设置visited，来防止走回头路

## 本周学习到的算法
#### 两数组交集
- 题目地址: https://leetcode.com/problems/intersection-of-two-arrays-ii/
- 思路:
  1. Map，时间复杂度: O(m+n)
  2. 双指针+排序, O(mlogm+nlogn)

#### 滑动窗口最大值
- 题目地址: https://leetcode.com/problems/sliding-window-maximum/
- 思路: 
  1. 暴力循环，排序，shift 时间复杂度: O(kn)，k窗口长度，n数组长度
  2. 大顶堆

#### 删除最外层的括号
- 题目地址: https://leetcode-cn.com/problems/remove-outermost-parentheses/
- 思路: 
  1. 最初的思路，利用stack, 遇到"("入栈，遇到")"出栈，在stack长度不为1时，将所有的字符push到结果数组中，时间复杂度O(n)，n为字符串长度，空间复杂度O(n)
  2. 思路1进行优化，stack可以简化为一个计数器，遇到"("时加1，遇到")"时减1，时间复杂度不变，空间复杂度略有降低，但也是O(n)

#### 有效字母异位词
- 题目地址: https://leetcode.com/problems/valid-anagram/
- 思路:
  1. 暴力，将字符串转成字符数组，然后sort，然后对比，时间复杂度 O(nlogn), n为字符串的长度，空间复杂度O(1)
  2. 利用map，将第一个字符串的每个字符做为key放入map中，出现的次数做为value，然后对遍历第二个字符串，匹配map，匹配到一次，出现的次数减1，时间复杂度O(n)，空间复杂度O(1)，因为纯字母，数量有限

#### n叉树前序遍历
- 题目地址: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
- 思路:
  1. 递归
  2. 迭代，维护一个stack栈，来模拟递归，注意入栈顺序需要reverse一下

#### 二叉树中序遍历
- 题目地址: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
- 思路:
  1. 递归
  2. 迭代，需要两层循环，内层循环用于进栈，进左child，外层循环用于出栈，并对右child进行遍历

#### 字母异位词分组
- 题目地址: https://leetcode-cn.com/problems/group-anagrams/
- 思路:
  1. 暴力，利用hashmap，将每个单词sort后做为key存入map中，并将自身存入数组做为value，时间复杂度O(nkLogk)，n为strs长度，k是strs中最大字符串长度，O(kLogk)为排序耗时
  2. 将每一个字符串转成格式相同的字母计数字符串，然后利用hashmap来解决，时间复杂度O(nk)，n为strs长度，k是strs中最大字符串长度

#### N叉树的层序遍历
- 题目地址: https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
- 思路:
  1. 暴力递归，主要在于如何实现递归，需要传入一个层级的参数，然后用层级做为索引，存入数组中，时间复杂度O(n)，n为节点数量

#### 二叉树最大深度
- 题目地址: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
- 思路: 
  1. 暴力递归，设root左节点深度为l，右节点深度为r，那么此二叉树的最大深度为`1 + max(l, r)`，此公式同样适用于左右节点进行递归，时间复杂度O(n)，n为节点数