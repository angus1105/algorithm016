/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let result = root

  const traverse = node => {
    // recursion terminator
    if (node === null) {
      return false
    } 

    // 左子树是否有p或q
    const left = traverse(node.left)
    // 右子树是否右p或q
    const right = traverse(node.right)

    if (
      (left && right) || // 左子树和右子树分别包含p或q
      (
        (node.val === p.val || node.val === q.val) && 
        (left || right) // 这里注意left和right必有一个为false
      )
    ) {
      result = node 
    }

    // 这里只是返回当前节点的情况，不需要考虑其他节点
    return left || right || (node.val === p.val || node.val === q.val)
  }

  traverse(root)
  return result
};

