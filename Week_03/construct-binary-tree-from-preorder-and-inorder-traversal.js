/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const build = (_preorder, _inorder) => {
    if (_preorder.length === 0) {
      return null
    }

    // 先找到根节点，并生成
    const root = new TreeNode(_preorder[0])
    let leftSize = 0
    // 计算出左子树节点的个数
    for (let i = 0; i < _inorder.length; i++) {
      if (_preorder[0] === _inorder[i]) {
        leftSize = i
        break
      }
    }

    root.left = build(_preorder.slice(1, leftSize + 1), _inorder.slice(0, leftSize + 1))
    root.right = build(_preorder.slice(leftSize + 1), _inorder.slice(leftSize + 1))
    return root
  }

  return build(preorder, inorder)
};